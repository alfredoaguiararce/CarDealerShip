import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { SqlController } from './sql/sql.controller';

@Module({
  imports: [CarsModule],
  controllers: [SqlController],
  providers: [],
  exports:[]
})

export class AppModule {}
