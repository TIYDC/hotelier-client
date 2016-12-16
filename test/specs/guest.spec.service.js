(function() {
  'use strict';

  var expect = chai.expect;

  describe('Able to add a new guest', function(){
    var GuestService;
    var $httpBackend;
    var $rootScope;
    var mockLoginService = {};


    beforeEach(module('hotelier'));

    beforeEach(module(function($provide) {
      $provide.value('LoginService', mockLoginService);
    }));

    beforeEach(inject(function(_$rootScope_, _$httpBackend_, _GuestService_){
      GuestService = _GuestService_;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;



      mockLoginService.isLoggedIn = function() {
        return 123456;
      };

      $httpBackend
      .whenPOST('https://hotelier-api-yard.herokuapp.com/api/Guests')
      .respond({
        'id': '12345',
        'fullName': 'Syed',
        'email': 'syed@gmail.com',
        'phone': '7031231234',
        'reservations': []
      });

      $httpBackend
      .whenGET('views/guest.template.html')
      .respond('view template');


    }));


    it('should be able to add a new guest', function(doneCallback){

      var result = GuestService.createGuest({fullName:'Syed', email:'syed@gmail.com', phone:'703-123-1234'});
      expect(result).to.be.a('object');
      expect(result.then).to.be.a('function');
      expect(result.catch).to.be.a('function');
      

      result
        .then(function(data){
          expect(data.fullName).to.equal('Syed');
          expect(data.email).to.equal('syed@gmail.com');
          expect(data.phone).to.equal('7031231234');

          doneCallback();
        })
        .catch(function(){
          doneCallback('Should not reject this promise');
        });

      $httpBackend.flush();

    });


  });

}());
