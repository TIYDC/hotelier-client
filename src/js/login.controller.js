(function() {
  'use strict';

  angular.module('hotelier')
    .controller('LoginController', LoginController);


    LoginController.$inject = [ 'LoginService' ];

    function LoginController(LoginService){

      this.staff = {};

      this.staffLogin = function staffLogin(staff){
        console.log(staff.email);
        LoginService.staffLogin(staff);
      };

    }
}());
