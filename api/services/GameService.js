/**
 * Created by Denis on 13/11/2015.
 */


var game = {

    addPlayer: function (session, data, callback) {
        console.log('GameService addPlayer');

        if (!session.game) {
            Game.create({
                date: new Date(),
                players: [],
                balls: []
            }).exec(function success(err, game) {
                Game.addPlayer(game, data.device, function (err, game) {
                    session.game = game;
                    callback(err,game);
                });
            });
        }
        else {
            Game.addPlayer(session.game, data.device,function(err,game){
                session.game = game;
                callback(err,game);
            })
        }
    }
}

module.exports = game;