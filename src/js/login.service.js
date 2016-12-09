(function() {
  'use strict';


  angular.module('hotelier')
  .factory('LoginService', LoginService);

  LoginService.$inject = ['$http'];

  function LoginService($http){

    return {
      staffLogin: staffLogin
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
        return response;

      });

    }


  }






}());
