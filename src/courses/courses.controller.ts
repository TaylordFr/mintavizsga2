import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { PrismaService } from 'src/prisma.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService, 
    private readonly prisma: PrismaService,
  ) {}

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto) {
    const course = await this.coursesService.create(createCourseDto)

    return {
      statusCode: 201,
      message: "Course added successfully!",
      data: course
    }
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coursesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }

  @Post(":id/apply")
  async applyToCourse(@Param('id') courseId: number){
    try{
      const course = await this.prisma.courses.findUnique({
        where: {
          id: courseId
        }
      });

      if(!course){
        return {
          statusCode: 404,
          message: "Course not found!"
        }
      }


      const paymentAmount = course.length * 500;

      const apply = await this.prisma.applications.create({
        data: {
          courseId: course.id,
          price: paymentAmount
        },
      });

      return {
        statusCode: 201, 
        message: "Successfully applied to the course",
        data: {
          id: apply.id.toString(),
          courseId: apply.courseId.toString(),
          price: apply.price
        }
      }


    } catch(error){
      return {
        message: error.message,
        error: error
      }
    }
  }
}
