import axios from 'axios';
import router from "../../router";

// ユーザ作成授業情報
const state = {
  createClasses: [],
};

const getters = {};

const mutations = {

  // 受け取ったデータを連想配列に追加
  registerClass(state, createClassData) {

    //連想配列の宣言
    const createClasses = { className: createClassData.className };
    // createClasses["className"] = createClassData.className;
    createClasses["classExp"] = createClassData.classExp;
    createClasses["iconSrc"] = createClassData.iconSrc;
    createClasses["iconOffSrc"] = createClassData.iconOffSrc;
    createClasses["selectedBgColor"] = createClassData.selectedBgColor;
    createClasses["classTags"] = createClassData.classTags;
    createClasses["selectedRelease"] = createClassData.selectedRelease;
    state.createClasses.push(createClasses);

    // ステート側で連想配列を作成ののち、vue側へ
    // state.createClasses["className"] = createClassData.className;
    // state.createClasses["classExp"] = createClassData.classExp;
    // state.createClasses["iconSrc"] = createClassData.iconSrc;
    // state.createClasses["iconOffSrc"] = createClassData.iconOffSrc;
    // state.createClasses["selectedBgColor"] = createClassData.selectedBgColor;
    // state.createClasses["classTags"] = createClassData.classTags;
    // state.createClasses["selectedRelease"] = createClassData.selectedRelease;
  },
};

const actions = {

  // 作成した授業情報を送信
  createClass({ commit }, createClassData) {
    axios.post(
      // LamdaURL
      'https://ugdhjkc6j2.execute-api.ap-northeast-1.amazonaws.com/dev/create/lesson',
      {
        "lesson_name": createClassData.className,
        "created_by": createClassData.createPerson,
        "outline": createClassData.classExp,
        "Public": createClassData.selectedRelease,
        "icon": {
          "color": createClassData.selectedBgColor,
          "file_name": createClassData.iconSrc,
        },
        "materials": [
          "qhptr95",
          "jav3o39"
        ],
        "tags": createClassData.classTags,
      },
      { headers: { "Authorization": createClassData.idToken } }
    )
      // 成功時
      .then(response => {
        console.log(response);
        commit('registerClass', createClassData);
        router.push('/dashboard/class');
      })
      .catch(error => {
        alert("登録に失敗しました。もう一度送信してください。");
        console.log(error);
        this.authError = true;
      });
  },
  // 作成した授業情報を受信
  getCreatedClass({ commit }, userData) {
    axios.get(
      // LamdaURL
      'https://ugdhjkc6j2.execute-api.ap-northeast-1.amazonaws.com/dev/retrieve/lesson',
      {
        params: { user_id: userData.userName },
        headers: { "Authorization": userData.idToken }
      },

    )
      // 成功時
      .then(response => {
        console.log(response);
        commit('registerClass');
      })
      .catch(error => {
        alert("読み込みに失敗しました。もう一度送信してください。");
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