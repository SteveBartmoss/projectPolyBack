import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from "mongoose"

@Schema({
    timestamps: true
})
export class CollectionUser extends Document {

    @Prop({
        required: true
    })
    userId: string;

    @Prop({
        required: true
    })
    name: string;

    @Prop({
        required: true
    })
    category: string;

    @Prop({
        required: true
    })
    description: string;

}

export const CollectionUserSchema = SchemaFactory.createForClass(CollectionUser)