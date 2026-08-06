import { IsNotEmpty, IsString, MaxLength } from "class-validator";


export class CreateCollectionUserDto {

    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(60)
    name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(60)
    category: string;

    @IsString()
    @IsString()
    @MaxLength(500)
    description: string;

}