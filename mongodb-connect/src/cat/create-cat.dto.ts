import { Type } from 'class-transformer';
import { IsNumber, IsObject, IsString, ValidateNested } from 'class-validator';

export class CreatePointDto {
    @IsString()
    type: string;

    @IsNumber({}, { each: true })
    coordinates: number[];
}

export class CreateCatDto {
    @IsString()
    readonly name: string;

    @IsNumber()
    readonly age: number;

    @IsString({ each: true })
    readonly breed: string;

    @IsObject()
    @ValidateNested({ each: true })
    @Type(() => CreatePointDto)
    readonly location: CreatePointDto;
}