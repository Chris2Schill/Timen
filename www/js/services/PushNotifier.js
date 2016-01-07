angular.module('starter.services')

.factory('PushNotifier', function($http){

    var notification = { 
        "tokens":[
            "b284a6f7545368d2d3f753263e3e2f2b7795be5263ed7c95017f628730edeaad",
            "d609f7cba82fdd0a568d5ada649cddc5ebb65f08e7fc72599d8d47390bfc0f20"
          
        ],
        "notification":{
            "alert":"Hello World!",
        }
    };

    var notify = function(){
        return $http({
            method:'POST',
            url: 'https://push.ionic.io/api/v1/push',
            data: notification,
            headers: {'Content-Type': 'application/json',
                      'X-Ionic-Application-Id': 'AIzaSyDpNITUz0cQ8I-OsxxE65daylHZVO711n4'}
        });

    };

    return {
        notify: notify
    };
});
