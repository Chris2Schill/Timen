angular.module('schedule.controllers') 

.controller('WeekCtrl', function($scope, $state){

    $scope.toDash = function(){
        $state.go('dash', {}, {reload: true});
    }

});
