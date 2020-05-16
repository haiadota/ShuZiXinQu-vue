<template>
    <div class="main">
        <div class="ctx" ref="main"></div>
    </div>
</template>

<script>
    import 'echarts-wordcloud';

    export default {
        name: "Wordcloud",
        data() {
            return {
                myChart: null,
            }
        },
        computed: {
            option() {
                return {
                    "tooltip": {
                        "show": true,
                        "textStyle": {
                            "fontSize": "16",
                            "color": "#3c3c3c"
                        },
                        "backgroundColor": "#fff",
                        "borderColor": "#ddd",
                        "borderWidth": 1
                    },
                    "series": [{
                        "name": "",
                        "type": "wordCloud",
                        "gridSize": 20,
                        "sizeRange": [30, 45],
                        "rotationRange": [0, 0],
                        "shape": "circle",
                        "autoSize": {
                            "enable": true,
                            "minSize": 18
                        },
                        textStyle: {
                            normal: {
                                fontFamily: '微软雅黑',
                                color: function () {
                                    // let R = parseInt(Math.random() * 255)+','
                                    // let G = parseInt(Math.random() * 255)+','
                                    // let B = parseInt(Math.random() * 255)+','
                                    var colors = ['#7ecffd', '#81cacc', '#cca8ba', "#88cc81", "#82a0c5", '#fddb7e', '#de9834', '#c4ccd3','#15ff5d', '#157eff', '#ff9f15', "#15e6ff", "#dbe4e9", '#cbc581', '#de9834', '#c4ccd3',];
                                    return colors[parseInt(Math.random() * 10)];
                                    // return 'rgba('+R+G+B+'1)'
                                }
                            }
                        },
                        "data": [
                            {"name": "复工复产","value": 190,},
                            {"name": "开学","value": 21,},
                            {"name": "冠状病毒","value": 19,},
                            {"name": "促销时间","value": 14,},
                            {"name": "白马股","value": 14,},
                            {"name": "复工","value": 12,},
                            {"name": "无症状感染者","value": 11,},
                            {"name": "长春师范大学","value": 11,},
                            {"name": "长春","value": 11,},
                            {"name": "立讯精密","value": 10,},
                            {"name": "医学观察","value": 9,},
                        ]
                    }]
                }
            }
        },
        mounted() {
            this.myChart = this.$echarts.init(this.$refs.main)
            this.myChart.setOption(this.option)
        },
        beforeDestroy() {
            this.$echarts.dispose(this.myChart)
        }
    }
</script>

<style scoped>
    .main{
        height: 20%;
        width: 100%;
        position: relative;
    }
    .ctx{
        position: absolute;
        left: -15%;
        width: 130%;
        height: 100%;
        margin-top: -15px;
    }
</style>