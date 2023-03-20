import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEnvPath } from './common/helper/env.helper';
import { TypeOrmConfigService } from './shared/typeorm/typeorm.service';
import { UserModule } from './user/user.module';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { OrderDetailsModule } from './order-details/order-details.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    UserModule,
    BookModule,
    AuthModule,
    OrderDetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
