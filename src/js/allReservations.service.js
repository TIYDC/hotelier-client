(function() {
  'use strict';

  angular.module('hotelier')
  .factory('AllReservationsService', AllReservationsService);

  AllReservationsService.$inject = ['$http', 'LoginService'];

  function AllReservationsService($http, LoginService){
    console.log('creating AllReservationsService');
    return {
      getReservations: getReservations,
      singleReservation: singleReservation
    };


    /**
    * search api for list of all reservations
    * @return {Promise} the completed ajax call promise
    */
    function getReservations(){
      console.log('token?', LoginService.isLoggedIn());

      return $http({
        url:'https://hotelier-api-iron.herokuapp.com/api/Reservations',
        method: 'GET',
        headers:{
          Authorization: 'qwhrh6Cy9evoBz6cC62NAXJv5107jIUde5i5nbW2CkunQHlpWFLlSBpDfnRf5dU8'
        }
      })
      .then(function onlyReturnData(response){
        console.log(response.data);

        return response.data;



      });
    }

    /**
     * Upon its call, singleReservationpulls information about A SINGLE RESERVATION.
     * Upon completion, the responsefrom angular is transformed to return the data in t
     * he promise callback.
     * @param {Number} id Reservation ID number that is provdided from the form in HTML.
     * @param {Number} token The token will be created on form submission.
     * @return {Promise}
     */

      function singleReservation(id) {
          return $http ({
            url: 'https://hotelier-api-iron.heroku.com/api/Reservations/' + id,
            method: 'GET'
        })
        .then(function handleSuccess(response) {
          console.log("helloooo!");
          return response.data;
        });
      }


  }


}());
