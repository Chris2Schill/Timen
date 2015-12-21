angular.module('auth.service', []) 

.service('AuthService', function($http) {
    

    var login = function(){
        console.log('Attempting to login...')

        $http({
            method: 'GET',
        url: 'http://localhost:3000/users'

        }).then(function successCallback(response) {
            console.log('Get Request Success');
            console.log(response.data[0].Passkey);
            console.log(JSON.stringify(response.data)); 
            // this callback will be called asynchronously
            //     // when the response is available
            //       
        }, function errorCallback(response) {
            console.log('Get Request Failed');
            // called asynchronously if an error occurs
            //     // or server returns response with an error status.
            //       
        });
    };

    var isAuthenticated = function(){
        console.log('Checking Authentication...');
    };


    return {
        login: login,
        isAuthenticated: isAuthenticated
    }
})
