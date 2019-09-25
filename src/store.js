/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { stat } from 'fs'
const VueSession = require('vue-session')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    error: false,
    token: localStorage.getItem('token') || '',
    username : {}
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
      state.error = ''
    },
    auth_success(state) {
      state.status = 'success'
      state.token = localStorage.getItem('token')
      state.username = localStorage.getItem('username')
    },
    auth_error(state){
      state.status = 'error'
      state.error = true
    },
    logout(state){
      state.status = ''
      state.token = ''
      state.error = ''
    },
  },
  actions: {
    login({ commit }, payload) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: process.env.VUE_APP_API_URL+'findCourier',
          data: payload,
          method: 'POST'
        })
          .then(res => {
            const token = res.data.token
            const username = res.data.user[0].USERNAME
            localStorage.setItem('token', token)
            localStorage.setItem('username', username)
            axios.defaults.headers.common['Authorization'] = 'Bearer' + token
            commit('auth_success', token, username)
            resolve(res)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    authErr: state => state.error
  }
})
