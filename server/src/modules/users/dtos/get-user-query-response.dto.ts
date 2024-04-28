import { PostDto } from "./post-dto";

export class GetUserQueryResponseDto {
	public id;
	public email;
	public image;
	public name;
	public surname;
	public posts = [];

	constructor(user) {
		this.id = user.id;
		this.email = user.email;
		this.image = user.image;
		this.name = user.name;
		this.surname = user.surname;

		for (const post of user.posts) {
			this.posts.push(new PostDto(post));
		}
	}
}
