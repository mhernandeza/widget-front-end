import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Tweet } from './tweet';

@Injectable()

export class TweetService {
	
	tweets: Tweet[] = [];

	constructor(private http: Http){}

	getTweets(){
		console.log('Get tweets runs.');
			
		this.http.get("http://localhost:8080/widget/webapi/profile").toPromise()
			.then(response => {
				const data = response.json();
				for(let tweet of data){
					const entryTweet = new Tweet(tweet.text, new Date(tweet.creationDate), tweet.id, tweet.authorName, tweet.profileImage, tweet.screenName); 
					this.tweets.push(entryTweet);
				}
				console.log(this.tweets);
			})
			.catch(error => console.error(error));
	}

}

