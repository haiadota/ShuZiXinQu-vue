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
    import chepai from '../../../../public/image/chepai.png'
    import jiashiyuan from '../../../../public/image/jiashiyuan.png'
    import dianhua from '../../../../public/image/dianhua.png'
    import duizhang from '../../../../public/image/duizhang.png'
    import telephone from '../../../../public/image/telephone.png'
    import shibiema from '../../../../public/image/shibiema.png'
    import sudu from '../../../../public/image/sudu.png'
    import quyu from '../../../../public/image/quyu.png'
    import qiye from '../../../../public/image/qiye.png'
    import cheliang from '../../../../public/image/cheliang.png'

    export default {
        name: "CarBasicInfo",
        props:['arr'],
        data(){
            return {
                picArr:[
                    chepai,
                    quyu,
                    qiye,
                    cheliang,
                    shibiema,
                    sudu,
                    jiashiyuan,
                    dianhua,
                    duizhang,
                    telephone,
                ],
                
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