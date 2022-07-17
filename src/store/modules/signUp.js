import axios from 'axios';
import router from '../../router';

// 会員登録用の処理＆データ
const state = {
  username: '',
  email: '',
  password: '',
  backgroudUrl: '@/assets/profile_bg.svg'
};

const getters = {


};

const mutations = {
  registerUsername(state, userName) {
    state.username = userName ;
  },
  registerEmail(state, email) {
    state.email = email ;
  },
  registerPassword(state, password) {
    state.password = password ;
  },
};

const actions = {

  // サーバーに作成ユーザー情報を送信
  signUpUser({ commit },registerData) {
    axios.post(
      // LamdaURL
      'https://0dpf7vjoce.execute-api.ap-northeast-1.amazonaws.com/dev/user/entry/tmp',
      {
        "email": registerData.email,
        "password": registerData.password
      }
    )
      // 成功時
      .then(response => {
        commit('registerUsername',registerData.username);
        commit('registerEmail',registerData.email);
        commit('registerPassword',registerData.password);
        console.log(response);
        router.push('/auth');
      });
  },

  // 仮登録後認証コード送信
  postAuthNum(authData) {
    axios.post(
      // LamdaURL
      'https://0dpf7vjoce.execute-api.ap-northeast-1.amazonaws.com/dev/user/entry/prd',
      {
        "email": authData.email,
        "confirmation_code": authData.authNum
      }
    )
      // 成功時
      .then(response => {
        console.log(response);
        router.push('/dashboard');
      })
      .catch(error => {
        console.log(error);
        this.authError = true;
      });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
