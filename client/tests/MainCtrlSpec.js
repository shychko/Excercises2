
describe('MainCtrl', function () {
    var mainCtrl, $scope;
    beforeEach(module('exerciseApp'));
    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.new();
        $controller('MainCtrl', {
            $scope: $scope
        });

    }));
});

it('should assign the correct view message to scope'), function(){
    expect($scope.message).toEqual('This is the HOME View');


};


