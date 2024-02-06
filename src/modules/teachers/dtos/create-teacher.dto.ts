import { IsString, IsEmail, IsStrongPassword } from 'class-validator';

export class CreateTeacherDto {
  @IsString({ message: 'Name must be string' })
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minUppercase: 1,
    minLowercase: 1,
    minSymbols: 1
  })
  password: string;
}
