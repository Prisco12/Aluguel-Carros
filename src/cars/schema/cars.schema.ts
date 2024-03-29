import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Categoria } from 'src/car-category/enums/car-category.enums';

export type CarsDocument = HydratedDocument<Cars>;

@Schema()
export class Cars {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  releaseYear: Date;

  @Prop({ required: true })
  available: boolean;

  @Prop({ required: true })
  gasAvailable: boolean;

  @Prop({ required: true })
  idCategory: string;
}

export const CarsSchema = SchemaFactory.createForClass(Cars);
