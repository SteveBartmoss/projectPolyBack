import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({timestamps: true})
export class UserTimeline extends Document {

    @Prop({
        required: true
    })
    userId: string;

    @Prop({
        required: true
    })
    content: string;


}

export const UserTimelineSchema = SchemaFactory.createForClass(UserTimeline)
