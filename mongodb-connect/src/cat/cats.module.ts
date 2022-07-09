import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CatsController } from './cats.controller';
import { catsProviders } from './cats.providers';
import { CatsService } from './cats.service';

@Module({
    imports: [DatabaseModule],
    controllers: [CatsController],
    providers: [
        CatsService,
        ...catsProviders,
    ],
    exports: [CatsService]
})
export class CatsModule { }