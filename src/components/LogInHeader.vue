<template>
  <header>
    <div class="signup__header__left">
      <router-link class="link_style" to="/"><img src="../assets/logo.svg"></router-link>
    </div>
    <div class="signup__header__right">
      <div class="link_login_button"><router-link class="link_login" to="/signup"><div class="link_login_text">会員登録はこちらから</div></router-link></div>
    </div>

  </header>

</template>

<style  scoped lang="scss">
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
  padding: 18px 24px 16px 24px;
  border-bottom:1px solid #ECECEC ;

  // .header__left{

  // }
  .signup__header__right{
    // ログイン
    .link_login_button{
      margin:0px 12px;
     .link_login{
       text-decoration: none;
       display:block;
       .link_login_text{
         font-family: $main-font-family;
         font-size: 13px;
         font-weight: 500;
         letter-spacing: 0.4px;
         color: #7F7F7F;
         padding: 9px 0px;
         transition: 0.1s ease;
        &:hover{
          color:$black;
        }
       }
     }
    }
  }
}

</style>