import { IsNotEmpty, IsString, MaxLength } from "class-validator";


export class CreateProfileUserDto {

    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    imgProfile: string

    @IsString()
    @MaxLength(120)
    textState: string

    @IsString()
    @MaxLength(200)
    alias: string

    @IsString()
    @MaxLength(500)
    biografy: string

}