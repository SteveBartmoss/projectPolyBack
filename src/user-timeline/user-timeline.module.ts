import { Module } from '@nestjs/common';
import { UserTimelineService } from './user-timeline.service';
import { UserTimelineController } from './user-timeline.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserTimeline, UserTimelineSchema } from './entities/user-timeline.entity';

@Module({
  controllers: [UserTimelineController],
  providers: [UserTimelineService],
  imports: [
    MongooseModule.forFeature([
      {
        name: UserTimeline.name,
        schema: UserTimelineSchema
      }
    ]),
  ],
})
export class UserTimelineModule {}
