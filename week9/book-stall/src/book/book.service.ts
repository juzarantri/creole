import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {
  @InjectRepository(Book)
  private readonly repository: Repository<Book>;
  @InjectRepository(User)
  private readonly userRepo: Repository<User>;

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    /// get the user
    const user: User = await this.userRepo.findOneBy({
      uid: createBookDto.uid,
    });

    /// create the book object
    const book: Book = new Book();
    book.author = createBookDto.author;
    book.bookName = createBookDto.bookName;
    book.genre = createBookDto.genre;
    book.user = user;

    /// inserting the data
    return this.repository.save(book);
  }

  findAll() {
    /// get all the books of this author
    return this.repository.find({
      select: { user: { username: true, password: true } },
      relations: {
        user: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
