import { Body, Controller, Get, Param, Post, } from '@nestjs/common'; // 必要なモジュールをインポート
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}
	
	@Get()
	findAll() {
		return this.usersService.findAll();
	}

	@Get(':username')
	async findOne(@Param('username') username: string) {
			return this.usersService.findOne(username);
	}

	@Post()
	create(@Body() createUsers: CreateUserDto) {
		return this.usersService.create(createUsers);
 }
}