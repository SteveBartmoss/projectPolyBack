import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { File, FileSchema } from './entities/file.entity';

@Module({
  controllers: [FilesController],
  providers: [FilesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: File.name,
        schema: FileSchema
      }
    ]),
  ],
})
export class FilesModule {}
