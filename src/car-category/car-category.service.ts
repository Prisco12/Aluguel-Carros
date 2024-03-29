/* eslint-disable prettier/prettier */
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

  async findCategory(id: string): Promise<CarCategory> {
    const category = await this.carCategoryModel.findById(id).exec();
    return category;
  }

  async updateCarIds(id: string, carIds: string[]): Promise<CarCategory> {
    try {
    const category = await this.carCategoryModel.findById(id).exec();
    if (!category) {
      // Trate o caso em que a categoria não foi encontrada
      throw new Error('Categoria não encontrada');
    }
    const idRemoverCar = (
      .carIds || []).filter((idCars) => {
      category.carIds.includes(idCars);
    });

    await this.carCategoryModel.findByIdAndUpdate(id,
    {
      name: category.name,
      price: category.price,
      $pull: {
        carIds: {$in: idRemoverCar}
      },
    },
    {new: true}).exec()

    const idAddCar = carIds.filter((idCars) => {
      !category.carIds.includes(idCars);
    });

    await this.carCategoryModel.findByIdAndUpdate(id,
      {
        name: category.name,
        price: category.price,
        $addToSet: {
          carIds: {$each: idAddCar}
        },
      },
      {new: true}).exec()


    


    return category;
  } catch (error) {
    throw new Error(`Erro au atualizar a Categoria, ${error}`)
  }
  }

  update(id: number, updateCarCategoryDto: UpdateCarCategoryDto) {
    return `This action updates a #${id} carCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} carCategory`;
  }
}
