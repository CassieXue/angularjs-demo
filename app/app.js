'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ui.router',
    'angular-echarts',
    'infinite-scroll',
    'gridster',
    'myApp.views',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', '$stateProvider','$urlRouterProvider',
    function($locationProvider, $routeProvider, $stateProvider, $urlRouterProvider) {
       /* var hashPrefix = '!',  //默认前缀!, 生成地址格式：http://localhost:8000/#!/view1
        html5Mode = {
         enabled: false,   //默认false,hashbang模式
         requireBase: true,  //需配置base标签
         rewriteLinks: true
       };*/

    $locationProvider.html5Mode(false).hashPrefix('');  //设置为hashbang模式，无前缀http://localhost:8000/#/view1

    $urlRouterProvider.otherwise('/state2');
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
    });
    // 使用ng-route配置路径
    // $routeProvider
    // .when('/view1', {
    //     templateUrl: 'view1/view1.html',
    //     controller: 'View1Ctrl'
    // })
    // .when('/view2', {
    //     templateUrl: 'view2/view2.html',
    //     controller: 'View2Ctrl'
    // })
    // .otherwise({redirectTo: '/view1'});

}]);
/*
* angularJS中的run方法初始化全局数据，只对全局作用域起作用
* */
angular.module('myApp').run(['$rootScope',function($rootScope){
  $rootScope.version_ = '0.0.1';
}]);
//config()，可以做一些注册工作，这些工作需要在模块加载时完成。
//run(), 如果你想要在注射器启动之后执行某些操作，而这些操作需要在页面对用户可用之前执行，就可以使用此方法

// new module
angular.module('myApp.views', []);