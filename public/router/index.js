import Vue from 'vue'
import VueRouter from 'vue-router'
import app from '../app'

Vue.use(VueRouter)

const routes = app.ROUTES

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
