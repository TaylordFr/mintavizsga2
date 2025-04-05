import { Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class ApplicationsService {
  constructor(private readonly prisma: PrismaService){}

  async create(createApplicationDto: CreateApplicationDto) {
    try{
      const application = this.prisma.applications.create({
        data:{
          courseId: createApplicationDto.courseId,
          price: createApplicationDto.price
        }
      })

      return application

    } catch (error){
      return {statusCode: 404, message: error.message, error: error}
    }
    return 'This action adds a new application';
  }

  findAll() {
    return `This action returns all applications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} application`;
  }

  update(id: number, updateApplicationDto: UpdateApplicationDto) {
    return `This action updates a #${id} application`;
  }

  remove(id: number) {
    return `This action removes a #${id} application`;
  }
}
