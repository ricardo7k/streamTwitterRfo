var Twitter = require('twitter');
var fs = require('fs');

var client = new Twitter({
  consumer_key: "sNmXKysaua0tgTvPvjpVj1eM1",
  consumer_secret: "ZZHxU8emGUPVmDLJlZLY6tMwU2aZwV6DIjVSOpRJleFnMYAeaD",
  access_token_key: "3145-m76anGpBGDVHnDz5eRhaaR9xTIMAZqjCLpyuGkEUo3XmD",
  access_token_secret: "CRBOxQxbqK78FHB8ok75gpATiXP6Os0IWjdgvlgiSho5u"
});

client.stream('statuses/filter', {
    track: 'Test+Stream+React',
    follow: 3145
  },
  function(stream) {
    stream.on('data', function(tweet) {
      console.log(
        tweet.id,
        tweet.text, 
        tweet.retweeted_status?tweet.retweeted_status.id:null,
        tweet.retweeted_status?tweet.retweeted_status.retweet_count:0,
        tweet.retweeted_status?tweet.retweeted_status.favorite_count:0,
      );
    });
    stream.on('error', function(error) {
      console.log(error);
    });

  }
);


// client.stream('statuses/user_timeline', {
//    id: '887335539036217344'
//   },
//   function(err, data) {
//     if(data) console.log(data.retweet_count, data.favorite_count);
//   }
// );
