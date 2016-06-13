/**
 * PaddleController
 *
 * @description :: Server-side logic for managing Paddles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    create: function(req, res) {
        var newPaddle = {
            position: req.param('position'),
            size: req.param('size'),
            inverse: req.param('inverse'),
            sticky: req.param('sticky'),
            rotable: req.param('rotable')
        };

        Paddle.create(newPaddle, function(err, created) {
            if(!err){
                return res.ok({
                    value: "Paddle "+created.id+" créé !"
                });
            }else{
                return err ;
            }
        });

    },

    startHandPos: function(req, res) {
        EmitterService.eventEmitter.on('handpos', function (data) {
            console.log(data);
            console.log('OLERRRR');
        });
    },

    stopHandPos: function(req) {
        EmitterService.eventEmitter.removeListener('handpos', function () {
            console.log('The paddle has been stopped');
        });
    },

    removePaddle: function(req,res){
        Paddle.destroy({id:req.param('id')}).exec(function (err){
            console.log('The paddle has been deleted');
            return res.ok({
                value: "Paddle "+req.param('id')+" deleted !"
            });
        });
    }
};

