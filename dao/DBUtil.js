var mysql = require("mysql");

function createConnection() {
    var connection = mysql.createConnection({
<<<<<<< HEAD
        // host:"localhost",
        host:"39.99.149.245",
        port:"3306",
        user:"root",
        // password:"123456",
=======
        // host:"172.26.194.112",
        host:"39.99.149.245",
        port:"3306",
        user:"root",
        // password:"Xin19990611;",
>>>>>>> 59a3d2c37a3679d1f283ed3a5505b2312c7cc823
        password:"root",
        database:"my_blog"
    });
    return connection;
}

module.exports.createConnection = createConnection;