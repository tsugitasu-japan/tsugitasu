import axios from 'axios';
import router from '../../router';

// ユーザプロフィール情報
const state = {
  iconUrl: '/img/profile_bg.8987e513.svg',
  selfIntroduction: '',
  username: '',
  email: '',
  password: '',
};

const getters = {};

const mutations = {
  // ユーザー登録
  registerUsername(state, userName) {
    state.username = userName;
  },
  registerEmail(state, email) {
    state.email = email;
  },
  registerPassword(state, password) {
    state.password = password;
  },
  // プロフィール変更
  updateUsername(state, username) {
    state.username = username;
  },
  updateSelfIntroduction(state, selfIntroduction) {
    state.selfIntroduction = selfIntroduction;
  },
  updateIconUrl(state,iconUrl){
    state.iconUrl = iconUrl;
  }
};

const actions = {
  // サーバーに作成ユーザー情報を送信
  signUpUser({ commit }, registerData) {
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
        commit('registerUsername', registerData.username);
        commit('registerEmail', registerData.email);
        commit('registerPassword', registerData.password);
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
        router.push('/dashboard/class');
      })
      .catch(error => {
        console.log(error);
        this.authError = true;
      });
  },
  // プロフィール変更
  updateProfile({ commit }, userProfile) {
    commit('updateUsername', userProfile.username);
    commit('updateSelfIntroduction', userProfile.selfIntroduction);
    commit('updateIconUrl',userProfile.iconUrl);
    router.push('/profile');
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
