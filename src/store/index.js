/*
 * @Author: zhang_gen_yuan
 * @Date: 2021-05-12 20:26:05
 * @LastEditTime: 2021-05-12 22:29:39
 * @Descripttion: 
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import system from './modules/system'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    system
  },
  getters
})

export default store
