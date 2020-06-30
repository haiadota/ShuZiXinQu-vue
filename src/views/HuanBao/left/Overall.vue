<template>
    <div class="main" ref="main">
        <div class="dark">
            <img src="../../../../public/image/HuanBao/kongqi.png" alt="" class="image">
            <span class="txt">空气质量优良率</span>
            <div class="right_fade"><span class="num">{{kongqi}}</span></div>
        </div>
        <div class="light">
            <img src="../../../../public/image/HuanBao/shuizhi.png" alt="" class="image">
            <span class="txt">水质达标率</span>
            <div class="right_fade"><span class="num">{{'98'}}</span> %<span></span></div>
        </div>
        <div class="dark">
            <img src="../../../../public/image/qiye.png" alt="" class="image">
            <span class="txt">重点监控企业</span>
            <div class="right_fade"><span class="num">{{'11'}}</span> 家<span></span></div>
        </div>
        <div class="light">
            <img src="../../../../public/image/HuanBao/shijian.png" alt="" class="image">
            <span class="txt">环保事件</span>
            <div class="right_fade"><span class="num">{{'2'}}</span> 件<span></span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Overall",
        data() {
            return {
                kongqi: '80%',
                myTimer1: null,
                myTimer2: null
            }
        },
        created() {
            let that = this
            this.axios.post('http://localhost:8099/test/kshdatapost',
                {"param": {"csid": 287}, "url": that.host1 + "/container/data/single"},
                {headers: {'Content-Type': 'application/json'}}// {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then(res => {
                if (res.status == '200') {
                    that.kongqi = res.data.data.data.val
                }
            }).catch(err=>{})
        },
        methods: {
            firstShow() {
                let arr = this.$refs.main.getElementsByClassName('txt')
                let i = 0
                let that = this
                this.myTimer1 = setInterval(function () {
                    if (i == arr.length) {
                        clearInterval(that.myTimer1)
                        that.myTimer1 = null
                    } else {
                        arr[i].className = 'txt slideIn'
                    }
                    i++
                }, 500)
            },
            secondShow() {
                let arr = this.$refs.main.getElementsByClassName('right_fade')
                let i = -2
                let that = this
                this.myTimer2 = setInterval(function () {
                    if (i == arr.length) {
                        clearInterval(that.myTimer2)
                        that.myTimer2 = null
                    } else {
                        if (arr[i]) {
                            arr[i].className = 'right_fade slideIn'
                        }
                    }
                    i++
                }, 500)
            }
        },
        mounted() {
            this.firstShow()
            this.secondShow()
        },
        beforeDestroy() {
            if (this.myTimer1) {
                clearInterval(this.myTimer1)
                this.myTimer1 = null
            }
            if (this.myTimer2) {
                clearInterval(this.myTimer2)
                this.myTimer2 = null
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main {
        margin: 3% 0 3% 0;
        height: 26%;
    }

    .dark {
        padding: 0 5px;
        background: rgba(225, 225, 225, .26);
        height: 25%;
        line-height: 25%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .light {
        padding: 0 5px;
        height: 25%;
        line-height: 20%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .image {
        width: 30px;
        height: 30px;
    }

    .txt {
        flex: 1;
        text-indent: 10px;
        visibility: hidden;
    }

</style>