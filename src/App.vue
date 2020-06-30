<template>
  <div id="app">
    <div id="loading">
      <img class="loadingImg event_all" src="../public/image/loading.png" alt />
      <div class="load_bar">
        <div v-if="LoadPercent!=100" class="percent">
          <div class="left" :style="{'width':((LoadPercent)+'%')}"></div>
          <div class="right" :style="{'width':((100-LoadPercent)+'%')}"></div>
        </div>
        <div v-if="LoadPercent==100">加载完成 请按回车键继续</div>
        <div v-else>正在加载 {{LoadPercent}}%...</div>
      </div>
    </div>
    <div v-show="menuFlag" class="light_circle"></div>
    <div v-if="CarXunCha" class="carbg"></div>
    <div v-if="menuFlag" class="container">
      <Nav></Nav>
      <transition name="fade" mode="out-in">
        <LoadList v-if="LoadFlag"></LoadList>
        <Loading v-if="LoadingFlag"></Loading>
      </transition>
      <div class="pages">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import LoadList from "./components/LoadList";
import Loading from "./components/QiYeLoad";
import { mapMutations } from "vuex";

export default {
  name: "app",
  components: {
    Nav,
    LoadList,
    Loading
  },
  computed: {
    LoadPercent() {
      return this.$store.state.LoadPercent;
    },
    LoadingFlag() {
      return this.$store.state.LoadingFlag;
    },
    menuFlag() {
      return this.$store.state.menuFlag;
    },
    LoadFlag() {
      return this.$store.state.LoadFlag;
    },
    CarXunCha() {
      return this.$store.state.CarXunCha;
    }
  },
  methods: {
    ...mapMutations(["handleLoadPercent"])
  },
  mounted() {
    if (!navigator.onLine) {
      let idObject = document.getElementById('loading')
      if (idObject) idObject.parentNode.removeChild(idObject)
    }
    let that = this;
    let percentTimer = setInterval(function() {
      if (that.LoadPercent > 96) {
        clearInterval(percentTimer);
        percentTimer = null;
      } else {
        that.handleLoadPercent(that.LoadPercent + 1);
      }
    }, 100);
  }
};
</script>

<style lang="scss" scoped>
#app {
  /*font-family: 'FZZZHUNHJW';*/
  font-size: 16px;
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
#loading {
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  font-size: 18px;
  transition: all 0.5s;
  .loadingImg {
    display: block;
    width: 100%;
    height: 100%;
  }
  .load_bar {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 60px;
  }
  .percent {
    width: 380px;
    height: 8px;
    margin-bottom: 10px;
    display: flex;
    .left {
      height: 100%;
      margin-right: 4px;
      background: linear-gradient(
        90deg,
        rgba(138, 255, 255, 1) 0%,
        rgba(0, 128, 248, 1) 100%
      );
      border-radius: 2px;
    }

    .right {
      height: 100%;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 2px;
    }
  }
}
.carbg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url("../public/image/Car/carbd.png");
  background-size: 100% 100%;
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
    /*rgba(8, 15, 16, 0.3) 54%,*/ rgba(8, 15, 16, 0.6) 67%,
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