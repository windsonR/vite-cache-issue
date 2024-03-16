import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import jsx from '@vitejs/plugin-vue-jsx'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
        }),
        jsx(),
        
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            'vue': fileURLToPath(new URL('./node_modules/vue/dist/vue.esm-bundler.js', import.meta.url)),
        }
    },
    optimizeDeps: {
        entries: [
            // 'node_modules/demo/demo.html'
        ]
    },
    server:{
        cacheStr(url){
            return url.indexOf('demo.vue')<0
        },
    }
})
