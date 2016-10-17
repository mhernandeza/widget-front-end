import { Component } from '@angular/core';

import { TweetService } from './tweet.service';

@Component({
	moduleId:module.id,
	selector: 'my-body',
	templateUrl: 'body.template.html'
})

export class BodyComponent{

	constructor (private tweetService: TweetService){}	

	monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
}