import Notification from './Notification.vue'

export default {
  extends: Notification,
  data () {
    return {
      verticalOffset: 20,
      autoClose: 3000,
      visibleShow: false,
      timer: null,
      height: 0
    }
  },
  computed: {
    style () {
      return {
        top: `${this.verticalOffset}px`
      }
    }
  },
  methods: {
    createTimer () {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visibleShow = false
        }, this.autoClose)
      }
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    afterEnter () {
      this.height = this.$el.offsetHeight
    }
  },
  beforeDestroy () {
    this.clearTimer()
  },
  mounted () {
    this.createTimer()
  }
}