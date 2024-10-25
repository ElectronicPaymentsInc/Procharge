[![version](https://img.shields.io/badge/version-1.0.14-yellow.svg)](https://semver.org)
[![npm version](https://img.shields.io/badge/npm-10.8.3-red.svg)](https://semver.org)
[![node version](https://img.shields.io/badge/node-v20.13.1-green.svg)](https://semver.org)

# Procharge Node.js API

Use this TypeScript library to process sales, authorizations, ticket captures, voids, refunds and balance inquiries with Procharge.

* [Requirements](#requirements)
* [Installation](#installation)
* [Quickstart](#quickstart)
* [Usage](#usage)
* [API Reference](#api-reference)
* [Deprecated APIs](#deprecated-apis)

## Requirements

Use of the Procharge Node.js API requires:

* Node.js 14 or higher

This API supports Node.js versions that are either current, or that are in long-term support status (LTS).  The API does not support Node.js versions that have reached their end-of-life (EOL).  For more information on Node.js versioning, see <https://nodejs.org/en/about/releases/>.

This API is for use with Node.js only and doesn't support other usages, such as for web browsers or frontend applications.

## Installation

npm i procharge

## Usage
The package needs to be configured with your account's application key and user login credentials, which is
available in the [Procharge Gateway][secure2].

Additional documentation can be found here [Procharge API Documentation][api-documentation] which contains examples and schema information under the Card Transactions section.

All the below examples are using an invalid merchant number and credit card and are for documentation purposes only so be sure to enter valid information when invoking the client.

Within the [Procharge API Documentation][api-documentation] there is a list of mock card numbers you can use for sandbox testing.

```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";
```

## API Reference

### Methods
* [Request Access Token](#request-access-token)
* [Sale](#sale)
* [Void Sale](#void-sale)
* [Auth Only](#auth-only)
* [Void Auth Only](#void-auth-only)
* [Ticket Completion](#ticket-completion)
* [Void Ticket](#void-ticket)
* [Refund](#refund)
* [Void Refund](#void-refund)
* [PrePaid Balance Inquiry](#prepaid-balance-inquiry)
* [Validate Card](#validate-card)
* [EMV](#emv)
* [Swiped Sale](#swiped-sale)

## Request Access Token

```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";
                
let client = new Client({
    env: Environment.Development
});

let response: any = await client.getAccessToken({
    "email": "jdoe@widget.com",
    "password": "Yadda1234",
    "application": "procharge-api"
}).catch((error: any) => {
    console.log(error);
    reject(error);
});

if(!response) {
    return;
} else {
    console.log("access_token: " + response.access_token);
    console.log("refresh_token: " + response.refresh_token);
    return resolve(response)
}  
```

## Sale

```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";
              
let client = new Client({
    env: Environment.Development,
    applicationKey: "test test",
    authToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
});

let transaction: Transaction = new Transaction();
transaction.merchantNumber = "530160123587469";
transaction.profileID = 17149798;
transaction.isEcommerce = true;
transaction.amount = "0.05";
transaction.taxAmount = "0.01";
transaction.tipAmount = "0.00";
transaction.cardTypeIndicator = "C";    // C - Credit, D - Debit, P - Debit PrePaid 
transaction.cardNumber = "4761120010000492";
transaction.ccExpMonth = "12";
transaction.ccExpYear = "25";
transaction.cvv = "123";    // <-- Only set if performing cvv verification
transaction.aci = "Y";      // <-- Only set if performing avs verification
transaction.name = "John Doe";
transaction.street1 = "7305 test street";
transaction.street2 = "";
transaction.city = "Omaha";
transaction.state = "NE";
transaction.postalCode = "68114";
transaction.email = "jdoe@widget.com";
transaction.companyName = "Joes Moving Company";
transaction.orderNumber = "123456";

let response: TransactionResponse = await client.processSale(transaction).catch((error: any) => {
    console.log(error);
    reject(error);
}) as TransactionResponse;

if(!response) {
    return;
} else {
    return resolve(response)
}
```

## Void Sale
```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";

let client = new Client({
    env: Environment.Development,
    applicationKey: "test test",
    authToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
});
                
let transaction: Transaction = new Transaction();
transaction.merchantNumber = "530160123587469";
transaction.profileID = 17149798;
transaction.isEcommerce = true;
transaction.transactionID = "429811000636";
transaction.approvalCode = "097502";

let response: TransactionResponse = await client.voidSale(transaction).catch((error: any) => {
    console.log(error);
    reject(error);
}) as TransactionResponse;

if(!response) {
    return;
} else {
    return resolve(response)
}
```

## Auth Only
```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";

let client = new Client({
    env: Environment.Development,
    applicationKey: "test test",
    authToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
});
                
let transaction: Transaction = new Transaction();
transaction.merchantNumber = "530160123587469";
transaction.profileID = 17149798;
transaction.isEcommerce = true;
transaction.cardTypeIndicator = "C";    // C - Credit, D - Debit, P - Debit PrePaid 
transaction.amount = "0.05";
transaction.cardNumber = "4761120010000492";
transaction.ccExpMonth = "12";
transaction.ccExpYear = "25";
transaction.cvv = "123";    // <-- Only set if performing cvv verification
transaction.aci = "Y";      // <-- Only set if performing avs verification
transaction.name = "John Doe";
transaction.street1 = "7305 test street";
transaction.street2 = "";
transaction.city = "Omaha";
transaction.state = "NE";
transaction.postalCode = "68114";
transaction.email = "jdoe@widget.com";
transaction.companyName = "Joes Moving Company";
transaction.orderNumber = "123456";

let response: TransactionResponse = await client.authorizeOnly(transaction).catch((error: any) => {
    console.log(error);
    reject(error);
}) as TransactionResponse;

if(!response) {
    return;
} else {
    return resolve(response)
}
```

## Void Auth Only
```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";

let client = new Client({
    env: Environment.Development,
    applicationKey: "test test",
    authToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
});
               
let transaction: Transaction = new Transaction();
transaction.merchantNumber = "530160123587469";
transaction.profileID = 17149798;
transaction.isEcommerce = true;
transaction.transactionID = "429811000636";
transaction.approvalCode = "097502";
transaction.invoiceID = 447803694;
transaction.paymentID = 447857739;
transaction.cardNotPresent = true;
transaction.cardTypeIndicator = "C";    // C - Credit, D - Debit, P - Debit PrePaid 

let response: TransactionResponse = await client.voidAuthOnly(transaction).catch((error: any) => {
    console.log(error);
    reject(error);
}) as TransactionResponse;

if(!response) {
    return;
} else {
    return resolve(response)
}
```

## Ticket Completion
```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";

let client = new Client({
    env: Environment.Development,
    applicationKey: "test test",
    authToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
});
        
let transaction: Transaction = new Transaction();
transaction.merchantNumber = "530160123587469"; 
transaction.profileID = 17149798;   
transaction.isEcommerce = true;
transaction.transactionID = "429811000636";    
transaction.approvalCode = "097502";
transaction.invoiceID = 447803694;
transaction.paymentID = 447857739;
transaction.cardNotPresent = true;
transaction.cardTypeIndicator = "C";    // C - Credit, D - Debit, P - Debit PrePaid 
transaction.amount = "0.05";
transaction.taxAmount = "0.01";

let response: TransactionResponse = await client.completeTicket(transaction).catch((error: any) => {
    console.log(error);
    reject(error);
}) as TransactionResponse;

if(!response) {
    return;
} else {
    return resolve(response)
}
```

## Void Ticket
```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";

let client = new Client({
    env: Environment.Development,
    applicationKey: "test test",
    authToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
});

let transaction: Transaction = new Transaction();
transaction.merchantNumber = "530160123587469";
transaction.profileID = 17149798;
transaction.isEcommerce = true;
transaction.transactionID = "429811000636";
transaction.approvalCode = "097502";
transaction.cardNotPresent = true;
transaction.cardTypeIndicator = "C";    // C - Credit, D - Debit, P - Debit PrePaid 

let response: TransactionResponse = await client.voidTicketOnly(transaction).catch((error: any) => {
    console.log(error);
    reject(error);
}) as TransactionResponse;

if(!response) {
    return;
} else {
    return resolve(response)
}        
```

## Refund
```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";

let client = new Client({
    env: Environment.Development,
    applicationKey: "test test",
    authToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
});

let transaction: Transaction = new Transaction();
transaction.merchantNumber = "530160123587469";
transaction.profileID = 17149798;
transaction.isEcommerce = true;
transaction.amount = "0.05";
transaction.taxAmount = "0.01";
transaction.tipAmount = "0.00";
transaction.cardTypeIndicator = "C";    // C - Credit, D - Debit, P - Debit PrePaid 
transaction.cardNumber = "4***********0492";
transaction.ccExpMonth = "12";
transaction.ccExpYear = "25";
transaction.cvv = "123";                // <-- Only set if performing cvv verification
transaction.aci = "N";                  // <-- No avs verification on refunds

let response: TransactionResponse = await client.processRefund(transaction).catch((error: any) => {
    console.log(error);
    reject(error);
}) as TransactionResponse;

if(!response) {
    return;
} else {
    return resolve(response)
}
```

## Void Refund
```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";

let client = new Client({
    env: Environment.Development,
    applicationKey: "test test",
    authToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
});

let transaction: Transaction = new Transaction();
transaction.merchantNumber = "530160123587469";
transaction.profileID = 17149798;
transaction.isEcommerce = true;
transaction.transactionID = "429811000636";
transaction.approvalCode = "097502";
transaction.cardNotPresent = true;
transaction.cardTypeIndicator = "C";    // C - Credit, D - Debit, P - Debit PrePaid 

let response: TransactionResponse = await client.voidRefund(transaction).catch((error: any) => {
    console.log(error);
    reject(error);
}) as TransactionResponse;

if(!response) {
    return;
} else {
    return resolve(response)
}        
```

## PrePaid Balance Inquiry
```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";

let client = new Client({
    env: Environment.Development,
    applicationKey: "test test",
    authToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
});

let transaction: Transaction = new Transaction();
transaction.merchantNumber = "530160123587469";
transaction.profileID = 17149798;
transaction.isEcommerce = true;
transaction.cardNumber = "4***********8683";
transaction.ccExpMonth = "12";
transaction.ccExpYear = "30";
transaction.cvv = "123";
transaction.amount = "0.00";
transaction.taxAmount = "0.00";
transaction.aci = "N";
transaction.isPurchaseCard = true;
transaction.cardNotPresent = true;
transaction.cardTypeIndicator = "P";    // C - Credit, D - Debit, P - Debit PrePaid 

let response: TransactionResponse = await client.prePaidBalanceInquiry(transaction).catch((error: any) => {
    console.log(error);
    reject(error);
}) as TransactionResponse;

if(!response) {
    return;
} else {
    return resolve(response)
}
```

## Validate Card
```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";

let client = new Client({
    env: Environment.Development,
    applicationKey: "test test",
    authToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
});

let transaction: Transaction = new Transaction();
transaction.merchantNumber = "530160123587469";
transaction.profileID = 17149798;
transaction.isEcommerce = true;
transaction.amount = "0.00";        // <-- Leave 0.00 amount for validation
transaction.taxAmount = "0.00";     // <-- Leave 0.00 amount for validation
transaction.tipAmount = "0.00";
transaction.cardTypeIndicator = "C";    // C - Credit, D - Debit, P - Debit PrePaid 
transaction.aci = "Y";                  // <-- Only set if performing avs verification
transaction.name = "John Doe";
transaction.street1 = "7305 test street";
transaction.postalCode = "68114";

let response: TransactionResponse = await client.validateCard(transaction).catch((error: any) => {
    console.log(error);
    reject(error);
}) as TransactionResponse;

if(!response) {
    return;
} else {
    return resolve(response)
}
```

## EMV
```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";

let client = new Client({
    env: Environment.Development,
    applicationKey: "test test",
    authToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
});

let transaction: Transaction = new Transaction();
transaction.merchantNumber = "530160123587469";
transaction.profileID = 17149798;
transaction.isRetail = true;
transaction.cardTypeIndicator = "C";    // C - Credit, D - Debit, P - Debit PrePaid 
transaction.emv = "5F2A020840820258008407A0000000031010950502800080009A031806259C01009F02060000000020009F03060000000000009F0902008C9F100706011203A000009F1A0208409F1E0832343437383135335F24032212319F2608B4E599A67DD0828E9F2701809F3303E0F8C89F34031E03009F3501229F360200029F3704B71461199F4104000006755F340101";
transaction.aci = "N";

let response: TransactionResponse = await client.processSale(transaction).catch((error: any) => {
    console.log(error);
    reject(error);
}) as TransactionResponse;

if(!response) {
    return;
} else {
    return resolve(response)
}
```

## Swiped Sale
```js
import { Client, Environment, Transaction, TransactionResponse } from "procharge-api";

let client = new Client({
    env: Environment.Development,
    applicationKey: "test test",
    authToken: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
});

let transaction: Transaction = new Transaction();
transaction.merchantNumber = "530160123587469";
transaction.profileID = 17149798;
transaction.isRetail = true;
transaction.cardTypeIndicator = "C";    // C - Credit, D - Debit, P - Debit PrePaid 
transaction.trackData = "4761739001010010D24122010000000000000";
transaction.aci = "N";

let response: TransactionResponse = await client.processSale(transaction).catch((error: any) => {
    console.log(error);
    reject(error);
}) as TransactionResponse;

if(!response) {
    return;
} else {
    return resolve(response)
}
```

### Deprecated APIs
* None

[Procharge API]: https://dev-api.procharge.com/api/developers
[sign up with procharge]: https://secure2.procharge.com

[secure2]: https://secure2.procharge.com
[api-documentation]: https://dev-api.procharge.com/api/developers
[version]: 1.0.14
