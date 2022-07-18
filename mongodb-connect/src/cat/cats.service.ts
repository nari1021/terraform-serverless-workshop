import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Cat } from './cat.schema';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {
    constructor(
        @Inject('CAT_MODEL')
        private catModel: Model<Cat>
    ) { }

    async create(createCatDto: CreateCatDto): Promise<Cat> {
        const createdCat = new this.catModel(createCatDto);
        console.log(createdCat.id);
        console.log(createdCat.name);
        console.log(createdCat.location);
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }
}