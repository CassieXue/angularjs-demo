(function(){
    'use strict';

    angular.module('myApp.views')
        .controller('GridSterDemoController',['$scope', '$timeout','$window',function($scope, $timeout,$window) {

            $scope.two = [
                { sizeX: 6, sizeY: 4, row: 0, col: 0 },
                { sizeX: 4, sizeY: 3, row: 0, col: 6 }
            ];
            var timer = $timeout(function(){
                for(var i=0; i<$scope.two.length; i++){
                    $scope.two[i].content = [];
                }
            }, 1000);

            $scope.$on("$destroy", function(event) {
                $timeout.cancel(timer);
                console.log("timer has been removed!");
            });

            $scope.standardItems = [
                { sizeX: 2, sizeY: 1, row: 0, col: 0 , content: 's1'},
                { sizeX: 2, sizeY: 2, row: 0, col: 2 , content: 's2'},
                { sizeX: 1, sizeY: 1, row: 0, col: 4 , content: 's3'},
                { sizeX: 1, sizeY: 1, row: 0, col: 5 , content: 's4'},
                { sizeX: 2, sizeY: 1, row: 1, col: 0 , content: 's5'},
                { sizeX: 1, sizeY: 1, row: 1, col: 4 , content: 's6'},
                { sizeX: 1, sizeY: 2, row: 1, col: 5 , content: 's7'},
                { sizeX: 1, sizeY: 1, row: 2, col: 0 , content: 's8'},
                { sizeX: 2, sizeY: 1, row: 2, col: 1 , content: 's9'},
                { sizeX: 1, sizeY: 1, row: 2, col: 3 , content: 's10'},
                { sizeX: 1, sizeY: 1, row: 2, col: 4 , content: 's11'}
            ];
            $scope.customItems = [
                { size: { x: 2, y: 1 }, position: [0, 0], content: 'c1' },
                { size: { x: 2, y: 2 }, position: [0, 2], content: 'c2' },
                { size: { x: 1, y: 1 }, position: [0, 4], content: 'c3' },
                { size: { x: 1, y: 1 }, position: [0, 5], content: 'c4' },
                { size: { x: 2, y: 1 }, position: [1, 0], content: 'c5' },
                { size: { x: 1, y: 1 }, position: [1, 4], content: 'c6' },
                { size: { x: 1, y: 2 }, position: [1, 5], content: 'c7' },
                { size: { x: 1, y: 1 }, position: [2, 0], content: 'c8' },
                { size: { x: 2, y: 1 }, position: [2, 1], content: 'c9' },
                { size: { x: 1, y: 1 }, position: [2, 3], content: 'c10' },
                { size: { x: 1, y: 1 }, position: [2, 4], content: 'c11' }
            ];
            $scope.gridsterOpts = {
                columns: 12,
                margins: [10, 10],
                minSizeX: 2,
                minSizeY: 2,
                resizable: {
                    enabled: true,
                    handles: ['se'],
                    start: function(event, $element, widget) {
                        console.log('gridster-item start resize ***** width:'+ $element[0].clientWidth + 'height:' + $element[0].clientHeight);
                    },
                    stop: function(event, $element, widget) {
                        console.log('gridster-item stop resize ***** width:'+ $element[0].clientWidth + 'height:' + $element[0].clientHeight);
                    }
                },
                draggable: {
                    enabled: true,
                    start: function(event, $element, widget) {},
                    drag: function(event, $element, widget) {},
                    stop: function(event, $element, widget) {}
                }
            };
    }]);
})();