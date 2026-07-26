import { Module } from '@nestjs/common';
import { UserTimelineService } from './user-timeline.service';
import { UserTimelineController } from './user-timeline.controller';

@Module({
  controllers: [UserTimelineController],
  providers: [UserTimelineService],
})
export class UserTimelineModule {}
