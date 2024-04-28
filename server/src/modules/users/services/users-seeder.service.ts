import { join } from "path";
import * as fs from "fs";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Post } from "@prisma/client";

import { PrismaService } from "../../prisma/prisma.service";
import { LoggerService } from "../../logger/services";
import { User } from "../models";

@Injectable()
export class UsersSeederService {
	private static readonly logger = new LoggerService(UsersSeederService.name);
	private static readonly prisma: PrismaService = new PrismaService();

	private static async createUser(userData: User): Promise<void> {
		const { email, image, name, surname, posts } = userData;

		const user = await UsersSeederService.prisma.user.create({
			data: {
				email,
				image,
				name,
				surname,
				posts: {
					create: (posts as unknown as Post[]).map((postData) => ({
						...postData
					}))
				}
			}
		});

		this.logger.log(
			`User created: ${user.name + " " + user.surname} successfully`,
			UsersSeederService.name
		);
	}

	public static async seedUsersData(): Promise<void> {
		const mode = new ConfigService().get<string>("NODE_ENV");
		let rootFolderPath: string;

		if (mode === "development") {
			rootFolderPath = join(__dirname, "..\\..\\..\\..\\src");
		} else {
			rootFolderPath = join(__dirname, "..\\..\\..\\");
		}
		const usersDataFilePath = `${rootFolderPath}\\data\\users.json`;

		const usersInitialized = await UsersSeederService.prisma.user.findMany();

		fs.readFile(usersDataFilePath, "utf8", async (error, users) => {
			if (error) {
				this.logger.error(`Could not read users data: ${error}`, UsersSeederService.name);
				throw new Error("Unexpected error occurred. Could not read the necessary data for users.");
			}

			try {
				const usersData = JSON.parse(users);

				if (usersData.length === usersInitialized.length) {
					this.logger.warn(
						`All users from users data file, already exists in the database.`,
						UsersSeederService.name
					);
					this.logger.warn(
						`!!  Please remove UsersSeederService, seedUsersData function call from the codebase.  !!`,
						UsersSeederService.name
					);
					return;
				}

				for (const userData of usersData) {
					await UsersSeederService.createUser(userData);
				}

				this.logger.log(
					`Successfully created ${usersData.length} users in database.`,
					UsersSeederService.name
				);
			} catch (error) {
				this.logger.error(
					`An error occurred while parsing users json data: ${error}`,
					UsersSeederService.name
				);
				throw new Error("Failed to parse users json data.");
			}
		});
	}
}
