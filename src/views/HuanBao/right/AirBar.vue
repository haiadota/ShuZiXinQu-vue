<template>
    <div class="main">
        <div class="txt">
            <div class="bar"></div>
            <div>实时空气质量</div>
            <div><span class="num">{{aqi}}</span></div>
            <div class="grade">{{quality}}</div>
        </div>
        <div class="chart" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "AirBar",
        data() {
            return {
                aqi: 56,
                quality: '良',
                chart: null,
                categories: ['园林处', '净月潭', '经开区环卫处'],
                bar_data: [20, 27, 20]
            }
        },
        computed: {
            option() {
                return {
                    credits: {
                        enabled: false,
                    },
                    chart: {
                        type: 'column',
                        margin: 75,
                        backgroundColor: 'rgba(0,0,0,0)',
                        marginTop: 20,
                        marginBottom: 40,
                        marginLeft: 60,
                        marginRight: 0,
                    },
                    legend: {
                        enabled: false,
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    plotOptions: {
                        column: {
                            pointWidth: 6,
                            depth: 25,
                            borderColor: ""
                        }
                    },
                    xAxis: {
                        labels: {
                            style: {
                                'fontSize': '0.6vw',
                                color: 'rgba(200,200,200)'
                            }
                        },
                        categories: this.categories
                    },
                    yAxis: {
                        labels: {
                            style: {
                                'fontSize': '0.6vw',
                                color: 'rgba(200,200,200)'
                            }
                        },
                        title: {
                            text: null
                        }
                    },
                    tooltip: {
                        style: {
                            'fontSize': '0.8vw',
                        },
                        shared: true,
                        headerFormat: '<b>{point.key}日</b><br>',
                        pointFormat: '<span>AQI: </span><span class="num">{point.y}</span>'
                    },
                    series: [{
                        name: '',
                        data: this.bar_data
                    }]
                }
            }
        },
        created() {
            let that = this
            this.axios.get('http://localhost:8099/test/kshdataget',
                {"param": {}, "url": that.host1 + "/home/airQuality"},
                {headers: {'Content-Type': 'application/json'}}// {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then(res => {
                if (res.status == '200') {
                    that.aqi = res.data.data.aqi
                    that.quality = res.data.data.quality
                }
            }).catch(err => {
            })

            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 43}, "url": that.host1 + "/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}// {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then(res => {
                if (res.status == '200') {
                    that.categories = res.data.data.data.xAxis
                    let arr = []
                    res.data.data.data.data[0].data.forEach(function (i) {
                        arr.push(parseInt(i.val))
                    })
                    that.bar_data = arr
                }
                that.$nextTick(() => {
                    if (that.$refs.chart) that.initChart();
                })
            }).catch(err => {
                that.$nextTick(() => {
                    if (that.$refs.chart) that.initChart();
                })
            })
        },
        // mounted() {
        //     this.initChart();
        // },
        methods: {
            initChart() {
                let that = this
                var colors = ['#1A83D2', '#19F4D2'];
                this.$Highcharts.getOptions().colors = this.$Highcharts.map(colors, function (color) {
                    return {
                        radialGradient: {cx: 0, cy: -0.8, r: 2.3},
                        stops: [[0, color], [2, that.$Highcharts.Color(color).brighten(14).get('rgb')]]
                    };
                })
                this.chart = new this.$Highcharts.Chart(this.$refs.chart, this.option);
            }
        }
    }
</script>

<style scoped lang="scss">
    .main {
        position: relative;
        height: 28%;
    }

    .index {
        height: 10%;
        text-indent: 10px;
    }

    .txt {
        height: 12%;
        padding-left: 15px;
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

        .grade {
            margin-left: 15px;
            padding: 0 5px;
            height: 25px;
            background: linear-gradient(0deg, rgba(86, 171, 47, 0.6) 0%, rgba(168, 224, 99, 0.6) 100%);
            border-radius: 10px;
            text-align: center;
        }
    }

    .chart {
        height: 88%;
    }
</style>