import { Component } from '@angular/core';

import { BodyComponent } from './body.component';
import { TweetService } from './tweet.service';
import { Tweet } from './Tweet';

@Component({
	moduleId: module.id,
	selector: 'my-tweet-list',
	templateUrl: './html/tweet-list.template.html',
	styleUrls: ['./css/tweet-list.style.css']
})

export class TweetListComponent {

	constructor(private tweetService:TweetService){}

}