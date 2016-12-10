(function() {
  'use strict';

  angular.module('hotelier')
  .factory('NewReservationService', NewReservationService);

  NewReservationService.$inject = ['$http', 'LoginService'];

  function NewReservationService($http, LoginService){

    return {
      createReservation: createReservation,

    };

  /**
   * Create a new reservation for a hotlier guest
   * @param  {object} reservation Reservation details
   * @return {Promise}       Completed ajax call promise
   */
   function createReservation(reservation) {
     return $http({
       url:'https://hotelier-api-iron.herokuapp.com/api/Reservations',
       data: {
         checkinDate: reservation.checkinDate,
         checkoutDate: reservation.checkoutDate,
         numberOfGuests: reservation.numberOfGuests,
         guestId: reservation.guestId,
         roomId: reservation.roomId
       },
       method: 'post',
       headers: {
         'Authorization' : LoginService.isLoggedIn(),
         'Content-type': 'application/json'
       }
     })
     .then(function successHandeler(reponse) {
       return reponse;
     });
   }
 }




}());
