<template>
<div class="pb-table">
    <div class="pb-table-header">
header
    </div>
    <div class="pb-table-body pb-scrollbar">
        <div style="height: 1920px;"></div>
    </div>
    <div class="pb-table-footer">
        foot
    </div>

</div>
</template>
<script setup name="PbTable">

</script>

<style scoped>
.pb-table{
    display: flex;
    flex-direction: column;
}

.pb-table .pb-table-header{
    flex-shrink: 1;
}

.pb-table .pb-table-body{
    flex: 1;
    overflow: auto;
}
.pb-table .pb-table-footer{
    flex-shrink: 1;
}



</style>