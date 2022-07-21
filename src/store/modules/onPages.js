
// ユーザプロフィール情報
const state = {
  onPage:'myClass' 
};

const getters = {};

const mutations = {
  // ユーザー登録
  getOnPageData(state, onPageData) {
    state.onPage = onPageData.onPageData;
  },
};

const actions = {
  // setTimeGet ({ commit },Data) {
  //   setTimeout(() => {
  //     commit('getOnPageData',Data)
  //   }, 1000)
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
