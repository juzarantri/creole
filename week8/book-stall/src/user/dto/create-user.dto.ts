import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MaxLength,
  MinLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  public username: string;

  @IsEmail()
  public email: string;

  @MinLength(8)
  @MaxLength(16)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g)
  public password: string;
}
