describe('myAppRename.view2 view2Ctrl', function() {

  var scope, httpBackendMock, ctrl;
  var testResponse = {msg : "Test Message"};

  beforeEach(module('myAppRename.view2'));

  beforeEach(inject(function ($httpBackend, $rootScope, $controller) {
    httpBackendMock = $httpBackend;
    httpBackendMock.expectGET('userApi/test').
      respond(testResponse);
    scope = $rootScope.$new();
    ctrl = $controller('View2Ctrl', {$scope: scope});
  }));

  it('Should fetch two names ', function () {
    expect(scope.info).toBeUndefined();
    httpBackendMock.flush();
    expect(scope.info.msg).toEqual("Test Message");
  });

});