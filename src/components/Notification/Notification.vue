<template>
  <transition name="fade">
    <div class="Notification clearfix">
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
  }
}
</script>
<style lang="less" scoped>
.Notification {
  position: fixed;
  right: 20px;
  background: rgb(37, 33, 33);
  line-height: 50px;
  border-radius: 8px;
  width: 300px;
  padding-left: 10px;
  padding-right: 10px;
  > a {
    color: rgb(223, 205, 205);
  }
  .content {
    color: rgb(116, 113, 113);
  }
}
</style>
