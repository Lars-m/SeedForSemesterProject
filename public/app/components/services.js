'use strict';

/* Services */

// Demonstrate how to register services
angular.module('myAppRename.services', [])
  .service('InfoService', [function () {
    var info = "Hello World from a Service";
    this.getInfo = function(){return info;}
  }]);