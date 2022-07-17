import {createStore} from 'vuex'
import axios from 'axios';
import router from '../router';

export const store = createStore({

  state:{
    idToken: null,
    // userName: '',
  },
  getters:{
    idtoken: state =>  state.idToken ,
    // username: state => state.userName
  },
  mutations: {
    updateIdToken(state,idToken){
      state.idToken = idToken;
    },
    // updateUserName(state,userName){
    //   state.userName = userName;
    // }
  },
  actions:{
    login({ commit }, authData){
      axios.post(
        "/accounts:signInWithPassword?key=AIzaSyAPB2czXhQOikXKJ5EWTN2A7SifWJ06woc",
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        }
      )
        .then(response => {
          commit('updateIdToken',response.data.idToken);
          router.push('/dashboard');
        });
    },
    createUser({ commit }, authData){
      axios.post(
        "/accounts:signUp?key=AIzaSyAPB2czXhQOikXKJ5EWTN2A7SifWJ06woc",
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        }
      )
        .then(response => {
          commit('updateIdToken',response.data.idToken);
          router.push('/dashboard');
        });
      },
      // ユーザーネーム処理
      // updateUserName({commit},userName){
      //   commit('updateUserName',userName);
      // }
  }
});
