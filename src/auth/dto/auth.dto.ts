import { IsString, MinLength, MaxLength, IsEmail, Matches, IsEnum} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum UserRole {
  GUEST = 'guest',
  OWNER = 'owner',
  ADMIN = 'admin',
}

export class AuthDto {

  @ApiProperty({
    example: 'john@example.com',
    maxLength: 255,
  })
  @IsEmail({}, { message: 'Description' })
  @MaxLength(255)
  email!: string;

  @ApiProperty({
    example: 'Password123!',
    minLength: 8,
  })
  @IsString()
  @MinLength(8, { message: 'description' })
  @Matches(/[A-Z]/, {
    message: 'Must contain at least one uppercase letter',
  })
  @Matches(/[0-9]/, {
    message: 'Must contain at least one number',
  })
  @Matches(/[!@#$%^&*(),.?":{}|<>]/, {
    message: 'Must contain at least one special character',
  })
  password!: string;

}