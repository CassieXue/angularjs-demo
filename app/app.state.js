(function () {
    'use strict';
    angular.module('myApp')
        .config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
            // ui-router state配置
            $stateProvider.state('state1',{
                url: "/state1",
                templateUrl: "view1/view1.html",
                controller: 'View1Ctrl'
            }).state('state2',{
                url: "/state2",
                templateUrl: 'view2/view2.html',
                controller: 'View2Ctrl'
            }).state('state3',{
                url: '/infinite-scroll',
                templateUrl: 'entities/infinite-scroll/infinite-scroll-demo.html',
                controller: 'infiniteScrollDemoCtrl'
            }).state('state4',{
                url: '/gridster-demo',
                templateUrl: 'entities/gridster/gridster-demo.html',
                controller: 'GridSterDemoController'
            }).state('state5',{
                url: '/line',
                templateUrl: 'entities/echarts/charts-demo.html',
                controller: 'lineChartDemo'
            }).state('footer-sticky',{
                url: '/footer-sticky',
                templateUrl: 'entities/templates/footer-sticky.html'
            });

            $urlRouterProvider.otherwise('/state2');
        }]);
})();