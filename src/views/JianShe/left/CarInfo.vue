<template>
    <div class="main">
        <div class="item">
            <!--<div class="txt">-->
            <!--<div class="wrap">-->
            <!--<p>总量{{'365'}}</p>-->
            <!--<p>市政巡查车</p>-->
            <!--</div>-->
            <!--</div>-->
            <div class="chart" ref="first"></div>
        </div>
        <div class="item">
            <!--<div class="txt">-->
            <!--<div class="wrap">-->
            <!--<p>总量{{'365'}}</p>-->
            <!--<p>环卫车</p>-->
            <!--</div>-->
            <!--</div>-->
            <div class="chart" ref="second"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CarInfo",
        methods: {
            option(title) {
                return {
                    credits: {
                        enabled: false,
                    },
                    chart: {
                        type: 'pie',
                        backgroundColor: 'rgba(0,0,0,0)',
                        options3d: {
                            enabled: true,
                            alpha: 45
                        }
                    },
                    title: {
                        text: title,
                        floating: true,
                        useHTML: true,
                        verticalAlign: 'middle',
                        align: 'center',
                        x: 23,
                        y: 18,
                        style: {
                            fontSize: '16px',
                            lineHeight: 1,
                            color: "#fff",
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        pie: {
                            center: [83, 50],
                            cursor: 'pointer',
                            showInLegend: true,
                            innerSize: 96,
                            depth: 15,
                            size: 125
                        }
                    },
                    series: [{
                        name: '监控车辆',
                        data: [
                            {
                                y: 20,
                                name: '',
                                color: '#eee',
                                dataLabels: {
                                    enabled: false,
                                }
                            },
                            {
                                y: 111,
                                name: '360<br/><HR><br/>在线量',
                                color: '#0bceff',
                                dataLabels: {
                                    y: 0,
                                    padding: 0,
                                    connectorColor: '#fff',
                                    distance: 5,
                                    enabled: true,
                                    style: {
                                        // fontFamily: 'RuiZi',
                                        fontWeight: 'light',
                                        fontSize: 14,
                                        color: "#fff",
                                        textOutline: "none"
                                    }
                                }
                            }
                        ]
                    }]
                }
            }
        },
        mounted() {
            this.myChartFirst = new this.$Highcharts.Chart(this.$refs.first, this.option('<div style="text-align: center">总量：365<br>市政巡查车'));
            this.myChartSecond = new this.$Highcharts.Chart(this.$refs.second, this.option('<div style="text-align: center">总量：365<br>环卫车</div>'));
        },
        beforeDestroy() {
            this.myChartFirst.destroy()
            this.myChartSecond.destroy()
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        width: 106%;
        height: 17%;
        display: flex;
        transform: translateX(-3%);

        .item {
            flex: 1;
            height: 100%;
            position: relative;

            .txt {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                text-align: center;
            }

            .chart {
                height: 100%;
            }
        }
    }
</style>