import VueRouter from 'vue-router'
import type { Component } from "vue"

interface Route {
  path: string
  component: Component
}

const routes: Route[] = []

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

export default router