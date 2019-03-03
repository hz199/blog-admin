<template>
  <div class="AdminTable">
    <Table stripe
          border
          :columns="tableColumns"
          :data="tableData">
    </Table>
    <!-- table -->
    <div class="admin-table-wrapper clearfix">
      <Page class="pull-right" :total="100" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'AdminTable',
  props: {
    tableColumns: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
    
  }
}
</script>
<style lang="less" scoped>
.admin-table-wrapper {
  margin-top: 20px;
}
</style>

