// ローディングアニメーション情報

const state ={
  loading: '', //true:ローディングを表示, false:ローディング非表示
};

const getters ={
  loading: state => state.loading ? state.loading: '',
};

const mutations ={
  setLoading(state,loading){
      state.loading = loading;
  },
};
const actions = {
  async startLoad(context){
    console.log('moov');
      context.commit('setLoading', true);
  },
  async endLoad(context){
      context.commit('setLoading', false);
  } 
};

export default{
  state,
  getters,
  mutations,
  actions
}