import { IsNotEmpty, IsString, IsDate, IsNumber} from 'class-validator'

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
	type: string 
	
  @IsNotEmpty()
  @IsNumber()
  length: number

  @IsNotEmpty()
  @IsString()
	instructor: string

  @IsDate()
	created_at: Date

  @IsDate()
	updated_at: Date
}
