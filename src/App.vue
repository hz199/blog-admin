<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="layout">
      <router-view name="content"></router-view>
    </router-view>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
@import "./app.scss";
</style>

