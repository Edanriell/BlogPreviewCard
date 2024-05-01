import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";

import { PostsModule } from "../modules";

@Module({
	imports: [
		PostsModule,
		RouterModule.register([
			{
				path: "",
				children: [PostsModule]
			}
		])
	]
})
export class RouterConfigModule {}
