import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BacklogGamesService } from './backlog-games.service';
import { CreateBacklogGameDto } from './dto/create-backlog-game.dto';
import { UpdateBacklogGameDto } from './dto/update-backlog-game.dto';

@Controller('backlog-games')
export class BacklogGamesController {
  constructor(private readonly backlogGamesService: BacklogGamesService) {}

  @Post()
  create(@Body() createBacklogGameDto: CreateBacklogGameDto) {
    return this.backlogGamesService.create(createBacklogGameDto);
  }

  @Get()
  findAll() {
    return this.backlogGamesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backlogGamesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBacklogGameDto: UpdateBacklogGameDto) {
    return this.backlogGamesService.update(+id, updateBacklogGameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backlogGamesService.remove(+id);
  }
}
