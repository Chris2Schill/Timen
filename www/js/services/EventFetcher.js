angular.module('event.fetcher', [])

.service('EventFetcher', function($http, $q){

    function getThisMonthsEvents(){
        return $http.get('/monthly_events');
    }

    function getThisWeeksEvents(){
        return $http.get('/weekly_events');
    }

    function getTodaysEvents(){
        return $http.get('/daily_events');
    };
    
    var populateTodaysEvents = function(email) { 
        return $q(function(resolve,reject) {
            getTodaysEvents().then(function(response) {
                resolve('Events fetching successful'); 
            });
            reject('Event fetching unsuccessful');
        });
    }; 

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
            createEvent: createEvent,
            deleteEvent: deleteEvent
    };
});
