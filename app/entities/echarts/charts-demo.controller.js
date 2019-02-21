'use strict';

angular.module('myApp.views')
    .controller('lineChartDemo', ['$scope',function($scope) {
        var pageload = {
            name: 'page.load',   //图例name
            datapoints: [   //数据
                { x: 2001, y: 1012 },
                { x: 2002, y: 1023 },
                { x: 2003, y: 1045 },
                { x: 2004, y: 1062 },
                { x: 2005, y: 1032 },
                { x: 2006, y: 1040 },
                { x: 2007, y: 1023 },
                { x: 2008, y: 1090 },
                { x: 2009, y: 1012 },
                { x: 2010, y: 1012 },
            ]
        };
        var firstPaint = {
            name: 'page.firstPaint',   //图例name
            datapoints: [
                { x: 2001, y: 22 },
                { x: 2002, y: 13 },
                { x: 2003, y: 35 },
                { x: 2004, y: 52 },
                { x: 2005, y: 32 },
                { x: 2006, y: 40 },
                { x: 2007, y: 63 },
                { x: 2008, y: 80 },
                { x: 2009, y: 20 },
                { x: 2010, y: 25 },
            ]
        };
        $scope.config = {
            title: 'Line Chart',     // chart title
            subtitle: 'Line Chart Subtitle',    //chart sub title
            debug: true,
            showXAxis: true,     //是否显示X轴
            showYAxis: true,     //是否显示Y轴
            showLegend: true,    //是否显示图例
            stack: false,
        };

        $scope.data1 = [ pageload ];
        $scope.multiple = [pageload, firstPaint ];
    }]);