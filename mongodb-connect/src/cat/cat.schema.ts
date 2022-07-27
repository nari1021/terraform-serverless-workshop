import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class GeoPoint {
    @Prop({ default: 'Point' })
    type?: string;

    @Prop({ required: true, index: '2dsphere' })
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

    @Prop({ type: GeoPoint })
    location: GeoPoint;

    @Prop({ default: Date.now })
    createAt: Date;

    @Prop({ default: Date.now })
    updateAt: Date;
}
export type CatDocument = Cat & Document;
export const CatSchema = SchemaFactory.createForClass(Cat);