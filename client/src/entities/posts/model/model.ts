export type Post = {
	images: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
	categories: Array<string>;
	date: string;
	title: string;
	description: string;
	author: Author;
}

type Author = {
	name: string;
	images: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
}