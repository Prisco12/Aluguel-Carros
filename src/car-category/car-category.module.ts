import { Module } from '@nestjs/common';
import { CarCategoryService } from './car-category.service';
import { CarCategoryController } from './car-category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CarCategory, CarCategorySchema } from './schema/car-category.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CarCategory.name, schema: CarCategorySchema },
    ]),
  ],
  controllers: [CarCategoryController],
  providers: [CarCategoryService],
})
export class CarCategoryModule {}
