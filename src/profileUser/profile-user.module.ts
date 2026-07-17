import { Module } from "@nestjs/common";
import { ProfileUserController } from "./profile-user.controller";
import { ProfileUserService } from "./profile-user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ProfileUser, ProfileUserSchema } from "./entities/profile-user.entity";


@Module({
    controllers: [ProfileUserController],
    providers: [ProfileUserService],
    imports: [
        MongooseModule.forFeature([
            {
                name: ProfileUser.name,
                schema: ProfileUserSchema
            }
        ]),
    ],
})
export class ProfileUserModule {}