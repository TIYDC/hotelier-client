(function() {
    'use strict';

    angular.module('hotelier')
        .factory('RoomsService', RoomsService);

    RoomsService.$inject = [ '$http' ];

    function RoomsService($http) {
        console.log('creating service');


        return {
            getRooms: getRooms
        };

        /**
         * Get rooms from api call
         * @return {Promise}     the completed ajax call promise
         */
        function getRooms() {
            return $http({
                url: 'https://hotelier-api-iron.herokuapp.com/api/Rooms',
                method: 'GET'
            })
            .then(function onlyReturnData(response) {
                console.log(response);

                return response.data;
            });
        }
    }

})();
