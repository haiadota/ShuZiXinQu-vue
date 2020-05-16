<template>
    <div class="main">
        <div class="dark">
            <img src="../../../../public/image/home/renkou.png" alt="" class="image">
            <span class="txt">总人口</span>
            <span><span class="num">{{'68'}}</span> 万人</span>
        </div>
        <div class="light">
            <img src="../../../../public/image/mianji.png" alt="" class="image">
            <span class="txt">总面积</span>
            <span><span class="num">{{'322'}}</span > KM²</span>
        </div>
        <div class="dark">
            <img src="../../../../public/image/home/GDP.png" alt="" class="image">
            <span class="txt">GDP</span>
            <span><span class="num">{{'870.3'}}</span> 亿元</span>
        </div>
        <div class="light">
            <img src="../../../../public/image/home/lvhua.png" alt="" class="image">
            <span class="txt">绿化覆盖率</span>
            <span><span class="num">{{'25.78'}}</span> %</span>
        </div>
        <div class="dark">
            <img src="../../../../public/image/home/chengzhen.png" alt="" class="image">
            <span class="txt">城镇化率</span>
            <span><span class="num">{{'39'}}</span> %</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BaseInfo"
    }
</script>

<style scoped>
    .main{
        margin-bottom: 3%;
        height: 27%;
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
        height: 20%;
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