import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { InjectModel } from '@nestjs/mongoose';
import { File } from './entities/file.entity';
import { Model } from 'mongoose';
import { join } from 'node:path';
import { mkdir, writeFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';

@Injectable()
export class FilesService {

  constructor(
    @InjectModel(File.name)
    private readonly fileModel: Model<File>
  ){}

  async create(
    file: Express.Multer.File,
    createFileDto: CreateFileDto
  ) {
    try {
      const storagePath = join(process.cwd(), 'storage', 'files');

      await mkdir(storagePath, {
        recursive: true,
      });

      const extension = file.originalname.includes('.')
        ? `.${file.originalname.split('.').pop()}`
        : '';

      const filename = `${randomUUID()}${extension}`;

      const filePath = join(storagePath, filename);

      await writeFile(filePath, file.buffer);

      createFileDto.name = filename;
      createFileDto.originalName = file.originalname;
      createFileDto.mime = file.mimetype;
      createFileDto.size = file.size;
      createFileDto.path = join('storage', 'files', filename);

      return await this.fileModel.create(createFileDto);

    } catch (error) {
      console.error(error);

      throw new InternalServerErrorException(
        'Could not store file',
      );
    }
  }

  findAll() {
    return `This action returns all files`;
  }

  async findOne(id: string) {

    const fileDocument = await this.fileModel.findById(id);

    if (!fileDocument) {
      throw new NotFoundException('File not found');
    }

    const filePath = resolve(process.cwd(), fileDocument.path);

    try {

      await access(filePath);

      const buffer = await readFile(filePath);

      return {
        buffer,
        mime: fileDocument.mime,
        originalName: fileDocument.originalName,
        size: fileDocument.size,
      };

    } catch (error) {

      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        throw new NotFoundException('Physical file not found');
      }

      throw new InternalServerErrorException(
        'Could not read file'
      );
    }
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }
}
