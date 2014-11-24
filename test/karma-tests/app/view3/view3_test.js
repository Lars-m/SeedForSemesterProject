describe('myAppRename.view3 View3Ctrl', function() {

  var scope, httpBackendMock, ctrl;
  var users = [
    {userName : "Lars", email :"l@l.dk",pw: "test",created : new Date(2014,11,2)},
    {userName : "Henrik", email :"h@h.dk",pw: "test",created : new Date(2014,11,2)},
  ];
  beforeEach(module('myAppRename.view3'));

  beforeEach(inject(function ($httpBackend, $rootScope, $controller) {
    httpBackendMock = $httpBackend;
    httpBackendMock.expectGET('adminApi/user').
      respond(users);
    scope = $rootScope.$new();
    ctrl = $controller('View3Ctrl', {$scope: scope});
  }));

  it('Should fetch two names ', function () {
    expect(scope.users).toBeUndefined();
    httpBackendMock.flush();
    expect(scope.users.length).toEqual(2);
  });

  it('Should fetch Lars and Henrik', function () {
    expect(scope.users).toBeUndefined();
    httpBackendMock.flush();
    expect(JSON.stringify(scope.users)).toEqual(JSON.stringify(users));
  });

});