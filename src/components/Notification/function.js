import Vue from 'vue'
import Component from './notify-function'

const NotifyConstructor = Vue.extend(Component)

const instances = []
let seed = 1

const notify = (option) => {
  const instance = new NotifyConstructor({
    propsData: option
  })

  const id = `notify_${seed++}`
  instance.id = id
  instance.vm = instance.$mount()

  document.body.appendChild(instance.vm.$el)
  instances.push(instance)

}

export default notify