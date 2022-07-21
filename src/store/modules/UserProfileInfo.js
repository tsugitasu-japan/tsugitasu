import axios from 'axios';
import router from '../../router';

// ユーザプロフィール情報
const state = {
  iconUrl: '/img/profile_bg.8987e513.svg',
  selfIntroduction: '',
  username: '',
  email: '',
  password: '',
  idTokne: null,
};

const getters = {
  idTokne: state => state.idTokne
};

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
  updateIconUrl(state, iconUrl) {
    state.iconUrl = iconUrl;
  },
  // IDトークンをセット
  updateIdTokne(state, idTokne) {
    state.idTokne = idTokne;
  }
  // エラーメッセージ
  // setErrorMessage(state, errorMessage) {
  //   state.errorMessage = errorMessage
  // }
};

const actions = {
  // サーバーに作成ユーザー情報を送信
  signUpUser({ commit }, registerData) {
    axios.post(
      // LamdaURL
      'https://ugdhjkc6j2.execute-api.ap-northeast-1.amazonaws.com/dev/user/entry/tmp',
      {
        "email": registerData.email,
        "password": registerData.password,
        "nickname": registerData.nickname
      }
    )
      // 成功時
      .then(response => {
        commit('registerUsername', registerData.nickname);
        commit('registerEmail', registerData.email);
        commit('registerPassword', registerData.password);
        console.log(response);
        router.push('/auth');
      });
  },

  // // 仮登録後認証コード送信
  // postAuthNum({ commit },authData) {
  //   axios.post(
  //     // LamdaURL
  //     'https://ugdhjkc6j2.execute-api.ap-northeast-1.amazonaws.com/dev/user/entry/prd',
  //     {
  //       "email": authData.email,
  //       "confirmation_code": authData.authNum
  //     }
  //   )
  //     // 成功時
  //     .then(response => {
  //       console.log(response);
  //       commit('registerEmail', authData.email);
  //       router.push('/dashboard/class');
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       console.log('moov');

  //     });
  // },

  // ログイン
  userLogin({ commit }, loginInfo) {
    axios.post(
      // LamdaURL
      'https://ugdhjkc6j2.execute-api.ap-northeast-1.amazonaws.com/dev/user/login/',
      {
        "email": loginInfo.email,
        "password": loginInfo.password
      }
    )
      // 成功時
      .then(response => {
        console.log(response);
        commit('updateIdTokne', response.data.IdToken);
        router.push('/dashboard/class');
      })
      // エラー時
      .catch(error => {
        console.log(error);
        switch (error.response?.status) {
          case 400:
            console.log('passworderror');
          // const errorMessage ="パスワードに誤りがあります";
          // commit('setErrorMessage', errorMessage)
        }
      });
  },

  // プロフィール変更
  updateProfile({ commit }, userProfile) {
    commit('updateUsername', userProfile.username);
    commit('updateSelfIntroduction', userProfile.selfIntroduction);
    commit('updateIconUrl', userProfile.iconUrl);
    router.push('/profile');
  },

  // ログアウト
  logout({commit}) {
    commit('updateIdTokne', null)
  }

};

export default {
  state,
  getters,
  mutations,
  actions
}
