import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'index', component: () => import('./views/Index.vue') },
  { path: '/line', name: 'line', component: () => import('./views/Line.vue') },
  { path: '/day/:id', name: 'day', component: () => import('./views/Day.vue') },
]

export default createRouter({
  routes,
  history: createWebHashHistory()
})
