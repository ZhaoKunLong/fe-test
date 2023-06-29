<template lang="pug">
div
  NCard
    NSpace
      NButton(@click="switchTheme('dark')") dark
      NButton(@click="switchTheme('light')") light
      NButton(@click="switchTheme('auto')") 跟随系统
      NButton(@click="setCanvas") 绘图
    canvas(id="myCanvas" width="800" height="800")
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { NCard, NSpace, NButton } from 'naive-ui';
import { useThemeStore } from '@/store'
const { switchTheme } = useThemeStore()
function setCanvas() {
  const canvas = document.getElementById('myCanvas');
  const context = canvas.getContext('2d');
  // 绘制线段
  context.beginPath();
  context.moveTo(100, 100); // 起始坐标
  context.lineTo(200, 200); // 终点坐标
  context.stroke();

  context.beginPath();
  context.moveTo(100, 100);
  context.lineTo(300, 200);
  context.stroke();

  // 自定义样式
  const pointRadius = 5;
  const pointColor = 'red';
  const textColor = 'blue';
  const textSize = '12px Arial';

  // 绘制坐标点
  context.fillStyle = pointColor;
  context.beginPath();
  /**
   * @description: x: 圆心的 x 坐标。
    y: 圆心的 y 坐标。
    radius: 圆的半径。
    startAngle: 起始角度，以弧度表示，值为 0 表示圆的正右方。注意，0 度位于三点钟方向，角度逆时针增加。
    endAngle: 结束角度，以弧度表示。例如，Math.PI 表示半个圆，2 * Math.PI 表示一个整圆。
    anticlockwise (可选): 可选参数，布尔值。如果为 true，则沿逆时针方向绘制圆弧；如果为 false 或未指定，则沿顺时针方向绘制圆弧。
   * @return {*}
   */
  context.arc(100, 100, 10, 0, Math.PI * 2);
  context.fill();

  // 绘制说明文字
  context.fillStyle = textColor;
  context.font = textSize;
  context.textAlign = 'center';
  context.fillText("坐标1", 100, 100 + pointRadius + 15); // 添加说明文字
  context.fillText("坐标1.1", 100, 120 + pointRadius + 15); // 添加说明文字

  context.fillStyle = pointColor;
  context.beginPath();
  context.arc(200, 200, pointRadius, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = textColor;
  context.font = textSize;
  context.textAlign = 'center';
  context.fillText("坐标2", 200, 200 + pointRadius + 15); // 添加说明文字

  context.fillStyle = pointColor;
  context.beginPath();
  context.arc(300, 200, pointRadius, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = textColor;
  context.font = textSize;
  context.textAlign = 'center';
  context.fillText("坐标3", 300, 200 + pointRadius + 15); // 添加说明文字 
}
onMounted(() => {
  setCanvas()
})
</script>