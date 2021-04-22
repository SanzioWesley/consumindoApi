var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "swesleyy",
    database: "dbConnection"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE usuario (email VARCHAR(255), n int, result VARCHAR(15))";
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});