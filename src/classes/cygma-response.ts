import { ResponseElements } from "./cygma-response-data-elements";

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