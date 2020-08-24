<template>
  <div class="hello">
    <h1>Hello World</h1>
    <User></User>
  </div>
</template>

<script>
// 局部注册组件
import User from './User';

export default {
  name: 'HelloWorld',
  components: {
    User
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: green;
}
</style>
