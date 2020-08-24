<template>
  <div id="app">
    <Header></Header>
    <User :users="User"></User>
    <Footer></Footer>
  </div>
</template>

<script>

import User from './components/User';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  data() {
    return {
      User: [
        { name: 'MatueXL', position: 'Web开发', show: false },
        { name: 'Gary', position: '程序员', show: false },
        { name: 'Troy', position: '码畜', show: false },
        { name: 'Emily', position: '学生', show: false },
        { name: 'MatueXL', position: 'Web开发', show: false },
        { name: 'MatueXL', position: 'Web开发', show: false },
        { name: 'MatueXL', position: 'Web开发', show: false },
        { name: 'MatueXL', position: 'Web开发', show: false },
      ]
    }
  },
  components: {
    User,
    Header,
    Footer
  }
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
