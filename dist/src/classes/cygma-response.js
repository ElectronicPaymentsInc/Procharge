"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CygmaResponse = void 0;
const cygma_response_data_elements_1 = require("./cygma-response-data-elements");
class CygmaResponse {
    constructor() {
        this.ResponseDataElements = new cygma_response_data_elements_1.ResponseElements();
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
        this.ResponseDataElements = new cygma_response_data_elements_1.ResponseElements();
    }
}
exports.CygmaResponse = CygmaResponse;
