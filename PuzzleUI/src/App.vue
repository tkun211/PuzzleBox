<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <PbInput
    ref="pdInputRef"
    style="height: 32px; line-height: 32px"
    placeholder="请输入"
    :prefixBorder="true"
  >
  </PbInput>

  <PbTable style="width: 700px; height: 900px"></PbTable>

  <div style="display: flex; height: 90px">
    <span
      style="
        flex-shrink: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
      "
      >身份证号码</span
    >
    <PbInput></PbInput>
  </div>

  <pb-form-item label="标题dasdasdasdasssssssss" :label-width="100" style="height: 33px;">
    <PbInput></PbInput>
  </pb-form-item>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import PbInput from './components/PbInput.vue';
import PbTable from './components/PbTable.vue';
import PbFormItem from '/src/components/PbFormItem.vue';
const pdInputRef = ref();

onMounted(() => {
  pdInputRef.value.focus();

  setTimeout(() => {
    pdInputRef.value.blur();
  }, 10000);
});
</script>
<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

/* 滚动条整体样式 */
.pb-scrollbar::-webkit-scrollbar {
  width: 10px;
  /*  height: 10px; */
  background-color: #f5f5f5;
  filter: opacity(0.5);
}

/* 滚动条thumb(滑块)样式 */
.pb-scrollbar::-webkit-scrollbar-thumb {
  /* width: 5px; */
  /* height: 10px; */
  background-color: #9a9a9a;
  border-radius: 5px;
}

/* 滚动条hover状态下thumb(滑块)样式 */
.pb-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

/* 滚动条上下箭头样式 */
.pb-scrollbar::-webkit-scrollbar-button {
  background-color: #ccc;
  display: none;
}

/* 滚动条左右箭头样式 */
.pb-scrollbar::-webkit-scrollbar-button:start:decrement,
.pb-scrollbar::-webkit-scrollbar-add-button {
  display: none;
}

.pb-scrollbar::-webkit-scrollbar-button:end:increment,
.pb-scrollbar::-webkit-scrollbar-sub-button {
  display: none;
}
</style>
