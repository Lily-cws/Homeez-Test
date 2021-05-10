const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "Pass1234",
    host: "localhost",
    port: 5432,
    database: "homeez"
});

module.exports = pool;