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
      this.$emit('changeParentTitle', 'Change Parent Title By Children Component!');
    }
  },
  beforeCreate() {
    alert('组件实例化之前执行的函数');
  },
  created() {
    alert('组件实例化完毕，但页面还未展示');
  },
  beforeMount() {
    alert('组件挂载前，页面仍未展示，但虚拟dom已配置')
  },
  mounted() {
    alert('组件挂载后，此方法执行后，展示页面')
  },
  beforeUpdate() {
    alert('组件更新前，页面仍未更新，但虚拟dom已配置')
  },
  updated() {
    alert('组件更新后，此方法执行后，展示页面');
  },
  beforedestory() {
    alert('组件销毁前');
  },
  destroyed() {
    alert('组件销毁后');
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