//import { Transaction } from "./src/classes/transaction";
// import { TransactionResponse } from "./src/classes/transaction-response";
import * as https from "https";

export class ResponseElements {
    public AlternteResponseText: string;
    public AuthorizedAmount: number;
    public AVSResponseCode: string;
    public AVSNetworkResultCode: string;    
    public BatchNumber: string;
    public CardType: string;
    public HardwareVendorIdentifier: string;
    public HostResponse: string;
    public InvoiceERCReferenceNumber: string; 
    public MarketSpecificDataRequest: string;   
    public MarketSpecificDataResponse: string; 
    public NetworkReferenceNumber: string;
    public NetworkResponseCode: string; 
    public OriginalAmount: string;
    public OriginalMessageType: string;
    public OriginalProcessingCode: number;         
    public OriginalSystemTraceAuditNumber: string;
    public OriginalTransactionDate: string;    
    public POSEntryMode: string;
    public ProductId: string;    
    public PARData: string; 
    public ResponseACI: string;    
    public SoftwareIdentifier: string;  
    public ValidationCode: string;
    public DownGradeReasonCodeResponse: string;
    
    constructor() {

    }
}

export class CygmaResponse {
    public ErrorCode: string;
    public Message: string;
    public ProcessingCode: number;
    public TransactionAmount: number;
    public SystemsTraceNumber: number;
    public LocalTransactionTime: number;
    public LocalTransactionDate: string;
    public CardAcquirerId: string;
    public RetrievalReferenceNumber: string;
    public AuthorizationIdResponse: string;
    public ResponseCode: string;
    public TerminalId: string;
    public AdditionalAmounts: string;
    public Token: string;
    public ResponseDataElements: ResponseElements = new ResponseElements();

    constructor() {
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

export class RetailMoto {
    /**
     * @deprecated DescriptorCodes is deprecated. Use descriptorCodes instead.
     */
    public DescriptorCodes: string | null | undefined;
    public descriptorCodes: string | null | undefined;

    /**
     * @deprecated OperatorID is deprecated. Use operatorID instead.
     */
    public OperatorID: string | null | undefined;
    public operatorID: string | null | undefined;

    /**
     * @deprecated RetailTerms is deprecated. Use retailTerms instead.
     */
    public RetailTerms: string | null | undefined;
    public retailTerms: string | null | undefined;

    /**
     * @deprecated Moto is deprecated. Use moto instead.
     */
    public Moto: string | null | undefined;   // Changed the Phone to Moto
    public moto: string | null | undefined;

    /**
     * @deprecated AVSZipCode is deprecated. Use avsZipCode instead.
     */
    public AVSZipCode: string | null | undefined;
    public avsZipCode: string | null | undefined;

    /**
     * @deprecated AVSAddress is deprecated. Use avsAddress instead.
     */
    public AVSAddress: string | null | undefined;
    public avsAddress: string | null | undefined;

    /**
     * @deprecated TaxAmount is deprecated. Use taxAmount instead.
     */
    public TaxAmount: string | null | undefined;
    public taxAmount: string | null | undefined;

    /**
     * @deprecated RetailTaxIndicator is deprecated. Use retailTaxIndicator instead.
     */
    public RetailTaxIndicator: string | null | undefined;
    public retailTaxIndicator: string | null | undefined;

    public OptionalField1: string | null | undefined;
    public optionalField1: string | null | undefined;
    public OptionalField2: string | null | undefined;
    public optionalField2: string | null | undefined;

    /**
     * @deprecated OrderNumber is deprecated. Use orderNumber instead.
     */
    public OrderNumber: string | null | undefined;
    public orderNumber: string | null | undefined;

    /**
     * @deprecated AuthCharIndicator is deprecated. Use authCharIndicator instead.
     */
    public AuthCharIndicator: string | null | undefined;
    public authCharIndicator: string | null | undefined;

    /**
     * @deprecated TransactionIdentifier is deprecated. Use transactionIdentifier instead.
     */
    public TransactionIdentifier: string | null | undefined;
    public transactionIdentifier: string | null | undefined;

    /**
     * @deprecated AVSResponseCode is deprecated. Use avsResponseCode instead.
     */
    public AVSResponseCode: string | null | undefined;
    public avsResponseCode: string | null | undefined;

    /**
     * @deprecated TotalAuthorizedAmount is deprecated. Use totalAuthorizedAmount instead.
     */
    public TotalAuthorizedAmount: string | null | undefined;
    public totalAuthorizedAmount: string | null | undefined;

    /**
     * @deprecated PinBlock is deprecated. Use pinBlock instead.
     */
    public PinBlock: string | null | undefined;
    public pinBlock: string | null | undefined;

    /**
     * @deprecated CardTypeIndicator is deprecated. Use cardTypeIndicator instead.
     */
    public CardTypeIndicator: string | null | undefined;
    public cardTypeIndicator: string | null | undefined;

    /**
     * @deprecated CardholderSetCertificate is deprecated. Use cardholderSetCertificate instead.
     */
    public CardholderSetCertificate: string | null | undefined;
    public cardholderSetCertificate: string | null | undefined;

    /**
     * @deprecated CashBackAmount is deprecated. Use cashBackAmount instead.
     */
    public CashBackAmount: string | null | undefined;
    public cashBackAmount: string | null | undefined;

    /**
     * @deprecated SurCharge is deprecated. Use surCharge instead.
     */
    public SurCharge: string | null | undefined;
    public surCharge: string | null | undefined;

    /**
     * @deprecated EbtVoucherNumber is deprecated. Use ebtVoucherNumber instead.
     */
    public EbtVoucherNumber: string | null | undefined;
    public ebtVoucherNumber: string | null | undefined;

    /**
     * @deprecated AuthorizationCode is deprecated. Use authorizationCode instead.
     */
    public AuthorizationCode: string | null | undefined;
    public authorizationCode: string | null | undefined;

    /**
     * @deprecated SMIDId is deprecated. Use smidID instead.
     */
    public SMIDId: string | null | undefined;
    public smidID: string | null | undefined;

    /**
     * @deprecated PartialAuthIndicator is deprecated. Use partialAuthIndicator instead.
     */
    public PartialAuthIndicator: string | null | undefined;
    public partialAuthIndicator: string | null | undefined;

    /**
     * @deprecated FDRAssignedTPP is deprecated. Use fdrAssignedTPP instead.
     */
    public FDRAssignedTPP: string | null | undefined;
    public fdrAssignedTPP: string | null | undefined;

    /**
     * @deprecated VisaAUAR is deprecated. Use visaAUAR instead.
     */
    public VisaAUAR: string | null | undefined;
    public visaAUAR: string | null | undefined;

    /**
     * @deprecated MCTraceId is deprecated. Use mcTraceId instead.
     */
    public MCTraceId: string | null | undefined;
    public mcTraceId: string | null | undefined;

    /**
     * @deprecated MCFraudVoidFlag is deprecated. Use mcFraudVoidFlag instead.
     */
    public MCFraudVoidFlag: string | null | undefined;
    public mcFraudVoidFlag: string | null | undefined;

    /**
     * @deprecated MCFinalAuthIndicator is deprecated. Use mcFinalAuthIndicator instead.
     */
    public MCFinalAuthIndicator: string | null | undefined;
    public mcFinalAuthIndicator: string | null | undefined;

    /**
     * @deprecated GiftCardIndicator is deprecated. Use giftCardIndicator instead.
     */
    public GiftCardIndicator: string | null | undefined;
    public giftCardIndicator: string | null | undefined;

    /**
     * @deprecated TransitAccessTermCard is deprecated. Use transitAccessTermCard instead.
     */
    public TransitAccessTermCard: string | null | undefined;
    public transitAccessTermCard: string | null | undefined;

    /**
     * @deprecated MCWalletIdentifier is deprecated. Use mcWalletIdentifier instead.
     */
    public MCWalletIdentifier: string | null | undefined;
    public mcWalletIdentifier: string | null | undefined;

    /**
     * @deprecated POSLaneIDStoreNum is deprecated. Use posLaneIDStoreNum instead.
     */
    public POSLaneIDStoreNum: string | null | undefined;
    public posLaneIDStoreNum: string | null | undefined;

    /**
     * @deprecated MerchInitiatedTransIndicator is deprecated. Use merchInitiatedTransIndicator instead.
     */
    public MerchInitiatedTransIndicator: string | null | undefined;
    public merchInitiatedTransIndicator: string | null | undefined;

    /**
     * @deprecated DigitalWalletIndicator is deprecated. Use digitalWalletIndicator instead.
     */
    public DigitalWalletIndicator: string | null | undefined;
    public digitalWalletIndicator: string | null | undefined;

    /**
     * @deprecated DigitalWalletProgramType is deprecated. Use digitalWalletProgramType instead.
     */
    public DigitalWalletProgramType: string | null | undefined;
    public digitalWalletProgramType: string | null | undefined;

    /**
     * @deprecated VisaSpecConditionIndicator is deprecated. Use visaSpecConditionIndicator instead.
     */
    public VisaSpecConditionIndicator: string | null | undefined;
    public visaSpecConditionIndicator: string | null | undefined;

    /**
     * @deprecated DeferredAuthIndicator is deprecated. Use deferredAuthIndicator instead.
     */
    public DeferredAuthIndicator: string | null | undefined;
    public deferredAuthIndicator: string | null | undefined;

    /**
     * @deprecated MITAdditionalData is deprecated. Use mitAdditionalData instead.
     */
    public MITAdditionalData: string | null | undefined;
    public mitAdditionalData: string | null | undefined;

    /**
     * @deprecated CITMITIndicator is deprecated. Use citMITIndicator instead.
     */
    public CITMITIndicator: string | null | undefined;
    public citMITIndicator: string | null | undefined;

    /**
     * @deprecated CustomerCode is deprecated. Use customerCode instead.
     */
    public CustomerCode: string | null | undefined;
    public customerCode: string | null | undefined;

    /**
     * @deprecated MerchantCertificateSerialNumber is deprecated. Use merchantCertificateSerialNumber instead.
     */
    public MerchantCertificateSerialNumber: string | null | undefined;
    public merchantCertificateSerialNumber: string | null | undefined;

    /**
     * @deprecated CardHolderSetSerialNumber is deprecated. Use cardHolderSetSerialNumber instead.
     */
    public CardHolderSetSerialNumber: string | null | undefined;
    public cardHolderSetSerialNumber: string | null | undefined;

    /**
     * @deprecated XID is deprecated. Use xid instead.
     */
    public XID: string | null | undefined;
    public xid: string | null | undefined;

    /**
     * @deprecated TransStain is deprecated. Use transStain instead.
     */
    public TransStain: string | null | undefined;
    public transStain: string | null | undefined;

    /**
     * @deprecated MCProgramProtocol is deprecated. Use mcProgramProtocol instead.
     */
    public MCProgramProtocol: string | null | undefined;
    public mcProgramProtocol: string | null | undefined;

    /**
     * @deprecated MCDirSrvrTransId is deprecated. Use mcDirSrvrTransId instead.
     */
    public MCDirSrvrTransId: string | null | undefined;
    public mcDirSrvrTransId: string | null | undefined;

    /**
     * @deprecated InAppTokenCrypto is deprecated. Use inAppTokenCrypto instead.
     */
    public InAppTokenCrypto: string | null | undefined;
    public inAppTokenCrypto: string | null | undefined;

    /**
     * @deprecated RemoteCommerceAcceptorId is deprecated. Use remoteCommerceAcceptorId instead.
     */
    public RemoteCommerceAcceptorId: string | null | undefined;
    public remoteCommerceAcceptorId: string | null | undefined;

    /**
     * @deprecated POSDataCodes is deprecated. Use posDataCodes instead.
     */
    public POSDataCodes: string | null | undefined;
    public posDataCodes: string | null | undefined;

    /**
     * @deprecated ShipToPostalCode is deprecated. Use shipToPostalCode instead.
     */
    public ShipToPostalCode: string | null | undefined;
    public shipToPostalCode: string | null | undefined;

    public constructor(transaction?: Transaction) {

        this.copyFields(transaction);

        if (transaction && transaction.retailIndustry) {
            this.fdrAssignedTPP = transaction.retailIndustry.FDRAssignedTPP || "TEP500";
            this.FDRAssignedTPP = transaction.retailIndustry.FDRAssignedTPP || "TEP500";

            if(transaction.isPurchaseCard) {
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

            this.fdrAssignedTPP ||= transaction.retailIndustry.fdrAssignedTPP || "TEP500";
            this.retailTerms ||= transaction.retailIndustry.retailTerms || "1";
            this.mcFinalAuthIndicator ||= transaction.retailIndustry.mcFinalAuthIndicator || undefined;
            this.mcWalletIdentifier ||= transaction.retailIndustry.mcWalletIdentifier || undefined;
            this.mcDirSrvrTransId ||= transaction.retailIndustry.mcDirSrvrTransId || " ".repeat(36);
            this.inAppTokenCrypto ||= transaction.retailIndustry.inAppTokenCrypto || " ".repeat(28);
            this.remoteCommerceAcceptorId ||= transaction.retailIndustry.remoteCommerceAcceptorId || undefined;
            this.transactionIdentifier ||= transaction.retailIndustry.transactionIdentifier || transaction.transactionID || "";
            this.orderNumber ||= transaction.retailIndustry.orderNumber || transaction.orderNumber;
            this.authorizationCode ||= transaction.retailIndustry.authorizationCode ? transaction.retailIndustry.authorizationCode : transaction.approvalCode ? transaction.approvalCode : "";
            this.totalAuthorizedAmount ||= transaction.retailIndustry.totalAuthorizedAmount ? transaction.retailIndustry.totalAuthorizedAmount : transaction.amount || "";
            this.pinBlock ||= transaction.retailIndustry.pinBlock ? transaction.retailIndustry.pinBlock : "";

            if (transaction.hasOwnProperty("isPurchaseCard") && transaction.isPurchaseCard === true) {
                if (transaction.ccType === "amex" && transaction.posConditionCode != "08" && transaction.posConditionCode != "59") {
                    this.GiftCardIndicator = transaction.retailIndustry.GiftCardIndicator ? transaction.retailIndustry.GiftCardIndicator : transaction.giftCardIndicator || "1";
                    this.giftCardIndicator ||= transaction.retailIndustry.giftCardIndicator ? transaction.retailIndustry.giftCardIndicator : transaction.giftCardIndicator || "1";
                } else {
                    this.GiftCardIndicator = "0";
                    this.giftCardIndicator = "0";
                }
            } else {
                this.GiftCardIndicator = transaction.giftCardIndicator || "";
                this.giftCardIndicator ||= transaction.giftCardIndicator || "";
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

            this.taxAmount ||= transaction.retailIndustry.taxAmount ? transaction.retailIndustry.taxAmount : transaction.taxAmount || "";
            this.mitAdditionalData ||= transaction.retailIndustry && transaction.retailIndustry.mitAdditionalData ? transaction.retailIndustry.mitAdditionalData : "";
            this.citMITIndicator ||= transaction.retailIndustry && transaction.retailIndustry.citMITIndicator ? transaction.retailIndustry.citMITIndicator : transaction.citMitIndicator || "";

            if (this.TaxAmount) {
                this.RetailTaxIndicator = parseFloat(this.TaxAmount) > 0 ? "1" : "0";
            } else {
                this.RetailTaxIndicator = "0";
            }

            if (this.taxAmount) {
                this.retailTaxIndicator = parseFloat(this.taxAmount) > 0 ? "1" : "0";
            } else {
                this.retailTaxIndicator = "0";
            }

            // only pass for sales and auth only
            if (transaction.transactionCode === "1" || transaction.transactionCode === "4") {
                this.AVSAddress = transaction.retailIndustry.AVSAddress ? transaction.retailIndustry.AVSAddress : transaction.street1 || undefined;
                this.AVSZipCode = transaction.retailIndustry.AVSZipCode ? transaction.retailIndustry.AVSZipCode : transaction.postalCode || undefined;

                this.avsAddress ||= transaction.retailIndustry.avsAddress ? transaction.retailIndustry.avsAddress : transaction.street1 || undefined;
                this.avsZipCode ||= transaction.retailIndustry.avsZipCode ? transaction.retailIndustry.avsZipCode : transaction.postalCode || undefined;

                if (!transaction.emv) {
                    transaction.aci = transaction.aci || "Y";
                    this.AuthCharIndicator = transaction.retailIndustry.AuthCharIndicator ? transaction.retailIndustry.AuthCharIndicator : transaction.aci || "Y";
                    this.authCharIndicator ||= transaction.retailIndustry.authCharIndicator ? transaction.retailIndustry.authCharIndicator : transaction.aci || "Y";
                } else {
                    transaction.aci = "";
                    this.AuthCharIndicator = "";
                    this.authCharIndicator = "";
                    transaction.retailIndustry.AuthCharIndicator = "";
                    transaction.retailIndustry.authCharIndicator = "";
                }
            } else {
                this.AVSAddress = undefined;
                this.AVSZipCode = undefined;

                this.avsAddress = undefined;
                this.avsZipCode = undefined;
            }

            this.CardTypeIndicator ||= transaction.retailIndustry.CardTypeIndicator || "C";
            this.cardTypeIndicator ||= transaction.retailIndustry.cardTypeIndicator || "C";

            if (transaction.emv || (transaction.terminalCategoryCode && transaction.terminalCategoryCode === "4")) { // RETAIL
                this.Moto = "";
                this.moto = "";
            } else {
                this.Moto = (!transaction.emv && transaction.retailIndustry.Moto) ? transaction.retailIndustry.Moto : transaction.eci || "";
                this.moto = (!transaction.emv && transaction.retailIndustry.moto) ? transaction.retailIndustry.moto : transaction.eci || "";
            }

            if (transaction && transaction.posConditionCode) {
                switch (transaction.posConditionCode) {
                    case "04":
                        if (transaction.terminalCategoryCode === "4") {  // is it retail                     
                            this.Moto ??= transaction.eci;
                            this.moto ??= transaction.eci;
                        } else {
                            this.Moto = transaction.eci || "2";
                            this.moto ||= transaction.eci || "2";
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
                        this.authCharIndicator ||= transaction.retailIndustry.authCharIndicator ? transaction.retailIndustry.authCharIndicator : transaction.aci || "";
                        break;
                    case "59":
                        if (transaction.terminalCategoryCode !== "4") {  // if not equal to retail
                            if (!transaction.emv) {
                                this.Moto = transaction.eci || "7";
                                this.moto ||= transaction.eci || "7";
                            } else {
                                this.Moto = "";
                                this.moto = "";
                            }
                        } else {
                            this.Moto ??= transaction.eci;
                            this.moto ??= transaction.eci;
                        }
                        this.AuthCharIndicator = transaction.retailIndustry.AuthCharIndicator ? transaction.retailIndustry.AuthCharIndicator : transaction.aci || "";
                        this.authCharIndicator ||= transaction.retailIndustry.authCharIndicator ? transaction.retailIndustry.authCharIndicator : transaction.aci || "";
                        break;
                    default:
                        this.AuthCharIndicator = transaction.retailIndustry.AuthCharIndicator ? transaction.retailIndustry.AuthCharIndicator : transaction.aci || "";
                        this.authCharIndicator ||= transaction.retailIndustry.authCharIndicator ? transaction.retailIndustry.authCharIndicator : transaction.aci || "";
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

            this.posLaneIDStoreNum ||= transaction.retailIndustry.posLaneIDStoreNum;
            this.merchInitiatedTransIndicator ||= transaction.retailIndustry.merchInitiatedTransIndicator ? transaction.retailIndustry.MerchInitiatedTransIndicator : transaction.mitIndicator || "";
            this.digitalWalletIndicator ||= transaction.retailIndustry.digitalWalletIndicator;
            this.digitalWalletProgramType ||= transaction.retailIndustry.digitalWalletProgramType;
            this.visaSpecConditionIndicator ||= transaction.retailIndustry.visaSpecConditionIndicator;
            this.deferredAuthIndicator ||= transaction.retailIndustry.deferredAuthIndicator;
            this.merchantCertificateSerialNumber ||= transaction.retailIndustry.merchantCertificateSerialNumber;
            this.cardHolderSetSerialNumber ||= transaction.retailIndustry.cardHolderSetSerialNumber;
            this.xid ||= transaction.retailIndustry.xid;
            this.transStain ||= transaction.retailIndustry.transStain;
            this.customerCode ||= transaction.retailIndustry.customerCode;
            this.mcProgramProtocol ||= transaction.retailIndustry.mcProgramProtocol;

            if (transaction.retailIndustry.InAppTokenCrypto && transaction.retailIndustry.InAppTokenCrypto.trim().length >= 1) {
                this.MCDirSrvrTransId = transaction.retailIndustry.MCDirSrvrTransId || " ".repeat(36);
                this.InAppTokenCrypto = transaction.retailIndustry.InAppTokenCrypto || " ".repeat(28);
            } else {
                this.MCDirSrvrTransId = "";
                this.InAppTokenCrypto = "";
            }

            if (transaction.retailIndustry.inAppTokenCrypto && transaction.retailIndustry.inAppTokenCrypto.trim().length >= 1) {
                this.mcDirSrvrTransId ||= transaction.retailIndustry.mcDirSrvrTransId || " ".repeat(36);
                this.inAppTokenCrypto ||= transaction.retailIndustry.inAppTokenCrypto || " ".repeat(28);
            } else {
                this.mcDirSrvrTransId = "";
                this.inAppTokenCrypto = "";
            }

            this.POSDataCodes = transaction.retailIndustry.POSDataCodes;
            this.ShipToPostalCode = (transaction.retailIndustry && transaction.retailIndustry.ShipToPostalCode) ? transaction.retailIndustry.ShipToPostalCode : transaction.postalCode;

            this.posDataCodes ||= transaction.retailIndustry.posDataCodes;
            this.shipToPostalCode ||= (transaction.retailIndustry && transaction.retailIndustry.shipToPostalCode) ? transaction.retailIndustry.shipToPostalCode : transaction.postalCode;

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
                    this.partialAuthIndicator ||= (transaction.retailIndustry.partialAuthIndicator) ? transaction.retailIndustry.partialAuthIndicator : transaction.partialAuthIndicator || "2";
                    break;
            }

        } else {
            this.FDRAssignedTPP = "TEP500";

            if(transaction.isPurchaseCard) {
                this.RetailTerms = "1";
            }

            this.OrderNumber = (transaction && transaction.orderNumber) ? transaction.orderNumber : "";
            this.TransactionIdentifier = (transaction && transaction.transactionID) ? transaction.transactionID : "";
            this.AuthorizationCode = transaction && transaction.approvalCode ? transaction.approvalCode : "";
            this.TotalAuthorizedAmount = (transaction && transaction.amount) ? transaction.amount.toString() : "";
            this.TaxAmount = (transaction && transaction.taxAmount) ? transaction.taxAmount.toString() : "";

            this.fdrAssignedTPP = "TEP500";
            
            if(transaction.isPurchaseCard) {
                this.retailTerms = "1";
            }

            this.orderNumber = (transaction && transaction.orderNumber) ? transaction.orderNumber : "";
            this.transactionIdentifier = (transaction && transaction.transactionID) ? transaction.transactionID : "";
            this.authorizationCode = transaction && transaction.approvalCode ? transaction.approvalCode : "";
            this.totalAuthorizedAmount = (transaction && transaction.amount) ? transaction.amount.toString() : "";
            this.taxAmount = (transaction && transaction.taxAmount) ? transaction.taxAmount.toString() : "";

            if (transaction.hasOwnProperty("isPurchaseCard") && transaction.isPurchaseCard === true) {
                this.GiftCardIndicator = transaction.giftCardIndicator || "1";
            } else {
                this.GiftCardIndicator = transaction.giftCardIndicator || "";
            }

            if (transaction.hasOwnProperty("isPurchaseCard") && transaction.isPurchaseCard === true) {
                this.giftCardIndicator = transaction.giftCardIndicator || "1";
            } else {
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
            } else {
                this.RetailTaxIndicator = "0";
            }

            if (this.taxAmount) {
                this.retailTaxIndicator = parseFloat(this.taxAmount) > 0 ? "1" : "0";
            } else {
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
            } else {
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
                        if (!transaction.emv && transaction.terminalCategoryCode !== "4") {  // if not equal to retail
                            this.Moto = transaction.eci || "7";
                            this.moto = transaction.eci || "7";
                        } else {
                            this.Moto = "";
                            this.moto = "";
                        }
                        break;
                    default:
                        if (!transaction.emv && transaction.terminalCategoryCode !== "4") {  // if not equal to retail
                            this.Moto = (transaction && transaction.eci && transaction.eci.trim() !== "") ? transaction.eci : "";
                            this.moto = (transaction && transaction.eci && transaction.eci.trim() !== "") ? transaction.eci : "";
                        } else {
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

    public copyFields(transaction: Transaction): void {
        try {
            if (transaction && transaction.retailIndustry) {
                this.descriptorCodes ||= transaction.retailIndustry.DescriptorCodes || transaction.retailIndustry.descriptorCodes;
                this.operatorID ||= transaction.retailIndustry.OperatorID || transaction.retailIndustry.operatorID;
                this.retailTerms ||= transaction.retailIndustry.RetailTerms || transaction.retailIndustry.retailTerms;
                this.moto ||= transaction.retailIndustry.Moto || transaction.retailIndustry.moto;   // Changed the Phone to Moto
                this.avsZipCode ||= transaction.retailIndustry.AVSZipCode || transaction.retailIndustry.avsZipCode;
                this.avsAddress ||= transaction.retailIndustry.AVSAddress || transaction.retailIndustry.avsAddress;
                this.taxAmount ||= transaction.retailIndustry.TaxAmount || transaction.retailIndustry.taxAmount;
                this.retailTaxIndicator ||= transaction.retailIndustry.RetailTaxIndicator || transaction.retailIndustry.retailTaxIndicator;
                this.optionalField1 ||= transaction.retailIndustry.OptionalField1;
                this.optionalField2 ||= transaction.retailIndustry.OptionalField2;
                this.orderNumber ||= transaction.retailIndustry.OrderNumber || transaction.retailIndustry.orderNumber;
                this.authCharIndicator ||= transaction.retailIndustry.AuthCharIndicator || transaction.retailIndustry.authCharIndicator;
                this.transactionIdentifier ||= transaction.retailIndustry.TransactionIdentifier || transaction.retailIndustry.transactionIdentifier;
                this.avsResponseCode ||= transaction.retailIndustry.AVSResponseCode || transaction.retailIndustry.avsResponseCode;
                this.totalAuthorizedAmount ||= transaction.retailIndustry.TotalAuthorizedAmount || transaction.retailIndustry.totalAuthorizedAmount;
                this.pinBlock ||= transaction.retailIndustry.PinBlock || transaction.retailIndustry.pinBlock;
                this.cardTypeIndicator ||= transaction.retailIndustry.CardTypeIndicator || transaction.retailIndustry.cardTypeIndicator || transaction.cardTypeIndicator;
                this.cardholderSetCertificate ||= transaction.retailIndustry.CardholderSetCertificate || transaction.retailIndustry.cardholderSetCertificate;
                this.cashBackAmount ||= transaction.retailIndustry.CashBackAmount || transaction.retailIndustry.cashBackAmount;
                this.surCharge ||= transaction.retailIndustry.SurCharge || transaction.retailIndustry.surCharge;
                this.ebtVoucherNumber ||= transaction.retailIndustry.EbtVoucherNumber || transaction.retailIndustry.ebtVoucherNumber;
                this.authorizationCode ||= transaction.retailIndustry.AuthorizationCode || transaction.retailIndustry.authorizationCode;
                this.smidID ||= transaction.retailIndustry.SMIDId || transaction.retailIndustry.smidID;
                this.partialAuthIndicator ||= transaction.retailIndustry.PartialAuthIndicator || transaction.retailIndustry.partialAuthIndicator;
                this.fdrAssignedTPP ||= transaction.retailIndustry.FDRAssignedTPP || transaction.retailIndustry.fdrAssignedTPP;
                this.visaAUAR ||= transaction.retailIndustry.VisaAUAR || transaction.retailIndustry.visaAUAR;
                this.mcTraceId ||= transaction.retailIndustry.MCTraceId || transaction.retailIndustry.mcTraceId;
                this.mcFraudVoidFlag ||= transaction.retailIndustry.MCFraudVoidFlag || transaction.retailIndustry.mcFraudVoidFlag;
                this.mcFinalAuthIndicator ||= transaction.retailIndustry.MCFinalAuthIndicator || transaction.retailIndustry.mcFinalAuthIndicator;
                this.giftCardIndicator ||= transaction.retailIndustry.GiftCardIndicator || transaction.retailIndustry.giftCardIndicator;
                this.transitAccessTermCard ||= transaction.retailIndustry.TransitAccessTermCard || transaction.retailIndustry.transitAccessTermCard;
                this.mcWalletIdentifier ||= transaction.retailIndustry.MCWalletIdentifier || transaction.retailIndustry.mcWalletIdentifier;
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

        } catch (error: any) {
            console.log(error);
        }
    }
}

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

export class Lodging {
    public arrivalDate: string | null | undefined;
    public departDate: string | null | undefined;
    public specialProgram: string | null | undefined;
    public folioNumber: string | null | undefined;
    public operatorID: string | null | undefined;
    public amexChargeType: string | null | undefined;
    public authCharIndicator: string | null | undefined;
    public transactionIdentifier: string | null | undefined;
    public marketSpecificIndicator: string | null | undefined;
    public duration: string | null | undefined;
    public extraCharges: string | null | undefined;
    public totalAuthAmount: string | null | undefined;
    public pinBlock: string | null | undefined;
    public cardTypeIndicator: string | null | undefined;
    public cashBackAmount: string | null | undefined;
    public surcharge: string | null | undefined;
    public authorizationCode: string | null | undefined;
    public smidID: string | null | undefined;
    public partialAuthIndicator: string | null | undefined;
    public fdrAssignedTPP: string | null | undefined;
    public visaAUAR: string | null | undefined;
    public mcTraceID: string | null | undefined;
    public mcFraudVoidFlag: string | null | undefined;
    public mcFinalAuthIndicator: string | null | undefined;
    public giftCardIndicator: string | null | undefined;
    public transitAccessTermCardInd: string | null | undefined;
    public mcWalletIdentifier: string | null | undefined;
    public posLaneIDStore: string | null | undefined;
    public merchantInitiatedTransIndicator: string | null | undefined;
    public digitalWalletIndicator: string | null | undefined;
    public digitalWalletProgramType: string | null | undefined;
    public visaSpecConditionIndicator: string | null | undefined;
    public deferredAuthIndicator: string | null | undefined;
    public mitAdditionalData: string | null | undefined;
    public citMITIndicator: string | null | undefined;
    public avsZipCode: string | null | undefined;
    public posDataCodes: string | null | undefined;

    public constructor(transaction?: Transaction) {

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
            
            if(transaction.hasOwnProperty("isPurchaseCard") && transaction.isPurchaseCard === true) {
                if(!transaction.cardNotPresent && transaction.posConditionCode != "08" && transaction.posConditionCode != "59") {
                    this.giftCardIndicator = transaction.lodgingIndustry.giftCardIndicator ? transaction.lodgingIndustry.giftCardIndicator : transaction.giftCardIndicator || "1";
                } else {
                    this.giftCardIndicator = "0";
                }
            } else {
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
                } else {
                    transaction.aci = "";
                    transaction.lodgingIndustry.authCharIndicator = "";
                    this.authCharIndicator = "";
                }
            }
            this.posDataCodes = transaction.lodgingIndustry.posDataCodes;
        } else {
            this.fdrAssignedTPP = "TEP500";
            this.cardTypeIndicator = transaction.cardTypeIndicator || "C";
            this.mcFinalAuthIndicator = "1";
            this.merchantInitiatedTransIndicator = transaction.mitIndicator || "";
            
            if (transaction.transactionCode === "1" || transaction.transactionCode === "4") {
                transaction.aci = transaction.aci || "Y";
                this.authCharIndicator = (transaction && transaction.authCharIndicator) ? transaction.authCharIndicator : ((transaction && transaction.aci) ? transaction.aci : "Y");
                this.avsZipCode = transaction.postalCode || "";                
                this.authCharIndicator = "Y";
            } else {
                this.authCharIndicator = (transaction && transaction.authCharIndicator) ? transaction.authCharIndicator : ((transaction && transaction.aci) ? transaction.aci : "");
            }

            if (transaction) {
                this.partialAuthIndicator = transaction.partialAuthIndicator;
                this.authorizationCode = transaction.approvalCode ? transaction.approvalCode : "";
                this.totalAuthAmount = transaction.amount;
            }

            this.mitAdditionalData = "";
            this.citMITIndicator = transaction.citMitIndicator || "";

            if(transaction.hasOwnProperty("isPurchaseCard") && transaction.isPurchaseCard === true) {
                this.giftCardIndicator = transaction.giftCardIndicator || "1";
            } else {
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

export class ReceiptItem {
    public itemName: string;        // aka product code/sku
    public commodityCode: string;   // Holds the code of goods that are purchased (as defined by national tax authorities)
    public itemDescription: string;
    public qty: number;
    public unitPrice: number;
    public unitCost: number;
    public taxAmount: number;
    public salesTaxCollectedIndicator: number;
    public taxType: string = "0002";
    public discountAmount: number;
    public discountAmountPerLineItem: number;
    public discountIndicator: string = "N";
    public discountAmountCreditDebitIndicator: string;
    public freightShippingAmount: number;
    public dutyAmount: number;
    public dutyAmountCreditDebitIndicator: number;
    public freightShippingAmountCreditDebitIndicator: string;
    public zeroCostToCustomerIndicator: string;
    public totalWithTax: number;
    public taxRate: number;
    public unitOfMeasure: string;
    public orderDate: string;
    public shipDate: string;
    public shippingMethod: string;
    public destinationPostalCode: string;
    public destinationCountryCode: string;
    public shipFromPostalCode: string;
    public extendedItemAmountLineItemTotalAmount: number;
    public extendedAmountCreditDebitIndicator: string;
    public unitPriceExcludingTax: number;
    public itemPriceIncludingTax: number;
    public itemPriceExludingTax: number;
    public shipToFirstName: string; // amex only
    public shipToLastName: string;  // amex only
    public shipToAddress: string;   // amex only
    public shipToPhoneNumber: string;   // amex only

    constructor() {
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
        this.shipToLastName = "";  // amex only
        this.shipToAddress = "";   // amex only
        this.shipToPhoneNumber = "";  // amex only
    }
}

export class RetailItem {
    public departmentName: string | undefined;
    public description: string | undefined;
    public qty: string | undefined;
    public amount: string | undefined;
}

export class Transaction {
    public dateTime: Date;
    public universalTimeStamp: number;
    public applicationKey: string;
    public isProcharge: boolean;
    public isMoto: boolean;
    public isEcommerce: boolean;
    public isRetail: boolean;
    public ebtCode: string;     // 96 - EBT Cash, 98 - EBT Food   
    public preAuthorization: boolean;   // auth for restaurant and gas pump scenario
    public merchantNumber: string;
    public merchantCountryOriginCode: string = "840";
    public paymentGatewayID: string = "4";
    public transactionCode: string;
    public acquirerID: string | undefined;
    public hardwareVendorIdentifier: string = "FISP";
    public softwareIdentifier: string = "0002"; 
    public stan: number | undefined;    
    public protocolType: string;
    public name: string;
    public firstName: string;
    public lastName: string;
    public street1: string;
    public street2: string;
    public city: string;
    public state: string;
    public postalCode: string;
    public destinationPostalCode: string | undefined;
    public shipFromPostalCode: string | undefined;
    public shipDate: string | undefined;
    public country: string; // 3 letter country code
    public destinationCountryCode: string | undefined;
    public emv: string;
    public track1Data: string;
    public trackData: string;

    /**
     * @deprecated card_number is deprecated. Use cardNumber instead.
     */
    public card_number: string;
    public cardNumber: string;

    /**
     * @deprecated cc_last_four is deprecated. Use ccLastFour instead.
     */
    public cc_last_four: string;
    public ccLastFour: string;

    public token: string;
    public cardTypeIndicator: string | undefined;

    /**
     * @deprecated cc_type is deprecated. Use ccType instead.
     */
    public cc_type: string;
    public ccType: string;

    /**
     * @deprecated cc_type is deprecated. Use ccExpMonth instead.
     */    
    public cc_exp_month: string;
    public ccExpMonth: string;

    /**
     * @deprecated cc_exp_year is deprecated. Use ccExpYear instead.
     */     
    public cc_exp_year: string;
    public ccExpYear: string;
    public cvv: string;
    public amount: string;
    public originalAmount: string;
    public subTotal: string;

    /**
     * @deprecated tip_amount is deprecated. Use tipAmount instead.
     */  
    public tip_amount: string;
    public tipAmount: string;

    /**
     * @deprecated tax_rate is deprecated. Use taxRate instead.
     */     
    public taxRate: string | undefined;

    /**
     * @deprecated tax_amount is deprecated. Use taxAmount instead.
     */
    public tax_amount: string;
    public taxAmount: string;
    public cashBackAmount: string;
    public cashAdvanceAmount: string;   // allow customer to get cash from their credit card
    public transactionFee: string | undefined;
    public reverseCashDiscountPercentage: string | undefined;
    public reverseCashDiscountAmount: string;
    public reverseCashDiscountFixAmount: string;
    public customerServiceFee: string;
    public customerServiceFeeAmount: string;
    public customerServiceFeeFixAmount: string;
    public customerServiceFeePercentage: string | undefined;
    public cashDiscountFixAmount: string;
    public cashDiscountAmount: string;
    public email: string;
    public phone: string;
    public cell: string;    

    /**
     * @deprecated companyname is deprecated. Use companyName instead.
     */
    public companyname: string;
    public companyName: string;

    /**
     * @deprecated merchantid is deprecated. Use merchantID instead.
     */
    public merchantid: number; 
    public merchantID: number;

    /**     
     * @deprecated profileid is deprecated. Use merchantID instead.
     */ 
    public profileid: number;   // deprecated use profileID         
    public profileID: number;

    /**
     * @deprecated ordernumber is deprecated. Use orderNumber instead.
     */
    public ordernumber: string;
    public orderNumber: string;

    public source: string;

    /**
     * @deprecated approval_code is deprecated. Use approvalCode instead.
     */
    public approval_code: string;
    public approvalCode: string;

    public sandbox: string;
    public target: string;
    public transactionID: string;
    public retrievalReferenceNumber: string;

    /**
     * @deprecated deviceid is deprecated. Use deviceID instead.
     */
    public deviceid: string;
    public deviceID: string;

    /**
     * @deprecated batchnumber is deprecated. Use batchNumber instead.
     */
    public batchnumber: string;
    public batchNumber: string | undefined;

    /**
     * @deprecated itemnumber is deprecated. Use itemNumber instead.
     */    
    public itemnumber: string;
    public itemNumber: string;

    /**
     * @deprecated revisionnumber is deprecated. Use revisionNumber instead.
     */      
    public revisionnumber: string;
    public revisionNumber: string;

    public debitItemNumber: string;

    /**
     * @deprecated InvoiceId is deprecated. Use invoiceID instead.
     */   
    public InvoiceId: number;
    public invoiceID: number;
    /**
     * @deprecated InvoiceNum is deprecated. Use invoiceNum instead.
     */  
    public InvoiceNum: string;
    public invoiceNum: string;

    /**
     * @deprecated PaymentId is deprecated. Use paymentID instead.
     */  
    public PaymentId: number;
    public paymentID: number;

    public eci: string;
    public aci: string;

    /**
     * @deprecated AuthCharIndicator is deprecated. Use aci instead.
     */  
    public AuthCharIndicator: string;
    public authCharIndicator: string;
    public industryType: string;
    public sandbox_batchnum: string;
    public sandbox_itemnum: string;
    public deviceModel: string;
    public isOffline: boolean;
    public isSettled: boolean | undefined;
    public isRecurring: boolean;
    public isInstallment: boolean;
    public byPassBatchCheck: boolean | undefined;    
    public paymentType: string;
    public paymentToken: any;     // apple pay token, google pay token.    

    /**
     * @deprecated terminalId is deprecated. Use terminalID instead.
     */      
    public terminalId: string;
    public terminalID: string;

    public writeControlCharacter: string;
    public transactionType: string;
    public terminalCapability: string;
    public terminalCardCaptureCapability: string;
    public terminalPinCapability: string;
    public terminalCategoryCode: string | undefined;
    public posConditionCode: string;
    public cardVerificationPresenceIndicator: string;
    public partialAuthIndicator: string;
    public isPurchaseCard = false;
    public giftCardIndicator: string;
    public customerReceipt: string;
    public merchantReceipt: string;
    public cardNotPresent = false;
    public receipts = false;
    public displaySignature = false;
    public srcIP: string;
    public cardOnFile: boolean = false;
    public citMitIndicator: string;
    public mitIndicator: string;
    public description: string;
    public discountAmountPerLineItem: number | undefined;
    public discountAmount: number | undefined;
    public commercialRequestIndicator: string = "1";
    public marketSpecificDataRequest: string = " ";
    public reasonCode: string = "02";
    public networkReferenceNumber: string = "";
    public originalNetworkResponseCode: string | undefined;
    public originalPOSEntryMode: string | undefined;
    public originalProductID: string | undefined;
    public originalSTAN: number | undefined;
    public originalTransactionDate: string | undefined;
    public originalTransactionTime: number | undefined;   
    public validationCode: string | undefined; 
    public secureProtocolVerNum3D: string | undefined;  // visa only - 3DS Protocol Version Number
    public customerID: number;
    public items: ReceiptItem[] = [];
    public retailItems: RetailItem[] = [];
    public retailIndustry: RetailMoto;
    public lodgingIndustry: Lodging;
    public restaurantIndustry: Restaurant;
    public response: TransactionResponse | undefined;

    constructor() {
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
        this.protocolType = "1"
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
        this.paymentType = "";    // apple pay, google pay.
        this.paymentToken = {};     // apple pay token, google pay token.
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
                    pr.responseText = "merchantNumber is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "applicationKey is required";
                    return reject(pr);
                }

                if (!this.options.authToken) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "authToken is required";
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
                        "Authorization": this.options.authToken,
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
                    pr.responseText = "merchantNumber is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "applicationKey is required";
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
                        "Authorization": this.options.authToken,
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
                    pr.responseText = "merchantNumber is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "applicationKey is required";
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
                        "Authorization": this.options.authToken,
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
                    pr.responseText = "merchantNumber is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "applicationKey is required";
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
                        "Authorization": this.options.authToken,
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
                    pr.responseText = "merchantNumber is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "applicationKey is required";
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
                        "Authorization": this.options.authToken,
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
                    pr.responseText = "merchantNumber is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "applicationKey is required";
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
                        "Authorization": this.options.authToken,
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
                    pr.responseText = "merchantNumber is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "applicationKey is required";
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
                        "Authorization": this.options.authToken,
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
                    pr.responseText = "merchantNumber is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "applicationKey is required";
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
                        "Authorization": this.options.authToken,
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
                    pr.responseText = "merchantNumber is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "applicationKey is required";
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
                        "Authorization": this.options.authToken,
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
                    pr.responseText = "merchantNumber is required";
                    return reject(pr);
                }

                if (!this.options.applicationKey) {
                    const pr: TransactionResponse = new TransactionResponse();
                    pr.responseText = "applicationKey is required";
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
                        "Authorization": this.options.authToken,
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