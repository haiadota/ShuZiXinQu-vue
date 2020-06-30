<template>
    <div class="loading event_all selectablefalse">
        <div class="view">
            <div class="title">重点监控企业</div>
            <table class="list">
                <tr>
                    <td>序号</td>
                    <td>企业名称</td>
                    <td>污染物</td>
                    <td>监测值</td>
                </tr>
                <tr v-for="(item,index) in table" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.wuranwu}}</td>
                    <td>{{item.jiancezhi}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoadList",
        data(){
            return{
                changeH:false,
                table:[
                    {name:'柏林水务长春高新污水处理有限公司',wuranwu:'COD',jiancezhi:'2.6 mg/L'},
                    {name:'柏林水务长春长德水处理有限公司',wuranwu:'氨氮',jiancezhi:'5.2 mg/L'},
                    {name:'长春桑德翔恒水务有限公司',wuranwu:'COD',jiancezhi:'5.6 mg/L'},
                    {name:'锦湖轮胎（长春)有限公司',wuranwu:'粉尘',jiancezhi:'1.5 mg/L'},
                    {name:'长春凯密特尔化学品有限公司',wuranwu:'PH值',jiancezhi:'62 mg/L'},
                    {name:'长春依多科化工有限公司',wuranwu:'COD',jiancezhi:'5.9 mg/L'},
                    {name:'广泽乳业有限公司',wuranwu:'二氧化硫',jiancezhi:'2.5 mg/L'},
                    {name:'中国航发长春控制科技有限公司',wuranwu:'镉',jiancezhi:'5.2 mg/L'},
                    {name:'长春汉高表面技术有限公司',wuranwu:'COD',jiancezhi:'8.2 mg/L'},
                    {name:'锦湖轮胎（长春)有限公司',wuranwu:'硫化物',jiancezhi:'5.2 mg/L'},
                    {name:'中国航发长春控制科技有限公司',wuranwu:'铜',jiancezhi:'5.0  mg/L'},
                ]
            }
        },
        mounted(){
            let that = this
            setTimeout(function () {
                that.changeH = true
            },1000)
        }
    }
</script>

<style scoped lang="scss">
    .view{
        overflow: hidden;
        width: 1100px;
        height: 100%;
        margin: auto;
        padding: 80px 50px 70px;
        box-sizing: border-box;
        color: #fff;
        background: url("../../public/image/boxBd.png") no-repeat;
        background-size: 100% 100%;
        animation: bounce-in .7s;
        .title{
            width: 100%;
            text-align: center;
            font-size: 23px;
            line-height: 30px;
        }
        .list{
            text-align: center;
            font-size: 19px;
            width: 100%;
            height: calc(100% - 30px);
        }
    }
    .loading{
        z-index: 3;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 180px 0 160px;
        box-sizing: border-box;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
            opacity: 0;
        }
        70% {
            transform: scale(1.15);
            opacity: 1;
        }
        100% {
            transform: scale(1);
        }
    }
</style>