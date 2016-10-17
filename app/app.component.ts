import { Component, OnInit } from '@angular/core';
import { TweetService } from './tweet.service';

@Component({
  selector: 'my-app',
  template: `<my-header></my-header> 
  			<h1>Widget body</h1>`,
  providers: [TweetService]
})

export class AppComponent implements OnInit { 
	constructor (private tweetService: TweetService){}

	ngOnInit(){
		this.tweetService.getTweets();
	}
}
