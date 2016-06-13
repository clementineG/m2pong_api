var pongApp = angular.module('pongApp', ['ngRoute']);


pongApp.controller('PongCtrl', ['$scope', '$rootScope', 'PongService', function($scope, $rootScope, PongService) {

    $scope.game = {};

    //$scope.$on('detected', function(event, data){
    //    console.log('Detected client');
    //    console.log('Data '+data);
    //});

}]);