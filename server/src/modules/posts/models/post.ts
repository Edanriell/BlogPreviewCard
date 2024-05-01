import { User } from "../../users/models";

export type Post = {
	id?: number;
	image?: string | null;
	tags: string[];
	title: string;
	description: string;
	content?: string | null;
	publishDate: Date;
	published?: boolean | null;
	author?: User | null;
	authorId?: number | null;
};
