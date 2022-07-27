import { Type } from 'class-transformer';
import { IsNumber, IsObject, IsString, ValidateNested } from 'class-validator';

export class CreateGeoPointDto {
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
    @Type(() => CreateGeoPointDto)
    readonly location: CreateGeoPointDto;
}