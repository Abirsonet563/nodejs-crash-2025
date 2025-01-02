import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res)=>{
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;

    console.log(req.url);
    console.log(req.method);
    res.writeHead(200, {"content-type": 'text/html'});
    res.end("<h1>Hello World</h1>");
});

server.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});