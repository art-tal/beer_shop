<template>
  <div id="app">
    <header-app/>
  </div>
</template>

<script>
import HeaderApp from './components/main/header.vue'

export default {
  name: 'App',
  components: {
    HeaderApp
  }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  font-size: 10px;
}
</style>
