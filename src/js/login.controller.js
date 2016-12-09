(function() {
  'use strict';

  angular.module('hotelier')
    .controller('LoginController', LoginController);


    LoginController.$inject = [ '$state', 'LoginService' ];

    function LoginController($state, LoginService){

      this.staff = {};

      this.staffLogin = function staffLogin(staff){
        LoginService.staffLogin(staff);
        $state.go('allRes');
      };

    }
}());
