import './styles/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()).use(ElementPlus)
app.use(router)
app.mount('#app')

// main.ts

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
