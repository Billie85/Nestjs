import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ignoreElements } from "rxjs";
import { JwtPayload } from "./interface/jwt-payload.interface";

@Injectable()
export class JwtStategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: '42tokyo'
		})
	}
	async validate(payload: JwtPayload) {
		return payload;
	}
}