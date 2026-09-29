import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class BacklogGame extends Document {
    
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

export const BacklogGameSchema = SchemaFactory.createForClass(BacklogGame)