import { Transaction } from "./src/classes/transaction";
import { TransactionResponse } from "./src/classes/transaction-response";
import * as https from "https";
import { RetailMoto } from "./src/classes/retail-moto";
import { Restaurant } from "./src/classes/restaurant";
import { Lodging } from "./src/classes/lodging";

export { Transaction } from "./src/classes/transaction";
export { TransactionResponse } from "./src/classes/transaction-response";
export { RetailMoto } from "./src/classes/retail-moto";
export { Restaurant } from "./src/classes/restaurant";
export { Lodging } from "./src/classes/lodging";
export { ReceiptItem } from  "./src/classes/receipt-item";

export class Environment {
    public static Development: string = "https://dev-api.procharge.com";
    public static Production: string = "https://api.procharge.com";
}


export class Client {
    public constructor(private options: any) {
        
    }

    /**
     * Use this method to obtain a jwt access token
     */
    public async getAccessToken(creds: any): Promise<TransactionResponse> {
        return new Promise(async (resolve, reject) => {            
            try {
                if (!creds) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "invalid request";
                    return reject(pr);
                }

                if (!creds.email) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "email is required";
                    return reject(pr);
                }

                if (!creds.password) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "password is required";
                    return reject(pr);
                }

                let authRequest: any = {
                    "application": creds.appname,
                    "email": creds.email,
                    "password": creds.password
                };

                let options = {
                    method: "POST",
                    protocol: "https:",
                    host: this.options.env,
                    port: 443,
                    path: "/api/authentication/login",
                    allowHTTP1: true,
                    requestCert: false,
                    strictSSL: false,
                    rejectUnauthorized: false,
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "x-api-key": this.options.applicationKey,
                        "Content-Length": JSON.stringify(authRequest).length
                    }
                };

                let request = https.request(options, function (res: any) {
                    let str = "";
                    res.on("error", (error: any) => {
                        let pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    });

                    res.on("data", function (chunk: any) {
                        str += chunk;
                    });

                    res.on("end", async () => {
                        try {
                            let result: TransactionResponse;

                            if (str.startsWith("<html>")) {
                                result = new TransactionResponse();
                                result.responseText = str;
                            } else if (str.startsWith("<!DOCTYPE")) {
                                if (str.includes("<title>")) {
                                    let index = str.indexOf("<title>");
                                    let newstr = str.substring(index);
                                    newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                    newstr = newstr.replace("<title>", "").replace("</title>", "");
                                    result = new TransactionResponse();
                                    result.responseText = newstr;
                                } else {
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                            } else {
                                result = JSON.parse(str) as TransactionResponse;
                            }

                            result.transactionCode = "1";
                            result.dateTime = new Date();
                            resolve(result);

                        } catch (error: any) {
                            let pr: TransactionResponse = new TransactionResponse();
                            pr.transactionCode = "1";
                            pr.responseText = error.message;
                            return reject(pr);
                        }
                    });
                }).on("error", (error: any) => {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.transactionCode = "1";
                    pr.responseText = error.message;
                    return reject(pr);
                }).on("timeout", (error: any) => {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message ? error.message : JSON.stringify(error);
                    pr.transactionCode = "1";
                    return reject(pr);
                }).on("socket", (socket: any) => {
                    socket.on("end", () => {

                    });
                });

                request.setTimeout(15000);
                request.write(JSON.stringify(authRequest));
                request.end();

            } catch (error: any) {
                const pr: TransactionResponse = new TransactionResponse();
                pr.responseText = error.message;
                return reject(pr);
            }
        });
    }

    /**
     * This method will submit a one time sale and debit a customers account
     */
    public async processSale(transaction: Transaction): Promise<any> {
        return new Promise(async (resolve, reject) => {            
            try {

                if (!transaction) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "transaction is required";
                    return reject(pr);
                }

                if (!transaction.merchantNumber) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "merchant number is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "Application Key is required";
                    return reject(pr);
                }

                transaction.universalTimeStamp = new Date().getTime();
                transaction.target ||= "6";
                transaction.partialAuthIndicator ||= "2";
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
                            const pr: TransactionResponse = new TransactionResponse();
                            pr.responseText = "missing or invalid cardnumber";
                            return reject(pr);
                        }
                    }

                    if (!transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid ccExpYear";
                        return reject(pr);
                    }

                    if (!transaction.ccExpMonth) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid ccExpMonth";
                        return reject(pr);
                    }

                    if (!transaction.amount || isNaN(parseFloat(transaction.amount))) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid amount";
                        return reject(pr);
                    }

                    if (parseFloat(transaction.amount) <= 0) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "amount must be greater than zero dollars";
                        return reject(pr);
                    }

                    if (transaction.paymentGatewayID === "4") {
                        if (parseFloat(transaction.amount) > 999999.99) {
                            const pr: TransactionResponse = new TransactionResponse();
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
                    host: this.options.env,
                    port: 443,
                    path: "/api/transaction",
                    allowHTTP1: true,
                    requestCert: false,
                    strictSSL: false,
                    rejectUnauthorized: false,
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "x-api-key": this.options.applicationKey,
                        "Authorization": "",
                        "Content-Length": JSON.stringify(transaction).length
                    }
                };

                let request = https.request(options, function (res: any) {
                    let str = "";
                    res.on("error", (error: any) => {
                        let pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    });

                    res.on("data", function (chunk: any) {
                        str += chunk;
                    });

                    res.on("end", async () => {
                        try {
                            let result: TransactionResponse;

                            if (str.startsWith("<html>")) {
                                result = new TransactionResponse();
                                result.responseText = str;
                            } else if (str.startsWith("<!DOCTYPE")) {
                                if (str.includes("<title>")) {
                                    let index = str.indexOf("<title>");
                                    let newstr = str.substring(index);
                                    newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                    newstr = newstr.replace("<title>", "").replace("</title>", "");
                                    result = new TransactionResponse();
                                    result.responseText = newstr;
                                } else {
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                            } else {
                                result = JSON.parse(str) as TransactionResponse;
                            }

                            result.transactionCode = "1";
                            result.dateTime = new Date();
                            resolve(result);

                        } catch (error: any) {
                            let pr: TransactionResponse = new TransactionResponse();
                            pr.transactionCode = "1";
                            pr.responseText = error.message;
                            return reject(pr);
                        }
                    });
                }).on("error", (error: any) => {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.transactionCode = "1";
                    pr.responseText = error.message;
                    return reject(pr);
                }).on("timeout", (error: any) => {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message ? error.message : JSON.stringify(error);
                    pr.transactionCode = "1";
                    return reject(pr);
                }).on("socket", (socket: any) => {
                    socket.on("end", () => {

                    });
                });

                request.setTimeout(15000);
                request.write(JSON.stringify(transaction));
                request.end();

            } catch (error: any) {
                const pr: TransactionResponse = new TransactionResponse();
                pr.responseText = error.message;
                return reject(pr);
            }
        });
    }

    /**
     * This method will void a previous sale in the same batch
     */
    public async voidSale(transaction: Transaction): Promise<any> {
        return new Promise(async (resolve, reject) => {            
            try {

                if (!transaction) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "transaction is required";
                    return reject(pr);
                }

                if (!transaction.merchantNumber) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "merchant number is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "Application Key is required";
                    return reject(pr);
                }

                if (!transaction.approvalCode) {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseCode = 1;
                    pr.responseText = "approvalCode is required";
                    return reject(pr);
                }

                if (!transaction.transactionID) {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseCode = 1;
                    pr.responseText = "transactionID is required";
                    return reject(pr);
                }

                transaction.universalTimeStamp = new Date().getTime();
                transaction.transactionCode = "5";
                transaction.target = "6";
                transaction.revisionNumber = "1"

                if (!transaction.isEcommerce) {
                    if (!transaction.isRetail) {
                        transaction.isMoto = true;
                    }
                }

                if (transaction.industryType === "2") {
                    transaction.restaurantIndustry = new Restaurant(transaction);
                    delete transaction.lodgingIndustry;
                    delete transaction.retailIndustry;
                }

                if (transaction.industryType === "4") {
                    transaction.lodgingIndustry = new Lodging(transaction);
                    delete transaction.restaurantIndustry;
                    delete transaction.retailIndustry;
                }

                if (transaction.industryType === "6") {
                    transaction.retailIndustry = new RetailMoto(transaction);
                    delete transaction.restaurantIndustry;
                    delete transaction.lodgingIndustry;
                }

                let options = {
                    method: "POST",
                    protocol: "https:",
                    host: this.options.env,
                    port: 443,
                    path: "/api/transaction",
                    allowHTTP1: true,
                    requestCert: false,
                    strictSSL: false,
                    rejectUnauthorized: false,
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "x-api-key": this.options.applicationKey,
                        "Authorization": "",
                        "Content-Length": JSON.stringify(transaction).length
                    }
                };

                let request = https.request(options, function (res: any) {
                    let str = "";
                    res.on("error", (error: any) => {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    });

                    res.on("data", function (chunk: any) {
                        str += chunk;
                    });

                    res.on("end", async () => {
                        try {
                            let result: any;

                            if (str.startsWith("<html>")) {
                                result = new TransactionResponse();
                                result.responseText = str;
                            } else if (str.startsWith("<!DOCTYPE")) {
                                if (str.includes("<title>")) {
                                    let index = str.indexOf("<title>");
                                    let newstr = str.substring(index);
                                    newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                    newstr = newstr.replace("<title>", "").replace("</title>", "");
                                    result = new TransactionResponse();
                                    result.responseText = newstr;
                                } else {
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                            } else {
                                result = JSON.parse(str) as TransactionResponse;
                            }

                            result.transactionCode = "5";
                            result.dateTime = new Date();
                            resolve(result);

                        } catch (error: any) {
                            const pr: TransactionResponse = new TransactionResponse();
                            pr.responseText = error.message;
                            pr.transactionCode = "5";
                            return reject(pr);
                        }
                    });
                }).on("error", (error: any) => {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message;
                    pr.transactionCode = "5";
                    return reject(pr);
                }).on("timeout", (error: any) => {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message ? error.message : JSON.stringify(error);
                    pr.transactionCode = "5";
                    return reject(pr);
                }).on("socket", (socket: any) => {
                    socket.on("end", () => {

                    });
                });

                request.setTimeout(15000);
                request.write(JSON.stringify(transaction));
                request.end();

            } catch (error: any) {
                const pr: TransactionResponse = new TransactionResponse();
                pr.responseText = error.message;
                pr.transactionCode = "5";
                return reject(pr);
            }
        });
    }

    /**
     * This method will obtain an authorization for a card number. A
     * ticket only request is required to complete the transaction at the time of order fulfillment.
     */
    public async authorizeOnly(transaction: Transaction): Promise<any> {
        return new Promise(async (resolve, reject) => {            
            try {
                if (!transaction) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "transaction is required";
                    return reject(pr);
                }

                if (!transaction.merchantNumber) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "merchant number is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "Application Key is required";
                    return reject(pr);
                }

                transaction.universalTimeStamp = new Date().getTime();
                transaction.target ||= "6";
                transaction.partialAuthIndicator ||= "2";
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
                            const pr: TransactionResponse = new TransactionResponse();
                            pr.responseText = "missing or invalid cardnumber";
                            return reject(pr);
                        }
                    }

                    if (!transaction.trackData && !transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid ccExpYear";
                        return reject(pr);
                    }

                    if (!transaction.trackData && !transaction.ccExpMonth) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid ccExpMonth";
                        return reject(pr);
                    }

                    if (!transaction.amount || isNaN(parseFloat(transaction.amount))) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid amount";
                        return reject(pr);
                    }

                    if (parseFloat(transaction.amount) <= 0) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "amount must be greater than zero dollars";
                        return reject(pr);
                    }

                    if (transaction.paymentGatewayID === "4") {
                        if (parseFloat(transaction.amount) > 999999.99) {
                            const pr: TransactionResponse = new TransactionResponse();
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
                    host: this.options.env,
                    port: 443,
                    path: "/api/transaction",
                    allowHTTP1: true,
                    requestCert: false,
                    strictSSL: false,
                    rejectUnauthorized: false,
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "x-api-key": this.options.applicationKey,
                        "Authorization": "",
                        "Content-Length": JSON.stringify(transaction).length
                    }
                };

                let request = https.request(options, function (res: any) {
                    let str = "";
                    res.on("error", (error: any) => {
                        let pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    });

                    res.on("data", function (chunk: any) {
                        str += chunk;
                    });

                    res.on("end", async () => {
                        try {
                            let result: TransactionResponse;

                            if (str.startsWith("<html>")) {
                                result = new TransactionResponse();
                                result.responseText = str;
                            } else if (str.startsWith("<!DOCTYPE")) {
                                if (str.includes("<title>")) {
                                    let index = str.indexOf("<title>");
                                    let newstr = str.substring(index);
                                    newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                    newstr = newstr.replace("<title>", "").replace("</title>", "");
                                    result = new TransactionResponse();
                                    result.responseText = newstr;
                                } else {
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                            } else {
                                result = JSON.parse(str) as TransactionResponse;
                            }

                            result.transactionCode = "4";
                            result.dateTime = new Date();
                            resolve(result);

                        } catch (error: any) {
                            let pr: TransactionResponse = new TransactionResponse();
                            pr.transactionCode = "4";
                            pr.responseText = error.message;
                            return reject(pr);
                        }
                    });
                }).on("error", (error: any) => {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.transactionCode = "4";
                    pr.responseText = error.message;
                    return reject(pr);
                }).on("timeout", (error: any) => {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message ? error.message : JSON.stringify(error);
                    pr.transactionCode = "4";
                    return reject(pr);
                }).on("socket", (socket: any) => {
                    socket.on("end", () => {

                    });
                });

                request.setTimeout(15000);
                request.write(JSON.stringify(transaction));
                request.end();

            } catch (error: any) {
                const pr: TransactionResponse = new TransactionResponse();
                pr.responseText = error.message;
                return reject(pr);
            }
        });
    }

    /**
     * This method will void an auth only request
     */
    public async voidAuthOnly(transaction: Transaction): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                if (!transaction) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "transaction is required";
                    return reject(pr);
                }

                if (!transaction.merchantNumber) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "merchant number is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "Application Key is required";
                    return reject(pr);
                }

                if (!transaction.approvalCode) {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseCode = 1;
                    pr.responseText = "approvalCode is required";
                    return reject(pr);
                }

                if (!transaction.transactionID) {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseCode = 1;
                    pr.responseText = "transactionID is required";
                    return reject(pr);
                }

                transaction.universalTimeStamp = new Date().getTime();
                transaction.transactionCode = "8";
                transaction.target = "6";
                transaction.revisionNumber = "1"

                if (!transaction.isEcommerce) {
                    if (!transaction.isRetail) {
                        transaction.isMoto = true;
                    }
                }

                if (transaction.industryType === "2") {
                    transaction.restaurantIndustry = new Restaurant(transaction);
                    delete transaction.lodgingIndustry;
                    delete transaction.retailIndustry;
                }

                if (transaction.industryType === "4") {
                    transaction.lodgingIndustry = new Lodging(transaction);
                    delete transaction.restaurantIndustry;
                    delete transaction.retailIndustry;
                }

                if (transaction.industryType === "6") {
                    transaction.retailIndustry = new RetailMoto(transaction);
                    delete transaction.restaurantIndustry;
                    delete transaction.lodgingIndustry;
                }

                if (!transaction) {
                    return reject({ "subject": "unable to find sales transaction for order" });
                }

                let options = {
                    method: "POST",
                    protocol: "https:",
                    host: this.options.env,
                    port: 443,
                    path: "/api/transaction",
                    allowHTTP1: true,
                    requestCert: false,
                    strictSSL: false,
                    rejectUnauthorized: false,
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "x-api-key": this.options.applicationKey,
                        "Authorization": "",
                        "Content-Length": JSON.stringify(transaction).length
                    }
                };

                let request = https.request(options, function (res: any) {
                    let str = "";
                    res.on("error", (error: any) => {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    });

                    res.on("data", function (chunk: any) {
                        str += chunk;
                    });

                    res.on("end", async () => {
                        try {

                            let result: any;

                            if (str.startsWith("<html>")) {
                                result = new TransactionResponse();
                                result.responseText = str;
                            } else if (str.startsWith("<!DOCTYPE")) {
                                if (str.includes("<title>")) {
                                    let index = str.indexOf("<title>");
                                    let newstr = str.substring(index);
                                    newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                    newstr = newstr.replace("<title>", "").replace("</title>", "");
                                    result = new TransactionResponse();
                                    result.responseText = newstr;
                                } else {
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                            } else {
                                result = JSON.parse(str) as TransactionResponse;
                            }

                            result.transactionCode = "8";
                            result.dateTime = new Date();
                            resolve(result);

                        } catch (error: any) {
                            const pr: TransactionResponse = new TransactionResponse();
                            pr.responseText = error.message;
                            pr.transactionCode = "8";
                            return reject(pr);
                        }
                    });
                }).on("error", (error: any) => {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message;
                    pr.transactionCode = "8";
                    return reject(pr);
                }).on("timeout", (error: any) => {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message ? error.message : JSON.stringify(error);
                    pr.transactionCode = "8";
                    return reject(pr);
                }).on("socket", (socket: any) => {
                    socket.on("end", () => {

                    });
                });

                request.setTimeout(15000);
                request.write(JSON.stringify(transaction));
                request.end();

            } catch (error: any) {
                // winston.logError("Error", { "application": "procharge-service", "merchantNumber": transaction.merchantNumber, "client_ip": ctx.ip, "file": "processing.ts", "method": "voidSale", "error": error.message, "requestID": transaction.universalTimeStamp || "", "subject": "Void Sale", "text": "" });
                const pr: TransactionResponse = new TransactionResponse();
                pr.responseText = error.message;
                pr.transactionCode = "8";
                return reject(pr);
            }
        });
    }

    /**
     * This method will complete an auth only transaction
     */
    public async completeTicket(transaction: Transaction): Promise<any> {
        return new Promise(async (resolve, reject) => {            
            try {
                if (!transaction) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "transaction is required";
                    return reject(pr);
                }

                if (!transaction.merchantNumber) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "merchant number is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "Application Key is required";
                    return reject(pr);
                }

                if (!transaction.approvalCode) {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseCode = 1;
                    pr.responseText = "approvalCode is required";
                    return reject(pr);
                }

                if (!transaction.transactionID) {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseCode = 1;
                    pr.responseText = "transactionID is required";
                    return reject(pr);
                }

                transaction.aci = "N";

                if (!transaction.emv) {
                    if (!transaction.trackData && !transaction.token) {
                        if (!transaction.cardNumber || transaction.cardNumber.length < 14) {
                            const pr: TransactionResponse = new TransactionResponse();
                            pr.responseText = "missing or invalid cardnumber";
                            return reject(pr);
                        }
                    }

                    if (!transaction.trackData && !transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid ccExpYear";
                        return reject(pr);
                    }

                    if (!transaction.trackData && !transaction.ccExpMonth) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid ccExpMonth";
                        return reject(pr);
                    }

                    if (!transaction.amount || isNaN(parseFloat(transaction.amount))) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid amount";
                        return reject(pr);
                    }

                    if (parseFloat(transaction.amount) <= 0) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "amount must be greater than zero dollars";
                        return reject(pr);
                    }

                    if (transaction.paymentGatewayID === "4") {
                        if (parseFloat(transaction.amount) > 999999.99) {
                            const pr: TransactionResponse = new TransactionResponse();
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
                transaction.revisionNumber = "0"

                if (!transaction.isEcommerce) {
                    if (!transaction.isRetail) {
                        transaction.isMoto = true;
                    }
                }

                if (transaction.industryType === "2") {
                    transaction.restaurantIndustry = new Restaurant(transaction);
                    delete transaction.lodgingIndustry;
                    delete transaction.retailIndustry;
                }

                if (transaction.industryType === "4") {
                    transaction.lodgingIndustry = new Lodging(transaction);
                    delete transaction.restaurantIndustry;
                    delete transaction.retailIndustry;
                }

                if (transaction.industryType === "6") {
                    transaction.retailIndustry = new RetailMoto(transaction);
                    delete transaction.restaurantIndustry;
                    delete transaction.lodgingIndustry;
                }

                let options = {
                    method: "POST",
                    protocol: "https:",
                    host: this.options.env,
                    port: 443,
                    path: "/api/transaction",
                    allowHTTP1: true,
                    requestCert: false,
                    strictSSL: false,
                    rejectUnauthorized: false,
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "x-api-key": this.options.applicationKey,
                        "Authorization": "",
                        "Content-Length": JSON.stringify(transaction).length
                    }
                };

                let request = https.request(options, function (res: any) {
                    let str = "";
                    res.on("error", (error: any) => {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    });

                    res.on("data", function (chunk: any) {
                        str += chunk;
                    });

                    res.on("end", async () => {
                        try {

                            let result: any;

                            if (str.startsWith("<html>")) {
                                result = new TransactionResponse();
                                result.responseText = str;
                            } else if (str.startsWith("<!DOCTYPE")) {
                                if (str.includes("<title>")) {
                                    let index = str.indexOf("<title>");
                                    let newstr = str.substring(index);
                                    newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                    newstr = newstr.replace("<title>", "").replace("</title>", "");
                                    result = new TransactionResponse();
                                    result.responseText = newstr;
                                } else {
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                            } else {
                                result = JSON.parse(str) as TransactionResponse;
                            }

                            result.transactionCode = "3";
                            result.dateTime = new Date();
                            resolve(result);

                        } catch (error: any) {
                            const pr: TransactionResponse = new TransactionResponse();
                            pr.responseText = error.message;
                            pr.transactionCode = "3";
                            return reject(pr);
                        }
                    });
                }).on("error", (error: any) => {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message;
                    pr.transactionCode = "3";
                    return reject(pr);
                }).on("timeout", (error: any) => {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message ? error.message : JSON.stringify(error);
                    pr.transactionCode = "3";
                    return reject(pr);
                }).on("socket", (socket: any) => {
                    socket.on("end", () => {

                    });
                });

                request.setTimeout(15000);
                request.write(JSON.stringify(transaction));
                request.end();

            } catch (error: any) {
                const pr: TransactionResponse = new TransactionResponse();
                pr.responseText = error.message;
                pr.transactionCode = "3";
                return reject(pr);
            }
        });
    }

    /**
     * This method will void a ticket only transaction
     */
    public async voidTicketOnly(transaction: Transaction): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                if (!transaction) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "transaction is required";
                    return reject(pr);
                }

                if (!transaction.merchantNumber) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "merchant number is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "Application Key is required";
                    return reject(pr);
                }

                if (!transaction.approvalCode) {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseCode = 1;
                    pr.responseText = "approvalCode is required";
                    return reject(pr);
                }

                if (!transaction.transactionID) {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseCode = 1;
                    pr.responseText = "transactionID is required";
                    return reject(pr);
                }

                transaction.aci = "N";

                if (!transaction.paymentGatewayID) {
                    if (!transaction.acquirerID) {
                        transaction.paymentGatewayID = "4";
                    } else {
                        transaction.paymentGatewayID = "5";
                    }
                }

                transaction.universalTimeStamp = new Date().getTime();
                transaction.transactionCode = "7";
                transaction.target = "6";
                transaction.revisionNumber = "1"

                if (!transaction.isEcommerce) {
                    if (!transaction.isRetail) {
                        transaction.isMoto = true;
                    }
                }

                if (transaction.industryType === "2") {
                    transaction.restaurantIndustry = new Restaurant(transaction);
                    delete transaction.lodgingIndustry;
                    delete transaction.retailIndustry;
                }

                if (transaction.industryType === "4") {
                    transaction.lodgingIndustry = new Lodging(transaction);
                    delete transaction.restaurantIndustry;
                    delete transaction.retailIndustry;
                }

                if (transaction.industryType === "6") {
                    transaction.retailIndustry = new RetailMoto(transaction);
                    delete transaction.restaurantIndustry;
                    delete transaction.lodgingIndustry;
                }

                let options = {
                    method: "POST",
                    protocol: "https:",
                    host: this.options.env,
                    port: 443,
                    path: "/api/transaction",
                    allowHTTP1: true,
                    requestCert: false,
                    strictSSL: false,
                    rejectUnauthorized: false,
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "x-api-key": this.options.applicationKey,
                        "Authorization": "",
                        "Content-Length": JSON.stringify(transaction).length
                    }
                };

                let request = https.request(options, function (res: any) {
                    let str = "";
                    res.on("error", (error: any) => {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    });

                    res.on("data", function (chunk: any) {
                        str += chunk;
                    });

                    res.on("end", async () => {
                        try {
                            let result: any;

                            if (str.startsWith("<html>")) {
                                result = new TransactionResponse();
                                result.responseText = str;
                            } else if (str.startsWith("<!DOCTYPE")) {
                                if (str.includes("<title>")) {
                                    let index = str.indexOf("<title>");
                                    let newstr = str.substring(index);
                                    newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                    newstr = newstr.replace("<title>", "").replace("</title>", "");
                                    result = new TransactionResponse();
                                    result.responseText = newstr;
                                } else {
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                            } else {
                                result = JSON.parse(str) as TransactionResponse;
                            }

                            result.transactionCode = "7";
                            result.dateTime = new Date();
                            resolve(result);

                        } catch (error: any) {
                            const pr: TransactionResponse = new TransactionResponse();
                            pr.responseText = error.message;
                            pr.transactionCode = "7";
                            return reject(pr);
                        }
                    });
                }).on("error", (error: any) => {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message;
                    pr.transactionCode = "7";
                    return reject(pr);
                }).on("timeout", (error: any) => {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message ? error.message : JSON.stringify(error);
                    pr.transactionCode = "7";
                    return reject(pr);
                }).on("socket", (socket: any) => {
                    socket.on("end", () => {

                    });
                });

                request.setTimeout(15000);
                request.write(JSON.stringify(transaction));
                request.end();

            } catch (error: any) {
                const pr: TransactionResponse = new TransactionResponse();
                pr.responseText = error.message;
                pr.transactionCode = "7";
                return reject(pr);
            }
        });
    }

    /**
     * Use this method to refund a customer for a transaction on a closed batch. Use
     * void transactions only on an open batch 
     */
    public async processRefund(transaction: Transaction): Promise<any> {
        return new Promise(async (resolve, reject) => {            
            try {
                if (!transaction) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "transaction is required";
                    return reject(pr);
                }

                if (!transaction.merchantNumber) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "merchant number is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "Application Key is required";
                    return reject(pr);
                }

                transaction.universalTimeStamp = new Date().getTime();
                transaction.target ||= "6";
                transaction.partialAuthIndicator ||= "2";
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
                            const pr: TransactionResponse = new TransactionResponse();
                            pr.responseText = "missing or invalid cardnumber";
                            return reject(pr);
                        }
                    }

                    if (!transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid ccExpYear";
                        return reject(pr);
                    }

                    if (!transaction.ccExpMonth) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid ccExpMonth";
                        return reject(pr);
                    }

                    if (!transaction.amount || isNaN(parseFloat(transaction.amount))) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid amount";
                        return reject(pr);
                    }

                    if (parseFloat(transaction.amount) <= 0) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "amount must be greater than zero dollars";
                        return reject(pr);
                    }

                    if (parseFloat(transaction.amount) > 999999.99) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "amount cannot be greater than 99999.99";
                        return reject(pr);
                    }
                }

                let options = {
                    method: "POST",
                    protocol: "https:",
                    host: this.options.env,
                    port: 443,
                    path: "/api/transaction",
                    allowHTTP1: true,
                    requestCert: false,
                    strictSSL: false,
                    rejectUnauthorized: false,
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "x-api-key": this.options.applicationKey,
                        "Authorization": "",
                        "Content-Length": JSON.stringify(transaction).length
                    }
                };

                let request = https.request(options, function (res: any) {
                    let str = "";
                    res.on("error", (error: any) => {
                        let pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    });

                    res.on("data", function (chunk: any) {
                        str += chunk;
                    });

                    res.on("end", async () => {
                        try {
                            let result: TransactionResponse;

                            if (str.startsWith("<html>")) {
                                result = new TransactionResponse();
                                result.responseText = str;
                            } else if (str.startsWith("<!DOCTYPE")) {
                                if (str.includes("<title>")) {
                                    let index = str.indexOf("<title>");
                                    let newstr = str.substring(index);
                                    newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                    newstr = newstr.replace("<title>", "").replace("</title>", "");
                                    result = new TransactionResponse();
                                    result.responseText = newstr;
                                } else {
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                            } else {
                                result = JSON.parse(str) as TransactionResponse;
                            }

                            result.transactionCode = "2";
                            result.dateTime = new Date();
                            resolve(result);

                        } catch (error: any) {
                            let pr: TransactionResponse = new TransactionResponse();
                            pr.transactionCode = "2";
                            pr.responseText = error.message;
                            return reject(pr);
                        }
                    });
                }).on("error", (error: any) => {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.transactionCode = "2";
                    pr.responseText = error.message;
                    return reject(pr);
                }).on("timeout", (error: any) => {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message ? error.message : JSON.stringify(error);
                    pr.transactionCode = "2";
                    return reject(pr);
                }).on("socket", (socket: any) => {
                    socket.on("end", () => {

                    });
                });

                request.setTimeout(15000);
                request.write(JSON.stringify(transaction));
                request.end();

            } catch (error: any) {
                const pr: TransactionResponse = new TransactionResponse();
                pr.transactionCode = "2";
                pr.responseText = error.message;
                return reject(pr);
            }
        });
    }

    /**
     * Use this method to void a previous refund
     */
    public async voidRefund(transaction: Transaction): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                if (!transaction) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "transaction is required";
                    return reject(pr);
                }

                if (!transaction.merchantNumber) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "merchant number is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "Application Key is required";
                    return reject(pr);
                }

                if (!transaction.approvalCode) {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseCode = 1;
                    pr.responseText = "approvalCode is required";
                    return reject(pr);
                }

                if (!transaction.transactionID) {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseCode = 1;
                    pr.responseText = "transactionID is required";
                    return reject(pr);
                }

                if (transaction.cardNumber) {
                    if (!transaction.ccExpMonth || !transaction.ccExpYear) {
                        let pr: TransactionResponse = new TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "missing expiration date";
                        return reject(pr);
                    }
                }

                transaction.universalTimeStamp = new Date().getTime();
                transaction.transactionCode = "6";
                transaction.target = "6";
                transaction.revisionNumber = "1"

                if (!transaction.isEcommerce) {
                    if (!transaction.isRetail) {
                        transaction.isMoto = true;
                    }
                }

                if (transaction.industryType === "2") {
                    transaction.restaurantIndustry = new Restaurant(transaction);
                    delete transaction.lodgingIndustry;
                    delete transaction.retailIndustry;
                }

                if (transaction.industryType === "4") {
                    transaction.lodgingIndustry = new Lodging(transaction);
                    delete transaction.restaurantIndustry;
                    delete transaction.retailIndustry;
                }

                if (transaction.industryType === "6") {
                    transaction.retailIndustry = new RetailMoto(transaction);
                    delete transaction.restaurantIndustry;
                    delete transaction.lodgingIndustry;
                }

                if (!transaction) {
                    return reject({ "subject": "unable to find sales transaction for order" });
                }

                let options = {
                    method: "POST",
                    protocol: "https:",
                    host: this.options.env,
                    port: 443,
                    path: "/api/transaction",
                    allowHTTP1: true,
                    requestCert: false,
                    strictSSL: false,
                    rejectUnauthorized: false,
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "x-api-key": this.options.applicationKey,
                        "Authorization": "",
                        "Content-Length": JSON.stringify(transaction).length
                    }
                };

                let request = https.request(options, function (res: any) {
                    let str = "";
                    res.on("error", (error: any) => {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    });

                    res.on("data", function (chunk: any) {
                        str += chunk;
                    });

                    res.on("end", async () => {
                        try {
                            let result: any;

                            if (str.startsWith("<html>")) {
                                result = new TransactionResponse();
                                result.responseText = str;
                            } else if (str.startsWith("<!DOCTYPE")) {
                                if (str.includes("<title>")) {
                                    let index = str.indexOf("<title>");
                                    let newstr = str.substring(index);
                                    newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                    newstr = newstr.replace("<title>", "").replace("</title>", "");
                                    result = new TransactionResponse();
                                    result.responseText = newstr;
                                } else {
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                            } else {
                                result = JSON.parse(str) as TransactionResponse;
                            }

                            result.transactionCode = "6";
                            result.dateTime = new Date();
                            resolve(result);

                        } catch (error: any) {
                            const pr: TransactionResponse = new TransactionResponse();
                            pr.responseText = error.message;
                            pr.transactionCode = "6";
                            return reject(pr);
                        }
                    });
                }).on("error", (error: any) => {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message;
                    pr.transactionCode = "6";
                    return reject(pr);
                }).on("timeout", (error: any) => {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message ? error.message : JSON.stringify(error);
                    pr.transactionCode = "6";
                    return reject(pr);
                }).on("socket", (socket: any) => {
                    socket.on("end", () => {

                    });
                });

                request.setTimeout(15000);
                request.write(JSON.stringify(transaction));
                request.end();

            } catch (error: any) {
                const pr: TransactionResponse = new TransactionResponse();
                pr.responseText = error.message;
                pr.transactionCode = "6";
                return reject(pr);
            }
        });
    }

    /**
     * Use this method to get the balance on a pre paid debit card
     */
    public async prePaidBalanceInquiry(transaction: Transaction): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {
                if (!transaction) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "transaction is required";
                    return reject(pr);
                }

                if (!transaction.merchantNumber) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "merchant number is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "Application Key is required";
                    return reject(pr);
                }

                transaction.universalTimeStamp = new Date().getTime();
                transaction.target ||= "6";
                transaction.partialAuthIndicator ||= "2";
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
                            const pr: TransactionResponse = new TransactionResponse();
                            pr.responseText = "missing or invalid cardnumber";
                            return reject(pr);
                        }
                    }

                    if (!transaction.trackData && !transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid ccExpYear";
                        return reject(pr);
                    }

                    if (!transaction.trackData && !transaction.ccExpMonth) {
                        const pr: TransactionResponse = new TransactionResponse();
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
                        transaction.restaurantIndustry = new Restaurant(transaction);
                        delete transaction.lodgingIndustry;
                        delete transaction.retailIndustry;

                    case "4":
                        transaction.lodgingIndustry = new Lodging(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.retailIndustry;
                        break;

                    case "6":
                        transaction.retailIndustry = new RetailMoto(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.lodgingIndustry;
                        break;
                }

                let options = {
                    method: "POST",
                    protocol: "https:",
                    host: this.options.env,
                    port: 443,
                    path: "/api/transaction",
                    allowHTTP1: true,
                    requestCert: false,
                    strictSSL: false,
                    rejectUnauthorized: false,
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "x-api-key": this.options.applicationKey,
                        "Authorization": "",
                        "Content-Length": JSON.stringify(transaction).length
                    }
                };

                let request = https.request(options, function (res: any) {
                    let str = "";
                    res.on("error", (error: any) => {
                        let pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    });

                    res.on("data", function (chunk: any) {
                        str += chunk;
                    });

                    res.on("end", async () => {
                        try {
                            let result: TransactionResponse;

                            if (str.startsWith("<html>")) {
                                result = new TransactionResponse();
                                result.responseText = str;
                            } else if (str.startsWith("<!DOCTYPE")) {
                                if (str.includes("<title>")) {
                                    let index = str.indexOf("<title>");
                                    let newstr = str.substring(index);
                                    newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                    newstr = newstr.replace("<title>", "").replace("</title>", "");
                                    result = new TransactionResponse();
                                    result.responseText = newstr;
                                } else {
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                            } else {
                                result = JSON.parse(str) as TransactionResponse;
                            }

                            result.transactionCode = "4";
                            result.dateTime = new Date();
                            resolve(result);

                        } catch (error: any) {
                            let pr: TransactionResponse = new TransactionResponse();
                            pr.transactionCode = "4";
                            pr.responseText = error.message;
                            return reject(pr);
                        }
                    });
                }).on("error", (error: any) => {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.transactionCode = "4";
                    pr.responseText = error.message;
                    return reject(pr);
                }).on("timeout", (error: any) => {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message ? error.message : JSON.stringify(error);
                    pr.transactionCode = "4";
                    return reject(pr);
                }).on("socket", (socket: any) => {
                    socket.on("end", () => {

                    });
                });

                request.setTimeout(15000);
                request.write(JSON.stringify(transaction));
                request.end();

            } catch (error: any) {
                const pr: TransactionResponse = new TransactionResponse();
                pr.responseText = error.message;
                return reject(pr);
            }
        });
    }

    /**
     * Use this method to validate a credit card
     */
    public async validateCard(transaction: Transaction): Promise<TransactionResponse> {
        return new Promise(async (resolve, reject) => {            
            try {
                if (!transaction) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "transaction is required";
                    return reject(pr);
                }

                if (!transaction.merchantNumber) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "merchant number is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "Application Key is required";
                    return reject(pr);
                }

                transaction.universalTimeStamp = new Date().getTime();
                transaction.target ||= "6";
                transaction.partialAuthIndicator ||= "2";
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
                            const pr: TransactionResponse = new TransactionResponse();
                            pr.responseText = "missing or invalid cardnumber";
                            return reject(pr);
                        }
                    }

                    if (!transaction.trackData && !transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid ccExpYear";
                        return reject(pr);
                    }

                    if (!transaction.trackData && !transaction.ccExpMonth) {
                        const pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = "missing or invalid ccExpMonth";
                        return reject(pr);
                    }

                    if (transaction.paymentGatewayID === "4") {
                        transaction.amount = "0.00";
                    }
                }

                switch (transaction.industryType.toString()) {
                    case "2":
                        transaction.restaurantIndustry = new Restaurant(transaction);
                        delete transaction.lodgingIndustry;
                        delete transaction.retailIndustry;
                    case "4":
                        transaction.lodgingIndustry = new Lodging(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.retailIndustry;                        
                        break;
                    case "6":
                        transaction.retailIndustry = new RetailMoto(transaction);
                        delete transaction.restaurantIndustry;
                        delete transaction.lodgingIndustry;
                        break;
                }

                let options = {
                    method: "POST",
                    protocol: "https:",
                    host: this.options.env,
                    port: 443,
                    path: "/api/transaction",
                    allowHTTP1: true,
                    requestCert: false,
                    strictSSL: false,
                    rejectUnauthorized: false,
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8",
                        "x-api-key": this.options.applicationKey,
                        "Authorization": "",
                        "Content-Length": JSON.stringify(transaction).length
                    }
                };

                let request = https.request(options, function (res: any) {
                    let str = "";
                    res.on("error", (error: any) => {
                        let pr: TransactionResponse = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    });

                    res.on("data", function (chunk: any) {
                        str += chunk;
                    });

                    res.on("end", async () => {
                        try {
                            let result: TransactionResponse;

                            if (str.startsWith("<html>")) {
                                result = new TransactionResponse();
                                result.responseText = str;
                            } else if (str.startsWith("<!DOCTYPE")) {
                                if (str.includes("<title>")) {
                                    let index = str.indexOf("<title>");
                                    let newstr = str.substring(index);
                                    newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                    newstr = newstr.replace("<title>", "").replace("</title>", "");
                                    result = new TransactionResponse();
                                    result.responseText = newstr;
                                } else {
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                            } else {
                                result = JSON.parse(str) as TransactionResponse;
                            }

                            result.transactionCode = "4";
                            result.dateTime = new Date();
                            resolve(result);
                        } catch (error: any) {
                            let pr: TransactionResponse = new TransactionResponse();
                            pr.transactionCode = "4";
                            pr.responseText = error.message;
                            return reject(pr);
                        }
                    });
                }).on("error", (error: any) => {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.transactionCode = "4";
                    pr.responseText = error.message;
                    return reject(pr);
                }).on("timeout", (error: any) => {
                    let pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = error.message ? error.message : JSON.stringify(error);
                    pr.transactionCode = "4";
                    return reject(pr);
                }).on("socket", (socket: any) => {
                    socket.on("end", () => {

                    });
                });

                request.setTimeout(15000);
                request.write(JSON.stringify(transaction));
                request.end();

            } catch (error: any) {
                const pr: TransactionResponse = new TransactionResponse();
                pr.responseText = error.message;
                return reject(pr);
            }
        });
    }
}