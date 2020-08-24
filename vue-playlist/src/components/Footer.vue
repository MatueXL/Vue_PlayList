<template>
  <Footer>
    <p>{{title}}</p>
  </Footer>
</template>

<script>
export default {
  name: 'app-footer',
  data() {
    return {
      title: 'Copyright 2020 Vue.js Demo!'
    }
  }
}
</script>

<style scoped>
Footer {
  background: #222;
  padding: 10px;
}

Footer p {
  color: lightgreen;
  text-align: center;
}
</style>