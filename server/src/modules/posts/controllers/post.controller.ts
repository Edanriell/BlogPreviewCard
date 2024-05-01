import { Controller, Get, Ip } from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";

import { PostService } from "../services";
import { LoggerService } from "../../logger/services";

@Controller()
export class PostController {
	private readonly logger = new LoggerService(PostController.name);

	constructor(private readonly postService: PostService) {}

	@Throttle({ short: { ttl: 1000, limit: 1 } })
	@Get("post")
	async getPost(@Ip() ip: string) {
		this.logger.log(`Post data requested from ip:\t${ip}`, PostController.name);
		return await this.postService.getPost();
	}
}
