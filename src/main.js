import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// const appVersion 
const app = createApp(App).mount('#app')
app.config.errorHandler = (err) => {
    /* handle error */
  }
  
