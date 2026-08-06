import { BadGatewayException, InternalServerErrorException } from "@nestjs/common";


export class ErrorHelper {

    public static handleError(error: any){
        if(error.code){
            throw new BadGatewayException(error.detail)
        }
        console.log(error)
        throw new InternalServerErrorException('Unexpected error, check server logs')
    }
    
}