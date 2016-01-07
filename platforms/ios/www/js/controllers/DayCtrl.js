angular.module('schedule.controllers', []) 

.controller('DayCtrl', function($scope, $state, EventFetcher, AuthService){
    $scope.shouldShowDelete = false;
    $scope.listCanSwipe = true;
    $scope.events
    
//    $scope.events = [{"name": 'Operating Systems Homework 1', time: '11:59PM'}, 'Work meeting', 'Music Lesson', 'Doctors Appointment', 'Hot Date'];
    
    $scope.onItemClicked = function(){
        console.log('clicked');
    }
    
    $scope.toDash = function(){
        $state.go('dash', {}, {reload: true});
    };

    $scope.updateEvents = function(){
        $scope.events = EventFetcher.todaysEvents();
    };
     
});
