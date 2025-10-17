import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import '@/style/app.css'

app.use(router)

app.mount('#app')
