import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwerck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffe #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeDto: any) {
    this.coffees.push(createCoffeDto);
    return createCoffeDto;
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      return 'update';
    }
  }

  remove(id: string) {
    const coffeIndex = this.coffees.findIndex((item) => item.id === +id);
    this.coffees.splice(coffeIndex, 1);
  }
}
