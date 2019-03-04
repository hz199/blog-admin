import Notification from './Notification'
import notify from './function'

Notification.install = function install (Vue) {
  Vue.component(Notification.name, Notification)
}

export default {
  Notification,
  notify
}