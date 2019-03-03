import AdminTable from './AdminTable'
import Notification from './Notification'

const components = [
  AdminTable,
  Notification
]

const install = function install (Vue) {
  if (install.installed) return

  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
