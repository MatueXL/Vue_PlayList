<template>
  <div id="app">
    <Header
      :parentTitle="title"
      @changeParentTitle="updateTitle($event)"
    ></Header>
    <User :User="userList"></User>
    <Footer :parentTitle="title"></Footer>
  </div>
</template>

<script>

import User from './User';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      userList: [

      ],
      testList: [
        { name: 'MatueXL', website: 'https://matuexl.com' },
        { name: 'MatueXL', website: 'https://matuexl.com' },
        { name: 'MatueXL', website: 'https://matuexl.com' }
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
    // vue-resource
    // this.$http.get('https://jsonplaceholder.typicode.com/users')
    //   .then((data) => {
    //     this.userList = data.body;
    //   });

    // fetch-get
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(data => {
    //     return data.json(); // 这是fetch的固定写法
    //   })
    //   .then(user => {
    //     this.userList = user;
    //   })

    // fetch-post
    // fetch('https://jsonplaceholder.typicode.com/users', {
    //   methods: 'POST',
    //   body: JSON.stringify(this.User),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    //   .then(data => {
    //     return data.json();
    //   }).then(user => {
    //     this.userList = user;
    //   })

    // axios-get
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then(res => {
    //     this.userList = res.data;
    //   })

    // axios-post
    // axios.post('https://jsonplaceholder.typicode.com/users', this.testList)
    //   .then(res => {
    //     console.log(res.data);
    //     this.userList = res.data;
    //   })
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
