<template>
  <section>
    <div class="auth_contnair">

      <div class="auth_contnair_top">
        <h1 class='auth_title'>本人確認</h1>
        <p class="auth_user_email auth_user_email_margin">{{ email }}</p>
        <button class="repost_auth_code_button">認証コードを再送する</button>
      </div>

      <div class="auth_number_input_contnair">

        <input type="tel" class="auth_number_input" maxlength="1" autocorrect="off" autocapitalize="off"
          autocomplete="off" spellcheck="false" autofocus v-model="authNum01" ref="num01">

        <input type="tel" class="auth_number_input" maxlength="1" autocorrect="off" autocapitalize="off"
          autocomplete="off" spellcheck="false" v-model="authNum02" ref="num02" @keydown.delete="delete01">

        <input type="tel" class="auth_number_input" maxlength="1" autocorrect="off" autocapitalize="off"
          autocomplete="off" spellcheck="false" v-model="authNum03" ref="num03" @keydown.delete="delete02">

        <input type="tel" class="auth_number_input" maxlength="1" autocorrect="off" autocapitalize="off"
          autocomplete="off" spellcheck="false" v-model="authNum04" ref="num04" @keydown.delete="delete03">

        <input type="tel" class="auth_number_input" maxlength="1" autocorrect="off" autocapitalize="off"
          autocomplete="off" spellcheck="false" v-model="authNum05" ref="num05" @keydown.delete="delete04">

        <input type="tel" class="auth_number_input" maxlength="1" autocorrect="off" autocapitalize="off"
          autocomplete="off" spellcheck="false" v-model="authNum06" ref="num06" @keydown.delete="delete05">

      </div>

      <!-- エラー時表示 -->
      <p v-show="authError" class="auth_error_message">認証コードが正しくありません</p>

      <div class="auth_contnair_bottom">
        <p class="auth_explain">認証用コードを上記のアドレスに送信しました<br>続けるにはコードを入力してください</p>
        <button class="submit_button" v-bind:disabled="!isAuthSubmitButtonActive" @click="postAuth">認証</button>
      </div>
    </div>

  </section>
</template>

<script>

export default {
  data() {
    return {
      email: 'sotakojima@test.com',
      authError: false,
      // 認証コード
      authNum01: '',
      authNum02: '',
      authNum03: '',
      authNum04: '',
      authNum05: '',
      authNum06: '',
    }
  },
  computed: {
    // 承認ボタンを押せるか否かのバリデーション
     isAuthSubmitButtonActive() {
      if (this.authNum01 != '' && this.authNum02 != '' && this.authNum03 != '' && this.authNum04 != '' && this.authNum05 != '' && this.authNum06 != '') return true;
      return false;
    }
  },
  methods: {
    // input''の時Deliteでひとつ前のinputへ移動＆削除
    delite
  },
  watch: {
    // 入力されたらフォーカス移動
    authNum01: function (num) { if (num.length >= 1) { this.$refs.num02.focus() } },
    authNum02: function (num) { if (num.length >= 1) { this.$refs.num03.focus() } },
    authNum03: function (num) { if (num.length >= 1) { this.$refs.num04.focus() } },
    authNum04: function (num) { if (num.length >= 1) { this.$refs.num05.focus() } },
    authNum05: function (num) { if (num.length >= 1) { this.$refs.num06.focus() } },
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
  margin-top: 45px;

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
      display: flex;
      column-gap: 31px;
      padding: 50px 0px 33px 0px;

      .auth_number_input {
        width: 35px;
        font-family: $main-font-family;
        font-size: 39px;
        font-weight: 300;
        color: $black;
        border-bottom: 2px solid #E6E6E6;
        border-right: none;
        border-left: none;
        border-top: none;
        transition: 0.2s;
        text-align: center;
        padding: 0 0 5px 0;

        &:focus {
          outline: transparent;
          border-bottom: 2px solid $main-color;
        }
      }
    }

    .auth_error_message {
      font-family: $main-font-family;
      color: #FE0F33;
      font-size: 13px;
      font-weight: 400;
      letter-spacing: 0.44px;
      text-align: center;
    }

    .auth_contnair_bottom {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 33px 0px 0px 0px;

      .auth_explain {
        font-family: $main-font-family;
        color: $black;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0.44px;
        text-align: center;
        line-height: 1.46;
      }

      .submit_button {
        text-decoration: none;
        display: block;
        border-radius: 2px;
        background-color: #ebebeb;
        transition: 0.1s ease;
        border: transparent;
        font-family: $main-font-family;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.4px;
        color: #FFFFFF;
        width: 188px;
        height: 42px;
        margin: 45px 0px 25px 0px;

        &:valid {
          background-color: $main-color;

          &:hover {
            background-color: $main-hover;
          }
        }
      }
    }
  }
}
</style>