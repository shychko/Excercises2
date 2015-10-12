//FactorySpec.js



describe('MyFactory', function () {

  var MyFactory;

  beforeEach(inject(function (_MyFactory_) {
    MyFactory = _MyFactory_;
  }));

  it('should check return value', function () {

    expect(MyFactory.getJSONFile('19107')).toBeTruthy();
  });

});



  //var MyFactory;
  //beforeEach(module('exerciseApp'));
  //beforeEach(inject(function (_MyFactory_) {
  //  MyFactory = _MyFactory_;
  //}));
  //
  //describe('Constructor', function () {

    //it('assigns a name', function () {
    //  expect(new MyFactory.getJSONFile()).toBeUndefined;
    //});

//  });
//
//});




//'use strict';
//
//(function() {
//  describe('MyFactory Spec', function() {
//
//    var MyFactory;
//
//    beforeEach(function() {
//      angular.module('exerciseApp');
//    });
//
//    beforeEach(inject(function($http) {
//      var $injector = angular.injector(['exerciseApp']);
//      MyFactory = $injector.get('MyFactory');
//    }));
//
//     it('is very true', function(){
//          MyFactory.getJSONFile(function(data) {
//           $scope.myData = data;
//          });
//       var output = MyFactory;
//       expect(output).toBeUndefined;
//     });
//
//  });
//}());
//
//
//

