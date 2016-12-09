(function() {
  'use strict';

  angular.module('hotelier')
    .controller('LoginController', LoginController);


    LoginController.$inject = [ 'LoginService' ];

    function LoginController(LoginService){

      this.staff = {};

      this.staffLogin = function staffLogin(staff){
        LoginService.staffLogin(staff);
      };

    }
}());
