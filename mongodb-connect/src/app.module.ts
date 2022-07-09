import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cat/cats.controller';
import { catsProviders } from './cat/cats.providers';
import { CatsService } from './cat/cats.service';
import { databaseProviders } from './database/database.providers';

@Module({
  imports: [],
  controllers: [
    AppController,
    CatsController
  ],
  providers: [
    AppService, ...databaseProviders,
    CatsService, ...catsProviders,
  ],
  exports: [
    ...databaseProviders
  ]
})
export class AppModule { }
