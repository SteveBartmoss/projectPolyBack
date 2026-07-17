import { PartialType } from "@nestjs/mapped-types";
import { CreateProfileUserDto } from "./create-profile-user.dto";


export class UpdateProfileUserDto extends PartialType(CreateProfileUserDto) {}