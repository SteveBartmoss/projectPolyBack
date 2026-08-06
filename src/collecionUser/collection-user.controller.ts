import { Body, Controller, Post } from "@nestjs/common";
import { CollectionUserService } from "./collection-user.service";
import { CreateCollectionUserDto } from "./dto/create-collection-user.dt";

@Controller('collection')
export class CollectionUserContoller {

    constructor(private readonly collectionService: CollectionUserService) {}

    @Post()
    create(@Body() createCollectionUserDto: CreateCollectionUserDto){
        return this.collectionService.create(createCollectionUserDto);
    }
    
}