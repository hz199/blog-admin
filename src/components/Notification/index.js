import Notification from './Notification'

Notification.install = function install (Vue) {
  Vue.component(Notification.name, Notification)
}

export default Notification