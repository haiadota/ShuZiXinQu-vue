<template>
    <div class="main">
        <div class="txt">
            <div class="bar"></div>
            <div>今日数据接入量</div>
            <div><span class="num">{{'55'}}</span></div>
            <div>条</div>
        </div>
        <div class="count">
            <p class="top">{{'560'}}</p>
            <p class="down">数据总量</p>
        </div>
        <div class="chart" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "Resource",
        data() {
            return {
                myChart: null,
            }
        },
        computed: {
            option() {
                return {
                    "textStyle": {
                        "fontSize": 15
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b}: {c} ({d}%)'
                    },
                    legend: {
                        itemWidth: 13,
                        itemHeight: 13,
                        itemGap: 18,
                        textStyle: {
                            color: '#fff'
                        },
                        orient: 'vertical',
                        top: 'middle',
                        left: 160,
                        data: ['物联网数据111条', '业务数据222条', '统计数据333条']
                    },
                    series: [
                        {
                            name: '数据资源',
                            type: 'pie',
                            center: ['25%', '50%'],
                            radius: ['55%', '77%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                label: {
                                    show: false,
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            },
                            itemStyle: {
                                normal:{

                                    color:function(params) {
                                        //自定义颜色
                                        var colorList = ['#84ccc9', '#13b5b1', '#acd598'];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            },
                            labelLine: {
                                show: false
                            },
                            data: [
                                {value: 111, name: '物联网数据111条'},
                                {value: 222, name: '业务数据222条'},
                                {value: 333, name: '统计数据333条'}
                            ]
                        }
                    ]
                }
            }
        },
        mounted() {
            this.myChart = this.$echarts.init(this.$refs.chart)
            this.myChart.setOption(this.option)
        },
        beforeDestroy() {
            this.$echarts.dispose(this.myChart)
        }
    }
</script>

<style scoped lang="scss">
    .main{
        position: relative;
        height: 21%;
    }
    .txt{
        font-size: 16px;
        padding-left: 15px;
        height: 20%;
        display: flex;
        align-items: center;
        .bar{
            margin-right: 6px;
            background: #00bdff;
            width: 2px;
            height: 18px;
        }
        .num{
            padding: 0 5px 0 20px;
            font-size: 26px;
            line-height: 16px;
        }
    }
    .chart{
        height: 80%;
    }
    .count{
        text-align: center;
        position: absolute;
        top: 47%;
        left: 46px;
        .top{
            font-size: 22px;
        }
        .down{
            font-size: 16px;
        }
    }
</style>