import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
import { PrismaService } from 'src/database/prisma.service';
import *  as bcryptjs from "bcryptjs";
@Injectable()
export class UsersService {
	//users: CreateUserDto[] = [];//値を宣言初期化してる。この場合は配列
constructor(private readonly prisma: PrismaService) {}


// 新しいユーザーを作成するメソッド
//this.users.push(user);元のコード
async create(user: CreateUserDto) {
		const newUser = await this.prisma.user.create({
			data: {
				id: user.id,
				username: user.username,
				password: await bcryptjs.hash(user.password, 12)
			},
		});
		return newUser;
	}

async findAll() {
		const users = await this.prisma.user.findMany();
		return users;
	}

findOne(username: string) {
    const user = this.prisma.user.findFirst({
        where: {
					username
        }
    });
	
    if (!user) {
        throw new NotFoundException(`not found user :(`);
    }
    return user;
	}
}