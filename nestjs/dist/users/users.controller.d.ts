import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<{
        id: number;
        username: string;
        password: string;
    }[]>;
    findOne(username: string, req: any): any;
    create(createUsers: CreateUserDto): Promise<{
        id: number;
        username: string;
        password: string;
    }>;
}
