import { Injectable } from '@nestjs/common';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';

@Injectable()
export class CostumerService {
  constructor(@InjectModel(Costumer.name) private CostumerModel: Model<Costumer>) { }

  async create(createCostumerDto: CreateCostumerDto) {
    createCostumerDto.password = await this.CostumerHash(createCostumerDto.password)

    this.CostumerModel.create(createCostumerDto)
  }

  findOne(Costumername: string) {
    const findedCostumer = this.CostumerModel.findOne({ Costumername: Costumername })
    return findedCostumer;
  }

  findAll() {
    const findedCostumers = this.CostumerModel.find().select("-password")
    return findedCostumers
  }

  private async CostumerHash(pass) {
    const saltOrRounds = 10
    const hashedPass = await bcrypt.
    
    hash(pass, saltOrRounds)
    return hashedPass
  }
}
