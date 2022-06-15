<template>
  <header>
    <div class="header__left">
      <router-link class="link_style" to="/"><img src="../assets/logo.svg"></router-link>
    </div>
    <div class="header__right">
      <div class="main_button"><router-link class="link_main_button" to="/"><div class="main_button_text">教材・授業検索へ</div></router-link></div>
      <!-- 検索ボックス -->
      <div class="search__area">
        <input
        class="search__input"
        type="text"
        placeholder="キーワードで検索"
        v-model="SeachKeywords"
        >
        <button
          class="search__button"
          @click="GetArticle"
          >
          <img src="../assets/Icon-search.svg">
        </button>
      </div>
      <!-- プロフィールメニュー -->
      <div class="profile_menu">
        <div class="profile-menu_left">
          <img >
          <div class="username">{{UserName}}</div>
        </div>
        <div class="profile-menu_right">
          <img >
        </div>

      </div>
    </div>

  </header>

</template>

<script>
export default{
  data() {
    return{
    SeachKeywords:'',
    UserName:'小島聡太'
    }
  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

// @import url("yakuhanjp/dist/scss/yakuhanjp_s");
$main-color:#13CCCE;
$main-hover:#26ABAD;
$black:#2B2B2B;
// $main-font-family:'メイリオ', 'Meiryo','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
$main-font-family:'Noto Sans JP', sans-serif;
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 17px 24px 17px 24px;
  // .header__left{

  // }
  .header__right{
    display: flex;
    align-items: center;
    justify-content: center;
    .search__area{
        border: solid 1px #E6E6E6;
        border-radius: 4px;
        width:255px;
        display: flex;
        justify-content: space-between;
        padding:2px;
        transition: 0.1s ease;
        &:hover{
          border: solid 1px #999999;
        }
        &:focus-within{
          border: solid 1px #999999;
        }
      .search__input{
        font-family: $main-font-family;
        font-size: 13px;
        font-weight: 400;
        color: $black;
        width:215px;
        height: 35px;
        border: none;
        letter-spacing: 0.2px;
        padding-left:10px;
        vertical-align:top;
        line-height: 1.5;

          &::placeholder{
          font-family: $main-font-family;
          color: #bcbcbc;
          font-weight: 300;
          }

          &:focus{
            background: transparent;
            outline: transparent;
          }
      }
      .search__button{
        background-color: transparent;
        border:none;
        width:35px;
        height:35px;
          img{
            margin:0 auto;
        }
      }
    }
    // ログイン・サインアップリンク
    .main_button{
      margin-right:16px;
     .link_main_button{
       text-decoration: none;
       display:block;
       border-radius: 5px;
       background-color: $main-color;
       transition: 0.2s ease;
      &:hover{
        background-color:$main-hover;
      }
       .main_button_text{
         font-family: $main-font-family;
         font-size: 12px;
         font-weight: 700;
         letter-spacing: 0.4px;
         color: #FFFFFF;
         padding: 10px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
       }
     }
    }
  }
}

</style>