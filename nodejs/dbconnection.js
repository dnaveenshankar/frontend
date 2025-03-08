const mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "mobilestoredb",
    user: "root",
    password: "root"
  });

  con.connect( err => {
    if (err) throw err;
    console.log("Database Connected");

    const sql ="select * from mobile_tbl";
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        con.end();
    })
  })