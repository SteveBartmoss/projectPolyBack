import { PartialType } from "@nestjs/mapped-types";
import { CreateCollectionUserDto } from "./create-collection-user.dt";

export class UpdateCollectionDto extends PartialType(CreateCollectionUserDto) {}