import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Model } from 'mongoose';
import { Post } from './entities/post.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostService {

  constructor(

    @InjectModel(Post.name)
    private readonly postModel: Model<Post>
  ){}

  async create(createPostDto: CreatePostDto) {

    try{
      
      const post = await this.postModel.create(createPostDto)

      return post

    } catch (error){
      console.log(error)
    }

  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
