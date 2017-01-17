const DeepstreamServer = require('deepstream.io')
const C = DeepstreamServer.constants

var Deepstream = require( 'deepstream.io' );
/*
var RedisMessageConnector = require( 'deepstream.io-msg-redis' );
*/
var server = new Deepstream({
  host: '0.0.0.0',
  port: 8081
});
/*
server.set( 'messageConnector', new RedisMessageConnector( {
  port: 6379,
  host: 'wrredis-001.zqouos.0001.usw2.cache.amazonaws.com'
}));*/

// start the server
server.start()




