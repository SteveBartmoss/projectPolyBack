import { Injectable } from '@nestjs/common';
import { CreateUserTimelineDto } from './dto/create-user-timeline.dto';
import { UpdateUserTimelineDto } from './dto/update-user-timeline.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserTimeline } from './entities/user-timeline.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserTimelineService {

  constructor(

    @InjectModel(UserTimeline.name)
    private readonly userTimelineModel: Model<UserTimeline>
  ){}

  async create(createUserTimelineDto: CreateUserTimelineDto) {

    try{

      const item = await this.userTimelineModel.create(createUserTimelineDto)

      return item
      
    } catch(error){
      console.log(error)
    }

  }

  findAll() {
    return `This action returns all userTimeline`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userTimeline`;
  }

  update(id: number, updateUserTimelineDto: UpdateUserTimelineDto) {
    return `This action updates a #${id} userTimeline`;
  }

  remove(id: number) {
    return `This action removes a #${id} userTimeline`;
  }
}
