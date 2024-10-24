"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionResponse = void 0;
const cygma_response_1 = require("./cygma-response");
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
        this.cygmaResponse = new cygma_response_1.CygmaResponse();
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
