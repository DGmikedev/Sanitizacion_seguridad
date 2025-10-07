export class TypeDataError extends Error{
    constructor(message){
        super(message);
        this.name = "typeErrorData",
        this.message = message
    }
}