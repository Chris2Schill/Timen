angular.module('auth.service', []) 

.service('AuthService', function($http,$q) {
    var LOCAL_TOKEN_KEY = 'yourTokenKey';
    var userEmail = '';
    var user_id = 1;
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
        user_id = token.id;
        isAuthenticated = true;
        authToken = (token.Email + token.Passkey + new Date().toString()).hashCode(); 
        //$http.defaults.headers.common['X-Auth-Token'] = authToken;
    }

    function destroyUserCredentials(){
        authToken = undefined; 
        userEmail = '';
        user_id = 0;
        isAuthenticated = false;
        //$http.defaults.headers.common['X-Auth-Token'] = undefined;
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
                        console.log('AuthToken: ' + authToken);
                        resolve("Login Successful");
                    }
                }
                reject("Login Unsuccessful");
            })
        })
    };

    var logout = function(){
        destroyUserCredentials();
    }

    return {
        login: login,
        logout: logout,
        isAuthenticated: function() {return isAuthenticated;},
        userEmail: function() {return userEmail;},
        authToken: function() {return authToken;},
        user_id: function() {return user_id;}
    };
});

String.prototype.hashCode = function() {
    var hash = 0, i, chr, len;
    if (this.length === 0) return hash;
    for (i = 0, len = this.length; i < len; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};
