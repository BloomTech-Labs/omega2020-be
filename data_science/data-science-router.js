const router = require('express').Router();

var mysql = require('mysql');

var connection = mysql.createConnection({
    user: 'postgres',
    password: 'omega2020database',
    host: 'omega2020.cbydc0au6atn.us-east-2.rds.amazonaws.com',
    database: 'postgres'
})

connection.connect(function(err) {
    if (err) throw err;
});

router.get('/',(req,res)=> {
    res.json('OK');
})

module.exports = router;
