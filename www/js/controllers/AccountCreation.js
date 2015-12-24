angular.module('starter.controllers')

.controller('AccountCreationCtrl', function($scope, $state, AccountCreationService){ 
    $scope.data = {};
    $scope.createAccount = function(data){
        AccountCreationService.createAccount(data); 
    }
    

    $scope.viewLogin = function(){
        $state.go('login', {}, {reload: true});
    }
})
