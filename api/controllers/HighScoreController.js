/**
 * HighScoreController
 *
 * @description :: Server-side logic for managing highscores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   *
   * @param req
   * @param res
     */
	findBest: function(req, res) {
		HighScore.find({ limit: 10, sort: 'score DESC' }, function(err, highScoreList) {
			if (err) {
				return res.json(403, err);
			}
			if (highScoreList) {
				return res.json(highScoreList);
			}
		});
	},

  /**
   *
   * @param req
   * @param res
     */
	create: function(req, res) {
		var NewHighScore = {
			name: req.param('name'),
			score: req.param('score')
		}

		HighScore.create(NewHighScore, function(err, response) {
			if (err) { return res.json(403, err); }
			if (response) {

				HighScore.count({score: { '>=': response.score }})

				.exec(function(error, found) {

					return res.json({
						isHighScore: found < 10,
						pos: found+1
					})
				});
			}
		});
	}
};

