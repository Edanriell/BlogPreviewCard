export type Post = {
	id?: number;
	image?: string | null;
	tags: string[];
	title: string;
	description: string;
	content?: string | null;
	publishDate: string;
	link: string;
	published?: boolean | null;
	author?: Author | null;
	authorId?: number | null;
};

type Author = {
	id?: number;
	email: string;
	image?: string | null;
	name: string;
	surname: string;
	posts?: Post[] | null;
};
