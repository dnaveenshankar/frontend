var http = require('http');

const server = http.createServer((req,resp) => {

    const data = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Demo Title</h1>
    <p>This is a sample text.</p>
</body>
</html>`;
    resp.statusCode = 200;
    resp.writeHead(200, { 'Content-Type': 'text/html' });
    resp.write(data);
    resp.end();

})
server.listen(8000, () => console.log('Server is running on port 8000'));