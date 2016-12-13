(function() {
  'use strict';

  angular.module('hotelier')
    .controller('GuestController', GuestController);

    GuestController.$inject = [ 'GuestService' ];

    function GuestController(GuestService) {
      console.log('creating GuestController', GuestService);

      this.newGuest = {};

      this.createGuest = function createGuest(guest) {
        console.log('what in the world am i', guest);
        GuestService.createGuest(guest);
          // We need then and catch!!
      };

    }


}());
