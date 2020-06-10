<template>
    <div class="main">
        <div class="title">
            <div class="bar"></div>
            <div class="txt">
                <div class="item float_left">
                    <span>总户数</span>
                    <span class="num">{{'1017'}}</span>
                    <span>户</span>
                </div>
                <div class="item float_right">
                    <span>总租户</span>
                    <span class="num">{{'55'}}</span>
                    <span>户</span>
                </div>
            </div>
        </div>
        <div class="highcharts-container">
            <div class="count">
                <p class="top num">{{'2520'}}</p>
                <p class="down">社区总人口</p>
            </div>
            <div class="chart" ref="chart"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HuJi",
        data() {
            return {
                chart: null
            }
        },
        computed: {
            option() {
                return {
                    credits: {
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
                    legend: {
                        labelFormatter: function () {
                            return this.name ? (this.name + '<br>' + this.y + '人') : ''
                        },
                        align: 'right', //水平方向位置
                        verticalAlign: 'middle', //垂直方向位置
                        layout: 'vertical',
                        itemStyle: {
                            'fontSize': '0.72vw',
                            'color': '#fff',
                            // 'fontFamily': '微软雅黑',
                            'fontWeight': 'lighter'
                        }
                    },
                    plotOptions: {
                        pie: {
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true,
                            innerSize: '90%',
                            depth: 15,
                            size: '115%',
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: '数据资源',
                        data: [
                            {y: 2185, name: '本地户籍'},
                            {y: 10, name: '', color: 'rgba(0,0,0,0)'},
                            {y: 335, name: '外地户籍', color: '#ffc21e'},
                            {y: 10, name: '', color: 'rgba(0,0,0,0)'},
                        ]
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
        height: 17%;
    }

    .title {
        font-size: 16px;
        padding-left: 15px;
        height: 20%;
        display: flex;
        align-items: center;

        .bar {
            margin-right: 6px;
            background: #00bdff;
            width: 2px;
            height: 18px;
        }

        .txt {
            width: 100%;
            position: relative;

            .item {
                width: 50%;
                display: flex;
                justify-content: center;

                .num {
                    padding: 0 3px 0 10px;
                }
            }
        }
    }

    .highcharts-container {
        width: 100%;
        height: 80%;
        position: relative;

        .count {
            text-align: center;
            position: absolute;
            height: 100%;
            width: 71%;
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

        .chart {
            height: 100%;
            width: 100%;
        }
    }

</style>