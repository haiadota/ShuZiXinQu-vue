<template>
    <div class="main">
        <div  v-for="(item,index) in arr" :class="index%2?'light':'dark'">
            <img :src="picArr[index]" alt="" class="image">
            <span class="txt">{{item.title}}</span>
            <span>{{item.num}}</span>
        </div>
    </div>
</template>

<script>
    import wangge from '../../../../public/image/wangge.png'
    import jibie from '../../../../public/image/jibie.png'
    import fanwei from '../../../../public/image/fanwei.png'
    import jianguan from '../../../../public/image/jianguan.png'
    import zhuguan from '../../../../public/image/zhuguan.png'
    import fuzeren from '../../../../public/image/fuzeren.png'

    export default {
        name: "WangGeXinXi",
        data(){
            return {
                picArr:[
                    wangge,
                    jibie,
                    fanwei,
                    jianguan,
                    zhuguan,
                    fuzeren
                ],
                arr:[
                    {title:'所属网格',num:'硅谷'},
                    {title:'网格级别',num:'II'},
                    {title:'网格地理范围',num:'12KM²'},
                    {title:'监管单位',num:'环保局'},
                    {title:'主管领导',num:'王*'},
                    {title:'部门/科室负责人',num:'昂*'},
                ]
            }
        }
    }
</script>

<style scoped>
    .main{
        margin-bottom: 3%;
        height: 30%;
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
    }
</style>