import { Component, Input } from '@angular/core';

import { Tweet } from './tweet';

@Component({
	moduleId: module.id,	
	selector: 'my-body',
	templateUrl: './html/body.template.html',
	styleUrls: ['./css/body.style.css']
})

export class BodyComponent{

	@Input() tweet: Tweet;

	monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

}