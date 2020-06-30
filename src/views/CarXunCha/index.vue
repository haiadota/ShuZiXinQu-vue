<template>
  <div class="box main_view">
    <LeftView>
      <Theme :value="'车辆基本信息'"></Theme>
      <CarBasicInfo :arr="arr"></CarBasicInfo>
      <Tab3D></Tab3D>
    </LeftView>
    <MidView>
      <div class="chart">
        <GaugeCar ref="GaugeCar"></GaugeCar>
      </div>
      <div class="car_wrap">
        <div class="text">{{chepai}}</div>
        <img class="car" src="../../../public/image/Car/X80.png" alt />
      </div>
    </MidView>
    <RightView>
      <Theme :value="'油耗情况趋势分析'"></Theme>
      <YouHaoLine></YouHaoLine>
      <Theme :value="'行驶里程'"></Theme>
      <XingShiBar></XingShiBar>
      <Theme :value="'发动机运行时长'"></Theme>
      <FaDongJiLine></FaDongJiLine>
      <Theme :value="'视频监控'"></Theme>
      <CarVideo></CarVideo>
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
import CarBasicInfo from "./left/CarBasicInfo.vue";
import YouHaoLine from "./right/YouHaoLine.vue";
import FaDongJiLine from "./right/FaDongJiLine.vue";
import XingShiBar from "./right/XingShiBar.vue";
import CarVideo from "./right/CarVideo.vue";
import GaugeCar from "./middle/GaugeCar.vue";
import Event from "@/postMessage/Iframe.js";

export default {
  name: "CarXunCha",
  components: {
    MidView,
    LeftView,
    RightView,
    Theme,
    Tab3D,
    Menu,
    CarBasicInfo,
    YouHaoLine,
    FaDongJiLine,
    XingShiBar,
    CarVideo,
    GaugeCar
  },
  data() {
    return {
      chepai: "吉A·H93S0",
      arr: []
    };
  },
  methods: {
    fanhui() {
      this.$router.go(-1);
    }
  },
  created() {
    let obj = this.$route.params;
    if (this.$route.params["车牌号"]) {
      this.chepai = obj["车牌号"];
    }
    this.arr = [
      { title: "车牌号", num: obj["车牌号"] || "吉A·H93S0" },
      { title: "所属区域", num: obj["所属区域"] || "空港区" },
      { title: "所属单位", num: obj["所属单位"] || "西营城执法大队" },
      { title: "车辆型号", num: obj["车辆型号"] || "奔腾X80" },
      { title: "车辆识别码", num: obj["识别码"] || "LFBGE6063JJD38343" },
      { title: "限速值（h/km）", num: obj["限速值"] || "60h/km" },
      { title: "驾驶员", num: obj["驾驶员"] || "聂*飞" },
      { title: "驾驶员联系电话", num: obj["驾驶员联系电话"] || "137****5333" },
      { title: "中队长", num: obj["中队长"] || "程*" },
      { title: "中队长联系电话", num: obj["中队长联系电话"] || "189****9802" }
    ];
  },
  mounted() {
    // document.getElementById("3dIframe").style.visibility = "hidden";
    let obj = this.$route.params;
    this.$refs.GaugeCar.option.series[0].data[0].value = obj["当前车速"] || "0";
    this.$refs.GaugeCar.option.series[1].data[0].value =
      obj["实时油量"] || "1.2";
    this.$refs.GaugeCar.option.series[2].data[0].value = obj["实时里程"] || "0";
    this.$refs.GaugeCar.myChart.setOption(this.$refs.GaugeCar.option, true);
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

.chart {
  position: absolute;
  top: -60px;
  left: -60px;
  width: 800px;
  height: 550px;
}

.car_wrap {
  position: relative;

  .text {
    position: absolute;
    left: 70px;
    top: 290px;
    font-weight: bolder;
    font-size: 17.5px;
    color: #000;
    transform-origin: right center;
    transform: rotateZ(2.2deg) rotateY(20deg);
    animation: appear 2.5s linear;
  }

  .car {
    width: 894px;
    height: 457px;
    animation: run 2.5s linear;
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes run {
  from {
    transform: translateX(1500px) scale(0.3);
  }
  to {
    transform: translateX(0) scale(1);
  }
}
</style>

