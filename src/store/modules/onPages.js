// import axios from 'axios';
// import router from '../../router';

// ユーザプロフィール情報
const state = {
  onPage:'myClass' 
};

const getters = {};

const mutations = {
  // ユーザー登録
  getOnPageData(state, onPageData) {
    state.onPage = onPageData.onPageData;
    console.log(onPageData);
  },
};

const actions = {
  setTimeGet ({ commit },Data) {
    setTimeout(() => {
      commit('getOnPageData',Data)
    }, 1000)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
