<template>
  <div class="main-container">
    <div class="mouse-con">
      <span>{{ x.toFixed(0) }}</span>
      <span>{{ y.toFixed(0) }}</span>
    </div>
    <layout></layout>
  </div>
</template>
<script setup>
import DefaultTheme from 'vitepress/theme';

import { useMouse } from '@vueuse/core';

const { x, y } = useMouse();
const { Layout } = DefaultTheme
</script>
<style lang="less" scoped>
.mouse-con {
  position: fixed;
  top: 0px;
  right: 0px;
  font-size: 12px;
  display: flex;
  z-index: 1000;
  padding-right: 12px;

  span {
    color: rgba(128, 128, 128, 0.4);
    height: 30px;
    line-height: 30px;
    padding-right: 6px;
  }
}
</style>