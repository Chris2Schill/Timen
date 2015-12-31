angular.module('starter.controllers')

.controller('DashCtrl', function($scope, $state, $ionicPopover, AuthService, EventFetcher) {  

    $scope.event = {};

    $scope.logout = function(){
        AuthService.logout();
        $state.go('login', {}, {reload: true});
    }

    $scope.viewDailySchedule = function(){
        $state.go('daily_schedule',{}, {reload: true});
    }

    $scope.viewWeeklySchedule = function(){
        $state.go('weekly_schedule',{}, {reload: true});
    }

    $scope.viewMonthlySchedule = function(){
        $state.go('monthly_schedule',{}, {reload: true});
    }

    $scope.addEvent = function(event){
        event.startDate = $scope.selectedStartDate;
        event.endDate = $scope.selectedEndDate;
        $scope.popover.hide();
        console.log(JSON.stringify(event));
    }

    /*
    $scope.createEvent = function(data){
        EventFetcher.createEvent(data);
    }
    */

    $ionicPopover.fromTemplateUrl('templates/event-popover.html', {
        scope: $scope
    }).then(function(popover) {
        $scope.popover = popover;
    });

    $scope.openPopover = function($event) {
        $scope.popover.show($event);
    };

    $scope.closePopover = function() {
        $scope.popover.hide();
    };

    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.popover.remove();

    });
    // Execute action on hide popover
    $scope.$on('popover.hidden', function() {
        // Execute action

    });
    // Execute action on remove popover
    $scope.$on('popover.removed', function() {
        // Execute action

    });

    $scope.openCreateEventPopover = function(){

    }

    $scope.selectedStartDate = new Date();
    $scope.selectedEndDate = new Date();

    $scope.startDatepickerObject = {
        setButtonType : 'button-assertive',  //Optional
        todayButtonType : 'button-assertive',  //Optional
        closeButtonType : 'button-assertive',  //Optional
        templateType: 'popup', //Optional
        callback: function (val) {  //Mandatory
            $scope.selectedStartDate = val;
        },
        dateFormat: 'dd-MM-yyyy', //Optional
        closeOnSelect: true //Optional
    };

    $scope.endDatepickerObject = {
        setButtonType : 'button-assertive',  //Optional
        todayButtonType : 'button-assertive',  //Optional
        closeButtonType : 'button-assertive',  //Optional
        templateType: 'popup', //Optional
        callback: function (val) {  //Mandatory
            $scope.selectedEndDate = val;
        },
        dateFormat: 'dd-MM-yyyy', //Optional
        closeOnSelect: true //Optional
    };

})
