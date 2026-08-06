import { PartialType } from '@nestjs/mapped-types';
import { CreateUserTimelineDto } from './create-user-timeline.dto';

export class UpdateUserTimelineDto extends PartialType(CreateUserTimelineDto) {}
