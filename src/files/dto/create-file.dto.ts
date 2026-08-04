import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateFileDto {

    @IsString()
    @IsNotEmpty()
    path: string;

    @IsString()
    @IsNotEmpty()
    owner: string;

    @IsBoolean()
    @IsOptional()
    isPublic: boolean;

    @IsString()
    @IsOptional()
    group: string;

    @IsString()
    @IsNotEmpty()
    originalName: string;

    @IsNumber()
    size: number;

    @IsString()
    @IsNotEmpty()
    mime: string;

}
