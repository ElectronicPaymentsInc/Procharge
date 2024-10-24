import { CygmaResponse } from "./cygma-response";

export class TransactionResponse {
    /**
     * @deprecated Case changed to camel case. DateTime is deprecated. Use dateTime instead.
     */
    public DateTime: Date;

    /**
     * @deprecated Case changed to camel case. MerchantNumber is deprecated. Use merchantNumber instead.
     */
    public MerchantNumber: string;

    /**
     * @deprecated Case changed to camel case. TransactionCode is deprecated. Use transactionCode instead.
     */    
    public TransactionCode: string;

    /**
     * @deprecated Case changed to camel case. ActionCode is deprecated. Use actionCode instead.
     */ 
    public ActionCode: number;

    /**
     * @deprecated Case changed to camel case. ResponseCode is deprecated. Use responseCode instead.
     */     
    public ResponseCode: number;

    /**
     * @deprecated Case changed to camel case. ValidationCode is deprecated. Use validationCode instead.
     */     
    public ValidationCode: string;

    /**
     * @deprecated Case changed to camel case. DeviceId is deprecated. Use deviceID instead.
     */     
    public DeviceId: string;

    /**
     * @deprecated Case changed to camel case. BatchId is deprecated. Use batchID instead.
     */     
    public BatchId: number | string | null | undefined;

    /**
     * @deprecated Case changed to camel case. BatchNumber is deprecated. Use batchNumber instead.
     */    
    public BatchNumber: string;

    /**
     * @deprecated Case changed to camel case. ItemNumber is deprecated. Use itemNumber instead.
     */     
    public ItemNumber: number | string;

    /**
     * @deprecated Case changed to camel case. RevisionNumber is deprecated. Use revisionNumber instead.
     */    
    public RevisionNumber: number;

    /**
     * @deprecated Case changed to camel case. ResponseText is deprecated. Use responseText instead.
     */     
    public ResponseText: string;

    /**
     * @deprecated Case changed to camel case. AuthorizationNumber is deprecated. Use authorizationNumber instead.
     */     
    public AuthorizationNumber: string;

    /**
     * @deprecated Case changed to camel case. OriginalAuthorizationNumber is deprecated. Use originalAuthorizationNumber instead.
     */     
    public OriginalAuthorizationNumber: string;   
    
    /**
     * @deprecated Case changed to camel case. AVSResponseText is deprecated. Use avsResponseText instead.
     */     
    public AVSResponseText: string;

    /**
     * @deprecated Case changed to camel case. DebitCardTypeNumber is deprecated. Use debitCardTypeNumber instead.
     */ 
    public DebitCardTypeNumber: number;

    /**
     * @deprecated Case changed to camel case. DebitNetworkName is deprecated. Use debitNetworkName instead.
     */    
    public DebitNetworkName: string;

    /**
     * @deprecated Case changed to camel case. Caption is deprecated. Use caption instead.
     */    
    public Caption: string;

    /**
     * @deprecated Case changed to camel case. CVVResponseText is deprecated. Use cvvResponseText instead.
     */    
    public CVVResponseText: string;

    /**
     * @deprecated Case changed to camel case. AuthCharIndicator is deprecated. Use authCharIndicator instead.
     */     
    public AuthCharIndicator: string;

    /**
     * @deprecated Case changed to camel case. TransactionIdentifier is deprecated. Use transactionIdentifier instead.
     */    
    public TransactionIdentifier: string;

    /**
     * @deprecated Case changed to camel case. RetrievalReferenceNumber is deprecated. Use retrievalReferenceNumber instead.
     */    
    public RetrievalReferenceNumber: string;

    /**
     * @deprecated Case changed to camel case. TransactionType is deprecated. Use transactionType instead.
     */    
    public TransactionType: string;

    /**
     * @deprecated Case changed to camel case. AID is deprecated. Use aid instead.
     */    
    public AID: string;

    /**
     * @deprecated Case changed to camel case. AppName is deprecated. Use appName instead.
     */    
    public AppName: string;

    /**
     * @deprecated Case changed to camel case. EMVTerminalID is deprecated. Use emvTerminalID instead.
     */    
    public EMVTerminalID: string;

    /**
     * @deprecated Case changed to camel case. POSEntryMode is deprecated. Use posEntryMode instead.
     */     
    public POSEntryMode: string;

    /**
     * @deprecated Case changed to camel case. NFC is deprecated. Use nfc instead.
     */    
    public NFC: boolean;

    /**
     * @deprecated Case changed to camel case. MarketSpecificIndicator is deprecated. Use marketSpecificIndicator instead.
     */     
    public MarketSpecificIndicator: string;

    /**
     * @deprecated Case changed to camel case. BalanceCaption is deprecated. Use balanceCaption instead.
     */     
    public BalanceCaption: string;

    /**
     * @deprecated Case changed to camel case. RemainingBalance is deprecated. Use remainingBalance instead.
     */    
    public RemainingBalance: string;

    /**
     * @deprecated Case changed to camel case. BalanceSign is deprecated. Use balanceSign instead.
     */    
    public BalanceSign: string;

    /**
     * @deprecated Case changed to camel case. ApprovedAmountCaption is deprecated. Use approvedAmountCaption instead.
     */    
    public ApprovedAmountCaption: string;

    /**
     * @deprecated Case changed to camel case. ApprovedAmount is deprecated. Use approvedAmount instead.
     */ 
    public ApprovedAmount: string;

    /**
     * @deprecated Case changed to camel case. RequestedAmountCaption is deprecated. Use requestedAmountCaption instead.
     */    
    public RequestedAmountCaption: string;

    /**
     * @deprecated Case changed to camel case. RequestedAmount is deprecated. Use requestedAmount instead.
     */    
    public RequestedAmount: string;

    /**
     * @deprecated Case changed to camel case. AdditionalResponseIndicator is deprecated. Use additionalResponseIndicator instead.
     */     
    public AdditionalResponseIndicator: string;

    /**
     * @deprecated Case changed to camel case. Token is deprecated. Use token instead.
     */
    public Token: string;

    /**
     * @deprecated Case changed to camel case. InvoiceId is deprecated. Use invoiceID instead.
     */    
    public InvoiceId: number;

    /**
     * @deprecated Case changed to camel case. InvoiceNum is deprecated. Use invoiceNum instead.
     */    
    public InvoiceNum: string;

    /**
     * @deprecated Case changed to camel case. PaymentId is deprecated. Use paymentID instead.
     */ 
    public PaymentId: number;

    /**
     * @deprecated Case changed to camel case. TaxRate is deprecated. Use taxRate instead.
     */ 
    public TaxRate: number;

    /**
     * @deprecated Case changed to camel case. CashDiscountAmount is deprecated. Use cashDiscountAmount instead.
     */    
    public CashDiscountAmount: number;

    /**
     * @deprecated Case changed to camel case. ReverseCashDiscountAmount is deprecated. Use reverseCashDiscountAmount instead.
     */     
    public ReverseCashDiscountAmount: number;

    /**
     * @deprecated Case changed to camel case. CustomerServiceFeeAmount is deprecated. Use customerServiceFeeAmount instead.
     */
    public CustomerServiceFeeAmount: number;

    /**
     * @deprecated Case changed to camel case. EMV is deprecated. Use emv instead.
     */    
    public EMV: string;

    /**
     * @deprecated Case changed to camel case. RoutingCode is deprecated. Use routingCode instead.
     */    
    public RoutingCode: string;

    /**
     * @deprecated Case changed to camel case. SignatureCode is deprecated. Use signatureCode instead.
     */     
    public SignatureCode: string;

    /**
     * @deprecated Case changed to camel case. NetworkName is deprecated. Use networkName instead.
     */    
    public NetworkName: string;

    /**
     * @deprecated Case changed to camel case. PAR_ID is deprecated. Use parID instead.
     */     
    public PAR_ID: string;

    /**
     * @deprecated Case changed to camel case. CardTypeNumber is deprecated. Use cardTypeNumber instead.
     */
    public CardTypeNumber: number;

    /**
     * @deprecated Case changed to camel case. EBTNetworkName is deprecated. Use ebtNetworkName instead.
     */    
    public EBTNetworkName: string;

    /**
     * @deprecated Case changed to camel case. EBTResponseCode is deprecated. Use ebtResponseCode instead.
     */
    public EBTResponseCode: string;

    /**
     * @deprecated Case changed to camel case. EBTBalance is deprecated. Use ebtBalance instead.
     */    
    public EBTBalance: string;

    /**
     * @deprecated Case changed to camel case. SignatureRequired is deprecated. Use signatureRequired instead.
     */ 
    public SignatureRequired: boolean;

    /**
     * @deprecated Case changed to camel case. MerchantReceipt is deprecated. Use merchantReceipt instead.
     */
    public MerchantReceipt: string;

    /**
     * @deprecated Case changed to camel case. CustomerReceipt is deprecated. Use customerReceipt instead.
     */    
    public CustomerReceipt: string;

    /**
     * @deprecated Case changed to camel case. UnpredictableNumber is deprecated. Use unpredictableNumber instead.
     */    
    public UnpredictableNumber: string;
    
    /**
     * @deprecated Case changed to camel case. ErrorMessage is deprecated. Use errorMessage instead.
     */    
    public ErrorMessage: string;

    /**
     * @deprecated Case changed to camel case. ProcessingCode is deprecated. Use processingCode instead.
     */
    public ProcessingCode: number;

    /**
     * @deprecated Case changed to camel case. SystemsTraceNumber is deprecated. Use systemsTraceNumber instead.
     */
    public SystemsTraceNumber: number;

    /**
     * @deprecated Case changed to camel case. NetworkReferenceNumber is deprecated. Use networkReferenceNumber instead.
     */    
    public NetworkReferenceNumber: string;

    /**
     * @deprecated Case changed to camel case. NetworkResponseCode is deprecated. Use networkResponseCode instead.
     */ 
    public NetworkResponseCode: string;

    /**
     * @deprecated Case changed to camel case. ResponseACI is deprecated. Use responseACI instead.
     */    
    public ResponseACI: string;

    /**
     * @deprecated Case changed to camel case. MarketSpecificDataResponse is deprecated. Use marketSpecificDataResponse instead.
     */     
    public MarketSpecificDataResponse: string;

    /**
     * @deprecated Case changed to camel case. ProductId is deprecated. Use productID instead.
     */
    public ProductId: string;

    /**
     * @deprecated Case changed to camel case. DownGradeReasonCodeResponse is deprecated. Use downGradeReasonCodeResponse instead.
     */
    public DownGradeReasonCodeResponse: string;   
    
    public dateTime: Date;
    public merchantNumber: string;
    public transactionCode: string;
    public actionCode: number;
    public responseCode: number;
    public validationCode: string;
    public deviceID: string;
    public batchID: number | string | null | undefined;
    public batchNumber: string;
    public itemNumber: number | string;
    public revisionNumber: number;
    public responseText: string;
    public authorizationNumber: string;
    public originalAuthorizationNumber: string;
    public avsResponseText: string;
    public avsResponseCode: string;
    public debitCardTypeNumber: number;
    public debitNetworkName: string;
    public caption: string;
    public cvvResponseCode: string;
    public cvvResponseText: string;
    public authCharIndicator: string;
    public transactionIdentifier: string;
    public retrievalReferenceNumber: string;
    public transactionType: string;
    public aid: string;
    public appName: string;
    public emvTerminalID: string;
    public posEntryMode: string;
    public nfc: boolean;
    public marketSpecificIndicator: string;
    public balanceCaption: string;
    public remainingBalance: string;
    public balanceSign: string;
    public approvedAmountCaption: string;
    public approvedAmount: string;
    public requestedAmountCaption: string;
    public requestedAmount: string;
    public additionalResponseIndicator: string;
    public token: string;
    public invoiceID: number;
    public invoiceNum: string;
    public paymentID: number;
    public taxRate: number;
    public cashDiscountAmount: number;
    public reverseCashDiscountAmount: number;
    public customerServiceFeeAmount: number;
    public emv: string;
    public routingCode: string;
    public signatureCode: string;
    public networkName: string;
    public parID: string;
    public cardTypeNumber: number;
    public ebtNetworkName: string;
    public ebtResponseCode: string;
    public ebtBalance: string;
    public signatureRequired: boolean;
    public merchantReceipt: string;
    public customerReceipt: string;
    public unpredictableNumber: string;
    public errorMessage: string;
    public processingCode: number;
    public systemsTraceNumber: number;
    public networkReferenceNumber: string;
    public networkResponseCode: string;
    public responseACI: string;
    public marketSpecificDataResponse: string;
    public productID: string;
    public downGradeReasonCodeResponse: string; 
    public authOnlyID: number | string | null | undefined;
    public universalTimeStamp: number; 
    public cygmaResponse: any;

    constructor(universalTimeStamp: number = 0) {
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

    public get AVSResponse(): string {
        return this.avsResponseCode;
    }

    public set AVSResponse(value: string) {
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

    public get CVVResponse(): string {
        return this.cvvResponseCode;
    }

    public set CVVResponse(value: string) {
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