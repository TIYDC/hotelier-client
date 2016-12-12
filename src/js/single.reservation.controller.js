(function() {
  'use strict';

  angular.module('hotelier')
    .controller('SingleReservationController', SingleReservationController);

    SingleReservationController.$inject = ['$stateParams', 'AllReservationsService'];

    function SingleReservationController($stateParams, AllReservationsService) {

      console.log("single res ctrl", $stateParams.id);
      var vm = this;
      this.singleReservation = {};

      AllReservationsService.singleReservation($stateParams.id)
        .then(function successHandler(response) {
          console.log('single success', response);
          vm.singleReservation = response;
          // $state.go('singleReservation');
        })
        .catch(function failHandler(xhr){
          console.log(xhr);
          console.log('that did not work');
        });
    }


}());
