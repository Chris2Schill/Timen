angular.module('event.fetcher', [])

.service('EventFetcher', function($http, $q){

    var todaysEvents = {};
    var weeklyEvents = {};

    var populateTodaysEvents = function(user_id) {
        $http({
            url: 'http://localhost:3000/daily_events', 
            method: "GET",
            params: {user_id: user_id}
        }).then(function(response){
            todaysEvents = response.data;
        }, function(err){
            console.log(JSON.stringify(err));    
        });
    };
    
    var populateWeeklyEvents = function(user_id){
        $http({
            url: 'http://localhost:3000/weekly_events',  
            method: "GET",
            params: {user_id: user_id}
        }).then(function(response){
            weeklyEvents = response.data;
        }, function(err){
            console.log(JSON.stringify(err));    
        });
    };

    var deleteEvent = function(eventId){
        /*
        $http({
            method:'POST',
            url: 'http://localhost:3000/delete_event',
            data: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        }).then(function(res){
           console.log("Deletion Successful") 

        }, function(err){
           console.log("Deletion Unsuccessful") 
        });
        */
    };

    return {
        populateTodaysEvents: populateTodaysEvents,
        populateWeeklyEvents: populateWeeklyEvents,
        deleteEvent: deleteEvent,
        todaysEvents: function(){return todaysEvents;},
        weeklyEvents: function(){return weeklyEvents;}
    };
});
