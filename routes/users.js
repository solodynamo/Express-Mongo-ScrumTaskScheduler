var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  next();
});

router.get('/' ,function( req ,res)
{
  console.log("hiiy ueadh just USERexecuted next()");
})

module.exports = router;
