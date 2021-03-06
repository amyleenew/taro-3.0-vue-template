import Vue from 'vue';
import store from './store';
import navCustomBar from 'taro-vue-nav';
Vue.component('nav-custom-bar', navCustomBar);

const App = new Vue({
  store,
  onShow(options) {
  },
  onLaunch() {
    console.log('----App Launch');
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default);
  },
});

export default App;
