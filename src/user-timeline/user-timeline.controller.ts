import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserTimelineService } from './user-timeline.service';
import { CreateUserTimelineDto } from './dto/create-user-timeline.dto';
import { UpdateUserTimelineDto } from './dto/update-user-timeline.dto';

@Controller('user-timeline')
export class UserTimelineController {
  constructor(private readonly userTimelineService: UserTimelineService) {}

  @Post()
  create(@Body() createUserTimelineDto: CreateUserTimelineDto) {
    return this.userTimelineService.create(createUserTimelineDto);
  }

  @Get()
  findAll() {
    return this.userTimelineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userTimelineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTimelineDto: UpdateUserTimelineDto) {
    return this.userTimelineService.update(+id, updateUserTimelineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userTimelineService.remove(+id);
  }
}
