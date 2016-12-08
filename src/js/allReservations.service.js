(function() {
  'use strict';

  angular.module('hotelier')
  .factory('AllReservationsService', AllReservationsService);

  AllReservationsService.$inject = ['$http'];

  function AllReservationsService($http){
    console.log('creating AllReservationsService');

    return {
      getReservations: getReservations
    };


    /**
    * search api for list of all reservations
    * @return {Promise} the completed ajax call promise
    */
    function getReservations(token){
      var id = token.id;
      return $http({
        url:'https://hotelier-api-iron.herokuapp.com/api/Reservations',
        method: 'GET',
        headers:{
          Authorization: id
        }
      })
      .then(function onlyReturnData(response){
        console.log(response.data);
        return response.data;


      });


    }


  }


}());
