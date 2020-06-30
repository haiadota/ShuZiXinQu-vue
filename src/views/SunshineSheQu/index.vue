<template>
  <div class="box main_view">
    <LeftView>
      <Theme :value="'社区基本信息'"></Theme>
      <JiBenInfo></JiBenInfo>
      <Theme :value="'户籍情况'"></Theme>
      <HuJi></HuJi>
      <Tab3D></Tab3D>
    </LeftView>
    <MidView>
      <BuildInfo v-if="buildInfoFlag"></BuildInfo>
    </MidView>
    <RightView>
      <Theme :value="'特殊人口分布'"></Theme>
      <Special></Special>
      <Theme :value="'社区事件分析'"></Theme>
      <SheQuEvent></SheQuEvent>
      <Theme :value="'视频监控'"></Theme>
      <VideoScrollList></VideoScrollList>
    </RightView>
    <div class="btn event_all selectablefalse">
      <div class="wrap" @click="fanhui">返回</div>
    </div>
  </div>
</template>

<script>
  import MidView from "@/components/MidView.vue";
  import LeftView from "@/components/LeftView.vue";
  import RightView from "@/components/RightView.vue";
  import Theme from "@/components/Theme.vue";
  import Tab3D from "@/components/Tab3D.vue";
  import Menu from "@/components/Menu.vue";
  import JiBenInfo from "./left/JiBenInfo.vue";
  import HuJi from "./left/HuJi.vue";
  import Special from "./right/Special.vue";
  import SheQuEvent from "./right/SheQuEvent.vue";
  import VideoScrollList from "./right/VideoScrollList.vue";
  import Event from "@/postMessage/Iframe.js";
  import BuildInfo from "@/components/BuildInfo.vue";


  export default {
    name: "SunshineSheQu",
    components: {
      MidView,
      LeftView,
      RightView,
      Theme,
      Tab3D,
      Menu,
      JiBenInfo,
      HuJi,
      Special,
      SheQuEvent,
      VideoScrollList,
      BuildInfo
    },
    computed: {
      buildInfoFlag() {
        return this.$store.state.buildInfoFlag;
      }
    },
    data() {
      return {};
    },
    methods: {
      fanhui() {
        this.$router.push('/SheQu');
        Event["levelchangemap"]();
      },
      postMessage() {
        let obj = this.$route.query;
        if (!obj.noevent) {
          Event["createSheQu"]();
        }
      }
    },
    created() {
      this.postMessage();
    }
  };
</script>

<style lang="scss" scoped>
  .btn {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;

    .wrap {
      padding: 10px 30px 16px;
      margin: 0 15px;
      cursor: pointer;
      background: url("../../../public/image/btn.png") no-repeat;
      background-size: 100% 100%;
      text-align: center;
    }

    .wrap:hover {
      color: #c5c2fb;
    }
  }
</style>

