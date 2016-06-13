/**
* Player.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
      device: {
          type: 'string',
          required: true
      },
      name:{
          type: 'string',
          size:3
      },
      position:{
          type: 'string',
          enum: ['top', 'left', 'right', 'bottom'],
          required: true
      },
      human:{
          type:'boolean',
          defaultsTo:false,
          required: true
      },
      life:{
          type:'integer',
          defaultsTo:10
      },
      color:{
          type:'string',
          size:6
      },
      paddle:{
          model:'paddle'
      },
      game:{
          model:'game'
      },
      score: {
          model: 'score'
      }
  }
};

