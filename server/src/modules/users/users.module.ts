import { Module } from "@nestjs/common";

import { UserController } from "./controllers";
import { UserService, UsersSeederService } from "./services";
import { PrismaService } from "../prisma/prisma.service";

@Module({
	controllers: [UserController],
	providers: [UserService, UsersSeederService, PrismaService]
})
export class UsersModule {}
