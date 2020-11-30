import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Home from './components/Home';
import HelloWorld from './components/HelloWorld'
import FormHelper from './components/FormHelper'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);

// 定义路由
const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/helloworld', component: HelloWorld },
    { path: '/formhelper', component: FormHelper },
  ],
  mode: 'history'
});

new Vue({
  render: function (h) { return h(App) },
  router,
}).$mount('#app')
