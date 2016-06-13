/**
 * Created by Clémentine on 14/11/2015.
 */

var events = require('events');
var eventEmitter = new events.EventEmitter();

var emitterService = {
  eventEmitter : eventEmitter
}

module.exports = emitterService;

