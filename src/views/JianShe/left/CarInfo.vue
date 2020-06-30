<template>
    <div class="main">
        <div class="item">
            <div class="txt">
                <div class="wrap">
                    <p>总量{{xunchaTotal}}</p>
                    <p>市政巡查车</p>
                </div>
            </div>
            <div class="chart" ref="first"></div>
        </div>
        <div class="item">
            <div class="txt">
                <div class="wrap">
                    <p>总量{{huanweiTotal}}</p>
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
        data() {
            return {
                xunchaTotal: 49,
                xunchaOnline: 0,
                huanweiTotal: 107,
                huanweiOnline: 0,
                firstChart: null,
                secondChart: null,
            };
        },
        methods: {
            option(name, arr) {
                let data = [
                    {
                        value: arr[1],
                        name: "",
                        itemStyle: {
                            normal: {
                                borderWidth: 3,
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                },
                                color: "rgba(0, 0, 0, 0)",
                                borderColor: "rgba(67, 87, 122, 1)",
                            }
                        }
                    },
                    {
                        value: arr[0],
                        name: name,
                        itemStyle: {
                            normal: {
                                borderWidth: 4,
                                shadowBlur: 30,
                                color: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 1, 1,
                                    [
                                        {offset: 0, color: "#6b73e8"},
                                        {offset: 1, color: "#ffffff"}
                                    ]
                                ),
                                borderColor: new this.$echarts.graphic.LinearGradient(
                                    0, 0, 1, 1,
                                    [
                                        {offset: 0, color: "#7b83f9"},
                                        {offset: 0.5, color: "#a6edff"},
                                        {offset: 1, color: "#ffffff"}
                                    ]
                                ),
                                shadowColor: "rgba(142, 152, 241, 0.6)",
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true,
                                length: 10,
                                length2: 20,
                                lineStyle: {
                                    color: "rgba(255, 255, 255, .4)",
                                    width: 1
                                }
                            }
                        }
                    }
                ]
                return {
                    series: [
                        {
                            //外环
                            type: "pie",
                            clockWise: false, //顺时加载
                            zlevel: 1,
                            silent: true,
                            radius: ["60%", "58%"],
                            center: ['50%', '50%'],
                            hoverAnimation: false,
                            itemStyle: {
                                normal: {
                                    color: "rgba(7, 26, 62, 1)",
                                    opacity: 0.8
                                }
                            },
                            label: {
                                normal: {
                                    show: false
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: [1]
                        },
                        // 内环
                        {
                            type: "pie",
                            zlevel: 20,
                            silent: true,
                            radius: ["51%", "0%"],
                            center: ['50%', '50%'],
                            clockWise: false, //顺时加载
                            hoverAnimation: false,
                            itemStyle: {
                                normal: {
                                    color: "rgba(33, 50, 86, 1)",
                                    opacity: 0.6
                                }
                            },
                            data: [1],
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            }
                        },
                        // 中间的
                        {
                            name: "",
                            type: "pie",
                            clockWise: true,
                            radius: ["57%", "54%"],
                            center: ['50%', '50%'],
                            hoverAnimation: false,
                            itemStyle: {
                                normal: {
                                    label: {
                                        position: "outer",
                                        alignTo: "edge",
                                        margin: 10,
                                        formatter: function (params) {
                                            if (params.name !== "") {
                                                return (
                                                    "{a|" +
                                                    params.value +
                                                    "}" +
                                                    "\n{hr|}\n{c|" +
                                                    '在线量' +
                                                    "}"
                                                );
                                            } else {
                                                return "";
                                            }
                                        },
                                        rich: {
                                            a: {
                                                color: "#FFFF",
                                                fontSize: 20,
                                                lineHeight: 20,
                                                align: "center",
                                                fontFamily: "RuiZi"
                                            },
                                            b: {
                                                fontSize: 12,
                                                color: "rgba(255, 255, 255, 0.7)",
                                                fontFamily: "HanSans"
                                            },
                                            hr: {
                                                borderColor: "rgba(255, 255, 255, 0.2)",
                                                width: "100%",
                                                borderWidth: 1,
                                                height: 0
                                            },
                                            c: {
                                                color: "rgba(255, 255, 255, 0.8)",
                                                lineHeight: 20,
                                                align: "center",
                                            }
                                        }
                                    }
                                }
                            },
                            data: data
                        }
                    ]
                };
            }
        },
        created() {
            let that = this
            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 255}, "url": that.host1 + "/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}// {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then(res => {
                if (res.status == '200') {
                    let arr = res.data.data.data.data
                    // let onlineNum = 0
                    // arr.forEach(function (i) {
                    //     if (i.ONLINE * 1) {
                    //         onlineNum++
                    //     }
                    // })
                    // that.xunchaTotal = arr.length
                    // that.xunchaOnline = onlineNum
                    that.xunchaOnline = arr.length
                }
                that.$nextTick(() => {
                    if (that.$refs.first) {
                        that.firstChart = that.$echarts.init(that.$refs.first);
                        that.firstChart.setOption(that.option('市政巡查车', [that.xunchaOnline, that.xunchaTotal - that.xunchaOnline]));
                    }
                })
            }).catch(err => {
                that.$nextTick(() => {
                    if (that.$refs.second) {
                        that.firstChart = that.$echarts.init(that.$refs.first);
                        that.firstChart.setOption(that.option('市政巡查车', [4, 45]));
                    }
                })
            })
            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 278}, "url": that.host1 + "/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}// {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then(res => {
                if (res.status == '200') {
                    let arr = res.data.data.data.data
                    // let onlineNum = 0
                    // arr.forEach(function (i) {
                    //     if (i.ONLINE * 1) {
                    //         onlineNum++
                    //     }
                    // })
                    // that.huanweiTotal = arr.length
                    // that.huanweiOnline = onlineNum
                    that.huanweiOnline = arr.length

                }
                that.$nextTick(() => {
                    if (that.$refs.second) {
                        that.secondChart = that.$echarts.init(that.$refs.second);
                        that.secondChart.setOption(that.option('环卫车', [that.huanweiOnline, that.huanweiTotal - that.huanweiOnline]));
                    }
                })
            }).catch(err => {
                that.$nextTick(() => {
                    if (that.$refs.second) {
                        that.secondChart = that.$echarts.init(that.$refs.second);
                        that.secondChart.setOption(that.option('环卫车', [24, 83]));
                    }
                })
            })
        },
        beforeDestroy() {
            if (this.firstChart) this.$echarts.dispose(this.firstChart);
            if (this.secondChart) this.$echarts.dispose(this.secondChart);
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
                width: 100%;
                height: 96%;
                display: flex;
                align-items: center;
                justify-content: center;
                text-align: center;
                font-size: 16px;
                z-index: 1;
                pointer-events: none;
            }

            .chart {
                height: 100%;
            }
        }
    }
</style>