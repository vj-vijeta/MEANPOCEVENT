var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('purchaseSuccess', function(purchase) {
  console.log('Purchase success');

  // Do something with purchase
});

emitter.on('pgEvent', function(req) {
    // Do Something with req object 
});

emitter.on('pgUser', function(req) {
    // Do Something with req object 
});

emitter.on('twitterRequestToken', function(requestToken, requestSecret){
    // Do Something with requestToken and requestSecret
});

emitter.on('twitterCallback', function(query){
    // Do Something with query object
});

emitter.on('twitterAccessToken', function(accessToken, accessSecret){
    // Do Something with req object
});

emitter.on('twitterSuccessFulLogin', function(user){
    // Do Something with user object
});

module.exports = emitter;