<template>
    <div id="app">
        <div class="light_circle"></div>
        <div class="container">
            <Nav></Nav>
            <div class="pages">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    import Nav from './components/Nav'

    export default {
        name: "app",
        components: {
            Nav
        },
        computed: {
            flag() {
                return this.$store.state.widescreenFlag
            }
        },
        methods: {},
        mounted() {
            let ifr = document.getElementById('3dIframe')
            let doc = ifr.contentDocument || ifr.contentWindow.document

            console.log(ifr)

            // let str;
            // str = '<?xml version="1.0" encoding="utf-8"?>';
            // str = str + '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">'
            // str = str + '  <soapenv:Header/>'
            // str = str + '  <soapenv:Body>'
            // str = str + '   <tem:GetRefuseBoxInfos/>'
            // str = str + ' </soapenv:Body>'
            // str = str + ' </soapenv:Envelope>'
            //
            this.axios.defaults.withCredentials = true
            this.axios({
                url: 'http://125.32.12.186:5008/RT_API/ShowAQI.action?hourstr=2020-04-17%2008:00:00',
                method: "get",
                // headers:{"SOAPAction": "http://tempuri.org/example","Content-Type": "text/xml; charset=utf-8"},
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err)
            })
            // var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            // var URL = "http://222.169.185.231:25005/DataServiceApi/DataService.asmx";
            // xmlhttp.Open("POST", URL, false);
            // xmlhttp.SetRequestHeader("Content-Type", "text/xml; charset=utf-8");
            // xmlhttp.SetRequestHeader("SOAPAction", "http://tempuri.org/example");
            // xmlhttp.Send(data);
            // alert(data);
            // var result = xmlhttp.responseText
            // alert(result);
        }
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
    .light_circle {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
                        circle at 50% 66%,
                        rgba(255, 255, 255, 0),
                        rgba(255, 255, 255, 0) 50%,
                        rgba(8, 15, 16, 0.3) 60%,
                        rgba(8, 15, 16, 0.5) 70%,
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