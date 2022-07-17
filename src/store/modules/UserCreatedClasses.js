// import axios from 'axios';
import router from "../../router";

// ユーザ作成授業情報
const state = {
  createClasses:[],
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

  // 作成授業情報を送信
  createClass({ commit }, createClassData) {
    commit('registerClass', createClassData);
    // commit('registerClassName', createClassData.className);
    // console.log(createClassData);
    router.push('/dashboard/class')
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}