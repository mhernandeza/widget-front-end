"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var TweetService = (function () {
    function TweetService(http) {
        this.http = http;
        this.tweets = [];
    }
    TweetService.prototype.getTweets = function () {
        console.log('Get tweets runs.');
        /*return this.http.get("http://localhost:8080/widget/webapi/profile")
            .map(response => {
                const data = response.json();
                console.log(data);
            })
            .catch(error => Observable.throw(error.json()));*/
        this.http.get("http://localhost:8080/widget/webapi/profile").toPromise()
            .then(function (response) {
            var data = response.json();
            console.log(data);
        })
            .catch(function (error) { return console.error(error); });
    };
    TweetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TweetService);
    return TweetService;
}());
exports.TweetService = TweetService;
//# sourceMappingURL=tweet.service.js.map