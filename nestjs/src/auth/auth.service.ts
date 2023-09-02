import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UsersService
    ) {}

    async validateUser({ username, password }: CreateUserDto) {
        const foundUser = await this.userService.findOne(username);
        if (foundUser) {
            const isValid = await bcrypt.compare(password, foundUser.password);
            if (isValid) {
                return true; // 認証成功
            }
        }
        return false; // 認証失敗
    }

    async login(user: CreateUserDto) {
        if (await this.validateUser(user)) {
            const payload = { username: user.username };
            const accessToken = this.jwtService.sign(payload);
            return {
                access_token: accessToken
            };
        }
        throw new UnauthorizedException('invalid credentials');
    }
}