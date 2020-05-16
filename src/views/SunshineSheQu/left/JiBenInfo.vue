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
                ]
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
    }
</style>