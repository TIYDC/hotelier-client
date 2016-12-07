(function() {
    'use strict';

    angular.module('hotelier')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$http'];

    /**
     * LoginService Constructor Function
     * @param {Angular} $http built-in angular http request service
     * @return {Object} functions used by LoginController
     */
    function LoginService($http){
        return {
            login: login,
            createNewStaffLogin: createNewStaffLogin
        };

        /**
         * Logs in staff in hotelier management system
         * @param {String} email email of staff user used for login
         * @param {String} password password of staff user used for login
         * @return {Promise} asynch promsises from http request
         */
        function login(email, password) {
            return $http({
                url : 'https://hotelier-api-iron.herokuapp.com/api/Staffs/login',
                method: 'post',
                data: {
                    'email': email,
                    'password' : password
                },
                headers: {
                    'Content-type': 'application/json'
                }
            });
        }

        /**
         * creates new staff member access to hotelier management system
         * @param  {String} email designated email of staff user
         * @param  {String} password designated password used by staff user
         * @param  {String} fullName Name of Staff Member
         * @return {Promise} asynch promsises from http request
         */
        function createNewStaffLogin(email, password, fullName) {
            return $http({
                url : 'https://hotelier-api-iron.herokuapp.com/api/Staffs',
                method: 'post',
                data: {
                    'email': email,
                    'password' : password,
                    'fullName' : fullName
                },
                headers: {
                    'Content-type': 'application/json'
                }
            });
        }
    }
}());
