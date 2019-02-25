<template>
  <div id="app">
    <router-link to="/">home</router-link> |
    <router-link to="about">about</router-link>
    <router-view/>
  </div>
</template>

<style>
#app {
  padding-top: 50px;
  text-align: center;
}
</style>
