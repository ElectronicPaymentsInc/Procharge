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