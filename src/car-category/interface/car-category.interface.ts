import { Categoria } from "../enums/car-category.enums";

export interface CarCategoryInterface {
  id: number;
  name: Categoria;
  carIds: string;
  price: number;
}
