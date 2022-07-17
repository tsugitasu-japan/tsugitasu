<template>
  <section>
    <div class="auth_contnair">
      <div class="auth_contnair_top">
        <h1 class='auth_title'>本人確認</h1>
        <p class="auth_user_email auth_user_email_margin">{{ email }}</p>
        <button class="repost_auth_code_button">認証コードを再送する</button>
      </div>
      <div class="auth_number_input_contnair">
        <input type="text" class="auth_number_input">
        <input>
        <input>
        <input>
        <input>
        <input>
      </div>
      <p v-show="authError">認証コードが正しくありません</p>
      <div>
        <p>認証用コードを上記のアドレスに送信しました<br>続けるにはコードを入力してください</p>
        <button>認証</button>
      </div>
    </div>

  </section>
</template>

<script>

export default {
  data() {
    return {
      email: 'sotakojima@test.com',
      authError: false
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

section {
  .auth_contnair {
    display: flex;
    flex-direction: column;
    align-items: center;

    .auth_contnair_top {
      display: flex;
      flex-direction: column;
      align-items: center;

      .auth_title {
        font-family: $main-font-family;
        color: $black;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 0.63px;
        text-align: center;
      }

      .auth_user_email {
        font-family: $main-font-family;
        color: $black;
        font-size: 19px;
        font-weight: 400;
        letter-spacing: 0.67px;
        text-align: center;
      }

      .auth_user_email_margin {
        margin: 19px 0px 9px 0px;
      }

      .repost_auth_code_button {
        font-family: $main-font-family;
        color: #CECECE;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0.44px;
        text-align: center;
        background-color: transparent;
        border: none;
        transition: .1s;

        &:hover {
          color: $main-color;
        }
      }
    }

    .auth_number_input_contnair {
      .auth_number_input {
        width: 34px;
        font-family: $main-font-family;
        font-size: 39px;
        font-weight: 300;
        color: $black;
        border-bottom: 2px solid #E6E6E6;
        border-right: none;
        border-left: none;
        border-top: none;
        transition: 0.2s;

        &:focus {
          outline: transparent;
        }
      }
    }
  }
}
</style>