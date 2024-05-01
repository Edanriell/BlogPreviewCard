export class AuthorDto {
	public id;
	public email;
	public image;
	public name;
	public surname;

	constructor(author) {
		this.id = author.id;
		this.email = author.email;
		this.image = author.image;
		this.name = author.name;
		this.surname = author.surname;
	}
}
