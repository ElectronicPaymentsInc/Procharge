"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lodging = void 0;
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
