var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect("app/index.html")
});


router.post('/authenticate', function (req, res) {
  //TODO: Go and get UserName Password from "somewhere"
  //if is invalid, return 401
   if (req.body.username === 'user1' && req.body.password === 'test') {
    var profile = {
      username: 'user1',
      role: "user",
      id: 1000
    };
    // We are sending the profile inside the token
    var token = jwt.sign(profile, require("../security/secrets").secretTokenUser, { expiresInMinutes: 60*5 });
    res.json({ token: token });
    return;
  }

  if (req.body.username === 'admin1' && req.body.password === 'test') {
    var profile = {
      username: 'admin1',
      role: "admin",
      id: 123423
    };
    // We are sending the profile inside the token
    var token = jwt.sign(profile, require("../security/secrets").secretTokenAdmin, { expiresInMinutes: 60*5 });
    res.json({ token: token });
    return;
  }

  else{
    res.status(401).send('Wrong user or password');
    return;
  }
});


//Get Partials made as Views
router.get('/partials/:partialName', function(req, res) {
  var name = req.params.partialName;
  res.render('partials/' + name);
});

module.exports = router;
