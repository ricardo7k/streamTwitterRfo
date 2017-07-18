var Twitter = require('twitter');
var fs = require('fs');

var client = new Twitter({
  consumer_key: "sNmXKysaua0tgTvPvjpVj1eM1",
  consumer_secret: "ZZHxU8emGUPVmDLJlZLY6tMwU2aZwV6DIjVSOpRJleFnMYAeaD",
  access_token_key: "3145-m76anGpBGDVHnDz5eRhaaR9xTIMAZqjCLpyuGkEUo3XmD",
  access_token_secret: "CRBOxQxbqK78FHB8ok75gpATiXP6Os0IWjdgvlgiSho5u"
});

client.stream('statuses/filter', {
    track: 'Test Stream React'
  },
  function(err, data) {
    // console.log("'"+err+"'");
    console.log(data);
  }
);

// client.stream('statuses/favorites/users', {
//    id: '877581051345813508'
//   },
//   function(err, data) {
//     console.log(data);
//   }
// );

// client.stream('statuses/user_timeline', {
//    id: '887335539036217344'
//   },
//   function(err, data) {
//     if(data) console.log(data.retweet_count, data.favorite_count);
//   }
// );
