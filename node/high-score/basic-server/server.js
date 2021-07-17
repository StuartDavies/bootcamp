const http = require("http");

const hostname = "localhost";
const port = 3000;

let highScores = [];

// initialise some data
highScores.push( { "name": "Shola", "score": 227 });
highScores.push( { "name": "Stuart", "score": 24 });
highScores.push( { "name": "Usain", "score": 198 });

const server = http.createServer((req, res) => 
{
    if (req.url === "/api/scores")
    {
        if (req.method === "OPTIONS")
        {
            res.writeHead(204, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*", 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE', 'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type' });
            res.end();
        }
        else if (req.method === "GET") 
        {
            // get all the high scores

            highScores = highScores.sort(function(a, b) {
                return b.score - a.score;
            });

            res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});
            res.end(JSON.stringify(highScores));
        }
        else if (req.method === "POST") 
        {
            // submit a high score

            let body = '';
            req.on('data', (chunk) => 
            {
                body += chunk;
            }).on('end', () => 
            {
                let newScore = JSON.parse(body);

                highScores.push( { "name": newScore.name, "score": newScore.score });
                console.table(highScores);
            });

            res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
            res.end();
        }
    }
    else
    {
        res.writeHead(404, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
        res.end(JSON.stringify({ message: 'Route not found!' }));
    }
});

server.listen(port, hostname, () => 
{
    console.log(`Node basic server running at http://${hostname}:${port}`);
})
