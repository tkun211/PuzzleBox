<template>
  <div class="pb-table">
    <div class="pb-table-header">
      
    </div>
    <div class="pb-table-body pb-scrollbar">
      <table>
        <colgroup>
          <col>
          <col>
          <col>
          <col>
        </colgroup>
        <tr>
          <td> </td>
          <td> </td>
          <td> </td>
          <td> </td>
        </tr>
      </table>
    </div>
    <div class="pb-table-footer">foot</div>
  </div>
</template>
<script setup name="PbTable"></script>

<style scoped>
.pb-table {
  display: flex;
  flex-direction: column;
}

.pb-table .pb-table-header {
  flex-shrink: 1;
}

.pb-table .pb-table-body {
  flex: 1;
  overflow: auto;
}
.pb-table .pb-table-footer {
  flex-shrink: 1;
}
</style>
