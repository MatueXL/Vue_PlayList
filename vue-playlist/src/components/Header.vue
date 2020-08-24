<template>
  <header @click="changeParentTitle()">
    <h1>{{title}} {{parentTitle}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      title: 'Vue.js Demo'
    }
  },
  props: {
    parentTitle: {
      type: String,
      required: true,
    }
  },
  methods: {
    changeParentTitle() {
      // this.parentTitle = 'changed!';
      this.$emit('changeParentTitle','Change Parent Title By Children Component!');
    }
  }
}
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}

header h1 {
  color: #222;
  text-align: center;
}
</style>