import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CostumerService } from './costumer.service';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';

@Controller('costumer')
export class CostumerController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
      return this.usersService.create(createUserDto)
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
      try {
          return this.usersService.findOne(username)
      } catch (error) {
          throw new HttpException({
              status: HttpStatus.FORBIDDEN,
              error: 'This is a custom message'
          },
              HttpStatus.FORBIDDEN,
              {
                  cause: error
              }
          )
      }
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
      return this.usersService.findAll()
  }
}
