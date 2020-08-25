<template>
  <div>
    <!-- 添加keep-alive，会缓存页面内容 -->
    <keep-alive>
      <component :is="targetForm"></component>
    </keep-alive>
    <button @click="targetForm = 'form-one'">FormOne</button>
    <button @click="targetForm = 'form-two'">FormTwo</button>
  </div>
</template>

<script>
import formOne from './FormOne';
import formTwo from './FormTwo';

export default {
  data() {
    return {
      targetForm: 'form-one',
    }
  },
  components: {
    'form-one': formOne,
    'form-two': formTwo
  },
  methods: {

  },
}
</script>