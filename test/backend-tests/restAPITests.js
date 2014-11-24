global.TEST_DATABASE = "mongodb://localhost/TestDataBase_xx1243";
global.SKIP_AUTHENTICATION = true;  //Skip security

var should = require("should");
var app = require("../../server/app");
var http = require("http");
var testPort = 9999;
var testServer;
var mongoose = require("mongoose");
var User = mongoose.model("User");

describe('REST API for /user', function () {
  //Start the Server before the TESTS
  before(function (done) {

    testServer = app.listen(testPort, function () {
      console.log("Server is listening on: " + testPort);
      done();
    })
    .on('error',function(err){
        console.log(err);
      });
  })

  beforeEach(function(done){
    User.remove({}, function ()
    {
      var array = [{userName : "Lars", email :"lars@a.dk",pw: "xxx"},{userName : "Henrik", email :"henrik@a.dk",pw: "xxx"}];
      User.create(array,function(err){
        done();
      });
    });
  })

  after(function(){  //Stop server after the test
    //Uncomment the line below to completely remove the database, leaving the mongoose instance as before the tests
    //mongoose.connection.db.dropDatabase();
    testServer.close();
  })

  it("Should get 2 users; Lars and Henrik", function (done) {
    http.get("http://localhost:"+testPort+"/adminApi/user",function(res){
      res.setEncoding("utf8");//response data is now a string
      res.on("data",function(chunk){
        var n = JSON.parse(chunk);
        n.length.should.equal(2);
        n[0].userName.should.equal("Lars");
        n[1].userName.should.equal("Henrik");
        done();
      });
    })
  });
});
