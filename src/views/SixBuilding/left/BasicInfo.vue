<template>
    <div class="main" ref="main">
        <div v-for="(item,index) in arr" :class="index%2?'light':'dark'" :key="index">
            <img :src="picArr[index]" alt="" class="image">
            <span class="txt">{{item.title}}</span>
            <span class="right_fade"><span>{{item.num}}</span></span>
        </div>
    </div>
</template>

<script>
    import xiaoqu from '../../../../public/image/xiaoqu.png'
    import shequ from '../../../../public/image/shequ.png'
    import wanggeyuan from '../../../../public/image/wanggeyuan.png'
    import dianhua from '../../../../public/image/dianhua.png'
    import telephone from '../../../../public/image/telephone.png'
    import loudongzhang from '../../../../public/image/loudongzhang.png'
    import danyuan from '../../../../public/image/danyuan.png'
    import loudongshu from '../../../../public/image/loudongshu.png'
    import mianji from '../../../../public/image/mianji.png'

    export default {
        name: "BasicInfo",
        data(){
            return {
                picArr:[
                    xiaoqu,
                    shequ,
                    wanggeyuan,
                    telephone,
                    loudongzhang,
                    dianhua,
                    danyuan,
                    telephone,
                    loudongshu,
                    mianji,

                ],
                arr:[
                    {title:'所在小区',num:'阳光城怡景园'},
                    {title:'所在社区',num:'阳光社区'},
                    {title:'网格长',num:'李*凤'},
                    {title:'网格长联系电话',num:'151****3200'},
                    {title:'楼栋长',num:'张*'},
                    {title:'楼栋长联系电话',num:'155****5276'},
                    {title:'单元长',num:'孙*鹏'},
                    {title:'单元长联系电话',num:'157****5632'},
                    {title:'总楼数',num:'10栋楼'},
                    {title:'建筑面积',num:'10677平方米'},
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