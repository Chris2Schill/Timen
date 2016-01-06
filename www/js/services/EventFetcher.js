angular.module('event.fetcher', [])

.service('EventFetcher', function($http, $q){

    var events = {};

    function getThisMonthsEvents(){
        return $http.get('/monthly_events');
    }

    function getThisWeeksEvents(){
        return $http.get('/weekly_events');
    }

    function getTodaysEvents(){
        return $http.get('/daily_events');
    };

    var populateTodaysEvents = function(user_id) {
        console.log("User Id: " + user_id);
        $http({
            url: 'http://localhost:3000/daily_events', 
            method: "GET",
            params: {user_id: user_id}
        }).then(function(response){
            console.log(JSON.stringify(response));
            events = response.data;
        }, function(err){
            console.log(JSON.stringify(err));    
        });
    };
    
    /*
    var populateTodaysEvents = function() { 
        $q(function(resolve,reject) {
            getTodaysEvents().then(function(response) {
                console.log("Fetching Events");
                console.log(response);
                return response;
                resolve('Event fetching successful'); 
            });
            reject('Event fetching unsuccessful');
        });
    }; 
    */

    var populateWeeklyEvents = function(email){
        return $q(function(resolve,reject) {
            getThisWeeksEvents().then(function(response) {
                resolve('Event fetching successful'); 
            });
            reject('Event fetching unsuccessful');
        });
    }

    var createEvent = function(event){

    }

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
    } 

        return {
            populateTodaysEvents: populateTodaysEvents,
            populateWeeklyEvents: populateWeeklyEvents,
            createEvent: createEvent,
            deleteEvent: deleteEvent,
            events: function(){return events;}
    };
});
