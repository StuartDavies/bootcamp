var express = require('express')
var router = express.Router()

let highScores = [];

// initialise some data
highScores.push( { "name": "Shola", "score": 427 });
highScores.push( { "name": "Stuart", "score": 124 });
highScores.push( { "name": "Usain", "score": 398 });

router.get('/scores', (req, res) => 
{
    highScores = highScores.sort(function(a, b) 
    {
        return b.score - a.score;
    });

    res.send(highScores);
});

router.post('/scores', (req, res) => 
{
    highScores.push( { "name": req.body.name, "score": req.body.score });
    console.table(highScores);
    res.end();
});

module.exports = router