/**
 * Game.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

    attributes: {
        date: {
            type: 'datetime'
        },
        players: {
            collection: 'player',
            via: 'game',
            maxLength: 4
        },
        balls: {
            collection: 'ball',
            via: 'game'
        }
    },


    log: function () {
        console.log(this.attributes.date);
        console.log(this.attributes.players);
        console.log(this.attributes.balls);
    },


    /**
     * Ajoute un joueur à la game et le sauvage en BDD
     * @param game : current game
     * @param device : id du leap à ajouter
     * @param callback : fonction de callback lancé dans le service
     */
    addPlayer: function (game, device, callback) {
        console.log('Game addPlayer');

        var findDevice = _.find(game.players, function (player) {
            return player.device == device;
        }, 'device');

        if (!findDevice)
            game.players.add(
                {
                    device: device,
                    position: 'top',
                    human: true
                }
            );

        game.save(function (err, game) {
            callback(err, game);
        });
    }

};

