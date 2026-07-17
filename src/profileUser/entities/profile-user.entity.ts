import { Prop, Schema } from "@nestjs/mongoose";


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