const request = require('request');

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'i1syzqdx624i0h2q2xc6if1tyi0em5',
  },
};

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    const gameInfo = JSON.parse(body);
    for (let i = 0; i < 10; i += 1) {
      console.log(gameInfo.top[i].viewers, gameInfo.top[i].game.name);
    }
  }
}

request(options, callback);
