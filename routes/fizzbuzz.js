var express = require('express');
var router = express.Router();

/* GET fizzbuzz. */
router.get('/:N', function(req, res, next) {
    var N = req.params.N

    if( N > 0 && N < 100000 ){
      var answer = ''
      if(N%3==0){
        answer+="Fizz"
      }
      if(N%5==0){
        answer+="Buzz"
      }
      if(answer == ''){
        res.send(N)
      }else{
        res.send(answer)
      }
    }else{
      res.status(400).send("Bad request try again");
    }

});

module.exports = router;
