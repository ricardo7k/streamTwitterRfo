var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: "coGuTMm23MMEvNXblHWViN1L5",
  consumer_secret: "JQkfDuS5a6B3fv12Ub30pACrdzYBtNRVygVoOGl3UP9B3VIYuo",
  access_token_key: "3145-zUEttXKXkgwRWoYVQGrjtryBaZcrcflKxvl5nrdNFaMYm",
  access_token_secret: "Tq0Akg5QqGIvna8Z0o0ypLveoOtIbnry42JGDBJ3ZIfAw"
});

client.stream('statuses/filter', {track: 'com%20ricardo7k'},  function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    console.log(error);
  });
});
