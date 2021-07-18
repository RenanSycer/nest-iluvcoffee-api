import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

//using partial types to copy dtos
// yarn add @nestjs/mapped-types

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
  /* readonly name?: string;
  readonly brand?: string;
  readonly flavors?: string[]; */
}
