import { Component } from '@angular/core';

import { TweetService } from './tweet.service';

@Component({
	moduleId: module.id,
	selector: 'my-header',
	templateUrl: 'header.template.html'
})

export class HeaderComponent{

	constructor (private tweetService: TweetService){}	
}