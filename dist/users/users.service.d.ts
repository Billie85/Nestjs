import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/database/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(user: CreateUserDto): Promise<{
        id: number;
        email: string;
        name: string;
    }>;
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
}
