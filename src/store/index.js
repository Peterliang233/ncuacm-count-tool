import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: [],
    names: [],
  },
  mutations: {
    show(state, res) {
      let rankInfo = {
        name: res.name,
        team_rank: res.team_rank,
        team_name: res.team_name,
      }
      state.info.push(rankInfo)
    },
    showImportTeam(state, res) {
      let name = {
        name: res.name
      }
      state.names.push(name)
    },
    clear(state) {
      state.info = []
      state.names = []
    }
  },
  getters: {
    getRankInfo: function(state) {
      return state.info
    },
    getTeamsName: function (state) {
      return state.names
    }
  },
  actions: {
  },
  modules: {
  }
})
