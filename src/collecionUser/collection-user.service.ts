import { Injectable, Post } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CollectionUser } from "./entities/collecion-user.entity";
import { Model } from "mongoose";
import { CreateCollectionUserDto } from "./dto/create-collection-user.dt";


@Injectable()
export class CollectionUserService {


    constructor(
        @InjectModel(CollectionUser.name)
        private readonly collectionUser: Model<CollectionUser>
    ){}

    async create(CreateCollectionDto: CreateCollectionUserDto){

        try{

            const collection = await this.collectionUser.create(CreateCollectionDto)

            return collection

        } catch(error) {
            console.log(error)
        }

    }
}