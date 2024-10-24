[![version](https://img.shields.io/badge/version-1.0.0-yellow.svg)](https://semver.org)
[![npm version](https://img.shields.io/badge/npm-10.8.3-red.svg)](https://semver.org)
[![node version](https://img.shields.io/badge/node-v20.13.1-green.svg)](https://semver.org)

# Procharge API Node.js SDK

Use this TypeScript library to process sales, authorizations, ticket captures, voids, refunds and balance inquiries with Procharge.

* [Requirements](#requirements)
* [Installation](#installation)
* [Quickstart](#quickstart)
* [Usage](#usage)
* [API Reference](#api-reference)
* [Deprecated APIs](#deprecated-apis)

## Requirements

Use of the Square Node.js SDK requires:

* Node.js 14 or higher

This SDK supports Node.js versions that are either current, or that are in long-term support status (LTS).  The SDK does not support Node.js versions that have reached their end-of-life (EOL).  For more information on Node.js versioning, see <https://nodejs.org/en/about/releases/>.

This SDK is for use with Node.js only. It does not support other usages, such as for web browsers or frontend applications.

## Installation

npm i procharge

## Usage
The package needs to be configured with your account's secret key, which is
available in the [Procharge Gateway][secure2]. Require it with the key's
value:

<!-- prettier-ignore -->
```js
import { Client, Environment } from "procharge";
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

## Request Access Token
<!-- prettier-ignore -->
```js
import { Client, Environment } from "procharge";
```

## Sale
<!-- prettier-ignore -->
```js
import { Client, Environment } from "procharge";
```
## Void Sale
<!-- prettier-ignore -->
```js
import { Client, Environment } from "procharge";
```

## Auth Only
<!-- prettier-ignore -->
```js
import { Client, Environment } from "procharge";
```

## Void Auth Only
<!-- prettier-ignore -->
```js
import { Client, Environment } from "procharge";
```

## Ticket Completion
<!-- prettier-ignore -->
```js
import { Client, Environment } from "procharge";
```
## Void Ticket
<!-- prettier-ignore -->
```js
import { Client, Environment } from "procharge";
```

## Refund
<!-- prettier-ignore -->
```js
import { Client, Environment } from "procharge";
```

## Void Refund
<!-- prettier-ignore -->
```js
import { Client, Environment } from "procharge";
```
## PrePaid Balance Inquiry
<!-- prettier-ignore -->
```js
import { Client, Environment } from "procharge";
```

## Validate Card
<!-- prettier-ignore -->
```js
import { Client, Environment } from "procharge";
```

### Invoices
* [Invoices]

[Procharge API]: https://dev-api.procharge.com/api/developers
[sign up with procharge]: https://secure2.procharge.com

[secure2]: https://secure2.procharge.com
[version]: 1.0.0
