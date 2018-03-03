var express = require('express');
var router = express.Router();

router.get('/tinh', function(req, res, next) {
  var x = parseFloat(req.query.txtX);
  var y = parseFloat(req.query.txtY);
  var operation = req.query.operation;
  var rs=0;

  switch(operation) {
  	case "+":
  		rs = x+y;
  		break;
  	case "-":
  		rs = x-y;
  		break;
  	case "*":
  		rs = x*y;
  		break;
  	case "/":
  		rs = x/y;
  		break;
  }
  var result = {};
  result.result = rs;
    res.status(200).json(result);
	});
module.exports = router;