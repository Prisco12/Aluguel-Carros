import { Categoria } from "src/car-category/enums/car-category.enums";

export interface CarsInterface {
  name: string;
  releaseYear: Date;
  available: boolean;
  gasAvailable: boolean;
  category: Categoria;
}
