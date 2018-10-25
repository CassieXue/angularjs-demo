'use strict';

angular.module('myApp.views')
.controller('View2Ctrl', ['$rootScope','$scope',function($rootScope,$scope) {
    $scope.version_ = $rootScope.version_;
}]);