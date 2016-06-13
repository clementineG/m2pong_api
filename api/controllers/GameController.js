/**
 * GameController
 *
 * @description :: Server-side logic for managing Games
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports  = {

  init: function (req,res) {
    console.log('GameController init');


    EmitterService.eventEmitter.on('detected', function (data) {
      console.log('GameController detected');
      // Ajouter un player
      GameService.addPlayer(req.session, data, function(err, game){
        console.log('GameController Callback ');
        sails.log(req.session.game);
        sails.log(req.session.game.players);
        if(req.session.game.players.length >= 1){
          console.log('OK JE LANCE LE JEU ! ');
          //return res.view('configuration');

        }
      });
    });



    return res.view('index');
  }
};





