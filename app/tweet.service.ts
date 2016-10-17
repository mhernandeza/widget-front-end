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
		/*return this.http.get("http://localhost:8080/widget/webapi/profile")
			.map(response => {
				const data = response.json();
				console.log(data);
			})
			.catch(error => Observable.throw(error.json()));*/
	
		this.http.get("http://localhost:8080/widget/webapi/profile").toPromise()
			.then(response => {
				const data = response.json();
				console.log(data);	
			})
			.catch(error => console.error(error));
	}

}

