angular.module('account_creation.service', [])

.service('AccountCreationService', function($http) { 

    function toParams(obj) {
        var p = [];
        for (var key in obj) {
            p.push(key + '=' + encodeURIComponent(obj[key]));
        }
        return p.join('&');
    };

    var createAccount = function(data) {
        console.log(JSON.stringify(data));
//        $http.post('http://localhost:3000/create_account', toParams(data)).then(function(reponse){

        $http({
            method:'POST',
            url: 'http://localhost:3000/create_account',
            data: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }).then(function(res){
           console.log("Creation Successful") 

        }, function(err){
           console.log("Creation Unsuccessful") 
        });
    };

    return {
        createAccount: createAccount
    };
})
