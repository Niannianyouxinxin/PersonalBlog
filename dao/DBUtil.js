var mysql = require("mysql");

function createConnection() {
    var connection = mysql.createConnection({
        host:"172.26.194.112",
        port:"3306",
        user:"root",
        password:"Xin19990611;",
        database:"my_blog"
    });
    return connection;
}

module.exports.createConnection = createConnection;