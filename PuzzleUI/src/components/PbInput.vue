<template>
    <div class="pb-input">
        <div class="pb-input-prefix">
            <slot name="prefix"></slot>
        </div>
        <div class="pb-input-wrapper">
            <input ref="inputRef" v-model="value" @focus="" />
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
const emits = defineEmits(['focus', 'input', 'change', 'blur'])

const focus = () => {
    inputRef.value.focus();
}
const blur = () => {
    inputRef.value.blur();
}
defineExpose({
    focus,
    blur
})


</script>
<style scoped>
input {
    border: 0;
    padding: 0px 5px;
    outline: none;
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
}

.pb-input-prefix ,pb-input-suffix  {
    flex-shrink: 1;
}

.pb-input-wrapper input{
    height: 100%;
}
.pb-input-wrapper{
    flex: 1;
    border-left: 1px solid var(--input-border-color);
    border-right: 1px solid var(--input-border-color);
    display: flex;
}


</style>