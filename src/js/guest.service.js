(function() {
  'use strict';

  angular.module('hotelier')
    .factory('GuestService', GuestService);

    GuestService.$inject =['$http', 'LoginService'];

    function GuestService($http, LoginService) {

      return {
        createGuest: createGuest
      };
      /**
       * this creates a guest and send it to the API
       * @param  {object} guest staff will create a guest with properties
       * @return {Promise}       the completed ajax call promise
       */
      function createGuest(guest) {
        console.log('SENDING XHR');
        return $http({
          url:'https://hotelier-api-yard.herokuapp.com/api/Guests',
          data: {
            fullName: guest.fullName,
            email: guest.email,
            phone: guest.phone
          },
          method: 'post',
          headers: {
            'Authorization' : LoginService.isLoggedIn(),
            'Content-type': 'application/json'
          }
        })
        .then(function successHandeler(response) {
          return response.data;
        });
      }
    }



}());
