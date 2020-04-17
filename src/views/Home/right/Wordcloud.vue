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
                        "name": "积分排行",
                        "type": "wordCloud",
                        "gridSize": 20,
                        "sizeRange": [12, 24],
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
                            {"name": "供应商01","value": 200,},
                            {"name": "供应商02","value": 120,},
                            {"name": "供应商03","value": 230,},
                            {"name": "供应商04","value": 302,},
                            {"name": "供应商05","value": 134,},
                            {"name": "供应商06","value": 256,},
                            {"name": "供应商07","value": 176,},
                            {"name": "供应商08","value": 264,},
                            {"name": "供应商09","value": 186,},
                            {"name": "供应商10","value": 249,},
                            {"name": "供应商11","value": 249,},
                            {"name": "供应商12","value": 249,},
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