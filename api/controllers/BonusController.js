/**
 * BonusController
 *
 * @description :: Server-side logic for managing bonuses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addBonus: function(req,res){
		Bonus.create( {	name:req.param('name'), // req.param("")
						target:req.param('target'),
						param:req.param('param'),
						action:req.param('action')}, 
			function(err,created){
				if(!err){
					return res.ok({
						value: "Bonus "+created.name+" créé !"
					});
				}else{
					return err ;
				}
		});
	},

	getAllBonus: function(req,res){
		Bonus.find({}, function(err,found){
			res.view('bonus',{'bonus':found});
		});
	},

	emitBonus: function(req,res){
		// Get all bonus
		var sendBonus  = function(){
			Bonus.find({},function(err,found){
				// Random bonus
				bonus = found[Math.floor(Math.random() * found.length)]
				idBonus = bonus.id ;
				nameBonus = bonus.name ;

				// Ramdom position
				posX = Math.floor(Math.random()*20+1) // systeme de grille 20 * 20
				posY = Math.floor(Math.random()*20+1)

				// Data to emit
				dataBonus = {"bonus": {
									"id":idBonus,
									"name":nameBonus,
									"caseX":posX,
									"caseY":posY
								}
							}
				console.log(dataBonus.bonus);
				//sails.sockets.blast("bonus",dataBonus);
			});
			ramdomTime = Math.floor(Math.random() * 5000);
			console.log(ramdomTime);
			setTimeout(function(){
				sendBonus();
			},ramdomTime);
		};
		sendBonus();
	},


	removeBonusByName: function(req,res){
		Bonus.destroy({name:req.param('name')}).exec(function (err){
		  console.log('The bonus has been deleted');
		});
	}
};
