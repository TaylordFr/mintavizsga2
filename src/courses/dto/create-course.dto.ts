import { IsNotEmpty, IsString, IsDate, IsNumber, IsOptional, IsIn} from 'class-validator'

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  @IsIn(['solo', 'partner', 'group'], { message: 'Type must be either "solo", "partner", or "group"' })
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
