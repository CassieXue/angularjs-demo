/**
 * Created by HP on 2016/10/14.
 */
(function () {
    'use strict';

    angular
        .module('myApp.views')
        .directive('myEChart', myeChart);

    myeChart.$inject = [];
    function myeChart() {
        return {
            scope: {
                option: "=?",
                echartData: "=?"
            },
            restrict: "A",
            link: function (scope, element, attrs) {
                var thisElement = element[0];
                scope.getPDom = function () {
                    var clientHeight = element[0].clientHeight,
                        clientWidth = element[0].clientWidth,
                        parentCHeight = element.parent()[0].clientHeight,
                        parentCWidth = element.parent()[0].clientWidth;

                    return {
                        'height': parentCHeight,
                        'width': parentCWidth
                    };
                };
                scope.resizeElement = function(width, height){
                    thisElement.style.width = width + 'px';
                    thisElement.style.height = height + 'px';
                };
                var height = element[0].clientHeight||element.parent()[0].clientHeight;
                var width = element[0].clientWidth||element.parent()[0].clientWidth;
                scope.resizeElement(width, height);
                scope.option = {
                    // title: {
                    //     show: true,
                    //     text: '折线图',
                    //     textStyle: {
                    //         color: '#f0f',
                    //         fontStyle: 'italic',
                    //         fontWeight: 600,
                    //         fontSize: 18,
                    //         align: 'center'
                    //     }
                    // },
                    legend: {
                        data:['高度(km)与气温(°C)变化关系']
                    },
                    toolbox: {
                        show : false,
                        orient: 'horizontal',
                        feature : {
                            brush : {show: true, type: ['rect']},    //选框组件的控制按钮
                            dataView : {show: true, readOnly: false},   //数据视图工具
                            dataZoom: {show: false},  //数据区域缩放
                            magicType : {show: true, type: ['line', 'bar']},    //动态类型切换
                            restore : {show: true},    //配置项还原
                            saveAsImage : {show: true}   //保存为图片
                        }
                    },
                    calculable : true,   //是否启用拖拽重计算特性，默认关闭
                    tooltip : {
                        trigger: 'axis',
                        formatter: 'Temperature : <br/>{b}km : {c}°C'
                    },
                    grid: {
                        show: false,    //默认值false不显示
                        left: '15%'    //grid 组件离容器左侧的距离。
                    },
                    xAxis : [
                        {
                            type : 'value',   //数值轴，适用于连续数据
                            show: true,
                            position: 'bottom',
                            axisLabel : {
                                formatter: '{value} °C',
                                rotate: 25
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'category',    //类目轴，适用于离散的类目数据，必须通过data设置类目数据
                            axisLine : {
                                onZero: false,    //轴线是否是在另一个轴的0刻度上，只有在另一个轴为数值轴且包含0刻度时有效
                                symbol: ['none','arrow']
                            },
                            axisLabel : {
                                formatter: '{value} km',
                                rotate: 0
                            },
                            boundaryGap : false,
                            data : ['0', '10', '20', '30', '40', '50', '60', '70', '80']   //类目数据，在类目轴中有效
                        }
                    ],
                    series : [
                        {
                            name:'高度(km)与气温(°C)变化关系',
                            type:'line',
                            smooth:true,
                            center:[0,0],
                            itemStyle: {
                                normal: {
                                    lineStyle: {
                                        shadowColor : 'rgba(0,0,0,0.4)'
                                    }
                                }
                            },
                            data:[15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
                        }
                    ]
                };

                var myChart = echarts.init(element[0]);
                myChart.setOption(scope.option);

                // scope.$watch('option', function () {
                //     if (angular.isObject(scope.option)) {
                //         myChart.clear();
                //         myChart.resize();
                //         myChart.setOption(scope.option);
                //     }
                // }, true);

                scope.$on('gridster-item-resized', function(item) {
                    var newWidth = item.targetScope.gridsterItem.getElementSizeX()-30;
                    var newHeight = item.targetScope.gridsterItem.getElementSizeY()-30;
                    console.log('sizeX: ' + item.targetScope.gridsterItem.sizeX);
                    console.log('sizeY: ' + item.targetScope.gridsterItem.sizeY);
                    scope.resizeElement(newWidth, newHeight);
                    myChart.resize();
                });
                scope.$on('gridster-item', function(){

                });
                scope.$on('gridster-resized', function(event, sizes){
                    var wh = scope.getPDom();
                    scope.resizeElement(wh.width, wh.height);
                    myChart.resize();
                });

                //
                // myChart.on('rendered', function () {
                //     if (scope.echartData) {
                //         scope.echartData.data = myChart.getDataURL();
                //     }
                // });

            }
        };
    }

})();
