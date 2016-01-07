angular.module('starter.controllers')
 
.controller('DashCtrl', function($scope, $state, $ionicPopover, AuthService, PushNotifier, EventFetcher,EventCreator) { 

    $scope.event = {};

    $scope.logout = function(){
        AuthService.logout();
        $state.go('login', {}, {reload: true});
    }

    $scope.viewDailySchedule = function(){
        EventFetcher.populateTodaysEvents(AuthService.user_id());
        $state.go('daily_schedule',{}, {reload: true});
    }

    $scope.viewWeeklySchedule = function(){
        PushNotifier.notify(); 
        $state.go('weekly_schedule',{}, {reload: true});
    }

    $scope.viewMonthlySchedule = function(){
        $state.go('monthly_schedule',{}, {reload: true});
    }

    $scope.addEvent = function(event){ 
        event.user_id = AuthService.user_id();
        event.startDate = $scope.selectedStartDate;
        event.endDate = $scope.selectedEndDate;
        event.startTime = $scope.selectedStartTime;
        event.endTime = $scope.selectedEndTime;
        if (event.name != null && event.description != null && 
                event.reoccurence != null && event.startDate 
                && event.endDate != null && event.startTime != null &&
                event.endTime != null){

            $scope.popover.hide();
            EventCreator.createEvent(event);
        }
        else{
            console.log("Invalid form");
        }
        console.log(JSON.stringify(event));
    }

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
    $scope.selectedStartTime = 86340;
    $scope.selectedEndTime = 0;

    $scope.startDatepickerObject = {
        setButtonType : 'button-energized',  //Optional
        todayButtonType : 'button-energized',  //Optional
        closeButtonType : 'button-energized',  //Optional
        templateType: 'popup', //Optional
        callback: function (val) {  //Mandatory
            $scope.selectedStartDate = val;
        },
        dateFormat: 'dd-MM-yyyy', //Optional
        closeOnSelect: true //Optional
    };

    $scope.endDatepickerObject = {
        setButtonType : 'button-energized',  //Optional
        todayButtonType : 'button-energized',  //Optional
        closeButtonType : 'button-energized',  //Optional
        templateType: 'popup', //Optional
        callback: function (val) {  //Mandatory
            $scope.selectedEndDate = val;
        },
        dateFormat: 'dd-MM-yyyy', //Optional
        closeOnSelect: true //Optional
    };

    $scope.startTimepickerObject = {
        inputEpochTime: ((new Date()).getHours() * 60 * 60),  //Optional
        step: 15,
        format: 12,
        setButtonType: 'button-energized',  //Optional
        closeButtonType: 'button-stable',  //Optional
        callback: function (val) {    //Mandatory
            console.log("Picked Start Time")
            console.log(val);
            $scope.selectedStartTime = val;
        }
    };

    $scope.endTimepickerObject = {
        inputEpochTime: ((new Date()).getHours() * 60 * 60),  //Optional
        step: 15,  //Optional
        format: 12,  //Optional
        titleLabel: '12-hour Format',  //Optional
        setLabel: 'Set',  //Optional
        closeLabel: 'Close',  //Optional
        setButtonType: 'button-positive',  //Optional
        closeButtonType: 'button-stable',  //Optional
        callback: function (val) {    //Mandatory
            console.log(val);
            $scope.selectedEndTime = val;
        }

    };

})
