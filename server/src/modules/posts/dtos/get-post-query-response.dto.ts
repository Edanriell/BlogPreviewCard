import { AuthorDto } from "./author-dto";

export class GetPostQueryResponseDto {
	public id;
	public image;
	public tags;
	public title;
	public description;
	public publishDate;
	public link;
	public author;

	constructor(post) {
		this.id = post.id;
		this.image = post.image;
		this.tags = post.tags;
		this.title = post.title;
		this.description = post.description;
		this.publishDate = post.publishDate;
		this.link = post.link;
		this.author = new AuthorDto(post.author);
	}
}
