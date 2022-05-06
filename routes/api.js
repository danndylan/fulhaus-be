var express = require('express');
var router = express.Router();
const Acronym = require('./../models/acronym');

/* GET acronym list. */
router.get('/acronym', async function(req, res, next) {
  try {
  
  const { page = 1, limit = 10 } = req.query;

  // execute fuzzy search with pagination
  var acronym = await Acronym.fuzzySearch(req.query.search)
  .limit(limit * 1)
  .skip((page - 1) * limit)
  .exec();

  // get total documents in Acronyms collection 
  const count = await Acronym.countDocuments();

  // add custom header for determining more page/s available.
  var totalPages = Math.ceil(count / limit);
  res.setHeader('More-Results', (page < totalPages));

  // return response with acronyms
  res.send(acronym);
} catch {
  res.status(400);
  res.send({ error: 'Acronym not found.' });
}

});

/* POST add acronym. */
router.post('/acronym', async function(req, res, next) {
  try {
    const acronym = new Acronym({
      acronym: req.body.acronym,
      definition: req.body.definition,
    });
    await acronym.save();
    res.send(acronym);
  } catch {
		res.status(400);
		res.send({ error: 'Required input missing.' });
	}
});

/* PATCH update acronym. */
router.patch('/acronym/:acronymID', async function(req, res, next) {
  try {
		const acronym = await Acronym.findOne({ acronym: req.params.acronymID });

		if (req.body.acronym) {
			acronym.acronym = req.body.acronym;
		}

		if (req.body.definition) {
			acronym.definition = req.body.definition;
		}

		await acronym.save();
		res.send(acronym);
	} catch {
		res.status(404);
		res.send({ error: 'Acronym does not exist.' });
	}
});

/* DELETE delete acronym. */
router.delete('/acronym/:acronymID', async function(req, res, next) {
  try {
		await Acronym.deleteOne({ acronym: req.params.acronymID });
		res.status(204).send();
	} catch {
		res.status(404);
		res.send({ error: 'Acronym does not exist.' });
	}
});

module.exports = router;
