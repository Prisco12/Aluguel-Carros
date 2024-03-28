import { IsEmail, IsInt, IsNotEmpty, IsString, Max, MaxLength, MinLength, IsDate, IsDateString ,IsBoolean } from 'class-validator'
import { IsValidCategoria } from 'src/car-category/dto/create-car-category.dto';
import { Categoria } from 'src/car-category/enums/car-category.enums';

export class CreateCarDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'Title is too short',
  })
  @MaxLength(100, {
    message: 'Title is too long',
  })
  name: string;

  @IsDateString()
  @IsNotEmpty()
  releaseYear: Date;

  @IsNotEmpty()
  @IsBoolean()
  available: boolean;

  @IsNotEmpty()
  @IsBoolean()
  gasAvailable: boolean;

  @IsNotEmpty()
  @IsValidCategoria()
  category: Categoria;
}
