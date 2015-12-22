angular.module('auth.service', []) 

.service('AuthService', function($http,$q) {
    var LOCAL_TOKEN_KEY = 'yourTokenKey';
    var userEmail = '';
    var isAuthenticated = false;
    var role = '';
    var authToken;

    function loadUserCredentials(){
        var token = window.localStorage.getItem(LOCAL_TOKEN_KEY);
        if (token){
            useCredentials(token);
        }
    }

    function storeUserCredentials(token){
        window.localStorage.setItem(LOCAL_TOKEN_KEY, token);
        useCredentials(token);
    }

    function useCredentials(token){
        userEmail = token.Email;
        isAuthenticated = true;
        authToken = token;
        $http.defaults.headers.common['X-Auth-Token'] = token;
    }

    function destroyUserCredentials(){
        authToken = undefined; 
        userEmail = '';
        isAuthenticated = false;
        $http.defaults.headers.common['X-Auth-Token'] = undefined;
        window.localStorage.removeItem(LOCAL_TOKEN_KEY);
    }

    function getUsersTable(){
        return $http.get('http://localhost:3000/users');
    };

    var login =  function(email,password){
        return $q(function(resolve,reject) {
            getUsersTable().then(function(response) {
                for (i = 0; i < response.data.length; i++) {
                    if (response.data[i].Email == email && response.data[i].Passkey == password){
                        storeUserCredentials(response.data[i]);
                        resolve("Login Successful");
                        break;
                    }
                }
                reject("Login Unsuccessful");
            })
        })
        

        /*
        return getUsersTable().then(function(response) {
                });
        */
    };

    var logout = function(){
        destroyUserCredentials();
    }

    return {
        login: login,
        logout: logout,
        isAuthenticated: function() {return isAuthenticated;},
        userEmail: function() {return userEmail;}
    };
});
