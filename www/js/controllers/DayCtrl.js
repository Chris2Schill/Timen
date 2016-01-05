angular.module('schedule.controllers', []) 

.controller('DayCtrl', function($scope, $state, EventFetcher){
    $scope.test = "test";
    $scope.shouldShowDelete = false;
    $scope.listCanSwipe = true;
    
//    $scope.events = [{"name": 'Operating Systems Homework 1', time: '11:59PM'}, 'Work meeting', 'Music Lesson', 'Doctors Appointment', 'Hot Date'];
    
    $scope.onItemClicked = function(){
        console.log('clicked');
    }
    
    $scope.toggleDelete = function(){
        $scope.shouldShowDelete = !$scope.shouldShowDelete;
    }

    $scope.toDash = function(){
        $state.go('dash', {}, {reload: true});
    };
     
    $scope.populateEvents = function(){
        EventFetcher.populateTodaysEvents().then(function(response){ 
            console.log(JSON.stringify(response));
            $scope.events = response;
        }, function(err){
            console.log(JSON.stringify(err)); 
        });
    }
    $scope.populateEvents();

    /*
    $scope.items.splice = function(index, n){
        
    }
    */

});
