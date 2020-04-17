<template>
    <div class="main event_all selectablefalse">
        <div v-for="item in btnList" class="btn" @click="handleBtn(item)">
            {{item.name}}
        </div>
    </div>
</template>

<script>
    import Function3d from "@/postMessage/Iframe.js";

    export default {
        name: "Menu",
        props: {btnList: Array},
        methods:{
            handleBtn(obj){
                Function3d[obj.action]()
            }
        }
    }
</script>

<style lang="scss" scoped>
.main{
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    .btn{
        /*width: 117px;*/
        padding: 10px 30px 16px;
        /*height: 45px;*/
        margin: 0 15px;
        cursor: pointer;
        background: url("../../public/image/btn.png") no-repeat;
        background-size: 100% 100%;
        text-align: center;
    }
    .btn:hover{
        color: #c5c2fb;
    }
}
</style>