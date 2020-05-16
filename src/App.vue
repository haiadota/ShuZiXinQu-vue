<template>
    <div id="app">
        <div v-show="menuFlag" class="light_circle"></div>
        <div v-if="CarXunCha" class="carbg"></div>
        <div v-if="menuFlag" class="container">
            <Nav></Nav>
            <transition name="fade" mode="out-in">
                <Loading v-if="LoadFlag"></Loading>
            </transition>
            <div class="pages">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from './components/Nav'
    import Loading from './components/Loading'

    export default {
        name: "app",
        components: {
            Nav,
            Loading
        },
        computed: {
            menuFlag(){
                return this.$store.state.menuFlag
            },
            LoadFlag(){
                return this.$store.state.LoadFlag
            },
            KeyQiYe() {
                return this.$store.state.KeyQiYe
            },
            CarXunCha() {
                return this.$store.state.CarXunCha
            }
        },
        methods: {},
    };
</script>

<style lang="scss" scoped>
    #app {
        /*font-family: 'FZZZHUNHJW';*/
        font-size: 17px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .carbg{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: url("../public/image/Car/carbd.png");
        background-size: 100% 100%;
    }
    .KeyQiYe_container{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
    .light_circle {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
                        circle at 50% 56%,
                        rgba(255, 255, 255, 0),
                        rgba(255, 255, 255, 0) 50%,
                        /*rgba(8, 15, 16, 0.3) 54%,*/
                        rgba(8, 15, 16, 0.6) 65%,
                        rgba(8, 15, 16, 1)
        );
    }

    .container {
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .pages {
            width: 100%;
            position: absolute;
            top: $headerH + $headerB;
            bottom: 0;
        }
    }

    .light-fade-enter {
        opacity: 0.9;
    }

    .light-fade-leave {
        opacity: 1;
    }

    .light-fade-enter-active {
        transition: opacity 0.4s;
    }

    .light-fade-leave-active {
        opacity: 0.9;
        transition: opacity 0.4s;
    }
</style>