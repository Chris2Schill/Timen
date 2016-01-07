angular.module('starter.services')

.service('EventCreator', function($http) { 


    // JSON.stringify() the data?? 
    var createEvent = function(event){ 
        return $http({
            method:'POST',
            url: 'http://localhost:3000/create_event', 
            data: event,
            headers: {'Content-Type': 'application/json'}
        }).then(function(response){
           console.log("Event creation Successful") 

        }, function(err){
           console.log("Event creation Unsuccessful") 
        });
    }

    return {
        createEvent: createEvent
    }

});
