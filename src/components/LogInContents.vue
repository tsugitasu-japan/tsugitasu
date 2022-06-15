<template>
<section>
  <p class="login_title">ログイン</p>
  <div class="login_form_contents">

    <div class="login_set">
      <div class="login_label_set">
        <p class="login_label">メールアドレス</p>
      </div>
      <input
        class="login_input"
        type="email"
        >
    </div>

    <div class="login_set">
      <div class="login_label_set">
        <p class="login_label">パスワード</p>
      </div>
      <input
        class="login_input"
        type="password"
        >
    </div>
    <button class="submit_button">ログイン</button>
    <router-link to="/" class="check_link">パスワードをお忘れの方</router-link>
  </div>
</section>

</template>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

// @import url("yakuhanjp/dist/scss/yakuhanjp_s");
$main-color:#13CCCE;
$main-hover:#26ABAD;
$black:#2B2B2B;
// $main-font-family:'メイリオ', 'Meiryo','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
$main-font-family:'Noto Sans JP', sans-serif;
section{
  margin-top: 45px;
  .login_title{
    font-family: $main-font-family;
    color: $black;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.63px;
    margin-bottom: 19px;
    text-align: center;
  }
  .login_form_contents{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login_set{
      margin:13px 0px;
      .login_label_set{
        display:flex;
        align-items: baseline;
        margin-bottom: 8px;
          .login_label{
            font-family: $main-font-family;
            color: $black;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.53px;
            margin-right: 5px;
            display: block;
          }

          .login_require{
            font-family: $main-font-family;
            color: #FE0F33;
            font-size: 11px;
            font-weight: 400;
            margin-left: 3px;
            display: block;
          }
      }
      .login_input{
        font-family: $main-font-family;
        font-size: 13px;
        font-weight: 400;
        color: $black;
        width:340px;
        height: 40px;
        margin-top: 8px;
        border-radius: 2px;
        border: solid 1px #E6E6E6;
        letter-spacing: 0.2px;
        padding-left:5px;
        line-height: 1.5;
        transition: 0.2s;

          &:focus{
            border: solid 1px #999999;
            outline: transparent;
          }
      }
    }
    .submit_button{
       text-decoration: none;
       display:block;
       border-radius: 2px;
       background-color: #ebebeb;
       transition: 0.1s ease;
       border: transparent;
       font-family: $main-font-family;
       font-size: 14px;
       font-weight: 700;
       letter-spacing: 0.4px;
       color: #FFFFFF;
       width:340px;
       height: 44px;
       margin: 44px 0px 25px 0px;
     &:valid{
       background-color: $main-color;
        &:hover{
        background-color:$main-hover;
      }
     }
}
    .check_link{
      border: transparent;
      font-family: $main-font-family;
      font-size: 13.5px;
      text-decoration: none;
      font-weight: 500;
      color:#0F8AC8;
     }
  }
}

</style>