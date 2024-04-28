import { Injectable, NotFoundException } from "@nestjs/common";

import { PrismaService } from "../../prisma/prisma.service";
import { LoggerService } from "../../logger/services";
import { GetUserQueryResponseDto } from "../dtos";

@Injectable()
export class UserService {
	private readonly logger = new LoggerService(UserService.name);

	constructor(private prisma: PrismaService) {}

	async getUser(): Promise<GetUserQueryResponseDto> {
		const usersCount = await this.prisma.user.count();

		if (usersCount === 0) {
			this.logger.error(`No user data to return.`, UserService.name);
			throw new NotFoundException("Did not found any user data to return.", {
				cause: new Error(),
				description: "There is no users in the database."
			});
		}

		const randomUserIndex = Math.floor(Math.random() * usersCount);

		const randomUser = await this.prisma.user.findMany({
			take: 1,
			skip: randomUserIndex,
			include: {
				posts: true
			}
		});

		return new GetUserQueryResponseDto(randomUser[0]);
	}
}
