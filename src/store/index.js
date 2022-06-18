import {createStore} from 'vuex'
import axios from '../axios-auth';

export const store = createStore({

  state:{
    idToken: null
  },
  getters:{
    idtoken: state =>  state.idToken
  },
  mutations: {
    updateIdToken(state,idToken){
      state.idToken = idToken;
    }
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
        });
      }
  }
});
