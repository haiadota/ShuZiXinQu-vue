<template>
  <table class="list">
    <tr class="item" v-for="(item,index) in items" :key="index">
      <td class="left_name">{{item.typename}}</td>
      <td class="line">
        <div class="left" :style="{'width':((item.num)+'%')}"></div>
        <div class="right" :style="{'width':((100-item.num)+'%')}"></div>
      </td>
      <td v-if="!percent" class="right_name">{{item.num}}个</td>
      <td v-else class="right_name">{{item.num}}%</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "JinDuTiao",
  props: {
    percent: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: function() {
        return [
          { typename: "name", num: 20 },
          { typename: "name", num: 65 },
          { typename: "name", num: 40 },
        ];
      }
    }
  },
  computed: {
    items() {
      let arr = [];
      let len = this.list.length;
      for (let i = 0; i < len; i++) {
        let { typename, num } = this.list[i];
        arr.push({ typename, num });
      }
      return arr;
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  font-size: 16px;
  width: 100%;
  .item {
    display: flex;
    justify-content: space-around;
    padding: 8px 0;
    height: 22px;
    line-height: 20px;
    .left_name {
      width: 130px;
      white-space: pre;
      padding-right: 6px;
      text-align: justify;
      text-align-last: justify;
      &：after {
        display: inline-block;
        content: "";
        overflow: hidden;
        width: 100%;
        height: 0;
      }
    }

    .right_name {
      width: 40px;
      text-align: right;
      font-family: RuiZi;
    }

    .line {
      flex: 1;
      display: flex;
      align-items: center;
      .left {
        height: 5px;
        margin-right: 4px;
        background: linear-gradient(
          90deg,
          rgba(0, 246, 255, 1) 0%,
          rgba(0, 128, 248, 1) 100%
        );
        border-radius: 2px;
      }

      .right {
        height: 5px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 2px;
      }
    }
  }
}
</style>
