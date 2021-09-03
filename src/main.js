import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/typeNav'
// import Header from '@/components/Header'
Vue.config.productionTip = false
Vue.component('TypeNav',TypeNav)
// Vue.component(Footer)
new Vue({
  render: h => h(App),
  router//我们所有的组件内部都可以使用this.$router和this.$route
}).$mount('#app')
