<template>
  <div id="app">
    <div>
      <ul>
        <li><a href="/"> Home</a></li>
        <li><a href="/helloworld">HelloWorld</a></li>
      </ul>
    </div>
    <router-view>
    </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {

    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
