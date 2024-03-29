import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Categoria } from '../enums/car-category.enums';

export type CarCategoryDocument = HydratedDocument<CarCategory>;

@Schema()
export class CarCategory {
  @Prop({ required: true, enum: Categoria })
  name: string;

  @Prop()
  carIds: string[];

  @Prop({ required: true })
  price: number;
}

export const CarCategorySchema = SchemaFactory.createForClass(CarCategory);
