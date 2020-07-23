<template>
  <div class="lucky-canvas">
    <div class="bottom">
      <img src="http://img3m1.ddimg.cn/69/1/23371791-1_b_3.jpg" alt />
    </div>
    <canvas width="200px" height="200px" ref="cavs"></canvas>
  </div>
</template>

<script>
import canvasPaint from "../plugin/canvas"
export default {
  name: "LuckyCanvas",
  methods: {
   
  },
  mounted() {
    console.log(2)
console.log(canvasPaint)
    canvasPaint(this.$refs.cavs)
  },
}
</script>

<style lang="less">
.lucky-canvas {
  position: relative;
  height: 250px;
  .bottom {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;

    img {
      width: 200px;
      height: 200px;
    }
  }
  canvas {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>