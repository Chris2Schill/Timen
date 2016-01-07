angular.module('schedule.controllers') 

.controller('MonthCtrl', function($scope, $state){

    var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
    ];

    $scope.month = monthNames[new Date().getMonth()]; 

    $scope.toDash = function(){
        $state.go('dash', {}, {reload:true});
    }

});
