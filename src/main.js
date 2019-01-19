import Vue from 'vue'
import App from './App'

// HTTP Client
import VueResource from 'vue-resource'

// Router
import router from './router'

// Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Filters
import VueTruncate from 'vue-truncate-filter'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(VueTruncate)

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
