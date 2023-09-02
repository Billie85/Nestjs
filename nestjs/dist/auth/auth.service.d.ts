import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly userService;
    constructor(jwtService: JwtService, userService: UsersService);
    validateUser({ username, password }: CreateUserDto): Promise<boolean>;
    login(user: CreateUserDto): Promise<{
        access_token: string;
    }>;
}
