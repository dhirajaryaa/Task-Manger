export class ApiError extends Error{
    constructor(
        statusCode = 400,
        message = "something went wrong!",
        data = null,
        succuss= false,
        error = [],
        stack = []
    ){
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.data =  data;
        this.succuss =  succuss;
        this.error = error;
        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
}