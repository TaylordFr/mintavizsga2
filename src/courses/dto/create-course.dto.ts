import { IsNotEmpty, IsString, IsDate, IsNumber, IsOptional} from 'class-validator'

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
  @IsOptional()
	created_at: Date

  @IsDate()
  @IsOptional()
	updated_at: Date
}
