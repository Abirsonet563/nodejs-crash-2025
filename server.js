import http from 'http';
const PORT = 8000;

const server = http.createServer((req, res)=>{
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;

    res.writeHead(500, {"content-type": 'application/json'});
    res.end(JSON.stringify({message: 'Server Error'}));
});

server.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});