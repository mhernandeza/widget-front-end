export class Tweet{
	
	text: string;
	creationDate: Date;
	id: number;
	authorName: string;
	profileImage: string;
	screenName: string;

	constructor(text: string, creationDate:Date, id?:number, authorName?: string, profileImage?: string, screenName?: string ){
	//Parameters followed by ? are optional.
		this.text = text;
		this.creationDate = creationDate;
		this.id = id;
		this.authorName = authorName;
		this.profileImage = profileImage;
		this.screenName = screenName;
	}
}