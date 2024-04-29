<template>
  <div class="pb-input">
    <div class="pb-input-prefix">
      <slot name="prefix"></slot>
    </div>
    <div
      class="pb-input-wrapper"
      :style="{
        'border-left-width': prefixBorder ? '1px' : '0',
        'border-right-width': suffixBorder ? '1px' : '0',
      }"
    >
      <input
        ref="inputRef"
        v-model="value"
        @focus="onfocus"
        @input="oninput"
        @change="onchange"
        @blur="onblur"
        :placeholder="placeholder"
      />
    </div>
    <div class="pb-input-suffix">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>
<script setup name="PbInput">
import { ref } from "vue";
const value = ref();
const inputRef = ref();

const props = defineProps({
  placeholder: String,
  prefixBorder: { type: Boolean, default: () => false },
  suffixBorder: { type: Boolean, default: () => false },
});
const emits = defineEmits(["focus", "input", "change", "blur"]);
const isFocus = ref(false);

const onfocus = (e) => {
  isFocus.value = true;
  emits("focus", e);
};
const oninput = (e) => {
  emits("input", e);
};
const onchange = (e) => {
  emits("change", e);
};

const onblur = (e) => {
  isFocus.value = false;
  emits("blur", e);
};
const focus = () => {
  inputRef.value.focus();
};
const blur = () => {
  inputRef.value.blur();
};
defineExpose({
  focus,
  blur,
});
</script>
<style scoped>
.pb-input .pb-input-wrapper input {
  border: 0;
  padding: 0px 5px;
  outline: none;
}
.pb-input .pb-input-wrapper input:focus {
  --input-border-color: var(--input-active-color);
}

input:active {
  border: none;
  outline: none;
}

.pb-input {
  border: 1px solid var(--input-border-color);
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  box-sizing: border-box;
  background-color: transparent;
  flex: 1;
}

.pb-input-focus {
  border-color: var(--input-active-color);
}

.pb-input-prefix,
.pb-input-suffix {
  flex-shrink: 1;
}

.pb-input-wrapper input {
  height: 100%;
  flex: 1;
}

.pb-input-wrapper {
  flex: 1;
  display: flex;
  border-width: 0;
  border-left-color: var(--input-border-color);
  border-right-color: var(--input-border-color);
  border-style: solid;
}
</style>
