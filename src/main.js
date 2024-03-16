import {createApp} from 'vue'
import App from "./App.vue";
// import {createRouter, createWebHashHistory} from 'vue-router'
//
// const router = createRouter({
//     history: createWebHashHistory(),
//     routes: [
//         {
//             name: 'home',
//             path: '/',
//             component: ()=>import('demo/demo.vue'),
//         }
//     ],
// })
const app = createApp(App)
// app.use(router)
app.mount('#app')
