var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:N', function(req, res, next) {
    res.send("Your number is: "+req.params.N)


});

module.exports = router;
