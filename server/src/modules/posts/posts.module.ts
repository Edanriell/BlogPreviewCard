import { Module } from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service";
import { PostService } from "./services";
import { PostController } from "./controllers";

@Module({
	controllers: [PostController],
	providers: [PostService, PrismaService]
})
export class PostsModule {}
