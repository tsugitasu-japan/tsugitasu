import {createStore} from 'vuex'
// vuexモジュールのインポート
import UserProfileInfo from './modules/UserProfileInfo'
import UserCreatedClasses from './modules/UserCreatedClasses'
import onPages from './modules/onPages'

export const store = createStore({
  state: {

  },
  getters: [

  ],
  mutations: {

  },
  actions: {

  },
  modules: {
    UserProfileInfo,
    UserCreatedClasses,
    onPages
  }
});
