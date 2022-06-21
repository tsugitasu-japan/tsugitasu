<template>
  <header>
    <div class="header__left">
      <router-link class="link_style" to="/"><img src="../assets/logo.svg"></router-link>
    </div>

    <div class="header__right">
      <div class="main_button">
        <router-link class="link_main_button" to="/">
          <div class="main_button_text">教材・授業検索へ</div>
        </router-link>
      </div>
      <!-- 検索ボックス -->
      <div class="search__area">
        <input class="search__input" type="text" placeholder="キーワードで検索" v-model="SeachKeywords">
        <button class="search__button" @click="GetArticle">
          <img src="../assets/Icon-search.svg">
        </button>
      </div>
      <!-- プロフィールメニュー -->
      <div class="profile_menu_contnair">
        <div class="plofile_allshow" @click="isOpenMenu">
          <div class="profile_menu_left">
            <!-- <div class="test"></div> -->
            <div class="user_name">{{ CutUserName }}</div>
          </div>
          <div class="profile_menu_right">
            <img src="../assets/drop_triangle.svg" :class="{relote90:!isShowMenu}">
          </div>
        </div>
        <div class="profile_changeshow" v-if="isShowMenu">
          <routerLink to="/" class="prfile_menu_p prfile_menu_link_style menu_margin">マイプロフィール</routerLink>
          <routerLink to="/" class="prfile_menu_p prfile_menu_link_style">ログアウト</routerLink>
        </div>
      </div>
    </div>

  </header>

</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      SeachKeywords: '',
      UserName: '長町放送局高番銃号',
      isShowMenu:false,
      CutUserName:'',
    }
  },
  // DOMのCreated時にユーザー情報を取得
  created() {
    axios.get(
      "/users",
    )
      .then(response => {
        console.log(response);
      });
    this.CutName();
  },
  methods: {
    isOpenMenu(){
      this.isShowMenu = !this.isShowMenu;
    },
    CutName(){
      if(this.UserName.length > 7){
        this.CutUserName =  this.UserName.substr(0,7) + '...';
      }
      else{
        this.CutUserName = this.UserName;
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

// @import url("yakuhanjp/dist/scss/yakuhanjp_s");
$main-color: #13CCCE;
$main-hover: #26ABAD;
$black: #2B2B2B;
// $main-font-family:'メイリオ', 'Meiryo','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
$main-font-family: 'Noto Sans JP', sans-serif;

header {
  position:relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 210px 0 24px;
  height: 69px;
  border-bottom: 1px solid #ECECEC;
  // .header__left{

  // }
  .header__right {
    display: flex;
    align-items: center;
    justify-content: center;

    .search__area {
      border: solid 1px #E6E6E6;
      border-radius: 4px;
      width: 255px;
      display: flex;
      justify-content: space-between;
      padding: 2px;
      transition: 0.1s ease;

      &:hover {
        border: solid 1px #999999;
      }

      &:focus-within {
        border: solid 1px #999999;
      }

      .search__input {
        font-family: $main-font-family;
        font-size: 13px;
        font-weight: 400;
        color: $black;
        width: 215px;
        height: 35px;
        border: none;
        letter-spacing: 0.2px;
        padding-left: 10px;
        vertical-align: top;
        line-height: 1.5;

        &::placeholder {
          font-family: $main-font-family;
          color: #bcbcbc;
          font-weight: 300;
        }

        &:focus {
          background: transparent;
          outline: transparent;
        }
      }

      .search__button {
        background-color: transparent;
        border: none;
        width: 35px;
        height: 35px;

        img {
          margin: 0 auto;
        }
      }
    }

    .main_button {
      margin-right: 16px;

      .link_main_button {
        text-decoration: none;
        display: block;
        border-radius: 5px;
        background-color: $main-color;
        transition: 0.2s ease;

        &:hover {
          background-color: $main-hover;
        }

        .main_button_text {
          font-family: $main-font-family;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.4px;
          color: #FFFFFF;
          padding: 11px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    // プロフィールメニュー
    .profile_menu_contnair {
      position: absolute;
      top: 13px;
      right: 24px;
      width: 170px;
      background-color: #EBF1F1;
      border-radius: 4px;
      padding: 10px 12px 10px 14px;

      .plofile_allshow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        .profile_menu_right{
          .relote90{
            transform: rotate(-90deg);
          }
        }
        .profile_menu_left {
          display: flex;
          align-items: center;
          .test {
            width: 25px;
            height: 25px;
            border-radius: 12.5px;
            margin-right: 8px;
            background-color:#80A8A8;
          }

          .user_name {
            letter-spacing: 0.5px;
            color: #525252;
            font-family: $main-font-family;
            font-weight: 400;
            font-size: 14.5px;
          }
        }
      }
      .profile_changeshow{
        display: flex;
        flex-direction: column;
        padding-top: 15px;
        padding-bottom: 5px;
        .prfile_menu_p{
            letter-spacing: 0.4px;
            color: #8a8a8a;
            font-family: $main-font-family;
            font-weight: 400;
            font-size: 14px;
            transition: .15s;
            &:hover{
              color:$main-hover;
            }
        }
        .prfile_menu_link_style{
          text-decoration: none;
        }
        .menu_margin{
          margin-bottom: 13px;
        }
      }
    }
  }
}
</style>