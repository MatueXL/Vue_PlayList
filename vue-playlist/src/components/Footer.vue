<template>
  <Footer>
    <p>{{title}}{{parentTitle}}</p>
  </Footer>
</template>

<script>
export default {
  name: 'app-footer',
  data() {
    return {
      title: 'Copyright 2020 Vue.js Demo!'
    }
  },
  props: {
    parentTitle: {
      type: String,
      required: true,
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