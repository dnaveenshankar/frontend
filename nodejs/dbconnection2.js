const mysql = require("mysql2");
const http = require("http");

const host = "localhost";
const port = 8000;

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "mobilestoredb",
    user: "root",
    password: "root"
});

const server = http.createServer((req, res) => {
    con.connect(err => {
        if (err) throw err;
        console.log("Connected");

        const sql = "SELECT * FROM mobile_tbl";
        con.query(sql, (err, result) => {
            if (err) throw err;

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(result));

            con.end();
        });
    });
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});