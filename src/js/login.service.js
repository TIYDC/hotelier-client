(function() {
  'use strict';


  angular.module('hotelier')
  .factory('LoginService', LoginService);

  LoginService.$inject = ['$http'];

  function LoginService($http){
    console.log('creating LoginService');

    return {
      staffLogin: staffLogin
    };

    /**
     * [staffLogin description]
     * @param  {[type]} staff [description]
     * @return {[type]}       [description]
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
        console.log(response.data);
        return response;


      });

    }


  }






}());
