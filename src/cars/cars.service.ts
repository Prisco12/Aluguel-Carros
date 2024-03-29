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
    return this.carsModel.findOne({ id: id });
  }

  update(id: number, updateData: UpdateCarDto) {
    return this.carsModel.findByIdAndUpdate({ _id: id, updateData });
  }

  remove(id: number) {
    return this.carsModel.deleteOne({ id: id });
  }
}
