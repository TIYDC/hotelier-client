(function() {
  'use strict';

  var expect = chai.expect;

  describe('Get all reservations', function () {
    var AllReservationsService;
    var $httpBackend;
    var $rootScope;
    var fakeLoginService = {};

    beforeEach(module('hotelier'));

    beforeEach(module(function($provide) {
      $provide.value('LoginService', fakeLoginService);
    }));

    beforeEach(inject(function(_$rootScope_, _$httpBackend_, _AllReservationsService_) {

      AllReservationsService =_AllReservationsService_;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;

      fakeLoginService.isLoggedIn = function() {
        return 'aaaaaa';
      };

      $httpBackend
        .whenGET('https://hotelier-api-yard.herokuapp.com/api/Reservations')
        .respond({
          id: 'xxxxxx',
          checkinDate: 'yyyyyyy',
          checkoutDate: 'dddddd',
          numberOfGuests: 2,
          guestId: 'ppppp',
          roomId: 'hhhhhh',
          createDate: '01/01/2016',
          guest: {},
          room: {},
          staff: {}
        });

        $httpBackend
          .whenGET('views/guest.template.html')
          .respond('What is going on here??');

    }));

    it('should be able to GET all the detail of the reservations', function(doneCallBack){
      var result = AllReservationsService.getReservations();

      expect(result).to.be.a('object');
      expect(result.then).to.be.a('function');
      expect(result.catch).to.be.a('function');

      result
        .then(function(data) {
          expect(data.guestId).to.equal('ppppp');
          doneCallBack();
        })
        .catch(function(){
          doneCallBack('I should not expect this');
        });
        $httpBackend.flush();
    });
  });

}());
