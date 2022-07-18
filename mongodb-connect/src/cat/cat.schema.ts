import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export class Point {
    @Prop({ required: true })
    type: string;

    @Prop({ required: true })
    coordinates: number[];
}

@Schema({ collection: 'cats' })
export class Cat {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;

    @Prop({ type: Types.ObjectId, ref: 'Point' })
    location: Point;

    @Prop({ default: Date.now })
    createAt: Date;

    @Prop({ default: Date.now })
    updateAt: Date;
}
export type CatDocument = Cat & Document;
export const CatSchema = SchemaFactory.createForClass(Cat);