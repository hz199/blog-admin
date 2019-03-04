<template>
  <transition name="fade">
    <div
      :style="style"
      class="Notification clearfix">
      <span class="content pull-left">{{content}}</span>
      <a class="pull-right" href="javascript:;">{{closeText}}</a>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'Notification',
  props: {
    content: {
      type: String,
      required: true
    },
    closeText: {
      type: String,
      default: () => 'close'
    }
  },
  computed: {
    style () {
      return {}
    }
  }
}
</script>
<style lang="less" scoped>
.Notification {
  position: fixed;
  right: 20px;
  top: 20px;
  background: rgb(37, 33, 33);
  line-height: 50px;
  border-radius: 8px;
  width: 300px;
  padding-left: 10px;
  padding-right: 10px;
  z-index: 99999;
  > a {
    color: rgb(223, 205, 205);
  }
  .content {
    color: rgb(116, 113, 113);
  }
}
</style>
