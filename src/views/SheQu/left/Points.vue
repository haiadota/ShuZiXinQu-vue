<template>
    <div class="main">
        <div class="dark">
            <img src="../../../../public/image/SheQu/shequ.png" alt="" class="image">
            <span class="txt">社区总量</span>
            <span><span class="num">{{'42'}}</span> 个</span>
        </div>
        <div class="light">
            <img src="../../../../public/image/SheQu/xiaoqu.png" alt="" class="image">
            <span class="txt">小区总量</span>
            <span><span class="num">{{'1232'}}</span> 个</span>
        </div>
        <div class="dark">
            <img src="../../../../public/image/SheQu/wangge.png" alt="" class="image">
            <span class="txt">网格数</span>
            <span><span class="num">{{'4345'}}</span> 个</span>
        </div>
        <div class="light">
            <img src="../../../../public/image/SheQu/renyuan.png" alt="" class="image">
            <span class="txt">网格员总量</span>
            <span><span class="num">{{'5454'}}</span> 人</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Points"
    }
</script>

<style scoped>
    .main{
        margin: 3% 0 3% 0;
        height: 26%;
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
        line-height: 25%;
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