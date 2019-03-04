import Vue from 'vue'
import Component from './notifyConstrutor'

const NotifyConstructor = Vue.extend(Component)

const instances = []
let seed = 1
const OFFSET = 16

// 删除当前 instance 对象
const removeInstance = (currentInstance) => {
  if (!currentInstance) return
  const length = instances.length
  // 当前dom的索引
  const index = instances.findIndex(instance => instance.id === currentInstance.id)

  instances.splice(index, 1)

  if (length <= 1) return
  const currentInstanceHeight = currentInstance.vm.height
  for (let i = index; i < length - 1; i++) {
    instances[i].verticalOffset = parseInt(instances[i].verticalOffset) - currentInstanceHeight - OFFSET
  }
}

const notify = (option) => {
  const {
    autoClose,
    ...rest
  } = option
  const instance = new NotifyConstructor({
    propsData: {
      ...rest
    },
    data: {
      autoClose: !autoClose ? 2000 : autoClose
    }
  })

  const id = `notify_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visibleShow = true

  // 设置 高度偏移量
  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 20
  })
  verticalOffset += OFFSET
  instance.verticalOffset = verticalOffset
  // 监听事件
  instance.vm.$on('closed', () => {
    removeInstance(instance)
    document.body.removeChild(instance.vm.$el)
    instance.vm.$destroy()
  })
  instance.vm.$on('close', () => {
    instance.vm.visibleShow = false
  })
  instances.push(instance)

  return instance.vm
}

export default notify