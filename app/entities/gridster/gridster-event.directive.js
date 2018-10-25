(function () {
    'use strict';

    angular
        .module('myApp.views')
        .directive('gridsterItemEvent', gridsterItemEvent);

    gridsterItemEvent.$inject = ['$timeout'];
    function gridsterItemEvent($timeout) {
        return {
            restrict: "A",
            replace: false,
            scope: {

            },
            link: function (scope, element, attrs) {
                scope.$on('gridster-item-resized', function(item) {
                    var width = element[0].clientWidth;
                    var height = element[0].clientHeight;
                    console.log('gridster-item-resized to**** clientWidth: ' + width +' , height:'+ height);
                    var newWidth = item.targetScope.gridsterItem.getElementSizeX();
                    var newHeight = item.targetScope.gridsterItem.getElementSizeY();

                    scope.$broadcast('container-size-changed', {'width': newWidth,'height': newHeight});

                });
            }
        };
    }
})();