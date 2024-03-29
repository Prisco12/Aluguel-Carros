import { IsEmail, IsNumber, IsNotEmpty, IsString, Max, MaxLength, MinLength, IsDate, IsDateString ,IsBoolean, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, ValidationOptions, registerDecorator } from 'class-validator'
import { Categoria } from '../enums/car-category.enums';
import { Injectable } from '@nestjs/common';

@Injectable()
@ValidatorConstraint({ name: 'IsValidCategoria', async: false })
export class IsValidCategoriaConstraint implements ValidatorConstraintInterface {
  validate(name: any) {
    return Object.values(Categoria).includes(name);
  }

  defaultMessage() {
    return `Nome de categoria inválido. As opções disponíveis são: ${Object.values(Categoria).join(", ")}`;
  }
}

export function IsValidCategoria(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidCategoriaConstraint,
    });
  };
}

export class CreateCarCategoryDto {
  @IsNotEmpty()
  @IsValidCategoria()
  name: Categoria;

  @IsString()
  carIds: string[];

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
