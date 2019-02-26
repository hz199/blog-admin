<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="layout">
      <router-view name="centent"></router-view>
    </router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
