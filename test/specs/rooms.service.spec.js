(function() {
    'use strict';

    var expect = chai.expect;

    describe('roomsService', function() {
        var RoomsService;
        var $httpBackend;
        var $rootScope;

        beforeEach(module('hotelier'));

        beforeEach(inject(function(_$rootScope_, _$httpBackend_, _RoomsService_) {
            RoomsService = _RoomsService_;
            $httpBackend = _$httpBackend_;
            $rootScope = _$rootScope_;

            $httpBackend
                .whenGET('https://hotelier-api-yard.herokuapp.com/api/Rooms')
                .respond({
                    id: '5842d47de8bf1b1100e4665e',
                    maxOccupancy: 8,
                    number: 301,
                    rate: 400
                });

            // mock out the request for the home template
            $httpBackend
                .whenGET('views/rooms-available.template.html')
                .respond('whatever you want to put here');
        }));

        it('should be able to get repo details given good data', function(doneCallback) {

            var result = RoomsService.getRooms();
            expect(response).to.be.a('object');
            expect(response.then).to.be.a('function');
            // expect(result.catch).to.be.a('function');

            // result
            //     .then(function(data) {
            //         expect(data.name).to.equal('jquery-mockjax');
            //         doneCallback();
            //     })
            //     .catch(function() {
            //         doneCallback('Should not reject this promise');
            //     });
        //
        //     $httpBackend.flush(); // go ahead and send the (fake) response now
        // });
        //
        // it('should fail if no username or reponame provided', function(doneCallback) {
        //     var result = RepoService.getRepo();
        //
        //     result
        //         .then(function() {
        //             doneCallback('Should not resolve if no username');
        //         })
        //         .catch(function(err) {
        //             expect(err).to.be.an.instanceof(Error);
        //             doneCallback();
        //         });
        //
        //     $rootScope.$digest();
        // });

    });

})();


// (function() {
//   'use strict';
//
//   var expect = chai.expect;
//
//   describe('RoomsService', function() {
//       var RoomsService;
//
//
//       beforeEach(module('hotelier'));
//
//
//       beforeEach(inject(function(_RoomsService_) {
//
//           RoomsService = _RoomsService_;
//       }));
//
//       it('should be able to get an array of items', function() {
//
//           var result = RoomsService.getRooms();
//           expect(result).to.be.an('object');
// //           // expect(result.length).to.equal(19);
// //
//       });
//
//     });
//
}());
