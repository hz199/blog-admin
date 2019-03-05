<template>
  <div class="AdminTable">
    <Table stripe
          border
          :columns="tableColumns"
          :data="tableData">
    </Table>
    <!-- table -->
    <div class="admin-table-wrapper clearfix">
      <Page
        :total="pageOption.countPage"
        :page-size="pageOption.showCount"
        :current="pageOption.currentPage || 1"
        :page-size-opts='[10, 20, 30, 40]'
        show-total show-sizer show-elevator
        @on-change='handlePage' @on-page-size-change='handleSizePage'
        class="pull-right" />
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
    },
    pageOption: {
      type: Object,
      default: () => {
        return {
          countPage: 0,
          showCount: 10,
          currentPage: 1
        }
      }
    }
  },
  data () {
    return {
      pages: {
        currentPage: 0,
        showCount: 10
      }
    }
  },
  methods: {
    handlePage (page) {
      this.pages.currentPage = page
      this.$emit('onPageChange', this.pages)
    },
    handleSizePage (showCount) {
      this.pages.showCount = showCount
      this.$emit('onPageChange', this.pages)
    }
  }
}
</script>
<style lang="less" scoped>
.admin-table-wrapper {
  margin-top: 20px;
}
</style>

