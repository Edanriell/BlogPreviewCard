import { Controller, Get, Ip } from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";

import { UserService } from "../services";
import { LoggerService } from "../../logger/services";

@Controller()
export class UserController {
	private readonly logger = new LoggerService(UserController.name);

	constructor(private readonly userService: UserService) {}

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Get("user")
	async getUser(@Ip() ip: string) {
		this.logger.log(`User data requested from ip:\t${ip}`, UserController.name);
		return await this.userService.getUser();
	}
}
