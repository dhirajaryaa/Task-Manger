export class ApiResponse {
    constructor(
        statusCode,
        message="succuss",
        data=null,
        isError= false,
        succuss= true
    ){
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.isError = false;
        this.succuss = succuss
    }
}