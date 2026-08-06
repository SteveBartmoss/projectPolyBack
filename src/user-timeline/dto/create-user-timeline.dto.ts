import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserTimelineDto {

    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    content: string;
    
}
