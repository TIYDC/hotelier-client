(function() {
  'use strict';

  angular.module('hotelier')
  .controller('NewReservationController', NewReservationController);

  NewReservationController.$inject = [ 'NewReservationService' ];


  function NewReservationController(NewReservationService) {

    this.newReservation = {};

    this.callCreateRes = function callCreateRes(reservation) {
      NewReservationService.createReservation(reservation);
    };
  }




}());
