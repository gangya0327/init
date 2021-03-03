import Vue from 'vue'
import App from './App.vue'
import {
  Button, Alert, Dialog, Form,
  FormItem,
  Input,
  Select,
  Option,
} from 'element-ui'

// Vue.component(Button.name, Button)
Vue.use(Button)
Vue.use(Alert)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
