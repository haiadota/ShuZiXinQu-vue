<template>
  <div class="selectablefalse main">
    <p class="date">
      <span>{{tFullYear}}</span>
      <span>/</span>
      <span>{{tMonth}}</span>
      <span>/</span>
      <span>{{tDate}}</span>
      <span></span>
      <span class="space">{{tDay}}</span>
    </p>
    <p class="time">
      <span>{{tHours}}</span>
      <span>:</span>
      <span>{{tMinutes}}</span>
      <span>:</span>
      <span>{{tSeconds}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "DateTime",
  data() {
    return {
      timerID: "",
      tFullYear: "",
      tMonth: "",
      tDate: "",
      tHours: "",
      tMinutes: "",
      tSeconds: "",
      tDay: "",
      week: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ]
    };
  },
  mounted() {
    this.timerID = setInterval(this.updateTime, 1000);
  },
  beforeDestroy() {
    if (this.timerID) window.clearInterval(this.timerID);
  },
  methods: {
    updateTime() {
      var cd = new Date();
      this.tHours = this.zeroPadding(cd.getHours(), 2);
      this.tMinutes = this.zeroPadding(cd.getMinutes(), 2);
      this.tSeconds = this.zeroPadding(cd.getSeconds(), 2);
      this.tFullYear = this.zeroPadding(cd.getFullYear(), 4);
      this.tMonth = this.zeroPadding(cd.getMonth() + 1, 2);
      this.tDate = this.zeroPadding(cd.getDate(), 2);
      this.tDay = this.week[cd.getDay()];
    },
    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    }
  }
};
</script>
<style lang="scss" scoped>
  .main{
    margin-right: 30px;
  }
.date {
  color: #00fdfb;
  letter-spacing: 3px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.time {
  color: #00fdfb;
  font-weight: bolder;
  letter-spacing: 5px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  padding-top: 5px;
}
.space {
  text-indent: 0.15rem;
}

</style>