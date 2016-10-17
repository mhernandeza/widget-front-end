import { Component } from '@angular/core';

import { TweetService } from './tweet.service';

@Component({
	moduleId: module.id,
	selector: 'my-header',
	template: '<h1>Widget Header</h1>'
})

export class HeaderComponent {

	constructor (private tweetService: TweetService){}
	
	
}