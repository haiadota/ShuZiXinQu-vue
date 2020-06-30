<template>
    <div class="main" ref="main">
        <div  v-for="(item,index) in arr" :class="index%2?'light':'dark'" :key="index">
            <img :src="picArr[index]" alt="" class="image">
            <span class="txt">{{item.title}}</span>
            <span class="right_fade"><span class="num">{{item.num}}</span> {{item.unit}}</span>
        </div>
    </div>
</template>

<script>
    import kaifangdu from '../../../../public/image/ShuJu/kaifangdu.png'
    import mulu from '../../../../public/image/ShuJu/mulu.png'
    import xinxi from '../../../../public/image/ShuJu/xinxi.png'
    import zhengwu from '../../../../public/image/ShuJu/zhengwu.png'
    import jigou from '../../../../public/image/ShuJu/jigou.png'
    import yewu from '../../../../public/image/ShuJu/yewu.png'


    export default {
        name: "KaiFang",
        data(){
            return {
                picArr:[
                    kaifangdu,
                    mulu,
                    xinxi,
                    zhengwu,
                    jigou,
                    yewu
                ],
                arr:[
                    {title:'资源开放度',num:'78.98',unit:'%'},
                    {title:'资源目录总量',num:'3963',unit:'类'},
                    {title:'信息项总量',num:'38764',unit:'项'},
                    {title:'政务部门数量',num:'31',unit:'家'},
                    {title:'下设机构数量',num:'394',unit:'个'},
                    {title:'业务事项数量',num:'4445',unit:'条'},
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

<style scoped>
    .main{
        margin-bottom: 3%;
        height: 28%;
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
        height: 16.5%;
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