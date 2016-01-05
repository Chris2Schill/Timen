angular.module('starter.controllers')

.controller('AccountCreationCtrl', function($scope, $state, $ionicPopup, AccountCreationService, AuthService){   
    $scope.formData = {}; 
    $scope.createAccount = function(formData){

        if (formData.email != null && formData.passkey1 != null && formData.passkey2 != null){
            if(formData.passkey1 == formData.passkey2){
                console.log(JSON.stringify(formData));

                AccountCreationService.createAccount(formData).then(function(response){ 
                    console.log(response);

                    AuthService.login(formData.email, formData.passkey1).then(function(authenticated){
                        $state.go('dash', {}, {reload:true});
                    }, function(err){
                        var alertPopup = $ionicPopup.alert({
                            title: 'Fatal Error.',
                            template: 'This should never happen.'
                        });
                    }); 
                }, function(err){
                    var alertPopup = $ionicPopup.alert({
                        title: 'Auto-Login Failed.',
                        template: 'Please Log in again.'
                    });
                    $state.go('login', {}, {reload:true});
                });
            }
            else{
                var alertPopup = $ionicPopup.alert({
                    title: 'Account creation failed.',
                    template: 'Your passwords did not match!'
                });
            }
        }
        else{
            var alertPopup = $ionicPopup.alert({
                title: 'Account creation failed.',
                template: 'Your account information is invalid!'
            });
        }
    }

    $scope.viewLogin = function(){
        $state.go('login', {}, {reload: true});
    }
})
