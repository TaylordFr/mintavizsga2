import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CoursesService {

  constructor(private readonly prisma: PrismaService){}
  async create(createCourseDto: CreateCourseDto) {
    try{
      const newCourse = await this.prisma.courses.create({
        data: createCourseDto
      });


      return {
        ...newCourse,
        id: newCourse.id.toString()
      }
    }

    catch(error){
      return {statusCode: 500, message: error.message, error: error}
    }
  }

  async findAll() {
    try{
        const courses = await this.prisma.courses.findMany({
          select: {
            id: true,
            name: true,
            type: true,
            length: true,
            instructor: true,
          }
        })

        const coursesWithBigIntString = courses.map(course => ({
          ...course,
          id: course.id.toString(),
        }));

        return coursesWithBigIntString;
    }
    catch(error){
      return { statusCode: 500, message: error.message, error: error };
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
