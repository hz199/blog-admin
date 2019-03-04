<template>
  <transition name="notifyFade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div
      :style="style"
      v-show="visibleShow"
      @mouseleave="createTimer"
      @mouseenter="clearTimer"
      class="Notification clearfix">
      <span class="content pull-left">{{content}}</span>
      <a class="pull-right" href="javascript:;" @click="close">{{closeText}}</a>
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
  data () {
    return {
      verticalOffset: 0,
      visibleShow: true
    }
  },
  computed: {
    style () {
      return {}
    }
  },
  methods: {
    afterLeave () {
      this.$emit('closed')
    },
    close () {
      this.$emit('close')
    },
    afterEnter () {},
    createTimer () {},
    clearTimer () {}
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
  transition: top 0.3s;
  > a {
    color: rgb(223, 205, 205);
  }
  .content {
    color: rgb(116, 113, 113);
  }
}

.notifyFade-enter-active, .notifyFade-leave-active {
  transition: all .5s
}
.notifyFade-enter, .notifyFade-leave-active {
  opacity: 0;
  transform: scale(0.1) translate3d(-2000px, 0, 0);
  transform-origin: left center;
}
</style>
