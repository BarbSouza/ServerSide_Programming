//Give database information
//this is the localhost db
var mysql = require("mysql2");

//create a connection to database using the db info
var connection = mysql.createConnection({

    //The connection will ask for the database information
    host: "127.0.0.1",
    database: "mysql_db",
    user: "root",
    password: "password"
});

//Import the database information throught the connection var
//to enable this we will export the connection

module.exports = connection; //this variable contains the info about ...
