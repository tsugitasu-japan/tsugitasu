// import axios from 'axios';
import router from '../../router';
// Amplify系インストール
import { Amplify, Auth } from 'aws-amplify';
import AwsConfigAuth from '../../aws-config/auth';
Amplify.configure(AwsConfigAuth);

// ユーザプロフィール情報
const state = {
  iconUrl: '/img/profile_bg.8987e513.svg',
  selfIntroduction: '',
  username: '',
  email: '',
  userIdentification: null,
  idToken: null,
  password: null,
};

const getters = {
  idToken: state => state.idToken
};

const mutations = {
  // Amplyfyからユーザー情報を取得
  getUserInfo(state, userInfo) {
    state.email = userInfo.username;
    state.idToken = userInfo.signInUserSession.idToken.jwtToken;
    state.username = userInfo.attributes.nickname;
    state.userIdentification = userInfo.attributes.sub;
  },
  registerUserInfo(state, registerInfo){
    state.email = registerInfo.username;
  },
  setPassword(state, password){
    state.password = password;
  },
  logout(state) {
    state.email = '';
    state.idToken = null;
    state.username = '';
    state.password = null;
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
  updateidToken(state, idToken) {
    state.idToken = idToken;
  }
};

const actions = {

  // AmplyfyAuth関連-----------------------------------------------------------------------------------------------

  // サインアップ AWS Amplify
  async signUpUser({ commit }, signUpInfo) {
    try {
      const { user } = await Auth.signUp({
        username: signUpInfo.username,
        password: signUpInfo.password,
        attributes: {
          email: signUpInfo.email,
          nickname: signUpInfo.nickname,
        },
      });
      commit('registerUserInfo', user);
      commit('setPassword', signUpInfo.password)
      console.log(user);
      router.push('/auth');
    } catch (error) {
      console.log('error signing up:', error);
    }
  },

  // ログインawsAmplify
  async userLogin({ commit }, loginInfo) {
    try {
      const user = await Auth.signIn(loginInfo.email, loginInfo.password);
      console.log(user);
      commit('getUserInfo', user);
      router.push('/dashboard/class');
    } catch (error) {
      console.log('error signing in', error);
    }
  },

  // ログアウト
  async signOut({ commit }) {
    try {
      await Auth.signOut();
      router.push('/');
      commit('logout');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  },

  // プロフィール変更
  updateProfile({ commit }, userProfile) {
    commit('updateUsername', userProfile.username);
    commit('updateSelfIntroduction', userProfile.selfIntroduction);
    commit('updateIconUrl', userProfile.iconUrl);
    router.push('/profile');
  },
}
export default {
  state,
  getters,
  mutations,
  actions
}
