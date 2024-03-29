/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { CarCategoryService } from './car-category.service';
import { CreateCarCategoryDto } from './dto/create-car-category.dto';
import { UpdateCarCategoryDto } from './dto/update-car-category.dto';

@Controller('car-category')
export class CarCategoryController {
  constructor(private readonly carCategoryService: CarCategoryService) {}

  @Post()
  create(@Body() createCarCategoryDto: CreateCarCategoryDto) {
    return this.carCategoryService.create(createCarCategoryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carCategoryService.findCategory(id);
  }

  @Patch(':id')
  updateCarsIds(@Param('id') id: string, @Body() body: {carIds: string[]}) {
    const {carIds} = body;
    return this.carCategoryService.updateCarIds(id, carIds);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carCategoryService.remove(+id);
  }
}
