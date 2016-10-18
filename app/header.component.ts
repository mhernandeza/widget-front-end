import { Component } from '@angular/core';

import { TweetService } from './tweet.service';

@Component({
	moduleId: module.id,
	selector: 'my-header',
	templateUrl: './html/header.template.html',
	styleUrls: ['./css/header.style.css']
})

export class HeaderComponent{

	constructor (private tweetService: TweetService){}	
	/* Not yet implemented. 
	changeUser(user: String){
		console.log(user);
		this.tweetService.getProfile(user);
	}*/
}