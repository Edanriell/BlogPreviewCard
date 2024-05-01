import { Module } from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service";
import { UsersSeederService } from "./services";

@Module({
	providers: [UsersSeederService, PrismaService]
})
export class UsersModule {}
