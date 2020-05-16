<template>
    <div class="main">
        <div class="item">
            <div class="txt">
                <div class="wrap">
                    <p>总量{{'49'}}</p>
                    <p>市政巡查车</p>
                </div>
            </div>
            <div class="chart" ref="first"></div>
        </div>
        <div class="item">
            <div class="txt">
                <div class="wrap">
                    <p>总量{{'107'}}</p>
                    <p>环卫车</p>
                </div>
            </div>
            <div class="chart" ref="second"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CarInfo",
        methods: {
            option( name, numArr) {
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
                        text: '',
                        floating: true,
                        useHTML: true,
                        verticalAlign: 'middle',
                        align: 'center',
                        x: 23,
                        y: 0,
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
                            center: ['65%', '50%'],
                            cursor: 'pointer',
                            showInLegend: true,
                            innerSize: '80%',
                            depth: 15,
                            size: '85%'
                        }
                    },
                    tooltip: {
                        style: {
                            'fontSize': '0.8vw',
                        },
                        shared: true,
                        headerFormat: '<span>{point.key}</span><br>',
                        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: <span class="num">{point.y}</span>辆 '
                    },
                    series: [{
                        name: '在线量',
                        data: [
                            {
                                y: numArr[0],
                                name: '',
                                color: '#e8f860',
                                dataLabels: {
                                    enabled: false,
                                }
                            },
                            {
                                y: numArr[1],
                                name: name,
                                color: '#0bceff',
                                dataLabels: {
                                    format: "{y}<br>在线量",
                                    y: 0,
                                    padding: 0,
                                    connectorColor: '#fff',
                                    distance: 5,
                                    enabled: true,
                                    style: {
                                        fontWeight: 'light',
                                        fontSize: '0.7vw',
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
            this.myChartFirst = new this.$Highcharts.Chart(this.$refs.first, this.option('市政巡查车', [5, 44]));
            this.myChartSecond = new this.$Highcharts.Chart(this.$refs.second, this.option('环卫车', [10, 97]));
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
                right: 0;
                top: 0;
                width: 77%;
                height: 96%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                font-size: 16px;
            }

            .chart {
                height: 100%;
            }
        }
    }
</style>