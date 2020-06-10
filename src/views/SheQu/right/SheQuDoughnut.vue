<template>
    <div class="main">
        <div class="txt">
            <div class="bar"></div>
            <div>今日事件数</div>
            <div><span class="num">{{'12'}}</span></div>
            <div>件</div>
        </div>
        <div class="highcharts-container">
            <div class="count">
                <p class="top">{{'98'}}%</p>
                <p class="down">事件处理率</p>
            </div>
            <div class="chart" ref="chart"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SheQuDoughnut",
        data() {
            return {
                chart: null
            }
        },
        computed: {
            option() {
                return {
                    credits:{
                        enabled: false,
                    },
                    chart: {
                        type: 'pie',
                        backgroundColor: 'rgba(0,0,0,0)',
                        // options3d: {
                        //     enabled: true,
                        //     alpha: 45
                        // }
                    },
                    title: {
                        text: ''
                    },
                    legend:{
                        // labelFormat: '{name}<br>{y}件',
                        labelFormatter: function () {
                            return this.name?(this.name +'<br>'+ this.y+'件'):''
                        },
                        itemHight: 60,
                        align: 'right', //水平方向位置
                        verticalAlign: 'middle', //垂直方向位置
                        layout: 'vertical',
                        itemStyle : {
                            'fontSize': '0.7vw',
                            'color': '#fff',
                            // 'fontFamily': '微软雅黑',
                            'fontWeight': 'lighter'
                        }
                    },
                    tooltip: {
                        // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false,
                                format: '{point.name}'
                            },
                            showInLegend: true,
                            innerSize: '90%',
                            depth: 15,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '社区事件分析',
                        data: [
                            {y: 986, name: '事件已处理'},
                            {y: 10, name: '',color:'rgba(0,0,0,0)'},
                            {y: 246,color: '#ffc21e', name: '事件未处理'},
                            {y: 10, name: '',color:'rgba(0,0,0,0)'},
                        ],
                    }]
                }
            }
        },
        mounted() {
            this.initChart();
        },
        methods: {
            initChart() {
                this.chart = new this.$Highcharts.Chart(this.$refs.chart, this.option);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        position: relative;
        height: 20%;
    }

    .txt {
        font-size: 16px;
        padding-left: 15px;
        height: 10%;
        display: flex;
        align-items: center;

        .bar {
            margin-right: 6px;
            background: #00bdff;
            width: 2px;
            height: 18px;
        }

        .num {
            padding: 0 5px 0 20px;
            font-size: 26px;
            line-height: 16px;
        }
    }

    .highcharts-container {
        height: 90%;
        position: relative;
        .count {
            text-align: center;
            position: absolute;
            height: 100%;
            width: 70%;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .top {
                font-size: 22px;
            }

            .down {
                font-size: 16px;
            }
        }
        .chart{
            height: 100%;
            width: 100%;
        }
    }
</style>