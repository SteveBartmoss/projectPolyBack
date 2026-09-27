import { Module } from '@nestjs/common';
import { BacklogGamesService } from './backlog-games.service';
import { BacklogGamesController } from './backlog-games.controller';

@Module({
  controllers: [BacklogGamesController],
  providers: [BacklogGamesService],
})
export class BacklogGamesModule {}
