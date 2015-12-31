angular.module('schedule.controllers', []) 

.controller('DayCtrl', function($scope, $state, EventFetcher){
    $scope.events = ['Operating Systems Homework 1', 'Work meeting', 'Music Lesson',
                        'Doctors Appointment', 'Hot Date'];
    $scope.f = function(){console.log('clicked');}

    $scope.toDash = function(){
        $state.go('dash', {}, {reload: true});
    };
     
    $scope.populateEvents = function(){
        EventFetcher.populateTodaysEvents();
    }

});
