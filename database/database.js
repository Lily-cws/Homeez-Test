const Pool = require('pg').Pool;

//local
// const pool = new Pool({
//     user: "postgres",
//     password: "Pass1234",
//     host: "localhost",
//     port: 5432,
//     database: "homeez"
// });

const pool = new Pool({
    user: "postgres",
    password: "pass1234",
    host: "database-homeez.cxal7ebvyqej.ap-southeast-1.rds.amazonaws.com",
    port: 5432,
    database: "dbhomeez"
});

module.exports = pool;