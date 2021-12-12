import { createApp } from 'vue'
import router from '@/router/index'
import { key, store } from '@/store'
import App from './App.vue'
import styleImport from '@/utils/style-import'
import '@/style/basic.styl'
import '@/style/leaflet.css'
import '@/style/leaflet.draw.css'
import vfmPlugin from 'vue-final-modal'
import '@/common/leaflet.js'
import '@/common/leaflet.draw.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
styleImport(app).use(router).use(store, key).use(vfmPlugin).use(ElementPlus).mount('#app')
