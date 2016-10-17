"use strict";
var Tweet = (function () {
    function Tweet(text, creationDate, id, authorName, profileImage, screenName) {
        //Parameters followed by ? are optional.
        this.text = text;
        this.creationDate = creationDate;
        this.id = id;
        this.authorName = authorName;
        this.profileImage = profileImage;
        this.screenName = screenName;
    }
    return Tweet;
}());
exports.Tweet = Tweet;
//# sourceMappingURL=tweet.js.map