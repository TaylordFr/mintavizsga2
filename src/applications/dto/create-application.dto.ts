import { IsNotEmpty, IsNumber } from "class-validator"


export class CreateApplicationDto {

  @IsNotEmpty()
  @IsNumber()
  courseId: number

  @IsNotEmpty()
  @IsNumber()
  price: number

}
