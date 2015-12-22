angular.module('starter.controllers')

.controller('AccountCreationCtrl', function($scope, AccountCreationService){ 
    $scope.data = {};
    $scope.createAccount = function(data){
        AccountCreationService.createAccount(data); 
    }
    
})
