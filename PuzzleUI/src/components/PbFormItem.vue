<template>
  <div class="pb-form-item">
    <label
      :style="{
        width: labelWidth || labelWidth === 0 ? `${labelWidth}px` : 'auto',
      }"
      >{{ label }}</label
    >
    <slot name="default"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, default: () => '' },
  labelWidth: { type: Number },
});
</script>

<style scoped>
.pb-form-item {
  display: flex;
}

label {
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  justify-content: center;
  overflow: hidden;
  line-height: 1.2;
}
</style>
