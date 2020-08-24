import Vue from 'vue'
import App from './App.vue'
// import User from './components/User';

Vue.config.productionTip = false
// 全局注册组件
// Vue.component('User',User);

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
