(function (){             //IIFE (Immediately Invoked Function Expression)
'use strict';             

angular.module('HypesiloApp', [])
.controller('ClockController', ClockController)

ClockController.$inject = ['$scope'];

function ClockController($scope) {
    $scope.time= 0;
    $scope.date = "";

    
    
};

})();