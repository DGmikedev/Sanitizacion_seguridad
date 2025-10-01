export class DataTypeError extends Error {
    constructor(message){
        super(message);
        this.name = "DatatypeError";
        this.message = message;
    }
}