import { Component } from '@angular/core';

import { TweetService } from './tweet.service';

@Component({
	moduleId:module.id,
	selector: 'my-footer',
	templateUrl: './html/footer.template.html',
	styleUrls: ['./css/footer.style.css']
})

export class FooterComponent{

	constructor (private tweetService: TweetService){}	
}