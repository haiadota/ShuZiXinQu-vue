<template>
    <div class="main" ref="main">
        <div class="dark">
            <img src="../../../../public/image/home/renkou.png" alt="" class="image">
            <span class="txt">总人口</span>
            <span class="right_fade"><span class="num">{{'68'}}</span> 万人</span>
        </div>
        <div class="light">
            <img src="../../../../public/image/mianji.png" alt="" class="image">
            <span class="txt">总面积</span>
            <span class="right_fade"><span class="num">{{'322'}}</span > KM²</span>
        </div>
        <div class="dark">
            <img src="../../../../public/image/home/GDP.png" alt="" class="image">
            <span class="txt">GDP</span>
            <span class="right_fade"><span class="num">{{'870.3'}}</span> 亿元</span>
        </div>
        <div class="light">
            <img src="../../../../public/image/home/lvhua.png" alt="" class="image">
            <span class="txt">绿化覆盖率</span>
            <span class="right_fade"><span class="num">{{'25.78'}}</span> %</span>
        </div>
        <div class="dark">
            <img src="../../../../public/image/home/chengzhen.png" alt="" class="image">
            <span class="txt">城镇化率</span>
            <span class="right_fade"><span class="num">{{'39'}}</span> %</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseInfo",
        data() {
            return {
                myTimer1: null,
                myTimer2: null
            }
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

<style scoped>
    .main{
        margin-bottom: 3%;
        height: 27%;
    }
    .dark{
        padding: 0 5px;
        background: rgba(225,225,225,.26);
        height: 20%;
        line-height: 20%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .light{
        padding: 0 5px;
        height: 20%;
        line-height: 20%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .image{
        width: 30px;
        height: 30px;
    }
    .txt{
        flex: 1;
        text-indent: 10px;
        visibility: hidden;
    }
</style>