(function() {
  'use strict';

  angular.module('hotelier',['ui.router'])
    .config(routerConfig)
    .config(killPreflight);


  killPreflight.$inject = ['$httpProvider'];
  function killPreflight($httpProvider) {
    console.log('killing preflight requests');
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.get = {};
    $httpProvider.defaults.headers.delete = {};
  }

  routerConfig.$inject = ['$stateProvider'];

  function routerConfig($stateProvider) {


    $stateProvider

      .state({
        name: 'home',
        url: '',
        templateUrl: 'views/guest.template.html'

      })

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
        controllerAs: 'allRes',
        doYouNeedToBeLoggedInForThisState: true

      })

      .state({
        name: 'guestList',
        url: '/guestList',
        templateUrl: 'views/allGuest.template.html',
        doYouNeedToBeLoggedInForThisState: true
      })

      .state({
        name: 'guest',
        url: '/guest',
        templateUrl: 'views/createGuest.template.html',
        controller: 'GuestController',
        controllerAs: 'guest',
        doYouNeedToBeLoggedInForThisState: true
      })

      .state({
        name: 'createreservation',
        url: '/createreservation',
        templateUrl: 'views/new-reservation.template.html',
        controller: 'NewReservationController',
        controllerAs: 'newRes',
        doYouNeedToBeLoggedInForThisState: true
      })

      .state({
        name: 'roomsAvailable',
        url: '/rooms',
        templateUrl: 'views/rooms-available.template.html',
        controller: 'RoomsAvailableController',
        controllerAs: 'roomsAvailable'

      })

      .state({
        name: 'singleReservation',
        url: '/singleReservation/:id',
        templateUrl: 'views/single.reservation.view.template.html',
        controller: 'SingleReservationController',
        controllerAs: 'singleReservation'

      });

  }

}());
