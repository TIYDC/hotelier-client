(function() {
  'use strict';


  angular.module('hotelier')
  .factory('LoginService', LoginService);

  LoginService.$inject = ['$http'];

  function LoginService($http){

  var token;

    return {
      staffLogin: staffLogin,
      isLoggedIn: isLoggedIn
    };
    /**
     * Allows staff to log in with email and password.
     * @param  {string} staff email and password
     * @return {promise}       the completed ajax call promise.
     */
    function staffLogin(staff){
      return $http({
        url:'https://hotelier-api-iron.herokuapp.com/api/Staffs/login',
        data:{
          email: staff.email,
          password: staff.password
        },
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        }
      })
      .then(function onlyReturnData(response){
        token=response.data.id;
        return response;
      });
    }
    /**
     * Stores the token into local storage once the user
     * logs in.
     * @return  {String} token Unique token to facilitate login
     */

     function isLoggedIn() {
       return !!token;
     }
  }
}());
