import Vue from 'vue'
import App from './App'
import store from './store'
import { getStore } from './store/store.js'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$toast = function(url){
	uni.navigateTo({
		url: url
	})
}
Vue.prototype.$userInfo = getStore("userInfo")
Vue.prototype.$collect = getStore("Collect")
uni.showNote = (node)=>{
  uni.showModal({
    title:'笔记',
    content: node || ''
  })
}
const app = new Vue({
    ...App
})
app.$mount()
