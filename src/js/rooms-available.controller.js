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

                console.log('controller', data);
                vm.rooms = data;
                console.log(vm.rooms, 'vm');
            })
            .catch(function failHandler(xhr) {
                console.warn(xhr);

            });

    }

})();
