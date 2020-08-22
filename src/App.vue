<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
  body {

  }
</style>

<script>
  import Navigation from "./components/global/Navigation";
  export default {
    name: 'App',
    components: {
      Navigation
    }
  }
</script>