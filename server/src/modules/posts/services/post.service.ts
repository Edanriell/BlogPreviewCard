import { Injectable, NotFoundException } from "@nestjs/common";

import { PrismaService } from "../../prisma/prisma.service";
import { LoggerService } from "../../logger/services";
import { GetPostQueryResponseDto } from "../dtos";

@Injectable()
export class PostService {
	private readonly logger = new LoggerService(PostService.name);

	constructor(private prisma: PrismaService) {}

	async getPost(): Promise<GetPostQueryResponseDto> {
		const postsCount = await this.prisma.post.count();

		if (postsCount === 0) {
			this.logger.error(`No post data to return.`, PostService.name);
			throw new NotFoundException("Did not found any post data to return.", {
				cause: new Error(),
				description: "There is no posts in the database."
			});
		}

		const randomPostIndex = Math.floor(Math.random() * postsCount);

		const randomPost = await this.prisma.post.findMany({
			take: 1,
			skip: randomPostIndex,
			include: {
				author: true
			}
		});

		return new GetPostQueryResponseDto(randomPost[0]);
	}
}
