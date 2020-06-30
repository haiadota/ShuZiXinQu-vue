<template>
    <div class="main" ref="main">
        <div class="dark">
            <img src="../../../../public/image/shequ.png" alt="" class="image">
            <span class="txt">社区总量</span>
            <span class="right_fade"><span class="num">{{'42'}}</span> 个</span>
        </div>
        <div class="light">
            <img src="../../../../public/image/xiaoqu.png" alt="" class="image">
            <span class="txt">小区总量</span>
            <span class="right_fade"><span class="num">{{'1232'}}</span> 个</span>
        </div>
        <div class="dark">
            <img src="../../../../public/image/wangge.png" alt="" class="image">
            <span class="txt">网格数</span>
            <span class="right_fade"><span class="num">{{'4345'}}</span> 个</span>
        </div>
        <div class="light">
            <img src="../../../../public/image/wanggeyuan.png" alt="" class="image">
            <span class="txt">网格员总量</span>
            <span class="right_fade"><span class="num">{{'5454'}}</span> 人</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Points",
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
        margin: 3% 0 3% 0;
        height: 26%;
    }
    .dark{
        padding: 0 5px;
        background: rgba(225,225,225,.26);
        height: 25%;
        line-height: 25%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .light{
        padding: 0 5px;
        height: 25%;
        line-height: 25%;
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