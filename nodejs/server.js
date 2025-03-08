const http=require("http");

const server = http.createServer((req,resp)=>{

    resp.statusCode =200;
    resp.setHeader("Content-type", "text/plain")
    resp.end("Hello from NodeJs Server !!");
});

server.listen(8000, () =>{
    console.log("Server Running in port 8000 - http://localhost:8000");
})