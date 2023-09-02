import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { JwtStategy } from './jwt.stategy';
@Module({

//色んな設定を書くことができる。
//jwtトークンを暗号化して、複合化するときに鍵が必要になってくるため、secretで登録できる。
//signOptionsはjwtトークンに有効期限を設定するもの
  imports: [
    UsersModule, 
    JwtModule.register({
    secret: '42tokyo',
    signOptions: {expiresIn: '1h'}
  })],
  controllers: [AuthController],
  providers: [AuthService, JwtStategy]
})
export class AuthModule {}
