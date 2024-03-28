import { Injectable } from '@nestjs/common';
import { CreateCarCategoryDto } from './dto/create-car-category.dto';
import { UpdateCarCategoryDto } from './dto/update-car-category.dto';
import { CarCategory, CarCategoryDocument } from './schema/car-category.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarCategoryInterface } from './interface/car-category.interface';




@Injectable()
export class CarCategoryService {
  constructor(
    @InjectModel(CarCategory.name)
    private carCategoryModel: Model<CarCategoryDocument>,
  ) {}

  create(createCarCategoryDto: CreateCarCategoryDto) {
    const carCategory = new this.carCategoryModel(createCarCategoryDto);
    return carCategory.save();
  }

  findAll() {
    return this.carCategoryModel.find().exec();
  }

  findOne(id: number) {
    return thius;
  }

  update(id: number, updateCarCategoryDto: UpdateCarCategoryDto) {
    return `This action updates a #${id} carCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} carCategory`;
  }
}
