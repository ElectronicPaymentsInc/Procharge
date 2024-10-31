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
exports.Client = exports.Environment = exports.GiftCardTransactionResponse = exports.GiftCardTransaction = exports.TransactionResponse = exports.Transaction = exports.RetailItem = exports.ReceiptItem = exports.Lodging = exports.Restaurant = exports.RetailMoto = exports.CygmaResponse = exports.ResponseElements = void 0;
const https = __importStar(require("https"));
class ResponseElements {
    constructor() {
    }
}
exports.ResponseElements = ResponseElements;
class CygmaResponse {
    constructor() {
        this.ResponseDataElements = new ResponseElements();
        this.ProcessingCode = 0;
        this.TransactionAmount = 0;
        this.SystemsTraceNumber = 0;
        this.LocalTransactionTime = 0;
        this.LocalTransactionDate = "";
        this.RetrievalReferenceNumber = "";
        this.AuthorizationIdResponse = "";
        this.ResponseCode = "";
        this.TerminalId = "";
        this.AdditionalAmounts = "";
        this.Token = "";
        this.ResponseDataElements = new ResponseElements();
    }
}
exports.CygmaResponse = CygmaResponse;
class RetailMoto {
    constructor(transaction) {
        var _a, _b, _c, _d;
        this.copyFields(transaction);
        if (transaction && transaction.retailIndustry) {
            this.fdrAssignedTPP = transaction.retailIndustry.FDRAssignedTPP || "TEP500";
            this.FDRAssignedTPP = transaction.retailIndustry.FDRAssignedTPP || "TEP500";
            if (transaction.isPurchaseCard) {
                this.RetailTerms = transaction.retailIndustry.RetailTerms || "1";
            }
            this.MCFinalAuthIndicator = transaction.retailIndustry.MCFinalAuthIndicator || undefined;
            this.MCWalletIdentifier = transaction.retailIndustry.MCWalletIdentifier || undefined;
            this.MCDirSrvrTransId = transaction.retailIndustry.MCDirSrvrTransId || " ".repeat(36);
            this.InAppTokenCrypto = transaction.retailIndustry.InAppTokenCrypto || " ".repeat(28);
            this.RemoteCommerceAcceptorId = transaction.retailIndustry.RemoteCommerceAcceptorId || undefined;
            this.TransactionIdentifier = transaction.retailIndustry.TransactionIdentifier || transaction.transactionID || "";
            this.OrderNumber = transaction.retailIndustry.OrderNumber || transaction.orderNumber;
            this.AuthorizationCode = transaction.retailIndustry.AuthorizationCode ? transaction.retailIndustry.AuthorizationCode : transaction.approvalCode ? transaction.approvalCode : "";
            this.TotalAuthorizedAmount = transaction.retailIndustry.TotalAuthorizedAmount ? transaction.retailIndustry.TotalAuthorizedAmount : transaction.amount || "";
            this.PinBlock = transaction.retailIndustry.PinBlock ? transaction.retailIndustry.PinBlock : "";
            this.fdrAssignedTPP || (this.fdrAssignedTPP = transaction.retailIndustry.fdrAssignedTPP || "TEP500");
            this.retailTerms || (this.retailTerms = transaction.retailIndustry.retailTerms || "1");
            this.mcFinalAuthIndicator || (this.mcFinalAuthIndicator = transaction.retailIndustry.mcFinalAuthIndicator || undefined);
            this.mcWalletIdentifier || (this.mcWalletIdentifier = transaction.retailIndustry.mcWalletIdentifier || undefined);
            this.mcDirSrvrTransId || (this.mcDirSrvrTransId = transaction.retailIndustry.mcDirSrvrTransId || " ".repeat(36));
            this.inAppTokenCrypto || (this.inAppTokenCrypto = transaction.retailIndustry.inAppTokenCrypto || " ".repeat(28));
            this.remoteCommerceAcceptorId || (this.remoteCommerceAcceptorId = transaction.retailIndustry.remoteCommerceAcceptorId || undefined);
            this.transactionIdentifier || (this.transactionIdentifier = transaction.retailIndustry.transactionIdentifier || transaction.transactionID || "");
            this.orderNumber || (this.orderNumber = transaction.retailIndustry.orderNumber || transaction.orderNumber);
            this.authorizationCode || (this.authorizationCode = transaction.retailIndustry.authorizationCode ? transaction.retailIndustry.authorizationCode : transaction.approvalCode ? transaction.approvalCode : "");
            this.totalAuthorizedAmount || (this.totalAuthorizedAmount = transaction.retailIndustry.totalAuthorizedAmount ? transaction.retailIndustry.totalAuthorizedAmount : transaction.amount || "");
            this.pinBlock || (this.pinBlock = transaction.retailIndustry.pinBlock ? transaction.retailIndustry.pinBlock : "");
            if (transaction.hasOwnProperty("isPurchaseCard") && transaction.isPurchaseCard === true) {
                if (transaction.ccType === "amex" && transaction.posConditionCode != "08" && transaction.posConditionCode != "59") {
                    this.GiftCardIndicator = transaction.retailIndustry.GiftCardIndicator ? transaction.retailIndustry.GiftCardIndicator : transaction.giftCardIndicator || "1";
                    this.giftCardIndicator || (this.giftCardIndicator = transaction.retailIndustry.giftCardIndicator ? transaction.retailIndustry.giftCardIndicator : transaction.giftCardIndicator || "1");
                }
                else {
                    this.GiftCardIndicator = "0";
                    this.giftCardIndicator = "0";
                }
            }
            else {
                this.GiftCardIndicator = transaction.giftCardIndicator || "";
                this.giftCardIndicator || (this.giftCardIndicator = transaction.giftCardIndicator || "");
            }
            if (transaction.retailIndustry.TaxAmount && parseFloat(transaction.retailIndustry.TaxAmount) <= 0) {
                if (transaction.taxAmount && parseFloat(transaction.taxAmount) <= 0) {
                    transaction.retailIndustry.TaxAmount = "";
                    transaction.taxAmount = "";
                }
            }
            if (transaction.retailIndustry.taxAmount && parseFloat(transaction.retailIndustry.taxAmount) <= 0) {
                if (transaction.taxAmount && parseFloat(transaction.taxAmount) <= 0) {
                    transaction.retailIndustry.taxAmount = "";
                    transaction.taxAmount = "";
                }
            }
            this.TaxAmount = transaction.retailIndustry.TaxAmount ? transaction.retailIndustry.TaxAmount : transaction.taxAmount || "";
            this.MITAdditionalData = transaction.retailIndustry && transaction.retailIndustry.MITAdditionalData ? transaction.retailIndustry.MITAdditionalData : "";
            this.CITMITIndicator = transaction.retailIndustry && transaction.retailIndustry.CITMITIndicator ? transaction.retailIndustry.CITMITIndicator : transaction.citMitIndicator || "";
            this.taxAmount || (this.taxAmount = transaction.retailIndustry.taxAmount ? transaction.retailIndustry.taxAmount : transaction.taxAmount || "");
            this.mitAdditionalData || (this.mitAdditionalData = transaction.retailIndustry && transaction.retailIndustry.mitAdditionalData ? transaction.retailIndustry.mitAdditionalData : "");
            this.citMITIndicator || (this.citMITIndicator = transaction.retailIndustry && transaction.retailIndustry.citMITIndicator ? transaction.retailIndustry.citMITIndicator : transaction.citMitIndicator || "");
            if (this.TaxAmount) {
                this.RetailTaxIndicator = parseFloat(this.TaxAmount) > 0 ? "1" : "0";
            }
            else {
                this.RetailTaxIndicator = "0";
            }
            if (this.taxAmount) {
                this.retailTaxIndicator = parseFloat(this.taxAmount) > 0 ? "1" : "0";
            }
            else {
                this.retailTaxIndicator = "0";
            }
            // only pass for sales and auth only
            if (transaction.transactionCode === "1" || transaction.transactionCode === "4") {
                this.AVSAddress = transaction.retailIndustry.AVSAddress ? transaction.retailIndustry.AVSAddress : transaction.street1 || undefined;
                this.AVSZipCode = transaction.retailIndustry.AVSZipCode ? transaction.retailIndustry.AVSZipCode : transaction.postalCode || undefined;
                this.avsAddress || (this.avsAddress = transaction.retailIndustry.avsAddress ? transaction.retailIndustry.avsAddress : transaction.street1 || undefined);
                this.avsZipCode || (this.avsZipCode = transaction.retailIndustry.avsZipCode ? transaction.retailIndustry.avsZipCode : transaction.postalCode || undefined);
                if (!transaction.emv) {
                    transaction.aci = transaction.aci || "Y";
                    this.AuthCharIndicator = transaction.retailIndustry.AuthCharIndicator ? transaction.retailIndustry.AuthCharIndicator : transaction.aci || "Y";
                    this.authCharIndicator || (this.authCharIndicator = transaction.retailIndustry.authCharIndicator ? transaction.retailIndustry.authCharIndicator : transaction.aci || "Y");
                }
                else {
                    transaction.aci = "";
                    this.AuthCharIndicator = "";
                    this.authCharIndicator = "";
                    transaction.retailIndustry.AuthCharIndicator = "";
                    transaction.retailIndustry.authCharIndicator = "";
                }
            }
            else {
                this.AVSAddress = undefined;
                this.AVSZipCode = undefined;
                this.avsAddress = undefined;
                this.avsZipCode = undefined;
            }
            this.CardTypeIndicator || (this.CardTypeIndicator = transaction.retailIndustry.CardTypeIndicator || "C");
            this.cardTypeIndicator || (this.cardTypeIndicator = transaction.retailIndustry.cardTypeIndicator || "C");
            if (transaction.emv || (transaction.terminalCategoryCode && transaction.terminalCategoryCode === "4")) { // RETAIL
                this.Moto = "";
                this.moto = "";
            }
            else {
                this.Moto = (!transaction.emv && transaction.retailIndustry.Moto) ? transaction.retailIndustry.Moto : transaction.eci || "";
                this.moto = (!transaction.emv && transaction.retailIndustry.moto) ? transaction.retailIndustry.moto : transaction.eci || "";
            }
            if (transaction && transaction.posConditionCode) {
                switch (transaction.posConditionCode) {
                    case "04":
                        if (transaction.terminalCategoryCode === "4") { // is it retail                     
                            (_a = this.Moto) !== null && _a !== void 0 ? _a : (this.Moto = transaction.eci);
                            (_b = this.moto) !== null && _b !== void 0 ? _b : (this.moto = transaction.eci);
                        }
                        else {
                            this.Moto = transaction.eci || "2";
                            this.moto || (this.moto = transaction.eci || "2");
                        }
                        if (transaction.eci === "2") {
                            this.AuthCharIndicator = "R";
                            this.authCharIndicator = "R";
                            transaction.aci = "R";
                        }
                        break;
                    case "08":
                        this.Moto = "1";
                        this.moto = "1";
                        transaction.eci = "1";
                        this.AuthCharIndicator = transaction.retailIndustry.AuthCharIndicator ? transaction.retailIndustry.AuthCharIndicator : transaction.aci || "";
                        this.authCharIndicator || (this.authCharIndicator = transaction.retailIndustry.authCharIndicator ? transaction.retailIndustry.authCharIndicator : transaction.aci || "");
                        break;
                    case "59":
                        if (transaction.terminalCategoryCode !== "4") { // if not equal to retail
                            if (!transaction.emv) {
                                this.Moto = transaction.eci || "7";
                                this.moto || (this.moto = transaction.eci || "7");
                            }
                            else {
                                this.Moto = "";
                                this.moto = "";
                            }
                        }
                        else {
                            (_c = this.Moto) !== null && _c !== void 0 ? _c : (this.Moto = transaction.eci);
                            (_d = this.moto) !== null && _d !== void 0 ? _d : (this.moto = transaction.eci);
                        }
                        this.AuthCharIndicator = transaction.retailIndustry.AuthCharIndicator ? transaction.retailIndustry.AuthCharIndicator : transaction.aci || "";
                        this.authCharIndicator || (this.authCharIndicator = transaction.retailIndustry.authCharIndicator ? transaction.retailIndustry.authCharIndicator : transaction.aci || "");
                        break;
                    default:
                        this.AuthCharIndicator = transaction.retailIndustry.AuthCharIndicator ? transaction.retailIndustry.AuthCharIndicator : transaction.aci || "";
                        this.authCharIndicator || (this.authCharIndicator = transaction.retailIndustry.authCharIndicator ? transaction.retailIndustry.authCharIndicator : transaction.aci || "");
                        break;
                }
            }
            if (this.AuthCharIndicator && this.AuthCharIndicator === 'R') {
                this.Moto = "2";
            }
            if (this.authCharIndicator && this.authCharIndicator === 'R') {
                this.moto = "2";
            }
            this.POSLaneIDStoreNum = transaction.retailIndustry.POSLaneIDStoreNum;
            this.MerchInitiatedTransIndicator = transaction.retailIndustry.MerchInitiatedTransIndicator ? transaction.retailIndustry.MerchInitiatedTransIndicator : transaction.mitIndicator || "";
            this.DigitalWalletIndicator = transaction.retailIndustry.DigitalWalletIndicator;
            this.DigitalWalletProgramType = transaction.retailIndustry.DigitalWalletProgramType;
            this.VisaSpecConditionIndicator = transaction.retailIndustry.VisaSpecConditionIndicator;
            this.DeferredAuthIndicator = transaction.retailIndustry.DeferredAuthIndicator;
            this.MerchantCertificateSerialNumber = transaction.retailIndustry.MerchantCertificateSerialNumber;
            this.CardHolderSetSerialNumber = transaction.retailIndustry.CardHolderSetSerialNumber;
            this.XID = transaction.retailIndustry.XID;
            this.TransStain = transaction.retailIndustry.TransStain;
            this.CustomerCode = transaction.retailIndustry.CustomerCode;
            this.MCProgramProtocol = transaction.retailIndustry.MCProgramProtocol;
            this.posLaneIDStoreNum || (this.posLaneIDStoreNum = transaction.retailIndustry.posLaneIDStoreNum);
            this.merchInitiatedTransIndicator || (this.merchInitiatedTransIndicator = transaction.retailIndustry.merchInitiatedTransIndicator ? transaction.retailIndustry.MerchInitiatedTransIndicator : transaction.mitIndicator || "");
            this.digitalWalletIndicator || (this.digitalWalletIndicator = transaction.retailIndustry.digitalWalletIndicator);
            this.digitalWalletProgramType || (this.digitalWalletProgramType = transaction.retailIndustry.digitalWalletProgramType);
            this.visaSpecConditionIndicator || (this.visaSpecConditionIndicator = transaction.retailIndustry.visaSpecConditionIndicator);
            this.deferredAuthIndicator || (this.deferredAuthIndicator = transaction.retailIndustry.deferredAuthIndicator);
            this.merchantCertificateSerialNumber || (this.merchantCertificateSerialNumber = transaction.retailIndustry.merchantCertificateSerialNumber);
            this.cardHolderSetSerialNumber || (this.cardHolderSetSerialNumber = transaction.retailIndustry.cardHolderSetSerialNumber);
            this.xid || (this.xid = transaction.retailIndustry.xid);
            this.transStain || (this.transStain = transaction.retailIndustry.transStain);
            this.customerCode || (this.customerCode = transaction.retailIndustry.customerCode);
            this.mcProgramProtocol || (this.mcProgramProtocol = transaction.retailIndustry.mcProgramProtocol);
            if (transaction.retailIndustry.InAppTokenCrypto && transaction.retailIndustry.InAppTokenCrypto.trim().length >= 1) {
                this.MCDirSrvrTransId = transaction.retailIndustry.MCDirSrvrTransId || " ".repeat(36);
                this.InAppTokenCrypto = transaction.retailIndustry.InAppTokenCrypto || " ".repeat(28);
            }
            else {
                this.MCDirSrvrTransId = "";
                this.InAppTokenCrypto = "";
            }
            if (transaction.retailIndustry.inAppTokenCrypto && transaction.retailIndustry.inAppTokenCrypto.trim().length >= 1) {
                this.mcDirSrvrTransId || (this.mcDirSrvrTransId = transaction.retailIndustry.mcDirSrvrTransId || " ".repeat(36));
                this.inAppTokenCrypto || (this.inAppTokenCrypto = transaction.retailIndustry.inAppTokenCrypto || " ".repeat(28));
            }
            else {
                this.mcDirSrvrTransId = "";
                this.inAppTokenCrypto = "";
            }
            this.POSDataCodes = transaction.retailIndustry.POSDataCodes;
            this.ShipToPostalCode = (transaction.retailIndustry && transaction.retailIndustry.ShipToPostalCode) ? transaction.retailIndustry.ShipToPostalCode : transaction.postalCode;
            this.posDataCodes || (this.posDataCodes = transaction.retailIndustry.posDataCodes);
            this.shipToPostalCode || (this.shipToPostalCode = (transaction.retailIndustry && transaction.retailIndustry.shipToPostalCode) ? transaction.retailIndustry.shipToPostalCode : transaction.postalCode);
            switch (transaction.transactionCode) {
                case "2":
                case "3":
                case "5":
                case "6":
                case "7":
                case "8":
                    this.PartialAuthIndicator = "";
                    this.partialAuthIndicator = "";
                    break;
                default:
                    this.PartialAuthIndicator = (transaction.retailIndustry.PartialAuthIndicator) ? transaction.retailIndustry.PartialAuthIndicator : transaction.partialAuthIndicator || "2";
                    this.partialAuthIndicator || (this.partialAuthIndicator = (transaction.retailIndustry.partialAuthIndicator) ? transaction.retailIndustry.partialAuthIndicator : transaction.partialAuthIndicator || "2");
                    break;
            }
        }
        else {
            this.FDRAssignedTPP = "TEP500";
            if (transaction.isPurchaseCard) {
                this.RetailTerms = "1";
            }
            this.OrderNumber = (transaction && transaction.orderNumber) ? transaction.orderNumber : "";
            this.TransactionIdentifier = (transaction && transaction.transactionID) ? transaction.transactionID : "";
            this.AuthorizationCode = transaction && transaction.approvalCode ? transaction.approvalCode : "";
            this.TotalAuthorizedAmount = (transaction && transaction.amount) ? transaction.amount.toString() : "";
            this.TaxAmount = (transaction && transaction.taxAmount) ? transaction.taxAmount.toString() : "";
            this.fdrAssignedTPP = "TEP500";
            if (transaction.isPurchaseCard) {
                this.retailTerms = "1";
            }
            this.orderNumber = (transaction && transaction.orderNumber) ? transaction.orderNumber : "";
            this.transactionIdentifier = (transaction && transaction.transactionID) ? transaction.transactionID : "";
            this.authorizationCode = transaction && transaction.approvalCode ? transaction.approvalCode : "";
            this.totalAuthorizedAmount = (transaction && transaction.amount) ? transaction.amount.toString() : "";
            this.taxAmount = (transaction && transaction.taxAmount) ? transaction.taxAmount.toString() : "";
            if (transaction.hasOwnProperty("isPurchaseCard") && transaction.isPurchaseCard === true) {
                this.GiftCardIndicator = transaction.giftCardIndicator || "1";
            }
            else {
                this.GiftCardIndicator = transaction.giftCardIndicator || "";
            }
            if (transaction.hasOwnProperty("isPurchaseCard") && transaction.isPurchaseCard === true) {
                this.giftCardIndicator = transaction.giftCardIndicator || "1";
            }
            else {
                this.giftCardIndicator = transaction.giftCardIndicator || "";
            }
            this.MITAdditionalData = "";
            this.MerchInitiatedTransIndicator = transaction.mitIndicator || "";
            this.CITMITIndicator = transaction.citMitIndicator || "";
            this.mitAdditionalData = "";
            this.merchInitiatedTransIndicator = transaction.mitIndicator || "";
            this.citMITIndicator = transaction.citMitIndicator || "";
            if (this.TaxAmount) {
                this.RetailTaxIndicator = parseFloat(this.TaxAmount) > 0 ? "1" : "0";
            }
            else {
                this.RetailTaxIndicator = "0";
            }
            if (this.taxAmount) {
                this.retailTaxIndicator = parseFloat(this.taxAmount) > 0 ? "1" : "0";
            }
            else {
                this.retailTaxIndicator = "0";
            }
            // only pass for sales and auth only
            if (transaction && (transaction.transactionCode === "1" || transaction.transactionCode === "4")) {
                this.AVSAddress = (transaction.street1) ? transaction.street1 : "";
                this.AVSZipCode = (transaction.postalCode) ? transaction.postalCode : "";
                transaction.aci = transaction.aci || "Y";
                this.AuthCharIndicator = transaction.aci;
                this.avsAddress = (transaction.street1) ? transaction.street1 : "";
                this.avsZipCode = (transaction.postalCode) ? transaction.postalCode : "";
                transaction.aci = transaction.aci || "Y";
                this.authCharIndicator = transaction.aci;
            }
            else {
                this.AVSAddress = undefined;
                this.AVSZipCode = undefined;
                this.avsAddress = undefined;
                this.avsZipCode = undefined;
            }
            this.CardTypeIndicator = (transaction && transaction.cardTypeIndicator) ? transaction.cardTypeIndicator : "C";
            this.AuthCharIndicator = (transaction && transaction.aci) ? transaction.aci : "";
            this.cardTypeIndicator = (transaction && transaction.cardTypeIndicator) ? transaction.cardTypeIndicator : "C";
            this.authCharIndicator = (transaction && transaction.aci) ? transaction.aci : "";
            if (transaction && transaction.posConditionCode) {
                switch (transaction.posConditionCode) {
                    case "04":
                        this.Moto = transaction.eci || "2";
                        this.moto = transaction.eci || "2";
                        if (transaction.eci === "2") {
                            this.AuthCharIndicator = "R";
                            this.authCharIndicator = "R";
                            transaction.aci = "R";
                        }
                        break;
                    case "08":
                        this.Moto = "1";
                        this.moto = "1";
                        break;
                    case "59":
                        if (!transaction.emv && transaction.terminalCategoryCode !== "4") { // if not equal to retail
                            this.Moto = transaction.eci || "7";
                            this.moto = transaction.eci || "7";
                        }
                        else {
                            this.Moto = "";
                            this.moto = "";
                        }
                        break;
                    default:
                        if (!transaction.emv && transaction.terminalCategoryCode !== "4") { // if not equal to retail
                            this.Moto = (transaction && transaction.eci && transaction.eci.trim() !== "") ? transaction.eci : "";
                            this.moto = (transaction && transaction.eci && transaction.eci.trim() !== "") ? transaction.eci : "";
                        }
                        else {
                            this.Moto = "";
                            this.moto = "";
                        }
                        break;
                }
            }
            this.AuthCharIndicator = (transaction && transaction.aci) ? transaction.aci : "";
            this.authCharIndicator = (transaction && transaction.aci) ? transaction.aci : "";
            if (this.AuthCharIndicator && this.AuthCharIndicator === 'R') {
                this.Moto = "2";
                transaction.aci = "R";
            }
            if (this.authCharIndicator && this.authCharIndicator === 'R') {
                this.moto = "2";
                transaction.aci = "R";
            }
            this.CustomerCode = new Date().getFullYear().toString() +
                (new Date().getMonth() + 1).toString().padEnd(2, "0") +
                new Date().getDate().toString().padEnd(2, "0") +
                new Date().getHours().toString().padEnd(2, "0") +
                new Date().getMinutes().toString().padEnd(2, "0") +
                new Date().getSeconds().toString().padEnd(2, "0") +
                new Date().getMilliseconds().toString().padEnd(3, "0");
            this.MCDirSrvrTransId = "";
            this.InAppTokenCrypto = "";
            this.mcDirSrvrTransId = "";
            this.inAppTokenCrypto = "";
            this.ShipToPostalCode = this.AVSZipCode || transaction.postalCode;
            this.TransactionIdentifier = "";
            this.shipToPostalCode = this.avsZipCode || transaction.postalCode;
            this.transactionIdentifier = "";
            if (transaction) {
                switch (transaction.transactionCode) {
                    case "2":
                    case "3":
                    case "5":
                    case "6":
                    case "7":
                    case "8":
                        this.PartialAuthIndicator = "";
                        this.partialAuthIndicator = "";
                        break;
                    default:
                        this.PartialAuthIndicator = transaction.partialAuthIndicator || "2";
                        this.partialAuthIndicator = transaction.partialAuthIndicator || "2";
                        break;
                }
            }
        }
    }
    copyFields(transaction) {
        try {
            if (transaction && transaction.retailIndustry) {
                this.descriptorCodes || (this.descriptorCodes = transaction.retailIndustry.DescriptorCodes || transaction.retailIndustry.descriptorCodes);
                this.operatorID || (this.operatorID = transaction.retailIndustry.OperatorID || transaction.retailIndustry.operatorID);
                this.retailTerms || (this.retailTerms = transaction.retailIndustry.RetailTerms || transaction.retailIndustry.retailTerms);
                this.moto || (this.moto = transaction.retailIndustry.Moto || transaction.retailIndustry.moto); // Changed the Phone to Moto
                this.avsZipCode || (this.avsZipCode = transaction.retailIndustry.AVSZipCode || transaction.retailIndustry.avsZipCode);
                this.avsAddress || (this.avsAddress = transaction.retailIndustry.AVSAddress || transaction.retailIndustry.avsAddress);
                this.taxAmount || (this.taxAmount = transaction.retailIndustry.TaxAmount || transaction.retailIndustry.taxAmount);
                this.retailTaxIndicator || (this.retailTaxIndicator = transaction.retailIndustry.RetailTaxIndicator || transaction.retailIndustry.retailTaxIndicator);
                this.optionalField1 || (this.optionalField1 = transaction.retailIndustry.OptionalField1);
                this.optionalField2 || (this.optionalField2 = transaction.retailIndustry.OptionalField2);
                this.orderNumber || (this.orderNumber = transaction.retailIndustry.OrderNumber || transaction.retailIndustry.orderNumber);
                this.authCharIndicator || (this.authCharIndicator = transaction.retailIndustry.AuthCharIndicator || transaction.retailIndustry.authCharIndicator);
                this.transactionIdentifier || (this.transactionIdentifier = transaction.retailIndustry.TransactionIdentifier || transaction.retailIndustry.transactionIdentifier);
                this.avsResponseCode || (this.avsResponseCode = transaction.retailIndustry.AVSResponseCode || transaction.retailIndustry.avsResponseCode);
                this.totalAuthorizedAmount || (this.totalAuthorizedAmount = transaction.retailIndustry.TotalAuthorizedAmount || transaction.retailIndustry.totalAuthorizedAmount);
                this.pinBlock || (this.pinBlock = transaction.retailIndustry.PinBlock || transaction.retailIndustry.pinBlock);
                this.cardTypeIndicator || (this.cardTypeIndicator = transaction.retailIndustry.CardTypeIndicator || transaction.retailIndustry.cardTypeIndicator || transaction.cardTypeIndicator);
                this.cardholderSetCertificate || (this.cardholderSetCertificate = transaction.retailIndustry.CardholderSetCertificate || transaction.retailIndustry.cardholderSetCertificate);
                this.cashBackAmount || (this.cashBackAmount = transaction.retailIndustry.CashBackAmount || transaction.retailIndustry.cashBackAmount);
                this.surCharge || (this.surCharge = transaction.retailIndustry.SurCharge || transaction.retailIndustry.surCharge);
                this.ebtVoucherNumber || (this.ebtVoucherNumber = transaction.retailIndustry.EbtVoucherNumber || transaction.retailIndustry.ebtVoucherNumber);
                this.authorizationCode || (this.authorizationCode = transaction.retailIndustry.AuthorizationCode || transaction.retailIndustry.authorizationCode);
                this.smidID || (this.smidID = transaction.retailIndustry.SMIDId || transaction.retailIndustry.smidID);
                this.partialAuthIndicator || (this.partialAuthIndicator = transaction.retailIndustry.PartialAuthIndicator || transaction.retailIndustry.partialAuthIndicator);
                this.fdrAssignedTPP || (this.fdrAssignedTPP = transaction.retailIndustry.FDRAssignedTPP || transaction.retailIndustry.fdrAssignedTPP);
                this.visaAUAR || (this.visaAUAR = transaction.retailIndustry.VisaAUAR || transaction.retailIndustry.visaAUAR);
                this.mcTraceId || (this.mcTraceId = transaction.retailIndustry.MCTraceId || transaction.retailIndustry.mcTraceId);
                this.mcFraudVoidFlag || (this.mcFraudVoidFlag = transaction.retailIndustry.MCFraudVoidFlag || transaction.retailIndustry.mcFraudVoidFlag);
                this.mcFinalAuthIndicator || (this.mcFinalAuthIndicator = transaction.retailIndustry.MCFinalAuthIndicator || transaction.retailIndustry.mcFinalAuthIndicator);
                this.giftCardIndicator || (this.giftCardIndicator = transaction.retailIndustry.GiftCardIndicator || transaction.retailIndustry.giftCardIndicator);
                this.transitAccessTermCard || (this.transitAccessTermCard = transaction.retailIndustry.TransitAccessTermCard || transaction.retailIndustry.transitAccessTermCard);
                this.mcWalletIdentifier || (this.mcWalletIdentifier = transaction.retailIndustry.MCWalletIdentifier || transaction.retailIndustry.mcWalletIdentifier);
                this.posLaneIDStoreNum = transaction.retailIndustry.POSLaneIDStoreNum || transaction.retailIndustry.posLaneIDStoreNum;
                this.merchInitiatedTransIndicator = transaction.retailIndustry.MerchInitiatedTransIndicator || transaction.retailIndustry.merchInitiatedTransIndicator;
                this.digitalWalletIndicator = transaction.retailIndustry.DigitalWalletIndicator || transaction.retailIndustry.digitalWalletIndicator;
                this.digitalWalletProgramType = transaction.retailIndustry.DigitalWalletProgramType || transaction.retailIndustry.digitalWalletProgramType;
                this.visaSpecConditionIndicator = transaction.retailIndustry.VisaSpecConditionIndicator || transaction.retailIndustry.visaSpecConditionIndicator;
                this.deferredAuthIndicator = transaction.retailIndustry.DeferredAuthIndicator || transaction.retailIndustry.deferredAuthIndicator;
                this.mitAdditionalData = transaction.retailIndustry.MITAdditionalData || transaction.retailIndustry.mitAdditionalData;
                this.citMITIndicator = transaction.retailIndustry.CITMITIndicator || transaction.retailIndustry.citMITIndicator;
                this.customerCode = transaction.retailIndustry.CustomerCode || transaction.retailIndustry.customerCode;
                this.merchantCertificateSerialNumber = transaction.retailIndustry.MerchantCertificateSerialNumber || transaction.retailIndustry.merchantCertificateSerialNumber;
                this.cardHolderSetSerialNumber = transaction.retailIndustry.CardHolderSetSerialNumber || transaction.retailIndustry.cardHolderSetSerialNumber;
                this.xid = transaction.retailIndustry.XID || transaction.retailIndustry.xid;
                this.transStain = transaction.retailIndustry.TransStain || transaction.retailIndustry.transStain;
                this.mcProgramProtocol = transaction.retailIndustry.MCProgramProtocol || transaction.retailIndustry.mcProgramProtocol;
                this.mcDirSrvrTransId = transaction.retailIndustry.MCDirSrvrTransId || transaction.retailIndustry.mcDirSrvrTransId;
                this.inAppTokenCrypto = transaction.retailIndustry.InAppTokenCrypto || transaction.retailIndustry.inAppTokenCrypto;
                this.remoteCommerceAcceptorId = transaction.retailIndustry.RemoteCommerceAcceptorId || transaction.retailIndustry.remoteCommerceAcceptorId;
                this.posDataCodes = transaction.retailIndustry.POSDataCodes || transaction.retailIndustry.posDataCodes;
                this.shipToPostalCode = transaction.retailIndustry.ShipToPostalCode || transaction.retailIndustry.shipToPostalCode;
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.RetailMoto = RetailMoto;
class Restaurant {
    constructor(transaction) {
        if (transaction && transaction.restaurantIndustry) {
            this.foodAmount = transaction.restaurantIndustry.foodAmount;
            this.beverageMiscAmount = transaction.restaurantIndustry.beverageMiscAmount;
            this.taxAmount = transaction.restaurantIndustry.taxAmount ? transaction.restaurantIndustry.taxAmount : transaction.taxAmount;
            this.tipAmount = transaction.restaurantIndustry.tipAmount ? transaction.restaurantIndustry.tipAmount : transaction.tipAmount;
            this.transactionIdentifier = transaction.restaurantIndustry.transactionIdentifier || transaction.transactionID || "";
            this.serverId = transaction.restaurantIndustry.serverId;
            this.pinBlock = transaction.restaurantIndustry.pinBlock;
            this.cardTypeIndicator = transaction.restaurantIndustry.cardTypeIndicator || transaction.cardTypeIndicator || "C";
            this.cashBackAmount = transaction.restaurantIndustry.cashBackAmount;
            this.surcharge = transaction.restaurantIndustry.surcharge;
            this.ebtVoucher = transaction.restaurantIndustry.ebtVoucher;
            this.authorizationCode = transaction.restaurantIndustry.authorizationCode ? transaction.restaurantIndustry.authorizationCode : transaction.approvalCode;
            this.smidID = transaction.restaurantIndustry.smidID;
            this.mitAdditionalData = transaction.restaurantIndustry && transaction.restaurantIndustry.mitAdditionalData ? transaction.restaurantIndustry.mitAdditionalData : "";
            this.citMITIndicator = transaction.restaurantIndustry && transaction.restaurantIndustry.citMITIndicator ? transaction.restaurantIndustry.citMITIndicator : transaction.citMitIndicator || "";
            switch (transaction.transactionCode) {
                case "2":
                case "3":
                case "5":
                case "6":
                case "7":
                case "8":
                    this.partialAuthIndicator = "";
                    break;
                default:
                    this.partialAuthIndicator = (transaction.restaurantIndustry.partialAuthIndicator) ? transaction.restaurantIndustry.partialAuthIndicator : transaction.partialAuthIndicator || "2";
                    break;
            }
            this.fdrAssignedTPP = transaction.restaurantIndustry.fdrAssignedTPP || "TEP500";
            this.visaAUAR = transaction.restaurantIndustry.visaAUAR;
            this.mcTraceId = transaction.restaurantIndustry.mcTraceId;
            this.mcFraudVoidFlag = transaction.restaurantIndustry.mcFraudVoidFlag;
            this.mcFinalAuthIndicator = transaction.restaurantIndustry.mcFinalAuthIndicator;
            if (transaction.hasOwnProperty("isPurchaseCard") && transaction.isPurchaseCard === true) {
                if (!transaction.cardNotPresent && transaction.posConditionCode != "08" && transaction.posConditionCode != "59") {
                    this.giftCardIndicator = transaction.restaurantIndustry.giftCardIndicator ? transaction.restaurantIndustry.giftCardIndicator : transaction.giftCardIndicator || "1";
                }
                else {
                    this.giftCardIndicator = "0";
                }
            }
            else {
                this.giftCardIndicator = transaction.giftCardIndicator || "";
            }
            this.transitAccessTermCardActTerm = transaction.restaurantIndustry.transitAccessTermCardActTerm;
            this.mcWalletIdentifier = transaction.restaurantIndustry.mcWalletIdentifier;
            this.posLaneIdStoreNumber = transaction.restaurantIndustry.posLaneIdStoreNumber;
            this.merchantInitiatedTransactionIndicator = transaction.restaurantIndustry.merchantInitiatedTransactionIndicator ? transaction.restaurantIndustry.merchantInitiatedTransactionIndicator : transaction.mitIndicator || "";
            this.digitalWalletIndicator = transaction.restaurantIndustry.digitalWalletIndicator;
            this.digitalWalletProgramType = transaction.restaurantIndustry.digitalWalletProgramType;
            this.visaSpecialConditionIndicator = transaction.restaurantIndustry.visaSpecialConditionIndicator;
            this.deferredAuthIndicator = transaction.restaurantIndustry.deferredAuthIndicator;
            if (transaction.transactionCode === "1" || transaction.transactionCode === "4") {
                this.avsZipCode = transaction.restaurantIndustry.avsZipCode || transaction.postalCode;
            }
            this.posDataCodes = transaction.restaurantIndustry.posDataCodes;
        }
        else {
            this.fdrAssignedTPP = "TEP500";
            if (transaction) {
                this.authorizationCode = transaction.approvalCode ? transaction.approvalCode : "";
                this.transactionIdentifier = transaction.transactionID || "";
                this.taxAmount = transaction.taxAmount;
                this.tipAmount = transaction.tipAmount;
                if (transaction.transactionCode === "1" ||
                    transaction.transactionCode === "4") {
                    this.avsZipCode = transaction.postalCode;
                }
                this.mitAdditionalData = "";
                this.citMITIndicator = transaction.citMitIndicator || "";
                if (transaction) {
                    switch (transaction.transactionCode) {
                        case "2":
                        case "3":
                        case "5":
                        case "6":
                        case "7":
                        case "8":
                            this.partialAuthIndicator = "";
                            break;
                        default:
                            this.partialAuthIndicator = transaction.partialAuthIndicator || "2";
                            break;
                    }
                }
            }
            this.cardTypeIndicator = transaction.cardTypeIndicator || "C";
            this.mcFinalAuthIndicator = "1";
            if (transaction.hasOwnProperty("isPurchaseCard") && transaction.isPurchaseCard === true) {
                this.giftCardIndicator = transaction.giftCardIndicator || "1";
            }
            else {
                this.giftCardIndicator = transaction.giftCardIndicator || "";
            }
            this.merchantInitiatedTransactionIndicator = transaction.mitIndicator || "";
        }
    }
}
exports.Restaurant = Restaurant;
class Lodging {
    constructor(transaction) {
        if (transaction && transaction.lodgingIndustry) {
            this.mcFinalAuthIndicator = transaction.lodgingIndustry.mcFinalAuthIndicator || undefined;
            this.arrivalDate = transaction.lodgingIndustry.arrivalDate;
            this.departDate = transaction.lodgingIndustry.departDate;
            this.specialProgram = transaction.lodgingIndustry.specialProgram;
            this.folioNumber = transaction.lodgingIndustry.folioNumber;
            this.operatorID = transaction.lodgingIndustry.operatorID;
            this.amexChargeType = transaction.lodgingIndustry.amexChargeType;
            this.authCharIndicator = transaction.lodgingIndustry.authCharIndicator || "Y";
            this.transactionIdentifier = transaction.lodgingIndustry.transactionIdentifier || transaction.transactionID;
            this.marketSpecificIndicator = transaction.lodgingIndustry.marketSpecificIndicator;
            this.duration = transaction.lodgingIndustry.duration;
            this.extraCharges = transaction.lodgingIndustry.extraCharges;
            this.totalAuthAmount = transaction.lodgingIndustry.totalAuthAmount ? transaction.lodgingIndustry.totalAuthAmount : transaction.amount;
            this.pinBlock = transaction.lodgingIndustry.pinBlock;
            this.cardTypeIndicator = transaction.lodgingIndustry.cardTypeIndicator || transaction.cardTypeIndicator || "C";
            this.cashBackAmount = transaction.lodgingIndustry.cashBackAmount;
            this.surcharge = transaction.lodgingIndustry.surcharge;
            this.authorizationCode = transaction.lodgingIndustry.authorizationCode ? transaction.lodgingIndustry.authorizationCode : transaction.approvalCode ? transaction.approvalCode : "";
            this.smidID = transaction.lodgingIndustry.smidID;
            this.mitAdditionalData = transaction.lodgingIndustry && transaction.lodgingIndustry.mitAdditionalData ? transaction.lodgingIndustry.mitAdditionalData : "";
            this.citMITIndicator = transaction.lodgingIndustry && transaction.lodgingIndustry.citMITIndicator ? transaction.lodgingIndustry.citMITIndicator : transaction.citMitIndicator || "";
            switch (transaction.transactionCode) {
                case "2":
                case "3":
                case "5":
                case "6":
                case "7":
                case "8":
                    this.partialAuthIndicator = "";
                    break;
                default:
                    this.partialAuthIndicator = (transaction.lodgingIndustry.partialAuthIndicator) ? transaction.lodgingIndustry.partialAuthIndicator : transaction.partialAuthIndicator || "2";
                    break;
            }
            this.fdrAssignedTPP = transaction.lodgingIndustry.fdrAssignedTPP || "TEP500";
            this.visaAUAR = transaction.lodgingIndustry.visaAUAR;
            this.mcTraceID = transaction.lodgingIndustry.mcTraceID;
            this.mcFraudVoidFlag = transaction.lodgingIndustry.mcFraudVoidFlag;
            this.mcFinalAuthIndicator = transaction.lodgingIndustry.mcFinalAuthIndicator || "1";
            if (transaction.hasOwnProperty("isPurchaseCard") && transaction.isPurchaseCard === true) {
                if (!transaction.cardNotPresent && transaction.posConditionCode != "08" && transaction.posConditionCode != "59") {
                    this.giftCardIndicator = transaction.lodgingIndustry.giftCardIndicator ? transaction.lodgingIndustry.giftCardIndicator : transaction.giftCardIndicator || "1";
                }
                else {
                    this.giftCardIndicator = "0";
                }
            }
            else {
                this.giftCardIndicator = transaction.giftCardIndicator || "";
            }
            this.transitAccessTermCardInd = transaction.lodgingIndustry.transitAccessTermCardInd;
            this.mcWalletIdentifier = transaction.lodgingIndustry.mcWalletIdentifier;
            this.posLaneIDStore = transaction.lodgingIndustry.posLaneIDStore;
            this.merchantInitiatedTransIndicator = transaction.lodgingIndustry.merchantInitiatedTransIndicator ? transaction.lodgingIndustry.merchantInitiatedTransIndicator : transaction.mitIndicator || "";
            this.digitalWalletIndicator = transaction.lodgingIndustry.digitalWalletIndicator;
            this.digitalWalletProgramType = transaction.lodgingIndustry.digitalWalletProgramType;
            this.visaSpecConditionIndicator = transaction.lodgingIndustry.visaSpecConditionIndicator;
            this.deferredAuthIndicator = transaction.lodgingIndustry.deferredAuthIndicator;
            if (transaction.transactionCode === "1" || transaction.transactionCode === "4") {
                this.avsZipCode = transaction.lodgingIndustry.avsZipCode || transaction.postalCode;
                if (!transaction.emv) {
                    transaction.aci = transaction.aci || "Y";
                    transaction.lodgingIndustry.authCharIndicator = transaction.aci || "Y";
                    this.authCharIndicator = transaction.aci;
                }
                else {
                    transaction.aci = "";
                    transaction.lodgingIndustry.authCharIndicator = "";
                    this.authCharIndicator = "";
                }
            }
            this.posDataCodes = transaction.lodgingIndustry.posDataCodes;
        }
        else {
            this.fdrAssignedTPP = "TEP500";
            this.cardTypeIndicator = transaction.cardTypeIndicator || "C";
            this.mcFinalAuthIndicator = "1";
            this.merchantInitiatedTransIndicator = transaction.mitIndicator || "";
            if (transaction.transactionCode === "1" || transaction.transactionCode === "4") {
                transaction.aci = transaction.aci || "Y";
                this.authCharIndicator = (transaction && transaction.authCharIndicator) ? transaction.authCharIndicator : ((transaction && transaction.aci) ? transaction.aci : "Y");
                this.avsZipCode = transaction.postalCode || "";
                this.authCharIndicator = "Y";
            }
            else {
                this.authCharIndicator = (transaction && transaction.authCharIndicator) ? transaction.authCharIndicator : ((transaction && transaction.aci) ? transaction.aci : "");
            }
            if (transaction) {
                this.partialAuthIndicator = transaction.partialAuthIndicator;
                this.authorizationCode = transaction.approvalCode ? transaction.approvalCode : "";
                this.totalAuthAmount = transaction.amount;
            }
            this.mitAdditionalData = "";
            this.citMITIndicator = transaction.citMitIndicator || "";
            if (transaction.hasOwnProperty("isPurchaseCard") && transaction.isPurchaseCard === true) {
                this.giftCardIndicator = transaction.giftCardIndicator || "1";
            }
            else {
                this.giftCardIndicator = transaction.giftCardIndicator || "";
            }
            switch (transaction.transactionCode) {
                case "2":
                case "3":
                case "5":
                case "6":
                case "7":
                case "8":
                    this.partialAuthIndicator = "";
                    break;
                default:
                    this.partialAuthIndicator = transaction.partialAuthIndicator || "2";
                    break;
            }
        }
    }
}
exports.Lodging = Lodging;
class ReceiptItem {
    constructor() {
        this.taxType = "0002";
        this.discountIndicator = "N";
        this.itemName = "";
        this.itemDescription = "";
        this.qty = 1;
        this.unitPrice = 0.00;
        this.unitCost = 0.00;
        this.discountAmount = 0.00;
        this.discountAmountPerLineItem = 0.00;
        this.freightShippingAmount = 0;
        this.dutyAmount = 0;
        this.dutyAmountCreditDebitIndicator = 0;
        this.discountAmountCreditDebitIndicator = "N";
        this.freightShippingAmountCreditDebitIndicator = "N";
        this.zeroCostToCustomerIndicator = "N";
        this.unitOfMeasure = "EA";
        this.taxRate = 0.00;
        this.taxAmount = 0.00;
        this.salesTaxCollectedIndicator = 0;
        this.discountIndicator = "N";
        this.destinationPostalCode = "";
        this.shipFromPostalCode = "";
        this.shippingMethod = "04";
        this.destinationCountryCode = "USA";
        this.extendedItemAmountLineItemTotalAmount = 0.00;
        this.extendedAmountCreditDebitIndicator = "N";
        this.unitPriceExcludingTax = 0.00;
        this.itemPriceIncludingTax = 0.00;
        this.shipToFirstName = ""; // amex only
        this.shipToLastName = ""; // amex only
        this.shipToAddress = ""; // amex only
        this.shipToPhoneNumber = ""; // amex only
    }
}
exports.ReceiptItem = ReceiptItem;
class RetailItem {
}
exports.RetailItem = RetailItem;
class Transaction {
    constructor() {
        this.merchantCountryOriginCode = "840";
        this.paymentGatewayID = "4";
        this.hardwareVendorIdentifier = "FISP";
        this.softwareIdentifier = "0002";
        this.isPurchaseCard = false;
        this.cardNotPresent = false;
        this.receipts = false;
        this.displaySignature = false;
        this.cardOnFile = false;
        this.commercialRequestIndicator = "1";
        this.marketSpecificDataRequest = " ";
        this.reasonCode = "02";
        this.networkReferenceNumber = "";
        this.items = [];
        this.retailItems = [];
        this.dateTime = new Date();
        this.universalTimeStamp = new Date().getTime();
        this.hardwareVendorIdentifier = "FISP";
        this.softwareIdentifier = "0002";
        this.applicationKey = "";
        this.isProcharge = true;
        this.isMoto = false;
        this.isEcommerce = true;
        this.isRetail = false;
        this.ebtCode = "";
        this.preAuthorization = false;
        this.protocolType = "1";
        this.cardNumber = "";
        this.name = "";
        this.firstName = "";
        this.lastName = "";
        this.street1 = "";
        this.street2 = "";
        this.city = "";
        this.state = "";
        this.postalCode = "";
        this.country = "";
        this.emv = "";
        this.track1Data = "";
        this.trackData = "";
        this.ccLastFour = "";
        this.token = "";
        this.ccType = "";
        this.ccExpMonth = "";
        this.ccExpYear = "";
        this.cvv = "";
        this.amount = "";
        this.originalAmount = "";
        this.subTotal = "0.00";
        this.tipAmount = "";
        this.taxAmount = "";
        this.cashBackAmount = "";
        this.cashAdvanceAmount = "";
        this.reverseCashDiscountAmount = "";
        this.reverseCashDiscountFixAmount = "";
        this.customerServiceFee = "";
        this.customerServiceFeeAmount = "";
        this.customerServiceFeeFixAmount = "";
        this.cashDiscountFixAmount = "";
        this.cashDiscountAmount = "";
        this.email = "";
        this.phone = "";
        this.cell = "";
        this.companyName = "";
        this.merchantNumber = "";
        this.merchantCountryOriginCode = "840";
        this.paymentGatewayID = "4";
        this.transactionCode = "4";
        this.merchantID = 0;
        this.merchantid = 0;
        this.profileID = 0;
        this.profileid = 0;
        this.orderNumber = "";
        this.source = "dm";
        this.approvalCode = "";
        this.sandbox = "n";
        this.target = "6";
        this.transactionID = "";
        this.retrievalReferenceNumber = "";
        this.deviceID = "";
        this.batchNumber = undefined;
        this.itemNumber = "001";
        this.revisionNumber = "0";
        this.debitItemNumber = "999";
        this.invoiceID = 0;
        this.invoiceNum = "";
        this.paymentID = 0;
        this.eci = "";
        this.aci = "";
        this.authCharIndicator = "";
        this.industryType = "6";
        this.paymentType = ""; // apple pay, google pay.
        this.paymentToken = {}; // apple pay token, google pay token.
        this.sandbox_batchnum = "";
        this.sandbox_itemnum = "";
        this.deviceModel = "";
        this.isOffline = false;
        this.isRecurring = false;
        this.isInstallment = false;
        this.terminalID = "PP001.";
        this.writeControlCharacter = "@";
        this.transactionType = "";
        this.terminalCapability = "3C20";
        this.terminalCardCaptureCapability = "9";
        this.terminalPinCapability = "1";
        this.terminalCategoryCode = undefined;
        this.posConditionCode = "00";
        this.citMitIndicator = "";
        this.mitIndicator = "";
        this.cardVerificationPresenceIndicator = "1";
        this.partialAuthIndicator = "2";
        this.giftCardIndicator = "";
        this.isPurchaseCard = false;
        this.cardNotPresent = false;
        this.receipts = false;
        this.displaySignature = false;
        this.srcIP = "";
        this.customerID = 0;
        this.customerReceipt = "";
        this.merchantReceipt = "";
        this.description = "";
        this.items = [];
        this.reasonCode = "02";
        this.retailIndustry = new RetailMoto(this);
        this.lodgingIndustry = new Lodging(this);
        this.restaurantIndustry = new Restaurant(this);
    }
}
exports.Transaction = Transaction;
class TransactionResponse {
    constructor(universalTimeStamp = 0) {
        this.DateTime = new Date();
        this.TransactionCode = "";
        this.ActionCode = 0;
        this.ResponseCode = 1; // default to declined
        this.DeviceId = "";
        this.BatchId = "";
        this.BatchNumber = "0";
        this.ItemNumber = 0;
        this.RevisionNumber = 0;
        this.ResponseText = "";
        this.AuthorizationNumber = "";
        this.OriginalAuthorizationNumber = "";
        this.avsResponseCode = "";
        this.DebitCardTypeNumber = 0;
        this.DebitNetworkName = "";
        this.Caption = "";
        this.cvvResponseCode = "";
        this.CVVResponseText = "";
        this.AuthCharIndicator = "";
        this.TransactionIdentifier = "";
        this.TransactionType = "";
        this.AID = "";
        this.AppName = "";
        this.EMVTerminalID = "";
        this.POSEntryMode = "";
        this.NFC = false;
        this.MarketSpecificIndicator = "";
        this.BalanceCaption = "";
        this.RemainingBalance = "";
        this.BalanceSign = "";
        this.ApprovedAmountCaption = "";
        this.ApprovedAmount = "";
        this.RequestedAmountCaption = "";
        this.RequestedAmount = "";
        this.AdditionalResponseIndicator = "";
        this.Token = "";
        this.InvoiceId = 0;
        this.InvoiceNum = "";
        this.PaymentId = 0;
        this.TaxRate = 0.0000;
        this.ReverseCashDiscountAmount = 0.0000;
        this.CustomerServiceFeeAmount = 0.0000;
        this.EMV = "";
        this.RoutingCode = "";
        this.SignatureCode = "";
        this.NetworkName = "";
        this.PAR_ID = "";
        this.CardTypeNumber = 0;
        this.EBTNetworkName = "";
        this.EBTResponseCode = "";
        this.EBTBalance = "";
        this.SignatureRequired = false;
        this.MerchantReceipt = "";
        this.CustomerReceipt = "";
        this.UnpredictableNumber = "";
        this.ErrorMessage = "";
        this.SystemsTraceNumber = 0;
        this.universalTimeStamp = universalTimeStamp;
        this.cygmaResponse = new CygmaResponse();
        this.dateTime = new Date();
        this.merchantNumber = "";
        this.transactionCode = "";
        this.actionCode = 0;
        this.responseCode = 1;
        this.validationCode = "";
        this.deviceID = "";
        this.batchID = "";
        this.batchNumber = "";
        this.itemNumber = 0;
        this.revisionNumber = 0;
        this.responseText = "";
        this.authorizationNumber = "";
        this.originalAuthorizationNumber = "";
        this.avsResponseText = "";
        this.debitCardTypeNumber = 0;
        this.debitNetworkName = "";
        this.caption = "";
        this.cvvResponseText = "";
        this.authCharIndicator = "";
        this.transactionIdentifier = "";
        this.retrievalReferenceNumber = "";
        this.transactionType = "";
        this.aid = "";
        this.appName = "";
        this.emvTerminalID = "";
        this.posEntryMode = "";
        this.nfc = false;
        this.marketSpecificIndicator = "";
        this.balanceCaption = "";
        this.remainingBalance = "";
        this.balanceSign = "";
        this.approvedAmountCaption = "";
        this.approvedAmount = "";
        this.requestedAmountCaption = "";
        this.requestedAmount = "";
        this.additionalResponseIndicator = "";
        this.token = "";
        this.invoiceID = 0;
        this.invoiceNum = "";
        this.paymentID = 0;
        this.taxRate = 0.0000;
        this.cashDiscountAmount = 0.0000;
        this.reverseCashDiscountAmount = 0.0000;
        this.customerServiceFeeAmount = 0.0000;
        this.emv = "";
        this.routingCode = "";
        this.signatureCode = "";
        this.networkName = "";
        this.parID = "";
        this.cardTypeNumber = 0;
        this.ebtNetworkName = "";
        this.ebtResponseCode = "";
        this.ebtBalance = "";
        this.signatureRequired = false;
        this.merchantReceipt = "";
        this.customerReceipt = "";
        this.unpredictableNumber = "";
        this.errorMessage = "";
        this.networkReferenceNumber = "";
        this.networkResponseCode = "";
        this.responseACI = "";
        this.marketSpecificDataResponse = "";
        this.productID = "";
        this.downGradeReasonCodeResponse = "";
        this.authOnlyID = 0;
    }
    get AVSResponse() {
        return this.avsResponseCode;
    }
    set AVSResponse(value) {
        this.avsResponseCode = value;
        switch (value) {
            case "A":
                this.avsResponseText = "Address Matches. ZIP Code does not Match";
                break;
            case "B":
                this.avsResponseText = "Street Address matches for international transaction. Postal code not verified due to incompatible formats";
                break;
            case "C":
                this.avsResponseText = "Street address and postal code not verified for international transactions due to incompatible formats";
                break;
            case "D":
                this.avsResponseText = "Street address and postal code match for international transaction";
                break;
            case "E":
                this.avsResponseText = "Error Response for Merchant Category Code – Visa Only";
                break;
            case "I":
                this.avsResponseText = "Address information is not verified on international transaction";
                break;
            case "M":
                this.avsResponseText = "Street address and postal code match for international transaction";
                break;
            case "N":
                this.avsResponseText = "Address and ZIP Code do not Match";
                break;
            case "Q":
                this.avsResponseText = "Bill to address did not pass edit checks/Card Association can't verify the authentication of an address";
                break;
            case "P":
                this.avsResponseText = "Postal code matches for international transaction.  Street address not verified due to incompatible formats";
                break;
            case "R":
                this.avsResponseText = "Retry. System Not Available";
                break;
            case "S":
                this.avsResponseText = "Service Not Supported by Issuer";
                break;
            case "U":
                this.avsResponseText = "Address Information is Not Available";
                break;
            case "W":
                this.avsResponseText = "9-Digit ZIP Code Matches. Address does not match- U.S. Only";
                break;
            case "X":
                this.avsResponseText = "Exact Match of Address and ZIP Code – U.S. Only";
                break;
            case "Y":
                this.avsResponseText = "Match of Address and 5-Digit ZIP Code";
                break;
            case "Z":
                this.avsResponseText = "5-Digit ZIP Code Matches, Address does not Match";
                break;
            case "G":
                this.avsResponseText = "Non AVS Participant Outside U.S.; Not Verified";
                break;
            case "5":
                this.avsResponseText = "Cardholder name incorrect, billing address and postal code match";
                break;
            case "6":
                this.avsResponseText = "Cardholder name incorrect, billing postal code matches";
                break;
            case "7":
                this.avsResponseText = "Cardholder name incorrect, billing address matches";
                break;
            case "8":
                this.avsResponseText = "Cardholder name, billing address, and postal code are all incorrect";
                break;
            default:
                this.avsResponseText = "";
                break;
        }
        this.AVSResponseText = this.avsResponseText;
    }
    get CVVResponse() {
        return this.cvvResponseCode;
    }
    set CVVResponse(value) {
        this.cvvResponseCode = value;
        switch (value) {
            case "0":
                this.cvvResponseText = "Card Verification Value not provided";
                break;
            case "1":
                this.cvvResponseText = "Value Present. Card Verification Value is required";
                break;
            case "2":
                this.cvvResponseText = "Value Illegible on Card";
                break;
            case "9":
                this.cvvResponseText = "Cardholder states no card verification value on card";
                break;
            case "I":
                this.cvvResponseText = "Card Verification Value code is invalid or empty";
                break;
            case "M":
                this.cvvResponseText = "Card Verification Value Matches";
                break;
            case "N":
                this.cvvResponseText = "Card Verification Value does not match";
                break;
            case "P":
                this.cvvResponseText = "Expiration date was not provided with the request or the card does not have a valid CVV2 code";
                break;
            case "S":
                this.cvvResponseText = "Card should have a card verification value. Merchant Indicated Card Verification Value is not present.";
                break;
            case "U":
                this.cvvResponseText = "Issuer not certified for feature";
                break;
            default:
                this.cvvResponseText = "";
                break;
        }
        this.CVVResponseText = this.cvvResponseText;
    }
}
exports.TransactionResponse = TransactionResponse;
class GiftCardTransaction {
    constructor() {
        this.transactionCode = "";
        this.cardNo = "";
        this.fromCardNo = "";
        this.track2 = "";
        this.industryType = "";
        this.entryMode = "";
        this.amount = 0.00;
        this.transactionID = "";
        this.transactionCode = "";
        this.cardNo = "";
        this.fromCardNo = "";
        this.track2 = "";
        this.industryType = "1";
        this.entryMode = "";
        this.amount = 0.00;
        this.transactionID = "";
    }
}
exports.GiftCardTransaction = GiftCardTransaction;
class GiftCardTransactionResponse {
    constructor() {
        this.PubStrGC_ResultCode = "";
        this.PubStrGC_TransactionID = "";
        this.PubStrGC_RuleID = "";
        this.PubStrGC_TransactionAmount = "";
        this.PubStrGC_CardBalance = "";
        this.PubStrGC_ReasonCode = "";
        this.PubStrGC_ResultText = "";
        this.PubStrGC_VoidTransactionID = "";
        this.EntryMode = "";
        this.PubIntPaymentID = "";
        this.PubIntInvoiceID = "";
        this.responseText = "";
    }
}
exports.GiftCardTransactionResponse = GiftCardTransactionResponse;
class Environment {
}
exports.Environment = Environment;
Environment.Development = "dev-api.procharge.com";
Environment.Production = "api.procharge.com";
class Client {
    constructor(options) {
        this.options = options;
    }
    /**
     * Use this method to obtain a jwt access token. Use same credentials used to log into Procharge Gateway.
     */
    getAccessToken(creds) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!creds) {
                        let pr = new TransactionResponse();
                        pr.responseText = "invalid request";
                        return reject(pr);
                    }
                    if (!creds.email) {
                        let pr = new TransactionResponse();
                        pr.responseText = "email is required";
                        return reject(pr);
                    }
                    if (!creds.password) {
                        let pr = new TransactionResponse();
                        pr.responseText = "password is required";
                        return reject(pr);
                    }
                    if (!creds.application) {
                        let pr = new TransactionResponse();
                        pr.responseText = "application name is required";
                        return reject(pr);
                    }
                    let authRequest = {
                        "application": creds.application,
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
                            "Content-Length": JSON.stringify(authRequest).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new TransactionResponse();
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
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new TransactionResponse();
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
                                let pr = new TransactionResponse();
                                pr.transactionCode = "1";
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
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
                    let pr = new TransactionResponse();
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * Use this method to obtain a new jwt access token by using the refresh_token passed in the original log in response
     */
    getRefreshToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!refreshToken) {
                        let pr = new TransactionResponse();
                        pr.responseText = "refreshToken is required";
                        return reject(pr);
                    }
                    let options = {
                        method: "GET",
                        protocol: "https:",
                        host: this.options.env,
                        port: 443,
                        path: `/api/authentication/refresh/${refreshToken}`,
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8"
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new TransactionResponse();
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
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new TransactionResponse();
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
                                let pr = new TransactionResponse();
                                pr.transactionCode = "1";
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
                        return reject(pr);
                    }).on("socket", (socket) => {
                        socket.on("end", () => {
                        });
                    });
                    request.setTimeout(15000);
                    request.end();
                }
                catch (error) {
                    let pr = new TransactionResponse();
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * This method will submit a one time sale and debit a customers account
     */
    processSale(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        let pr = new TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        let pr = new TransactionResponse();
                        pr.responseText = "merchantNumber is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new TransactionResponse();
                        pr.responseText = "applicationKey is required";
                        return reject(pr);
                    }
                    if (!this.options.authToken) {
                        let pr = new TransactionResponse();
                        pr.responseText = "authToken is required";
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
                                let pr = new TransactionResponse();
                                pr.responseText = "missing or invalid cardnumber";
                                return reject(pr);
                            }
                        }
                        if (!transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid ccExpYear";
                            return reject(pr);
                        }
                        if (!transaction.ccExpMonth) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid ccExpMonth";
                            return reject(pr);
                        }
                        if (!transaction.amount || isNaN(parseFloat(transaction.amount))) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid amount";
                            return reject(pr);
                        }
                        if (parseFloat(transaction.amount) <= 0) {
                            let pr = new TransactionResponse();
                            pr.responseText = "amount must be greater than zero dollars";
                            return reject(pr);
                        }
                        if (transaction.paymentGatewayID === "4") {
                            if (parseFloat(transaction.amount) > 999999.99) {
                                let pr = new TransactionResponse();
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
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new TransactionResponse();
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
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new TransactionResponse();
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
                                let pr = new TransactionResponse();
                                pr.transactionCode = "1";
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new TransactionResponse();
                        pr.transactionCode = "1";
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new TransactionResponse();
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
                    let pr = new TransactionResponse();
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
                        let pr = new TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        let pr = new TransactionResponse();
                        pr.responseText = "merchantNumber is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new TransactionResponse();
                        pr.responseText = "applicationKey is required";
                        return reject(pr);
                    }
                    if (!transaction.approvalCode) {
                        let pr = new TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "approvalCode is required";
                        return reject(pr);
                    }
                    if (!transaction.transactionID) {
                        let pr = new TransactionResponse();
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
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new TransactionResponse();
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
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new TransactionResponse();
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
                                let pr = new TransactionResponse();
                                pr.responseText = error.message;
                                pr.transactionCode = "5";
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new TransactionResponse();
                        pr.responseText = error.message;
                        pr.transactionCode = "5";
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new TransactionResponse();
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
                    let pr = new TransactionResponse();
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
    authorizeOnly(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        let pr = new TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        let pr = new TransactionResponse();
                        pr.responseText = "merchantNumber is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new TransactionResponse();
                        pr.responseText = "applicationKey is required";
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
                                let pr = new TransactionResponse();
                                pr.responseText = "missing or invalid cardnumber";
                                return reject(pr);
                            }
                        }
                        if (!transaction.trackData && !transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid ccExpYear";
                            return reject(pr);
                        }
                        if (!transaction.trackData && !transaction.ccExpMonth) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid ccExpMonth";
                            return reject(pr);
                        }
                        if (!transaction.amount || isNaN(parseFloat(transaction.amount))) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid amount";
                            return reject(pr);
                        }
                        if (parseFloat(transaction.amount) <= 0) {
                            let pr = new TransactionResponse();
                            pr.responseText = "amount must be greater than zero dollars";
                            return reject(pr);
                        }
                        if (transaction.paymentGatewayID === "4") {
                            if (parseFloat(transaction.amount) > 999999.99) {
                                let pr = new TransactionResponse();
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
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new TransactionResponse();
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
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new TransactionResponse();
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
                                let pr = new TransactionResponse();
                                pr.transactionCode = "4";
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new TransactionResponse();
                        pr.transactionCode = "4";
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new TransactionResponse();
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
                    let pr = new TransactionResponse();
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
                        let pr = new TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        let pr = new TransactionResponse();
                        pr.responseText = "merchantNumber is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new TransactionResponse();
                        pr.responseText = "applicationKey is required";
                        return reject(pr);
                    }
                    if (!transaction.approvalCode) {
                        let pr = new TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "approvalCode is required";
                        return reject(pr);
                    }
                    if (!transaction.transactionID) {
                        let pr = new TransactionResponse();
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
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new TransactionResponse();
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
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new TransactionResponse();
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
                                let pr = new TransactionResponse();
                                pr.responseText = error.message;
                                pr.transactionCode = "8";
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new TransactionResponse();
                        pr.responseText = error.message;
                        pr.transactionCode = "8";
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new TransactionResponse();
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
                    let pr = new TransactionResponse();
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
    completeTicket(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        let pr = new TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        let pr = new TransactionResponse();
                        pr.responseText = "merchantNumber is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new TransactionResponse();
                        pr.responseText = "applicationKey is required";
                        return reject(pr);
                    }
                    if (!transaction.approvalCode) {
                        let pr = new TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "approvalCode is required";
                        return reject(pr);
                    }
                    if (!transaction.transactionID) {
                        let pr = new TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "transactionID is required";
                        return reject(pr);
                    }
                    transaction.aci = "N";
                    if (!transaction.emv) {
                        if (!transaction.trackData && !transaction.token) {
                            if (!transaction.cardNumber || transaction.cardNumber.length < 14) {
                                let pr = new TransactionResponse();
                                pr.responseText = "missing or invalid cardnumber";
                                return reject(pr);
                            }
                        }
                        if (!transaction.trackData && !transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid ccExpYear";
                            return reject(pr);
                        }
                        if (!transaction.trackData && !transaction.ccExpMonth) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid ccExpMonth";
                            return reject(pr);
                        }
                        if (!transaction.amount || isNaN(parseFloat(transaction.amount))) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid amount";
                            return reject(pr);
                        }
                        if (parseFloat(transaction.amount) <= 0) {
                            let pr = new TransactionResponse();
                            pr.responseText = "amount must be greater than zero dollars";
                            return reject(pr);
                        }
                        if (transaction.paymentGatewayID === "4") {
                            if (parseFloat(transaction.amount) > 999999.99) {
                                let pr = new TransactionResponse();
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
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new TransactionResponse();
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
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new TransactionResponse();
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
                                let pr = new TransactionResponse();
                                pr.responseText = error.message;
                                pr.transactionCode = "3";
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new TransactionResponse();
                        pr.responseText = error.message;
                        pr.transactionCode = "3";
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new TransactionResponse();
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
                    let pr = new TransactionResponse();
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
                        let pr = new TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        let pr = new TransactionResponse();
                        pr.responseText = "merchantNumber is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new TransactionResponse();
                        pr.responseText = "applicationKey is required";
                        return reject(pr);
                    }
                    if (!transaction.approvalCode) {
                        let pr = new TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "approvalCode is required";
                        return reject(pr);
                    }
                    if (!transaction.transactionID) {
                        let pr = new TransactionResponse();
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
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new TransactionResponse();
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
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new TransactionResponse();
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
                                let pr = new TransactionResponse();
                                pr.responseText = error.message;
                                pr.transactionCode = "7";
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new TransactionResponse();
                        pr.responseText = error.message;
                        pr.transactionCode = "7";
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new TransactionResponse();
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
                    let pr = new TransactionResponse();
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
    processRefund(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        let pr = new TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        let pr = new TransactionResponse();
                        pr.responseText = "merchantNumber is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new TransactionResponse();
                        pr.responseText = "applicationKey is required";
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
                                let pr = new TransactionResponse();
                                pr.responseText = "missing or invalid cardnumber";
                                return reject(pr);
                            }
                        }
                        if (!transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid ccExpYear";
                            return reject(pr);
                        }
                        if (!transaction.ccExpMonth) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid ccExpMonth";
                            return reject(pr);
                        }
                        if (!transaction.amount || isNaN(parseFloat(transaction.amount))) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid amount";
                            return reject(pr);
                        }
                        if (parseFloat(transaction.amount) <= 0) {
                            let pr = new TransactionResponse();
                            pr.responseText = "amount must be greater than zero dollars";
                            return reject(pr);
                        }
                        if (parseFloat(transaction.amount) > 999999.99) {
                            let pr = new TransactionResponse();
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
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new TransactionResponse();
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
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new TransactionResponse();
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
                                let pr = new TransactionResponse();
                                pr.transactionCode = "2";
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new TransactionResponse();
                        pr.transactionCode = "2";
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new TransactionResponse();
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
                    let pr = new TransactionResponse();
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
                        let pr = new TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        let pr = new TransactionResponse();
                        pr.responseText = "merchantNumber is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new TransactionResponse();
                        pr.responseText = "applicationKey is required";
                        return reject(pr);
                    }
                    if (!transaction.approvalCode) {
                        let pr = new TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "approvalCode is required";
                        return reject(pr);
                    }
                    if (!transaction.transactionID) {
                        let pr = new TransactionResponse();
                        pr.responseCode = 1;
                        pr.responseText = "transactionID is required";
                        return reject(pr);
                    }
                    if (transaction.cardNumber) {
                        if (!transaction.ccExpMonth || !transaction.ccExpYear) {
                            let pr = new TransactionResponse();
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
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new TransactionResponse();
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
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new TransactionResponse();
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
                                let pr = new TransactionResponse();
                                pr.responseText = error.message;
                                pr.transactionCode = "6";
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new TransactionResponse();
                        pr.responseText = error.message;
                        pr.transactionCode = "6";
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new TransactionResponse();
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
                    let pr = new TransactionResponse();
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
                        let pr = new TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        let pr = new TransactionResponse();
                        pr.responseText = "merchantNumber is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new TransactionResponse();
                        pr.responseText = "applicationKey is required";
                        return reject(pr);
                    }
                    transaction.universalTimeStamp = new Date().getTime();
                    transaction.target || (transaction.target = "6");
                    transaction.partialAuthIndicator || (transaction.partialAuthIndicator = "2");
                    transaction.transactionCode = "V";
                    transaction.cardTypeIndicator = "P";
                    if (!transaction.isEcommerce) {
                        if (!transaction.isRetail) {
                            transaction.isMoto = true;
                        }
                    }
                    transaction.aci = "N";
                    if (!transaction.emv) {
                        if (!transaction.trackData && !transaction.token) {
                            if (!transaction.cardNumber || transaction.cardNumber.length < 14) {
                                let pr = new TransactionResponse();
                                pr.responseText = "missing or invalid cardnumber";
                                return reject(pr);
                            }
                        }
                        if (!transaction.trackData && !transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid ccExpYear";
                            return reject(pr);
                        }
                        if (!transaction.trackData && !transaction.ccExpMonth) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid ccExpMonth";
                            return reject(pr);
                        }
                        if (transaction.paymentGatewayID === "4") {
                            transaction.amount = "0.00";
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
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new TransactionResponse();
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
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new TransactionResponse();
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
                                let pr = new TransactionResponse();
                                pr.transactionCode = "4";
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new TransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new TransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
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
                    let pr = new TransactionResponse();
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
                        let pr = new TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.merchantNumber) {
                        let pr = new TransactionResponse();
                        pr.responseText = "merchantNumber is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new TransactionResponse();
                        pr.responseText = "applicationKey is required";
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
                                let pr = new TransactionResponse();
                                pr.responseText = "missing or invalid cardnumber";
                                return reject(pr);
                            }
                        }
                        if (!transaction.trackData && !transaction.ccExpYear || transaction.ccExpYear.length < 2) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid ccExpYear";
                            return reject(pr);
                        }
                        if (!transaction.trackData && !transaction.ccExpMonth) {
                            let pr = new TransactionResponse();
                            pr.responseText = "missing or invalid ccExpMonth";
                            return reject(pr);
                        }
                        if (transaction.paymentGatewayID === "4") {
                            transaction.amount = "0.00";
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
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new TransactionResponse();
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
                                    result = new TransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new TransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new TransactionResponse();
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
                                let pr = new TransactionResponse();
                                pr.transactionCode = "4";
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new TransactionResponse();
                        pr.transactionCode = "4";
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new TransactionResponse();
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
                    let pr = new TransactionResponse();
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * Use this method to activate an gift card.
     */
    activateGiftCard(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.industryType) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "industryType is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "applicationKey is required";
                        return reject(pr);
                    }
                    if (!transaction.track2 && !transaction.cardNo) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "track2 or cardNo is required";
                        return reject(pr);
                    }
                    transaction.transactionCode = "005";
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: this.options.env,
                        port: 443,
                        path: "/api/giftcard",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.options.applicationKey,
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new GiftCardTransactionResponse();
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
                                    result = new GiftCardTransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new GiftCardTransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new GiftCardTransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                resolve(result);
                            }
                            catch (error) {
                                let pr = new GiftCardTransactionResponse();
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
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
                    let pr = new GiftCardTransactionResponse();
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * Use this method to redeem an eGift card issued by Electronic Payments Inc.
     */
    redeemGiftCard(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.industryType) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "industryType is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "applicationKey is required";
                        return reject(pr);
                    }
                    if (!transaction.track2 && !transaction.cardNo) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "track2 or cardNo is required";
                        return reject(pr);
                    }
                    if (!transaction.amount) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "amount is required";
                        return reject(pr);
                    }
                    if (transaction.amount <= 0) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "amount must be greater than zero dollars";
                        return reject(pr);
                    }
                    transaction.transactionCode = "002";
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: this.options.env,
                        port: 443,
                        path: "/api/giftcard",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.options.applicationKey,
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new GiftCardTransactionResponse();
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
                                    result = new GiftCardTransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new GiftCardTransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new GiftCardTransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                resolve(result);
                            }
                            catch (error) {
                                let pr = new GiftCardTransactionResponse();
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
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
                    let pr = new GiftCardTransactionResponse();
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * Use this method to fetch eGift balance.
     */
    giftCardBalanceInquiry(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.industryType) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "industryType is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "applicationKey is required";
                        return reject(pr);
                    }
                    if (!transaction.track2 && !transaction.cardNo) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "track2 or cardNo is required";
                        return reject(pr);
                    }
                    if (transaction.track2 && transaction.track2.indexOf("=") <= 0) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "Invalid track2 format";
                        return reject(pr);
                    }
                    transaction.transactionCode = "001";
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: this.options.env,
                        port: 443,
                        path: "/api/giftcard",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.options.applicationKey,
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new GiftCardTransactionResponse();
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
                                    result = new GiftCardTransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new GiftCardTransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new GiftCardTransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                resolve(result);
                            }
                            catch (error) {
                                let pr = new GiftCardTransactionResponse();
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
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
                    let pr = new GiftCardTransactionResponse();
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * Use this method to transfer gift card balance from one card to another.
     */
    transferGiftCardBalance(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.industryType) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "industryType is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "applicationKey is required";
                        return reject(pr);
                    }
                    if (!transaction.track2 && !transaction.cardNo) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "track2 or cardNo is required";
                        return reject(pr);
                    }
                    if (!transaction.fromCardNo) {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = "fromCardNo is required";
                        return reject(pr);
                    }
                    transaction.transactionCode = "014";
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: this.options.env,
                        port: 443,
                        path: "/api/giftcard",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.options.applicationKey,
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new GiftCardTransactionResponse();
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
                                    result = new GiftCardTransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new GiftCardTransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new GiftCardTransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                resolve(result);
                            }
                            catch (error) {
                                let pr = new GiftCardTransactionResponse();
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
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
                    let pr = new GiftCardTransactionResponse();
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
    /**
     * Use this method to void a gift card transaction.
     */
    voidGiftCardSale(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!transaction) {
                        let pr = new TransactionResponse();
                        pr.responseText = "transaction is required";
                        return reject(pr);
                    }
                    if (!transaction.industryType) {
                        let pr = new TransactionResponse();
                        pr.responseText = "industryType is required";
                        return reject(pr);
                    }
                    if (!this.options.applicationKey) {
                        let pr = new TransactionResponse();
                        pr.responseText = "applicationKey is required";
                        return reject(pr);
                    }
                    if (!transaction.track2 && !transaction.cardNo) {
                        let pr = new TransactionResponse();
                        pr.responseText = "track2 or cardNo is required";
                        return reject(pr);
                    }
                    if (!transaction.transactionID) {
                        let pr = new TransactionResponse();
                        pr.responseText = "transactionID is required";
                        return reject(pr);
                    }
                    transaction.transactionCode = "004";
                    let options = {
                        method: "POST",
                        protocol: "https:",
                        host: this.options.env,
                        port: 443,
                        path: "/api/giftcard",
                        allowHTTP1: true,
                        requestCert: false,
                        strictSSL: false,
                        rejectUnauthorized: false,
                        headers: {
                            "Content-Type": "application/json;charset=UTF-8",
                            "x-api-key": this.options.applicationKey,
                            "Authorization": this.options.authToken,
                            "Content-Length": JSON.stringify(transaction).length
                        }
                    };
                    let request = https.request(options, function (res) {
                        let str = "";
                        res.on("error", (error) => {
                            let pr = new TransactionResponse();
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
                                    result = new GiftCardTransactionResponse();
                                    result.responseText = str;
                                }
                                else if (str.startsWith("<!DOCTYPE")) {
                                    if (str.includes("<title>")) {
                                        let index = str.indexOf("<title>");
                                        let newstr = str.substring(index);
                                        newstr = newstr.substring(0, newstr.indexOf("</title>"));
                                        newstr = newstr.replace("<title>", "").replace("</title>", "");
                                        result = new GiftCardTransactionResponse();
                                        result.responseText = newstr;
                                    }
                                    else {
                                        result = new GiftCardTransactionResponse();
                                        result.responseText = str;
                                    }
                                }
                                else {
                                    result = JSON.parse(str);
                                }
                                resolve(result);
                            }
                            catch (error) {
                                let pr = new GiftCardTransactionResponse();
                                pr.responseText = error.message;
                                return reject(pr);
                            }
                        }));
                    }).on("error", (error) => {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = error.message;
                        return reject(pr);
                    }).on("timeout", (error) => {
                        let pr = new GiftCardTransactionResponse();
                        pr.responseText = error.message ? error.message : JSON.stringify(error);
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
                    let pr = new GiftCardTransactionResponse();
                    pr.responseText = error.message;
                    return reject(pr);
                }
            }));
        });
    }
}
exports.Client = Client;
