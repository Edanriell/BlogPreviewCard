export class PostDto {
	public image;
	public tags;
	public title;
	public description;
	public publishDate;

	constructor(post) {
		this.image = post.image;
		this.tags = post.tags;
		this.title = post.title;
		this.description = post.description;
		this.publishDate = post.publishDate;
	}
}
