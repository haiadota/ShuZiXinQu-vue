<template>
    <div class="main">
        <div class="txt">
            <div class="bar"></div>
            <div>今日数据接入量</div>
            <div><span class="num">{{'123'}}</span></div>
            <div>条</div>
        </div>
        <div class="highcharts-container">
            <div class="count">
                <p class="top num">{{'2142'}}</p>
                <p class="down">数据总量</p>
            </div>
            <div class="chart" ref="chart"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Doughnut",
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
                        labelFormatter: function () {
                            return this.name?(this.name + this.y+'条'):''
                        },
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
                    plotOptions: {
                        pie: {
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: false
                            },
                            showInLegend: true,
                            innerSize: '90%',
                            depth: 15,
                            borderWidth: 0
                        }
                    },
                    series: [{
                        name: '数据资源',
                        data: [
                            {y: 560, name: '物联网数据',color:'#47fbf2'},
                            {y: 10, name: '',color:'rgba(0,0,0,0)'},
                            {y: 791, name: '业务数据',color:'#ffc21e'},
                            {y: 10, name: '',color:'rgba(0,0,0,0)'},
                            {y: 791, name: '统计数据',color:'#5397f8'},
                            {y: 10, name: '',color:'rgba(0,0,0,0)'},
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
        height: 22%;
    }

    .txt {
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

        .num {
            padding: 0 5px 0 20px;
            font-size: 24px;
            line-height: 16px;
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
            width: 60%;
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