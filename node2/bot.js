console.log("The bot is starting");
let Twit = require('twit'),
   TOKEN = require('../config/TWITTER.js');

let T = new Twit(TOKEN);

// Creates a get request based on the query and displays the text of the tweet
let params = {
  q: 'rainbow',
  count: 2
}
const gotData = (err, data, response) => {
  let tweets = data.statuses;
  for(let i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text);
  }
};
T.get('search/tweets', params, gotData);