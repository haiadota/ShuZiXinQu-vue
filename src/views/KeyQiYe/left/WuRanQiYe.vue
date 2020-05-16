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
    }

</style>