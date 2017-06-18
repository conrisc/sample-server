var express = require('express');
var router = express.Router();
var data = require("../data");


/* GET home page. */
router.get('/info/:id', function(req, res) {
  let id = req.params['id'];
  if (typeof data[id] === "undefined") {
    res.status(404).json({status: 'error'});
  } else {
    res.json(data[id]);
  }
});

router.get('/infs', function(req, res) {
    let newRecord = {
      "name": req.query['name'],
      "surname": req.query['surname'],
      "position": req.query['position'],
      "email": req.query['email']
    }
    let id;
    for (id=1;typeof data[id] !== "undefined";id++) {}
    data[id] = newRecord;
    res.json(data);
});

module.exports = router;
