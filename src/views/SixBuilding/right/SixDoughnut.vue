<template>
    <div class="main">
        <div class="total">
            <div class="bar"></div>
            <div>6号楼总人口</div>
            <div><span class="num">{{'131'}}</span></div>
            <div>人</div>
        </div>
        <div class="highcharts-container">
            <div class="count">
                <p class="top">6号楼</p>
                <p class="down">男女比例</p>
            </div>
            <div class="chart" ref="chart"></div>
        </div>
        <div class="txt">
            <div class="item float_left">
                <div class="title">
                    <div class="bar"></div>
                    <div>少数民族人数</div>
                </div>
                <div><span class="num">4</span> 人</div>
            </div>
            <div class="item float_right">
                <div class="title">
                    <div class="bar"></div>
                    <div> 已婚比率</div>
                </div>
                <div><span class="num">77</span> %</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SixDoughnut",
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
                        options3d: {
                            enabled: true,
                            alpha: 45
                        }
                    },
                    title: {
                        text: ''
                    },
                    legend:{
                        labelFormat: '{name}<br>{y}人',
                        itemHight: 60,
                        align: 'right', //水平方向位置
                        verticalAlign: 'middle', //垂直方向位置
                        layout: 'vertical',
                        itemStyle : {
                            'fontSize' : '0.7vw',
                            'color' : '#fff',
                            // 'fontFamily': '微软雅黑',
                            'fontWeight': 'lighter'
                        }
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
                            innerSize: '80%',
                            depth: 15,
                            size: '120%'
                        }
                    },
                    series: [{
                        type: 'pie',
                        name: '数据资源',
                        data: [
                            {y: 69, name: '男性人数'},
                            {y: 62,color: 'yellow', name: '女性人数'},
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
        height: 22%;
    }

    .total {
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
        height: 65%;
        position: relative;
        .count {
            text-align: center;
            position: absolute;
            height: 100%;
            width: 73%;
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
    .txt{
        text-align: center;
        height: 25%;
        .title {
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
        }
        .item{
            width: 50%;
        }
    }
</style>