var Twitter = require('twitter');
var fs = require('fs');

var client = new Twitter({
  consumer_key: "sNmXKysaua0tgTvPvjpVj1eM1",
  consumer_secret: "ZZHxU8emGUPVmDLJlZLY6tMwU2aZwV6DIjVSOpRJleFnMYAeaD",
  access_token_key: "3145-m76anGpBGDVHnDz5eRhaaR9xTIMAZqjCLpyuGkEUo3XmD",
  access_token_secret: "CRBOxQxbqK78FHB8ok75gpATiXP6Os0IWjdgvlgiSho5u"
});

// client.get('statuses/user_timeline', {
//     screen_name: 'ricardo7k',
//     count: 1
//   },
//   function(err, data) {
//     // console.log("'"+err+"'");
//     console.log(data);
//   }
// );

// client.stream('statuses/favorites/users', {
//    id: '877581051345813508'
//   },
//   function(err, data) {
//     console.log(data);
//   }
// );

// client.get('statuses/show', {
//    id: '877581051345813508'
//   },
//   function(err, data) {
//     console.log(data);
//   }
// );
var n = 0;
fs.writeFile("texto.csv", "");
client.stream('statuses/filter', {
    track: 'corinthians'
  },
  function(stream) {
    var d = new Date();
    stream.inicial = d.getTime();
    stream.on('data', function(tweet) {
      var d = new Date();
      if(tweet.user) {
        var otext = d.getTime()-this.inicial + "," + tweet.user.screen_name + "," + tweet.text.substr(0, 20)+"..."+"\n";
        fs.appendFile("texto.csv", otext, function(err) {
          if(err) {
            console.log(err);
          } else {
            //console.log(otext);
            n++;
            if(n%1000==0) console.log(n);
          }
        }); 
      }
    });
    stream.on('error', function(error) {
      console.log(error);
    });
  }
);
