import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema({
    timestamps: true
})
export class File extends Document {

    @Prop({
        required: true
    })
    path: string;

    @Prop({
        required: true
    })
    name: string;

    @Prop({
        required: true
    })
    owner: string;

    @Prop({
        default: false
    })
    isPublic: boolean;

    @Prop({
        default: null
    })
    group: string;

    @Prop({
        required: true
    })
    originalName: string;

    @Prop({
        required: true,
        type: Number
    })
    size: number;

    @Prop({
        required: true
    })
    mime: string;

}

export const FileSchema = SchemaFactory.createForClass(File)
