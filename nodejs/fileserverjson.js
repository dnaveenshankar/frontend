var http = require('http');

const server = http.createServer((req,resp) => {

    const data = {
        id: 10,
        name: "Naveen",
        email: "naveen@gmail.com"
    }
    resp.statusCode = 200;
    resp.writeHead(200, { 'Content-Type': 'application/json' });
    resp.write(JSON.stringify(data));
    resp.end();

})
server.listen(8000, () => console.log('Server is running on port 8000'));