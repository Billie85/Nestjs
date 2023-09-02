import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/database/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(user: CreateUserDto): Promise<{
        id: number;
        username: string;
        password: string;
    }>;
    findAll(): Promise<{
        id: number;
        username: string;
        password: string;
    }[]>;
    findOne(username: string): import(".prisma/client").Prisma.Prisma__UserClient<{
        id: number;
        username: string;
        password: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
}
