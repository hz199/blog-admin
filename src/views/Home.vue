<template>
  <div class="home">
    <AdminTable :tableColumns="tableColumns" :tableData="tableData"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      tableColumns: [
        {
          title: 'Name',
          key: 'name',
          align: 'center'
        },
        {
          title: 'Name1',
          key: 'name1',
          align: 'center'
        }
      ],
      tableData: [
        {
          name: '11',
          name1: '222'
        },
        {
          name: '333',
          name1: '4444'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>

