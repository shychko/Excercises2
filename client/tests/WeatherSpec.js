
describe('WeatherCtrl test', function () {

    var zip, controller, scope;
    beforeEach(module('exerciseApp'));
    beforeEach(module(function ($provide) {
        $provide.value('zip', {});
    }));
    beforeEach(inject(function ($controller) {
        controller = $controller('WeatherCtrl', '$scope', '$http', '$q', '$rootScope', {
            $scope: scope
        });
    }));

    it('assigns a zip to the controller', function () {
        expect(controller).toBeUndefined();
    });

});