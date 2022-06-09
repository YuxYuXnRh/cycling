import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'index', component: () => import('./components/Index.vue') },
  { path: '/line', name: 'line', component: () => import('./components/Line.vue') },
  { path: '/day/:id', name: 'day', component: () => import('./components/Day.vue') },
]

export default createRouter({
  routes,
  history: createWebHashHistory()
})
