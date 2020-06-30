<template>
    <div class="main" ref="main">
        <div  v-for="(item,index) in arr" :class="index%2?'light':'dark'" :key="index">
            <img :src="picArr[index]" alt="" class="image">
            <span class="txt">{{item.title}}</span>
            <span class="right_fade"><span>{{item.num}}</span></span>
        </div>
    </div>
</template>

<script>
    import chepai from '../../../../public/image/chepai.png'
    import jiashiyuan from '../../../../public/image/jiashiyuan.png'
    import dianhua from '../../../../public/image/dianhua.png'
    import duizhang from '../../../../public/image/duizhang.png'
    import telephone from '../../../../public/image/telephone.png'
    import shibiema from '../../../../public/image/shibiema.png'
    import sudu from '../../../../public/image/sudu.png'
    import quyu from '../../../../public/image/quyu.png'
    import qiye from '../../../../public/image/qiye.png'
    import cheliang from '../../../../public/image/cheliang.png'

    export default {
        name: "CarBasicInfo",
        props:['arr'],
        data(){
            return {
                picArr:[
                    chepai,
                    quyu,
                    qiye,
                    cheliang,
                    shibiema,
                    sudu,
                    jiashiyuan,
                    dianhua,
                    duizhang,
                    telephone,
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
                }, 200)
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
                }, 200)
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
        height: 60%;
    }
    .dark{
        padding: 0 5px;
        background: rgba(225,225,225,.26);
        height: 10%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .light{
        padding: 0 5px;
        height: 10%;
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