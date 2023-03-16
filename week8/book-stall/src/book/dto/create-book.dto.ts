import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  public bookName: string;

  @IsString()
  public author: string;

  @IsString()
  public genre: string;

  @IsString()
  public uid: string;
}
