(function() {
    'use strict';

    angular.module('hotelier')
        .controller('RoomsAvailableController', RoomsAvailableController);

    RoomsAvailableController.$inject = [ '$stateParams', '$state', 'RoomsService' ];

    function RoomsAvailableController($stateParams, $state, RoomsService) {
        console.log('creating the controller');
        var vm = this;
        this.resNumber = {};

        this.rooms = [];

        RoomsService.getRooms()
            .then(function successHandler(data) {

                console.log('controller', data);
                vm.rooms = data;
                console.log(vm.rooms, 'vm');
            })
            .catch(function failHandler(xhr) {
                console.warn(xhr);

            });

        this.singleReservation = function singleReservation(ids) {
          $state.go('singleReservation', {id: ids});

        };
    }

})();
