<template>
  <header>
    <div class="header__left">
      <router-link class="link_style" to="/"><img src="../assets/logo.svg"></router-link>
    </div>
    <div class="header__right">
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
      <div class="link_login_button"><router-link class="link_login" to="/login"><div class="link_login_text">ログイン</div></router-link></div>
      <div class="link_signup_button"><router-link class="link_signup" to="/signup"><div class="link_signup_text">会員登録</div></router-link></div>
    </div>

  </header>

</template>

<script>
export default{
  data() {
    return{
    SeachKeywords:'',
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
  padding: 0px 24px 0px 24px;
  height: 68px;
  .header__left{
    padding: 15px 0 15px 0px;
  }
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
    .link_login_button{
      margin:0px 12px;
     .link_login{
       text-decoration: none;
       display:block;
       .link_login_text{
         font-family: $main-font-family;
         font-size: 13px;
         font-weight: 700;
         letter-spacing: 0.4px;
         color: #7F7F7F;
         padding: 9px 16px;
         transition: 0.1s ease;
        &:hover{
          color:$black;
        }
       }
     }
    }
    .link_signup_button{
     .link_signup{
       text-decoration: none;
       display:block;
       border-radius: 5px;
       background-color: $main-color;
       transition: 0.1s ease;
      &:hover{
        background-color:$main-hover;
      }
       .link_signup_text{
         font-family: $main-font-family;
         font-size: 13px;
         font-weight: 700;
         letter-spacing: 0.4px;
         color: #FFFFFF;
         padding: 10px 18px;
        display: flex;
        align-items: center;
        justify-content: center;
       }
     }
    }
  }
}

</style>