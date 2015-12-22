angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
    $scope.setCurrentEmail = function(email) {
        $scope.email = email;
    }
})

.controller('DashCtrl', function($scope, $state, AuthService) {
    $scope.logout = function(){
        AuthService.logout();
        $state.go('login', {}, {reload: true});
    }

    $scope.viewDailySchedule = function(){
        $state.go('daily-schedule',{}, {reload: true});
    }

    $scope.viewWeeklySchedule = function(){
        $state.go('weekly-schedule',{}, {reload: true});
    }

    $scope.viewMonthlySchedule = function(){
        $state.go('monthly-schedule',{}, {reload: true});
    }
})

.controller('LoginCtrl', function($scope, $state, $ionicPopup, AuthService) { 
    $scope.data = {};
    $scope.login = function(data){
        AuthService.login(data.email, data.password).then(function(authenticated) {
            $state.go('dash', {}, {reload: true});
            $scope.setCurrentEmail(data.email);
        }, function(err){
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            })
        });
    }
    isAuthenticated = AuthService.isAuthenticated;
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
