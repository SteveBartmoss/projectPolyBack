import { Body, Controller, Post } from "@nestjs/common";
import { ProfileUserService } from "./profile-user.service";
import { CreateProfileUserDto } from "./dto/create-profile-user.dto";


@Controller('profile-user')
export class ProfileUserController {

    constructor(private readonly profileService: ProfileUserService) {}

    @Post()
    create(@Body() createProfileUserDto: CreateProfileUserDto) {
        return this.profileService.create(createProfileUserDto)
    }
    
}