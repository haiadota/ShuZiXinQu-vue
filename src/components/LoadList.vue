<template>
    <div class="loading event_all selectablefalse">
        <div class="view" :class="{'changeH':changeH}">
            <div class="title">阳光社区人口情况概览</div>
            <table class="list">
                <tr>
                    <td>小区名称</td>
                    <td>户籍人口（人）</td>
                    <td>育龄妇女（人）</td>
                    <td>残联人员（人）</td>
                    <td>失业人员（人）</td>
                    <td>老龄人员（人）</td>
                    <td>优抚人口（人）</td>
                    <td>学龄儿童（人）</td>
                </tr>
                <tr v-for="(item,index) in table" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.renkou}}</td>
                    <td>{{item.funv}}</td>
                    <td>{{item.canlian}}</td>
                    <td>{{item.shiye}}</td>
                    <td>{{item.laoling}}</td>
                    <td>{{item.youfu}}</td>
                    <td>{{item.ertong}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoadList",
        data() {
            return {
                changeH: false,
                table: [
                    {
                        name: '怡景园',
                        renkou: '1160',
                        funv: '14',
                        canlian: '4',
                        shiye: '24',
                        laoling: '54',
                        youfu: '17',
                        ertong: '134'
                    },
                    {
                        name: '世纪花园',
                        renkou: '629',
                        funv: '12',
                        canlian: '1',
                        shiye: '29',
                        laoling: '69',
                        youfu: '9',
                        ertong: '24'
                    },
                    {
                        name: '三佳',
                        renkou: '201',
                        funv: '11',
                        canlian: '3',
                        shiye: '21',
                        laoling: '14',
                        youfu: '11',
                        ertong: '22'
                    },
                    {
                        name: '教师楼',
                        renkou: '179',
                        funv: '8',
                        canlian: '0',
                        shiye: '1',
                        laoling: '23',
                        youfu: '8',
                        ertong: '21'
                    },
                    {
                        name: '阳光经典',
                        renkou: '165',
                        funv: '6',
                        canlian: '16',
                        shiye: '12',
                        laoling: '15',
                        youfu: '1',
                        ertong: '38'
                    },
                    {
                        name: '新时尚花园',
                        renkou: '109',
                        funv: '14',
                        canlian: '3',
                        shiye: '2',
                        laoling: '11',
                        youfu: '1',
                        ertong: '14'
                    },
                    {
                        name: '武装部家属楼',
                        renkou: '124',
                        funv: '3',
                        canlian: '7',
                        shiye: '2',
                        laoling: '3',
                        youfu: '21',
                        ertong: '15'
                    },
                    {
                        name: '合计',
                        renkou: '2567',
                        funv: '68',
                        canlian: '34',
                        shiye: '91',
                        laoling: '189',
                        youfu: '68',
                        ertong: '268'
                    },

                ]
            }
        },
        // computed:{
        //     LoadFlag(){
        //         return this.$store.state.LoadFlag
        //     },
        // },
        mounted() {
            let that = this
            setTimeout(function () {
                that.changeH = true
            }, 1000)
        }
    }
</script>

<style scoped lang="scss">
    .view {
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

        .title {
            width: 100%;
            text-align: center;
            font-size: 23px;
            line-height: 60px;
        }

        .list {
            text-align: center;
            font-size: 19px;
            line-height: 40px;
            width: 100%;
        }
    }

    .loading {
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