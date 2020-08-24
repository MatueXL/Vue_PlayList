<template>
  <div class="hello">
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

</style>
