import { Injectable } from "@nestjs/common";
import { ProfileUser } from "./entities/profile-user.entity";
import { CreateProfileUserDto } from "./dto/create-profile-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


@Injectable()
export class ProfileUserService {


    constructor(
        @InjectModel(ProfileUser.name)
        private readonly profileModel: Model<ProfileUser>
    ){}

    async create(createProfileUserDto: CreateProfileUserDto) {

        try{

            const profile = await this.profileModel.create(createProfileUserDto)

            return profile

        } catch(error){
            console.log(error)
        }

    }

}