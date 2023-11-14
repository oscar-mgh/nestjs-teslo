import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class LoginUserDto {
  @ApiProperty({
    description: 'example@domain.com',
    uniqueItems: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: '$2b$10$P69NRjLzM9UZ9yFq6dsjNeETfvNvhoRGUtyk1wFiQkdj02mmXtuDa',
  })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;
}
