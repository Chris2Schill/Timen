angular.module('event.fetcher', [])

.service('EventFetcher', function($http, $q){

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

        return {
        populateTodaysEvents: populateTodaysEvents
    };
});
