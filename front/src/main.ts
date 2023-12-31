import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from '@/App.vue'
import Router from '@/router'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(Router).use(pinia).mount('#app')