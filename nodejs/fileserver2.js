const http = require('http');
const fs = require('fs');

const host ='localhost';
const port = 8000;

const server = http.createServer((req, resp) => {
    fs.readFile('demo.html', (err,data)=>{
        resp.writeHead(200, {'Content-Type': 'text/html'})
        resp.write(data);
        return resp.end();
    })
})
server.listen(port, () => console.log(`Server is running on http://${host}:${port}/`));