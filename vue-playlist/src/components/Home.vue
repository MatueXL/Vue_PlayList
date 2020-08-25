<template>
  <div id="app">
    <Header
      :parentTitle="title"
      @changeParentTitle="updateTitle($event)"
    ></Header>
    <User :User="User"></User>
    <User :User="User"></User>
    <Footer :parentTitle="title"></Footer>
  </div>
</template>

<script>

import User from './User';
import Header from './Header';
import Footer from './Footer';

export default {
  name: 'Home',
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
      ],
      title: '传递的是一个值（string/number/boolean）',
    }
  },
  components: {
    User,
    Header,
    Footer
  },
  methods: {
    updateTitle(e) {
      this.title = e;
    }
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
