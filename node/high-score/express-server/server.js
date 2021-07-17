const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

let highScores = [];

// initialise some data
highScores.push( { "name": "Shola", "score": 227 });
highScores.push( { "name": "Stuart", "score": 24 });
highScores.push( { "name": "Usain", "score": 198 });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) 
{
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

    // Pass to next layer of middleware
    next();
});

app.get('/', (req, res) => 
{
    res.send('Hello World!')
});
  
app.get('/api/scores', (req, res) => 
{
    highScores = highScores.sort(function(a, b) 
    {
        return b.score - a.score;
    });

    res.send(highScores);
});

app.post('/api/scores', (req, res) => 
{
    highScores.push( { "name": req.body.name, "score": req.body.score });
    console.table(highScores);
    res.end();
});

app.listen(port, () => 
{
    console.log(`Node express server listening at http://localhost:${port}`)
});
