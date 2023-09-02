import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './database/prisma.module'
import { PrismaService } from './database/prisma.service';
import { AuthModule } from './auth/auth.module';

//クラスを受け取って色々いじるのがデコレータ
@Module({
  imports: [UsersModule, PrismaModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],//条件2
})
export class AppModule {}