import { RetailMoto } from "./retail-moto";
import { Restaurant } from "./restaurant";
import { Lodging } from "./lodging";
import { ReceiptItem } from  "./receipt-item";
import { TransactionResponse } from  "./transaction-response";

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