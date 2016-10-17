import { Component } from '@angular/core';

import { TweetService } from './tweet.service';

@Component({
	moduleId:module.id,
	selector: 'my-footer',
	templateUrl: 'footer.template.html'
})

export class FooterComponent{

	constructor (private tweetService: TweetService){}	
}