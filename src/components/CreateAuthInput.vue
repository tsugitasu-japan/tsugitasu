<template>
  <section>
    <div class="auth_contnair">

      <div class="auth_contnair_top">
        <h1 class='auth_title'>本人確認</h1>
        <p class="auth_user_email auth_user_email_margin">{{ email }}</p>
        <button class="repost_auth_code_button">認証コードを再送する</button>
      </div>

      <div class="auth_number_input_contnair">
        <img src="../assets/key-icon.svg" class="keyicon">
        <input type="tel" :value="authNum" class="auth_number_input" placeholder="6桁のコードを入力" maxlength="6"
          @input="myfilter">
      </div>

      <!-- エラー時表示 -->
      <p v-show="authError" class="auth_error_message">認証コードが正しくありません</p>

      <div class="auth_contnair_bottom">
        <p class="auth_explain">認証用コードを上記のアドレスに送信しました<br>続けるにはコードを入力してください</p>
        <button class="submit_button" v-bind:disabled="!isAuthSubmitButtonActive" @click="postAuthNum">認証</button>
      </div>
    </div>

  </section>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      authError: false,
      // 認証コード
      authNum: '',
    }
  },
  computed: {
    // 承認ボタンを押せるか否かのバリデーション
    isAuthSubmitButtonActive() {
      if (this.authNum.length === 6) return true;
      return false;
    }
  },
  methods: {
    // (自作)全角数字を入力・貼り付けされたときは半角数字に変換し,数字以外の入力・貼り付けがあったときは文字を除去
    myfilter(event) {
      let value = event.target.value.replace(/[０-９]/g, function (x) { return String.fromCharCode(x.charCodeAt(0) - 0xFEE0) }).replace(/[^0-9]/g, '');
      console.log(value);
      this.authNum = value;
      // 強制的に再描画しないと、表示と実際の値がずれる
      this.$forceUpdate();
    },
    // サーバーに認証コードを送信 Axios
    postAuthNum() {
      this.$store.dispatch('postAuthNum', {
        email: this.email,
        authNum: this.authNum,
      })
      this.authNum = '';
    },
    getUserEmail() {
      this.email = this.$store.state.UserProfileInfo.email;
    }
  },
  created() {
    this.getUserEmail();
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
        margin: 14px 0px 14px 0px;
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
      position: relative;
      column-gap: 31px;
      margin: 50px 0px 27px 0px;

      .keyicon {
        position: absolute;
        left: 4%;
        top: 0;
        bottom: 0;
        margin: auto;
      }

      .auth_number_input {
        width: 350px;
        font-family: $main-font-family;
        font-size: 15px;
        font-weight: 400;
        color: $black;
        letter-spacing: 10px;
        border: 1px solid #E6E6E6;
        transition: 0.2s;
        text-align: center;
        padding: 12px 0 12px 0;
        border-radius: 2px;

        &:focus {
          outline: transparent;
          border: 1px solid $main-color;
        }

        &::placeholder {
          font-family: $main-font-family;
          font-size: 15px;
          font-weight: 400;
          color: #999999;
          letter-spacing: 0.53px;
          text-align: center;
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
      padding: 27px 0px 0px 0px;

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