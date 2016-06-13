/**
 * Created by Clémentine on 14/11/2015.
 */

var io = require('socket.io-client');

var repeter = function () {

  _.forEach(sails.config.leap.leaps, function (leap) {
    var client = io(leap);

    client.on('ready', function (data) {
      EmitterService.eventEmitter.emit('ready', data);
    });

    client.on('handpos', function (data) {
      //console.log('LeapService handpos');
      EmitterService.eventEmitter.emit('handpos', data);
    });

    client.on('jump' ,function (data) {
      //console.log('LeapService jump');
      EmitterService.eventEmitter.emit('jump', data);
    });

    client.on('detected', function (data) {
      //console.log('LeapService detected');
      EmitterService.eventEmitter.emit('detected', data);
    });

    client.on('quit', function (data) {
      //console.log('LeapService quit');
      EmitterService.eventEmitter.emit('quit', data);
    });

    client.on('leave', function (data) {
      //console.log('LeapService leave');
      EmitterService.eventEmitter.emit('leave', data);
    });
  })
};

module.exports = new repeter();

