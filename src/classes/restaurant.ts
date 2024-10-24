import { Transaction } from "./transaction";

export class Restaurant {
    public foodAmount: string | null | undefined;
    public beverageMiscAmount: string | null | undefined;
    public taxAmount: string | null | undefined;
    public tipAmount: string | null | undefined;
    public transactionIdentifier: string | null | undefined;
    public serverId: string | null | undefined;
    public pinBlock: string | null | undefined;
    public cardTypeIndicator: string | null | undefined;
    public cashBackAmount: string | null | undefined;
    public surcharge: string | null | undefined;
    public ebtVoucher: string | null | undefined;
    public authorizationCode: string | null | undefined;
    public smidID: string | null | undefined;
    public partialAuthIndicator: string | null | undefined;
    public fdrAssignedTPP: string | null | undefined;
    public visaAUAR: string | null | undefined;
    public mcTraceId: string | null | undefined;
    public mcFraudVoidFlag: string | null | undefined;
    public mcFinalAuthIndicator: string | null | undefined;
    public giftCardIndicator: string | null | undefined;
    public transitAccessTermCardActTerm: string | null | undefined;
    public mcWalletIdentifier: string | null | undefined;
    public posLaneIdStoreNumber: string | null | undefined;
    public merchantInitiatedTransactionIndicator: string | null | undefined;
    public digitalWalletIndicator: string | null | undefined;
    public digitalWalletProgramType: string | null | undefined;
    public visaSpecialConditionIndicator: string | null | undefined;
    public deferredAuthIndicator: string | null | undefined;
    public mitAdditionalData: string | null | undefined;
    public citMITIndicator: string | null | undefined;
    public avsZipCode: string | null | undefined;
    public posDataCodes: string | null | undefined;

    public constructor(transaction?: Transaction) {

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
                } else {
                    this.giftCardIndicator = "0";
                }
            } else {
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

        } else {
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
            } else {
                this.giftCardIndicator = transaction.giftCardIndicator || "";
            }

            this.merchantInitiatedTransactionIndicator = transaction.mitIndicator || "";
        }
    }
}