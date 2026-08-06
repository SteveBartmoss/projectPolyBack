import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreatePostDto {

    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;
    
}
