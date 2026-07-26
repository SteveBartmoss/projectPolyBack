import { Module } from "@nestjs/common";
import { CollectionUserContoller } from "./collection-user.controller";
import { CollectionUserService } from "./collection-user.service";
import { CollectionUser, CollectionUserSchema } from "./entities/collection-user.entity";
import { MongooseModule } from "@nestjs/mongoose";


@Module({
    controllers: [CollectionUserContoller],
    providers: [CollectionUserService],
    imports: [
        MongooseModule.forFeature([
            {
                name: CollectionUser.name,
                schema: CollectionUserSchema
            }
        ]),
    ],
})
export class CollectionUserModule {}