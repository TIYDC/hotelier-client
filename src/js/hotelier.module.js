(function() {
  'use strict';

  angular.module('hotelier',['ui.router'])
    .config(routerConfig);

  routerConfig.$inject = ['$stateProvider'];

  function routerConfig($stateProvider) {


    $stateProvider
      .state({
        name: 'login',
        url: '/staffLogin',
        templateUrl: 'views/staffLogin.template.html',
        controller: 'LoginController',
        controllerAs: 'login'

      })

      .state({
        name: 'allRes',
        url: '/reservations',
        templateUrl: 'views/reservations.template.html',
        controller: 'AllReservationsController',
        controllerAs: 'allRes'

      })

      .state({
        name: 'guestList',
        url: '/guestList',
        templateUrl: 'views/allGuest.template.html'
      })

      .state({
        name: 'guest',
        url: '/guest',
        templateUrl: 'views/createGuest.template.html',
        controller: 'GuestController',
        controllerAs: 'guest'
      })

      .state({
        name: 'createReservation',
        url: '/createReservation',
        templateUrl: 'views/createReservations.template.html'
      })

      .state({
        name: 'home',
        url: '',
        templateUrl: 'views/guest.template.html'

      })

      .state({
        name: 'roomsAvailable',
        url: '/rooms',
        templateUrl: 'views/rooms-available.template.html',
        controller: 'RoomsAvailableController',
        controllerAs: 'roomsAvailable'

      })

      .state({
        name: 'confirmation',
        url: '/confirmation',
        templateUrl: 'views/confirmation.template.html'

      });


  }
}());
