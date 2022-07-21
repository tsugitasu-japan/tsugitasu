import {createStore} from 'vuex'
// vuexモジュールのインポート
import UserProfileInfo from './modules/UserProfileInfo'
import UserCreatedClasses from './modules/UserCreatedClasses'
import onPages from './modules/onPages'
import createPersistedState from 'vuex-persistedstate'

export const store = createStore({
  state: {},
  getters: [],
  mutations: {},
  actions: {},
  modules: {
    UserProfileInfo,
    UserCreatedClasses,
    onPages
  },
  plugins: [createPersistedState(
    { 
    // ストレージのキーを指定
    key: 'tsugitasuApp',
    // 管理対象のステートを指定。pathsを書かない時は`modules`に書いたモジュールに含まれるステート全て。`[]`の時はどれも保存されない
    paths: [
    'UserProfileInfo',
    'UserCreatedClasses'
    ],
    
    // ストレージの種類を指定する。デフォルトではローカルストレージ
    storage: window.sessionStorage
    }
    )]
});
