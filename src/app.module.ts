import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CostumerModule } from './costumer/costumer.module';
import { CarCategoryModule } from './car-category/car-category.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    CarsModule,
    CostumerModule,
    CarCategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
