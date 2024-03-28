import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cars, CarsDocument } from './schema/cars.schema';
import { Model } from 'mongoose';
import { CarsInterface } from './interface/cars.interface';
import { CarCategoryService } from 'src/car-category/car-category.service';
@Injectable()
export class CarsService {
  constructor(@InjectModel(Cars.name) private carsModel: Model<CarsDocument>) {}

  async create(createCarDto: CreateCarDto): Promise<CarsInterface> {
    const car = new this.carsModel(createCarDto);
    return car.save();
  }

  findAll() {
    return this.carsModel.find().exec(); // Retorna todos os carros do banco de dados
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
