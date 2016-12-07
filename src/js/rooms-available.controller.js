(function() {
    'use strict';

    angular.module('hotelier')
        .controller('RoomsAvailableController', RoomsAvailableController);

    RoomsAvailableController.$inject = [ 'RoomsService' ];

    function RoomsAvailableController(RoomsService) {
        console.log('creating the controller');
        var vm = this;

        this.rooms = [];

        this.getRoom = function getRoom() { 

        };

        RoomsService.getRooms()
            .then(function successHandler(data) {

                console.log(data);
                vm.rooms = data.items;
            })
            .catch(function failHandler(xhr) {
                console.warn(xhr);

            });

    }

})();
