import { Post } from "../../posts/models";

export type User = {
	id?: number;
	email: string;
	image?: string | null;
	name: string;
	surname: string;
	posts?: Post[] | null;
};
