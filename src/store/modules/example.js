import API from '../../utils/API';

const state = {
  example: false
}

const getters = {
  example: state => state.example
}

const actions = {
  example({ commit }, payload) {
    return commit('setExample', payload + 'example');
  }
}

const mutations = {
  setExample (state, example) {
    state.example = example;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}