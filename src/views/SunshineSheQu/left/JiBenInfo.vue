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
    import shequ from '../../../../public/image/shequ.png'
    import dizhi from '../../../../public/image/dizhi.png'
    import fuzeren from '../../../../public/image/fuzeren.png'
    import telephone from '../../../../public/image/telephone.png'
    import mianji from '../../../../public/image/mianji.png'
    import wuye from '../../../../public/image/wuye.png'
    import lianxiren from '../../../../public/image/lianxiren.png'
    import dianhua from '../../../../public/image/dianhua.png'
    import chewei from '../../../../public/image/chewei.png'



    export default {
        name: "JiBenInfo",
        data(){
            return {
                picArr:[
                    shequ,
                    dizhi,
                    fuzeren,
                    telephone,
                    mianji,
                    wuye,
                    lianxiren,
                    dianhua,
                    chewei,
                ],
                arr:[
                    {title:'社区名称',num:'双德乡-阳光社区'},
                    {title:'社区地址',num:'高新区硅谷大街526号'},
                    {title:'社区负责人',num:'毕*文'},
                    {title:'社区负责人联系方式',num:'151****3200'},
                    {title:'社区用房面积',num:'2350平方米'},
                    {title:'物业名称',num:'长春鑫安阳光物业集团'},
                    {title:'物业联系人',num:'张先生'},
                    {title:'物业联系电话',num:'157****5632'},
                    {title:'总车位数',num:'500个'},
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
                }, 400)
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
                }, 400)
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
        height: 39%;
    }
    .dark{
        padding: 0 5px;
        background: rgba(225,225,225,.26);
        height: 11.1%;
        text-align: left;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .light{
        padding: 0 5px;
        height: 11.1%;
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