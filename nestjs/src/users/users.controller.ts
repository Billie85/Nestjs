import { Body, Controller, Get, Param, Post, UseGuards, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
import { UsersService } from './users.service'
import { AuthGuard } from '@nestjs/passport';
import { Request } from '@nestjs/common';


@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}
	
	@Get()
	findAll() {
		return this.usersService.findAll();
	}

	@Get(':username')
	@UseGuards(AuthGuard('jwt'))
	findOne(@Param('username') username: string, @Request() req: any) {
		return req.user
			//return this.usersService.findOne(username);
	}


	//新規登録
	@Post()
	create(@Body() createUsers: CreateUserDto) {
		return this.usersService.create(createUsers);
 }
}