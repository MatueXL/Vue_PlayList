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
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        this.User = data.body;
      });
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
