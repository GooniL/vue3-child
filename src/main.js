import { createApp } from 'vue'
import App from './App.vue'
import routes from './router'
import { createRouter, createWebHistory } from 'vue-router'

let app,
    router

const __qiankun__ = window.__POWERED_BY_QIANKUN__

export async function bootstrap() {}

export async function mount() {
  app = createApp(App);

  router = createRouter({
    history: createWebHistory(__qiankun__ ? '/vue3' : '/'),
    routes
  })

  app.use(router).mount('#app')
}

export async function unmount() {}

__qiankun__ || mount({})
