import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<{
        id: number;
        email: string;
        name: string;
    }[]>;
    find(username: string): Promise<{
        id: number;
        email: string;
        name: string;
    }>;
    create(createUsers: CreateUserDto): Promise<{
        id: number;
        email: string;
        name: string;
    }>;
}
