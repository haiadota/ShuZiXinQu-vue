<template>
    <div class="main">
        <div  v-for="(item,index) in arr" :class="index%2?'light':'dark'">
            <img :src="picArr[index]" alt="" class="image">
            <span class="txt">{{item.title}}</span>
            <span><span>{{item.num}}</span></span>
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
                ]
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
    }
</style>