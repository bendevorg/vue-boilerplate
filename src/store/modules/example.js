const state = {
  example: false,
};

const getters = {
  example: _state => _state.example,
};

const actions = {
  example({ commit }, payload) {
    return commit('setExample', `${payload}example`);
  },
};

const mutations = {
  setExample(_state, example) {
    _state.example = example;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
