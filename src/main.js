import { createApp } from 'vue'
import App from './App.vue'
import Welcome from './components/Welcome.vue'
import Portfolio from './components/Portfolio.vue'
import '@/styling/style.css';

const app = createApp(App);
app.component('welcome', Welcome);
app.component('portfolio', Portfolio);
app.mount('#app');
