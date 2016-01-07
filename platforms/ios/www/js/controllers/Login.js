angular.module('starter.controllers')

.controller('LoginCtrl', function($scope, $state, $ionicPopup, AuthService) { 
    $scope.data = {};
    $scope.login = function(data){
        AuthService.login(data.email, data.password).then(function(authenticated) {
            $state.go('dash', {}, {reload: true});
         //   $scope.setCurrentEmail(data.email);
        }, function(err){
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            })
        });
    }

    $scope.isAuthenticated = function(){
        return AuthService.isAuthenticated();
    }

    $scope.viewAccountCreationPage = function(){
        $state.go('account_creation', {}, {reload: true});
    }
});
