import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login') // メソッドデコレータを正しく配置
    async create(@Body() createUserDto: CreateUserDto) {
        return this.authService.login(createUserDto); // 修正：authService.loginを呼び出す
    }
}
