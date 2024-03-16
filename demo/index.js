// import Vue from 'vue'
//
// import VueRouter from 'vue-router'
//
// Vue.use(VueRouter)
// const router = new VueRouter({
//     mode: 'hash',
//     routes: [
//         {
//             name: 'home',
//             path: '/',
//             component: ()=>import('./demo.vue')
//         }
//     ],
//     fallback: '/'
// })
//
// new Vue({
//     router
// }).$mount('#app')

import {createApp, defineAsyncComponent} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: ()=>import('./demo.vue'),
        }
    ],
})

const app = createApp()

app.use(router)
app.mount('#app')