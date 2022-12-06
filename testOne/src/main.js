import { createApp } from 'vue'
import App from './App.vue'
// import SayHello from '@/components/sayHello-ui'
import SayHello from '../sayHello-ui/sayHello-ui.mjs'


import './assets/main.css'

createApp(App).use(SayHello).mount('#app')
