const http = require("http");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => 
{
    if (req.url === "/web/home" && req.method === "GET")
    {
        res.writeHead(200, { 'Content-Type': 'text/html', "Access-Control-Allow-Origin": "*" });
        res.end("<h1>Header</h1>This is some content");
    }  
    else if (req.url === "/api/test" && req.method === "GET")
    {
        res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });

        let data = "Hey Shola!";

        res.end(JSON.stringify(data));
    }  
    else 
    {
        res.writeHead(404, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
        res.end(JSON.stringify({ message: 'Route not found!' }));
    }
});

server.listen(port, hostname, () =>
{
    console.log(`Server running at http://${hostname}:${port}`);
})

