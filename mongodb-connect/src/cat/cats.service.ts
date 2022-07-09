import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCatDto } from './schemas/dto/create-cat.dto';
import { Cat } from './schemas/interfaces/cat.interface';

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
        return createdCat.save();
    }

    async findAll(): Promise<Cat[]> {
        return this.catModel.find().exec();
    }
}