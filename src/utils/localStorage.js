const getItem = (name) => {
  window.localStorage.getItem(name)
}

const setItem = (name, value) => {
  window.localStorage.setItem(name, value)
}

export default {
  setItem,
  getItem
}