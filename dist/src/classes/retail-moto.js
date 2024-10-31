"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetailMoto = void 0;
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
