import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})
export class ProfileUser extends Document {

    @Prop({
        required: true
    })
    userId: string;

    @Prop()
    imgProfile: string

    @Prop()
    textState: string

    @Prop()
    alias: string

    @Prop()
    biografy: string

}

export const ProfileUserSchema = SchemaFactory.createForClass(ProfileUser)