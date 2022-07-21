<template>
  <header>
    <div class="header__left">
      <router-link class="link_style" to="/dashboard/class"><img src="../assets/logo.svg"></router-link>
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
      <div class="profile_menu_opner profile_menu_opner_circle" @click="isOpenMenu"
        :style="{ 'background-image': 'url(' + iconUrl + ')' }"></div>
      <div class="profile_menu_contnair" v-show="isShowMenu">
        <div class="profile_changeshow">
          <p class="prfile_name_p menu_margin name_width">{{ username }}</p>
          <routerLink to="/profile" class="prfile_menu_p prfile_menu_link_style menu_margin">マイプロフィール</routerLink>
          <span class="logout_menu" @click="logout">ログアウト</span>
        </div>
      </div>

    </div>

  </header>

</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      SeachKeywords: '',
      isShowMenu: false,
      username: '',
      iconUrl: ''
    }
  },
  computed: {
    image_src() { return this.$store.state.signUp.backgroudUrl }
  },
  methods: {
    // メニューアイコン開閉
    isOpenMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
    // ユーザー情報の取得
    getUserInfo() {
      this.username = this.$store.state.UserProfileInfo.username;
      this.iconUrl = this.$store.state.UserProfileInfo.iconUrl;
    },
    // ログアウト
    logout(){
      this.$store.dispatch('logout');
    }
  },
  created() {
    this.getUserInfo()
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

$main-color: #13CCCE;
$main-hover: #26ABAD;
$black: #2B2B2B;
$main-font-family: 'Noto Sans JP', sans-serif;

header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 0 24px;
  height: 69px;
  border-bottom: 1px solid #ECECEC;

  .header__left {
    padding: 15px 0 15px 0px;
  }

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
      margin: 0 17px 0 17px;

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

    .profile_menu_opner_circle {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-size: cover;
      cursor: pointer;
    }

    .main_button {

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
      top: 59px;
      right: 20px;
      width: 170px;
      background-color: #FFFFFF;
      box-shadow: 0px 3px 20px rgba(75, 75, 75, 0.16);
      border-radius: 4px;
      padding: 14px 13px 14px 13px;
      transition: .2s;
      z-index: 100;
    }

    .profile_changeshow {
      display: flex;
      flex-direction: column;
      display: inline-block;

      .prfile_name_p {
        letter-spacing: 0.4px;
        color: $black;
        font-family: $main-font-family;
        font-weight: 500;
        font-size: 14px;
        display: block;
      }

      .prfile_menu_p {
        letter-spacing: 0.4px;
        color: #7F7F7F;
        font-family: $main-font-family;
        font-weight: 400;
        font-size: 14px;
        transition: .15s;
        display: block;

        &:hover {
          color: $main-hover;
        }
      }

      .logout_menu {
        letter-spacing: 0.4px;
        color: #7F7F7F;
        font-family: $main-font-family;
        font-weight: 400;
        font-size: 14px;
        transition: .15s;
        display: block;
        cursor: pointer;

        &:hover {
          color: $main-hover;
        }
      }

      .prfile_menu_link_style {
        text-decoration: none;
        display: inline-block;
      }

      .menu_margin {
        margin-bottom: 15px;
      }

      .name_width {
        width: 100%;
      }
    }
  }
}
</style>