import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createBootstrap } from 'bootstrap-vue-next'

const app = createApp(App)

app.use(createPinia())
app.use(createBootstrap())
app.use(router)

app.mount('#app')
