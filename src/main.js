import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './lang/i18n'
import paginate from 'vuejs-paginate'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(paginate)
app.mount('#app')