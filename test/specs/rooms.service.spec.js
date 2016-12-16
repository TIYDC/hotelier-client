(function() {
    'use strict';

    var expect = chai.expect;

    describe('roomsService', function() {
        var RoomsService;
        var $httpBackend;
        var $rootScope;

        beforeEach(module('hotelier'));

        console.log('hello');

        beforeEach(inject(function(_$rootScope_, _$httpBackend_, _RoomsService_) {
            RoomsService = _RoomsService_;
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;
            console.log('hello');

            $httpBackend
                .whenGET('https://hotelier-api-yard.herokuapp.com/api/Rooms')
                .respond([{
                    id: '5842d47de8bf1b1100e4665e',
                    maxOccupancy: 8,
                    number: 301,
                    rate: 400
                }]);
                console.log('hello');
            // mock out the request for the home template
            $httpBackend
                .whenGET('views/guest.template.html')
                .respond('whatever you want to put here');
        }));

        it('should be able to get rooms', function(doneCallback) {

            var result = RoomsService.getRooms();
            expect(result).to.be.a('object');
            expect(result.then).to.be.a('function');
            expect(result.catch).to.be.a('function');


            // result
            //   .then
                //inside then and catch
                result
                  .then(function(data){
                    console.log('what am i?', data);
                    console.log(data.maxOccupancy);
                    expect(data).to.be.an('array');
                    expect(result.maxOccupancy).to.equal(undefined);
                    expect(data[0]).to.include.keys('id', 'maxOccupancy', 'number', 'rate');



                    doneCallback();
                  })
                  .catch(function(){
                    doneCallback('Should not reject this promise');
                  });

            $httpBackend.flush();
        });

    });

})();
