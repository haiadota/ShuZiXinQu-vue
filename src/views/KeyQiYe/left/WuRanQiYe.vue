<template>
    <div class="main" ref="main">
        <div  v-for="(item,index) in arr" :class="index%2?'light':'dark'" :key="index">
            <img :src="picArr[index]" alt="" class="image">
            <span class="txt">{{item.title}}</span>
            <span class="right_fade">{{item.num}}</span>
        </div>
    </div>
</template>

<script>
    import qiye from '../../../../public/image/qiye.png'
    import xinyong from '../../../../public/image/xinyong.png'
    import quxian from '../../../../public/image/quxian.png'
    import zhibiao from '../../../../public/image/zhibiao.png'

    export default {
        name: "WangGeXinXi",
        props:['arr'],
        data(){
            return {
                picArr:[
                    qiye,
                    xinyong,
                    quxian,
                    zhibiao,

                ],
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

<style lang="scss" scoped>
    .main {
        margin: 3% 0 3% 0;
        height: 22%;
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