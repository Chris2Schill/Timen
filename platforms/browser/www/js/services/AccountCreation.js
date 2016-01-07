angular.module('account_creation.service', []) 

.service('AccountCreationService', function($http, $q) {  

    var createAccount = function(data) {
        return $http({
            method:'POST',
            url: 'http://localhost:3000/create_account',
            data: data,
            headers: {'Content-Type': 'application/json'}
        }).then(function(res){
            if (res.data == 'Duplicate Email'){
                $q.reject(res);
            }
            else{
                q.resolve(res)
            }
           console.log("Creation Successful") 
        }, function(err){
           console.log("Creation Unsuccessful") 
        });
    };

    return {
        createAccount: createAccount
    };
})
