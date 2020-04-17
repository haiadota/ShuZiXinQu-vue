<template>
    <div class="main">
        <div  v-for="(item,index) in arr" :class="index%2?'light':'dark'">
            <img :src="picArr[index]" alt="" class="image">
            <span class="txt">{{item.title}}</span>
            <span><span class="num">{{item.num}}</span> {{item.unit}}</span>
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
                ]
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
    }
</style>