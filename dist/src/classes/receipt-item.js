"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptItem = void 0;
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
