"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Procharge = void 0;
const transaction_response_1 = require("./src/classes/transaction-response");
const https = __importStar(require("https"));
const retail_moto_1 = require("./src/classes/retail-moto");
const restaurant_1 = require("./src/classes/restaurant");
const lodging_1 = require("./src/classes/lodging");
class Procharge {
    constructor(applicationKey) {
        this.applicationKey = applicationKey;
    }
    /**
     * Use this method to obtain a jwt access token
     */
    getAccessToken(email_1, password_1) {
        return __awaiter(this, arguments, void 0, function* (email, password, appname = "procharge") {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!email) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "email is required";
                        return reject(pr);
                    }
                    if (!password) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "password is required";
                        return reject(pr);
                    }
                    let authRequest = {
                        "application": appname,
                        "email": email,
                        "password": password
                    };
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: "dev-api.procharge.com",
                        port: 443,
                        path: "/api/authentication/login",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.applicationKey,
                            "Content-Length": JSON.stringify(authRequest).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = error.message;
                            return reject(pr);
                        });
                        res.on("data", function (chunk) {
                            str += chunk;
                        });
                        res.on("end", () => __awaiter(this, void 0, void 0, function* () {
                            try {
                                let result;
                                if (str.startsWith("<html>")) {
                                    result = new transaction_response_1.TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                result.transactionCode = "1";
                                result.dateTime = new Date();
                                resolve(result);
                            }
                            catch (error) {
                                let pr = new transaction_response_1.TransactionResponse();
                                pr.transactionCode = "1";
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.transactionCode = "1";
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
                        pr.transactionCode = "1";
                        return reject(pr);
                    }).on("socket", (socket) => {
                        socket.on("end", () => {
                        });
                    });
                    request.setTimeout(15000);
                    request.write(JSON.stringify(authRequest));
                    request.end();
                }
                catch (error) {
                    const pr = new transaction_response_1.TransactionResponse();
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * This method will submit a one time sale and debit a customers account
     */
    sale(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "merchant number is required";
                        return reject(pr);
                    }
                    if (!this.applicationKey) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "Application Key is required";
                        return reject(pr);
                    }
                    transaction.universalTimeStamp = new Date().getTime();
                    transaction.target || (transaction.target = "6");
                    transaction.partialAuthIndicator || (transaction.partialAuthIndicator = "2");
                    transaction.transactionCode = "1";
                    if (!transaction.isEcommerce) {
                        if (!transaction.isRetail) {
                            if (!transaction.isMoto) {
                                transaction.isMoto = true;
                            }
                        }
                    }
                    transaction.aci = "N";
                    if (!transaction.emv) {
                        if (!transaction.trackData && !transaction.token) {
                            if (!transaction.cardNumber || transaction.cardNumber.length < 14) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = "missing or invalid cardnumber";
                                return reject(pr);
                            }
                        }
                        if (!transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid ccExpYear";
                            return reject(pr);
                        }
                        if (!transaction.ccExpMonth) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid ccExpMonth";
                            return reject(pr);
                        }
                        if (!transaction.amount || isNaN(parseFloat(transaction.amount))) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid amount";
                            return reject(pr);
                        }
                        if (parseFloat(transaction.amount) <= 0) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "amount must be greater than zero dollars";
                            return reject(pr);
                        }
                        if (transaction.paymentGatewayID === "4") {
                            if (parseFloat(transaction.amount) > 999999.99) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = "amount cannot be greater than 99999.99";
                                return reject(pr);
                            }
                        }
                        if (transaction.street1 && transaction.postalCode) {
                            transaction.aci = "Y";
                        }
                    }
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: "dev-api.procharge.com",
                        port: 443,
                        path: "/api/transaction",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.applicationKey,
                            "Authorization": "",
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = error.message;
                            return reject(pr);
                        });
                        res.on("data", function (chunk) {
                            str += chunk;
                        });
                        res.on("end", () => __awaiter(this, void 0, void 0, function* () {
                            try {
                                let result;
                                if (str.startsWith("<html>")) {
                                    result = new transaction_response_1.TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                result.transactionCode = "1";
                                result.dateTime = new Date();
                                resolve(result);
                            }
                            catch (error) {
                                let pr = new transaction_response_1.TransactionResponse();
                                pr.transactionCode = "1";
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.transactionCode = "1";
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
                        pr.transactionCode = "1";
                        return reject(pr);
                    }).on("socket", (socket) => {
                        socket.on("end", () => {
                        });
                    });
                    request.setTimeout(15000);
                    request.write(JSON.stringify(transaction));
                    request.end();
                }
                catch (error) {
                    const pr = new transaction_response_1.TransactionResponse();
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * This method will void a previous sale in the same batch
     */
    voidSale(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "merchant number is required";
                        return reject(pr);
                    }
                    if (!this.applicationKey) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "Application Key is required";
                        return reject(pr);
                    }
                    if (!transaction.approvalCode) {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "approvalCode is required";
                        return reject(pr);
                    }
                    if (!transaction.transactionID) {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "transactionID is required";
                        return reject(pr);
                    }
                    transaction.universalTimeStamp = new Date().getTime();
                    transaction.transactionCode = "5";
                    transaction.target = "6";
                    transaction.revisionNumber = "1";
                    if (!transaction.isEcommerce) {
                        if (!transaction.isRetail) {
                            transaction.isMoto = true;
                        }
                    }
                    if (transaction.industryType === "2") {
                        transaction.restaurantIndustry = new restaurant_1.Restaurant(transaction);
                        delete transaction.lodgingIndustry;
                        delete transaction.retailIndustry;
                    }
                    if (transaction.industryType === "4") {
                        transaction.lodgingIndustry = new lodging_1.Lodging(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.retailIndustry;
                    }
                    if (transaction.industryType === "6") {
                        transaction.retailIndustry = new retail_moto_1.RetailMoto(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.lodgingIndustry;
                    }
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: "dev-api.procharge.com",
                        port: 443,
                        path: "/api/transaction",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.applicationKey,
                            "Authorization": "",
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = error.message;
                            return reject(pr);
                        });
                        res.on("data", function (chunk) {
                            str += chunk;
                        });
                        res.on("end", () => __awaiter(this, void 0, void 0, function* () {
                            try {
                                let result;
                                if (str.startsWith("<html>")) {
                                    result = new transaction_response_1.TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                result.transactionCode = "5";
                                result.dateTime = new Date();
                                resolve(result);
                            }
                            catch (error) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = error.message;
                                pr.transactionCode = "5";
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message;
                        pr.transactionCode = "5";
                        return reject(pr);
                    }).on("timeout", (error) => {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
                        pr.transactionCode = "5";
                        return reject(pr);
                    }).on("socket", (socket) => {
                        socket.on("end", () => {
                        });
                    });
                    request.setTimeout(15000);
                    request.write(JSON.stringify(transaction));
                    request.end();
                }
                catch (error) {
                    const pr = new transaction_response_1.TransactionResponse();
                    pr.responseText = error.message;
                    pr.transactionCode = "5";
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * This method will obtain an authorization for a card number. A
     * ticket only request is required to complete the transaction at the time of order fulfillment.
     */
    authOnly(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "merchant number is required";
                        return reject(pr);
                    }
                    if (!this.applicationKey) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "Application Key is required";
                        return reject(pr);
                    }
                    transaction.universalTimeStamp = new Date().getTime();
                    transaction.target || (transaction.target = "6");
                    transaction.partialAuthIndicator || (transaction.partialAuthIndicator = "2");
                    transaction.transactionCode = "4";
                    if (transaction.paymentGatewayID === "4") {
                        transaction.batchNumber = "0";
                        transaction.itemNumber = "000";
                    }
                    if (!transaction.isEcommerce) {
                        if (!transaction.isRetail) {
                            transaction.isMoto = true;
                        }
                    }
                    transaction.aci = "N";
                    if (!transaction.emv) {
                        if (!transaction.trackData && !transaction.token) {
                            if (!transaction.cardNumber || transaction.cardNumber.length < 14) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = "missing or invalid cardnumber";
                                return reject(pr);
                            }
                        }
                        if (!transaction.trackData && !transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid ccExpYear";
                            return reject(pr);
                        }
                        if (!transaction.trackData && !transaction.ccExpMonth) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid ccExpMonth";
                            return reject(pr);
                        }
                        if (!transaction.amount || isNaN(parseFloat(transaction.amount))) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid amount";
                            return reject(pr);
                        }
                        if (parseFloat(transaction.amount) <= 0) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "amount must be greater than zero dollars";
                            return reject(pr);
                        }
                        if (transaction.paymentGatewayID === "4") {
                            if (parseFloat(transaction.amount) > 999999.99) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = "amount cannot be greater than 99999.99";
                                return reject(pr);
                            }
                        }
                        if (transaction.street1 && transaction.postalCode) {
                            transaction.aci = "Y";
                        }
                    }
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: "dev-api.procharge.com",
                        port: 443,
                        path: "/api/transaction",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.applicationKey,
                            "Authorization": "",
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = error.message;
                            return reject(pr);
                        });
                        res.on("data", function (chunk) {
                            str += chunk;
                        });
                        res.on("end", () => __awaiter(this, void 0, void 0, function* () {
                            try {
                                let result;
                                if (str.startsWith("<html>")) {
                                    result = new transaction_response_1.TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                result.transactionCode = "4";
                                result.dateTime = new Date();
                                resolve(result);
                            }
                            catch (error) {
                                let pr = new transaction_response_1.TransactionResponse();
                                pr.transactionCode = "4";
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.transactionCode = "4";
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
                        pr.transactionCode = "4";
                        return reject(pr);
                    }).on("socket", (socket) => {
                        socket.on("end", () => {
                        });
                    });
                    request.setTimeout(15000);
                    request.write(JSON.stringify(transaction));
                    request.end();
                }
                catch (error) {
                    const pr = new transaction_response_1.TransactionResponse();
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * This method will void an auth only request
     */
    voidAuthOnly(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "merchant number is required";
                        return reject(pr);
                    }
                    if (!this.applicationKey) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "Application Key is required";
                        return reject(pr);
                    }
                    if (!transaction.approvalCode) {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "approvalCode is required";
                        return reject(pr);
                    }
                    if (!transaction.transactionID) {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "transactionID is required";
                        return reject(pr);
                    }
                    transaction.universalTimeStamp = new Date().getTime();
                    transaction.transactionCode = "8";
                    transaction.target = "6";
                    transaction.revisionNumber = "1";
                    if (!transaction.isEcommerce) {
                        if (!transaction.isRetail) {
                            transaction.isMoto = true;
                        }
                    }
                    if (transaction.industryType === "2") {
                        transaction.restaurantIndustry = new restaurant_1.Restaurant(transaction);
                        delete transaction.lodgingIndustry;
                        delete transaction.retailIndustry;
                    }
                    if (transaction.industryType === "4") {
                        transaction.lodgingIndustry = new lodging_1.Lodging(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.retailIndustry;
                    }
                    if (transaction.industryType === "6") {
                        transaction.retailIndustry = new retail_moto_1.RetailMoto(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.lodgingIndustry;
                    }
                    if (!transaction) {
                        return reject({ "subject": "unable to find sales transaction for order" });
                    }
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: "dev-api.procharge.com",
                        port: 443,
                        path: "/api/transaction",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.applicationKey,
                            "Authorization": "",
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = error.message;
                            return reject(pr);
                        });
                        res.on("data", function (chunk) {
                            str += chunk;
                        });
                        res.on("end", () => __awaiter(this, void 0, void 0, function* () {
                            try {
                                let result;
                                if (str.startsWith("<html>")) {
                                    result = new transaction_response_1.TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                result.transactionCode = "8";
                                result.dateTime = new Date();
                                resolve(result);
                            }
                            catch (error) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = error.message;
                                pr.transactionCode = "8";
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message;
                        pr.transactionCode = "8";
                        return reject(pr);
                    }).on("timeout", (error) => {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
                        pr.transactionCode = "8";
                        return reject(pr);
                    }).on("socket", (socket) => {
                        socket.on("end", () => {
                        });
                    });
                    request.setTimeout(15000);
                    request.write(JSON.stringify(transaction));
                    request.end();
                }
                catch (error) {
                    // winston.logError("Error", { "application": "procharge-service", "merchantNumber": transaction.merchantNumber, "client_ip": ctx.ip, "file": "processing.ts", "method": "voidSale", "error": error.message, "requestID": transaction.universalTimeStamp || "", "subject": "Void Sale", "text": "" });
                    const pr = new transaction_response_1.TransactionResponse();
                    pr.responseText = error.message;
                    pr.transactionCode = "8";
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * This method will complete an auth only transaction
     */
    ticketOnly(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "merchant number is required";
                        return reject(pr);
                    }
                    if (!this.applicationKey) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "Application Key is required";
                        return reject(pr);
                    }
                    if (!transaction.approvalCode) {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "approvalCode is required";
                        return reject(pr);
                    }
                    if (!transaction.transactionID) {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "transactionID is required";
                        return reject(pr);
                    }
                    transaction.aci = "N";
                    if (!transaction.emv) {
                        if (!transaction.trackData && !transaction.token) {
                            if (!transaction.cardNumber || transaction.cardNumber.length < 14) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = "missing or invalid cardnumber";
                                return reject(pr);
                            }
                        }
                        if (!transaction.trackData && !transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid ccExpYear";
                            return reject(pr);
                        }
                        if (!transaction.trackData && !transaction.ccExpMonth) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid ccExpMonth";
                            return reject(pr);
                        }
                        if (!transaction.amount || isNaN(parseFloat(transaction.amount))) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid amount";
                            return reject(pr);
                        }
                        if (parseFloat(transaction.amount) <= 0) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "amount must be greater than zero dollars";
                            return reject(pr);
                        }
                        if (transaction.paymentGatewayID === "4") {
                            if (parseFloat(transaction.amount) > 999999.99) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = "amount cannot be greater than 99999.99";
                                return reject(pr);
                            }
                        }
                        if (transaction.street1 && transaction.postalCode) {
                            transaction.aci = "Y";
                        }
                    }
                    transaction.universalTimeStamp = new Date().getTime();
                    transaction.transactionCode = "3";
                    transaction.target = "6";
                    transaction.revisionNumber = "0";
                    if (!transaction.isEcommerce) {
                        if (!transaction.isRetail) {
                            transaction.isMoto = true;
                        }
                    }
                    if (transaction.industryType === "2") {
                        transaction.restaurantIndustry = new restaurant_1.Restaurant(transaction);
                        delete transaction.lodgingIndustry;
                        delete transaction.retailIndustry;
                    }
                    if (transaction.industryType === "4") {
                        transaction.lodgingIndustry = new lodging_1.Lodging(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.retailIndustry;
                    }
                    if (transaction.industryType === "6") {
                        transaction.retailIndustry = new retail_moto_1.RetailMoto(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.lodgingIndustry;
                    }
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: "dev-api.procharge.com",
                        port: 443,
                        path: "/api/transaction",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.applicationKey,
                            "Authorization": "",
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = error.message;
                            return reject(pr);
                        });
                        res.on("data", function (chunk) {
                            str += chunk;
                        });
                        res.on("end", () => __awaiter(this, void 0, void 0, function* () {
                            try {
                                let result;
                                if (str.startsWith("<html>")) {
                                    result = new transaction_response_1.TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                result.transactionCode = "3";
                                result.dateTime = new Date();
                                resolve(result);
                            }
                            catch (error) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = error.message;
                                pr.transactionCode = "3";
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message;
                        pr.transactionCode = "3";
                        return reject(pr);
                    }).on("timeout", (error) => {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
                        pr.transactionCode = "3";
                        return reject(pr);
                    }).on("socket", (socket) => {
                        socket.on("end", () => {
                        });
                    });
                    request.setTimeout(15000);
                    request.write(JSON.stringify(transaction));
                    request.end();
                }
                catch (error) {
                    const pr = new transaction_response_1.TransactionResponse();
                    pr.responseText = error.message;
                    pr.transactionCode = "3";
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * This method will void a ticket only transaction
     */
    voidTicketOnly(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "merchant number is required";
                        return reject(pr);
                    }
                    if (!this.applicationKey) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "Application Key is required";
                        return reject(pr);
                    }
                    if (!transaction.approvalCode) {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "approvalCode is required";
                        return reject(pr);
                    }
                    if (!transaction.transactionID) {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "transactionID is required";
                        return reject(pr);
                    }
                    transaction.aci = "N";
                    if (!transaction.paymentGatewayID) {
                        if (!transaction.acquirerID) {
                            transaction.paymentGatewayID = "4";
                        }
                        else {
                            transaction.paymentGatewayID = "5";
                        }
                    }
                    transaction.universalTimeStamp = new Date().getTime();
                    transaction.transactionCode = "7";
                    transaction.target = "6";
                    transaction.revisionNumber = "1";
                    if (!transaction.isEcommerce) {
                        if (!transaction.isRetail) {
                            transaction.isMoto = true;
                        }
                    }
                    if (transaction.industryType === "2") {
                        transaction.restaurantIndustry = new restaurant_1.Restaurant(transaction);
                        delete transaction.lodgingIndustry;
                        delete transaction.retailIndustry;
                    }
                    if (transaction.industryType === "4") {
                        transaction.lodgingIndustry = new lodging_1.Lodging(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.retailIndustry;
                    }
                    if (transaction.industryType === "6") {
                        transaction.retailIndustry = new retail_moto_1.RetailMoto(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.lodgingIndustry;
                    }
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: "dev-api.procharge.com",
                        port: 443,
                        path: "/api/transaction",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.applicationKey,
                            "Authorization": "",
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = error.message;
                            return reject(pr);
                        });
                        res.on("data", function (chunk) {
                            str += chunk;
                        });
                        res.on("end", () => __awaiter(this, void 0, void 0, function* () {
                            try {
                                let result;
                                if (str.startsWith("<html>")) {
                                    result = new transaction_response_1.TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                result.transactionCode = "7";
                                result.dateTime = new Date();
                                resolve(result);
                            }
                            catch (error) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = error.message;
                                pr.transactionCode = "7";
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message;
                        pr.transactionCode = "7";
                        return reject(pr);
                    }).on("timeout", (error) => {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
                        pr.transactionCode = "7";
                        return reject(pr);
                    }).on("socket", (socket) => {
                        socket.on("end", () => {
                        });
                    });
                    request.setTimeout(15000);
                    request.write(JSON.stringify(transaction));
                    request.end();
                }
                catch (error) {
                    const pr = new transaction_response_1.TransactionResponse();
                    pr.responseText = error.message;
                    pr.transactionCode = "7";
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * Use this method to refund a customer for a transaction on a closed batch. Use
     * void transactions only on an open batch
     */
    refund(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "merchant number is required";
                        return reject(pr);
                    }
                    if (!this.applicationKey) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "Application Key is required";
                        return reject(pr);
                    }
                    transaction.universalTimeStamp = new Date().getTime();
                    transaction.target || (transaction.target = "6");
                    transaction.partialAuthIndicator || (transaction.partialAuthIndicator = "2");
                    transaction.transactionCode = "2";
                    if (!transaction.isEcommerce) {
                        if (!transaction.isRetail) {
                            if (!transaction.isMoto) {
                                transaction.isMoto = true;
                            }
                        }
                    }
                    transaction.aci = "N";
                    if (!transaction.emv) {
                        if (!transaction.trackData && !transaction.token) {
                            if (!transaction.cardNumber || transaction.cardNumber.length < 14) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = "missing or invalid cardnumber";
                                return reject(pr);
                            }
                        }
                        if (!transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid ccExpYear";
                            return reject(pr);
                        }
                        if (!transaction.ccExpMonth) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid ccExpMonth";
                            return reject(pr);
                        }
                        if (!transaction.amount || isNaN(parseFloat(transaction.amount))) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid amount";
                            return reject(pr);
                        }
                        if (parseFloat(transaction.amount) <= 0) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "amount must be greater than zero dollars";
                            return reject(pr);
                        }
                        if (parseFloat(transaction.amount) > 999999.99) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "amount cannot be greater than 99999.99";
                            return reject(pr);
                        }
                    }
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: "dev-api.procharge.com",
                        port: 443,
                        path: "/api/transaction",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.applicationKey,
                            "Authorization": "",
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = error.message;
                            return reject(pr);
                        });
                        res.on("data", function (chunk) {
                            str += chunk;
                        });
                        res.on("end", () => __awaiter(this, void 0, void 0, function* () {
                            try {
                                let result;
                                if (str.startsWith("<html>")) {
                                    result = new transaction_response_1.TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                result.transactionCode = "2";
                                result.dateTime = new Date();
                                resolve(result);
                            }
                            catch (error) {
                                let pr = new transaction_response_1.TransactionResponse();
                                pr.transactionCode = "2";
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.transactionCode = "2";
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
                        pr.transactionCode = "2";
                        return reject(pr);
                    }).on("socket", (socket) => {
                        socket.on("end", () => {
                        });
                    });
                    request.setTimeout(15000);
                    request.write(JSON.stringify(transaction));
                    request.end();
                }
                catch (error) {
                    const pr = new transaction_response_1.TransactionResponse();
                    pr.transactionCode = "2";
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * Use this method to void a previous refund
     */
    voidRefund(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "merchant number is required";
                        return reject(pr);
                    }
                    if (!this.applicationKey) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "Application Key is required";
                        return reject(pr);
                    }
                    if (!transaction.approvalCode) {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "approvalCode is required";
                        return reject(pr);
                    }
                    if (!transaction.transactionID) {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "transactionID is required";
                        return reject(pr);
                    }
                    if (transaction.cardNumber) {
                        if (!transaction.ccExpMonth || !transaction.ccExpYear) {
                            let pr = new transaction_response_1.TransactionResponse();
                            pr.responseCode = 1;
                            pr.responseText = "missing expiration date";
                            return reject(pr);
                        }
                    }
                    transaction.universalTimeStamp = new Date().getTime();
                    transaction.transactionCode = "6";
                    transaction.target = "6";
                    transaction.revisionNumber = "1";
                    if (!transaction.isEcommerce) {
                        if (!transaction.isRetail) {
                            transaction.isMoto = true;
                        }
                    }
                    if (transaction.industryType === "2") {
                        transaction.restaurantIndustry = new restaurant_1.Restaurant(transaction);
                        delete transaction.lodgingIndustry;
                        delete transaction.retailIndustry;
                    }
                    if (transaction.industryType === "4") {
                        transaction.lodgingIndustry = new lodging_1.Lodging(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.retailIndustry;
                    }
                    if (transaction.industryType === "6") {
                        transaction.retailIndustry = new retail_moto_1.RetailMoto(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.lodgingIndustry;
                    }
                    if (!transaction) {
                        return reject({ "subject": "unable to find sales transaction for order" });
                    }
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: "dev-api.procharge.com",
                        port: 443,
                        path: "/api/transaction",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.applicationKey,
                            "Authorization": "",
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = error.message;
                            return reject(pr);
                        });
                        res.on("data", function (chunk) {
                            str += chunk;
                        });
                        res.on("end", () => __awaiter(this, void 0, void 0, function* () {
                            try {
                                let result;
                                if (str.startsWith("<html>")) {
                                    result = new transaction_response_1.TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                result.transactionCode = "6";
                                result.dateTime = new Date();
                                resolve(result);
                            }
                            catch (error) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = error.message;
                                pr.transactionCode = "6";
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message;
                        pr.transactionCode = "6";
                        return reject(pr);
                    }).on("timeout", (error) => {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
                        pr.transactionCode = "6";
                        return reject(pr);
                    }).on("socket", (socket) => {
                        socket.on("end", () => {
                        });
                    });
                    request.setTimeout(15000);
                    request.write(JSON.stringify(transaction));
                    request.end();
                }
                catch (error) {
                    const pr = new transaction_response_1.TransactionResponse();
                    pr.responseText = error.message;
                    pr.transactionCode = "6";
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * Use this method to get the balance on a pre paid debit card
     */
    prePaidBalanceInquiry(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "merchant number is required";
                        return reject(pr);
                    }
                    if (!this.applicationKey) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "Application Key is required";
                        return reject(pr);
                    }
                    transaction.universalTimeStamp = new Date().getTime();
                    transaction.target || (transaction.target = "6");
                    transaction.partialAuthIndicator || (transaction.partialAuthIndicator = "2");
                    transaction.transactionCode = "V";
                    if (!transaction.isEcommerce) {
                        if (!transaction.isRetail) {
                            transaction.isMoto = true;
                        }
                    }
                    transaction.aci = "N";
                    if (!transaction.emv) {
                        if (!transaction.trackData && !transaction.token) {
                            if (!transaction.cardNumber || transaction.cardNumber.length < 14) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = "missing or invalid cardnumber";
                                return reject(pr);
                            }
                        }
                        if (!transaction.trackData && !transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid ccExpYear";
                            return reject(pr);
                        }
                        if (!transaction.trackData && !transaction.ccExpMonth) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid ccExpMonth";
                            return reject(pr);
                        }
                        if (transaction.paymentGatewayID === "4") {
                            transaction.amount = "0.00";
                        }
                    }
                    transaction.cardTypeIndicator = "P";
                    switch (transaction.industryType.toString()) {
                        case "2":
                            transaction.restaurantIndustry = new restaurant_1.Restaurant(transaction);
                            delete transaction.lodgingIndustry;
                            delete transaction.retailIndustry;
                        case "4":
                            transaction.lodgingIndustry = new lodging_1.Lodging(transaction);
                            delete transaction.restaurantIndustry;
                            delete transaction.retailIndustry;
                            break;
                        case "6":
                            transaction.retailIndustry = new retail_moto_1.RetailMoto(transaction);
                            delete transaction.restaurantIndustry;
                            delete transaction.lodgingIndustry;
                            break;
                    }
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: "dev-api.procharge.com",
                        port: 443,
                        path: "/api/transaction",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.applicationKey,
                            "Authorization": "",
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = error.message;
                            return reject(pr);
                        });
                        res.on("data", function (chunk) {
                            str += chunk;
                        });
                        res.on("end", () => __awaiter(this, void 0, void 0, function* () {
                            try {
                                let result;
                                if (str.startsWith("<html>")) {
                                    result = new transaction_response_1.TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                result.transactionCode = "4";
                                result.dateTime = new Date();
                                resolve(result);
                            }
                            catch (error) {
                                let pr = new transaction_response_1.TransactionResponse();
                                pr.transactionCode = "4";
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.transactionCode = "4";
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
                        pr.transactionCode = "4";
                        return reject(pr);
                    }).on("socket", (socket) => {
                        socket.on("end", () => {
                        });
                    });
                    request.setTimeout(15000);
                    request.write(JSON.stringify(transaction));
                    request.end();
                }
                catch (error) {
                    const pr = new transaction_response_1.TransactionResponse();
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * Use this method to validate a credit card
     */
    validateCard(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "merchant number is required";
                        return reject(pr);
                    }
                    if (!this.applicationKey) {
                        const pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = "Application Key is required";
                        return reject(pr);
                    }
                    transaction.universalTimeStamp = new Date().getTime();
                    transaction.target || (transaction.target = "6");
                    transaction.partialAuthIndicator || (transaction.partialAuthIndicator = "2");
                    transaction.transactionCode = "1";
                    if (!transaction.isEcommerce) {
                        if (!transaction.isRetail) {
                            transaction.isMoto = true;
                        }
                    }
                    transaction.aci = "N";
                    if (!transaction.emv) {
                        if (!transaction.trackData && !transaction.token) {
                            if (!transaction.cardNumber || transaction.cardNumber.length < 14) {
                                const pr = new transaction_response_1.TransactionResponse();
                                pr.responseText = "missing or invalid cardnumber";
                                return reject(pr);
                            }
                        }
                        if (!transaction.trackData && !transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid ccExpYear";
                            return reject(pr);
                        }
                        if (!transaction.trackData && !transaction.ccExpMonth) {
                            const pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = "missing or invalid ccExpMonth";
                            return reject(pr);
                        }
                        if (transaction.paymentGatewayID === "4") {
                            transaction.amount = "0.00";
                        }
                    }
                    switch (transaction.industryType.toString()) {
                        case "2":
                            transaction.restaurantIndustry = new restaurant_1.Restaurant(transaction);
                            delete transaction.lodgingIndustry;
                            delete transaction.retailIndustry;
                        case "4":
                            transaction.lodgingIndustry = new lodging_1.Lodging(transaction);
                            delete transaction.restaurantIndustry;
                            delete transaction.retailIndustry;
                            break;
                        case "6":
                            transaction.retailIndustry = new retail_moto_1.RetailMoto(transaction);
                            delete transaction.restaurantIndustry;
                            delete transaction.lodgingIndustry;
                            break;
                    }
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: "dev-api.procharge.com",
                        port: 443,
                        path: "/api/transaction",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.applicationKey,
                            "Authorization": "",
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new transaction_response_1.TransactionResponse();
                            pr.responseText = error.message;
                            return reject(pr);
                        });
                        res.on("data", function (chunk) {
                            str += chunk;
                        });
                        res.on("end", () => __awaiter(this, void 0, void 0, function* () {
                            try {
                                let result;
                                if (str.startsWith("<html>")) {
                                    result = new transaction_response_1.TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new transaction_response_1.TransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                result.transactionCode = "4";
                                result.dateTime = new Date();
                                resolve(result);
                            }
                            catch (error) {
                                let pr = new transaction_response_1.TransactionResponse();
                                pr.transactionCode = "4";
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.transactionCode = "4";
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new transaction_response_1.TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
                        pr.transactionCode = "4";
                        return reject(pr);
                    }).on("socket", (socket) => {
                        socket.on("end", () => {
                        });
                    });
                    request.setTimeout(15000);
                    request.write(JSON.stringify(transaction));
                    request.end();
                }
                catch (error) {
                    const pr = new transaction_response_1.TransactionResponse();
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
}
exports.Procharge = Procharge;
