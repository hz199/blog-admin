import AdminTable from './AdminTable'
import NotificationCtrl from './Notification'

const components = [
  AdminTable,
  NotificationCtrl.Notification
]

const install = function install (Vue) {
  if (install.installed) return
  components.forEach((component) => {
    Vue.component(component.name, component)
  })

  // 函数式调用
  Vue.prototype.$adminNotify = NotificationCtrl.notify
}

export default {
  install
}
