const router = require('express').Router();
const util = require('util')

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'omega2020.cbydc0au6atn.us-east-2.rds.amazonaws.com',
  user     : 'postgres',
  password : 'omega2020database',
  port     : '5432',
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

router.get('/',(req,res)=> {
    console.log(util.inspect(res))
    // res.status(200).send(res);
})

module.exports = router;
