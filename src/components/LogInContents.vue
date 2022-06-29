<template>
  <section>
    <p class="login_title">ログイン</p>
    <div class="login_form_contents">

      <div class="login_set">
        <div class="login_label_set">
          <p class="login_label">メールアドレス</p>
        </div>
        <input class="login_input" type="email" v-model="email">
      </div>

      <div class="login_set">
        <div class="login_label_set">
          <p class="login_label">パスワード</p>
          <div class="pass_input_contnair">
            <input class="signup_input_pass" type="password" v-model="password" ref="passInput">
            <!-- パスワードの表示・非表示の切り替え -->
            <div class="change_button" @click="changeTypePass">
              <img src="../assets/eye-off.svg" v-if="!showPass">
              <img src="../assets/eye-on.svg" v-if="showPass">
            </div>
          </div>
        </div>
      </div>
      <button class="submit_button"  v-bind:disabled="!isLoginSubmitButtonActive" @click="login">ログイン</button>
      <router-link to="/" class="check_link">パスワードをお忘れの方</router-link>
    </div>
  </section>

</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      showPass: true,
    };
  },
  computed: {

    // isPassValid() {
    //   // 空の時はバリデーションなし
    //   if (this.pass === '') return true;
    //   // 半角英数字をそれぞれ1種類以上含む8文字以上100文字以下の正規表現
    //   const checker = new RegExp(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i);
    //   //指定した組み合わせになっていなかった場合判定を返す。
    //   if (checker.test(this.pass)) return true;
    //   return false;
    // },
    // isEmailValid() {
    //   // 空の時はバリデーションなし
    //   if (this.email === '') return true;
    //   //メールアドレスとして判定される文字列と記号の組み合わせを定数化
    //   const reg = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
    //   //指定した組み合わせになっていなかった場合判定を返す。
    //   if (reg.test(this.email)) return true;
    //   return false;
    // },

    // 全てに入力されているかをバリデーション


    isLoginSubmitButtonActive() {
      if (this.email != '' && this.password != '') return true;
      return false;
    }

  },
  methods: {
    // パスワードの表示・非表示を変更するメソッド
    changeTypePass() {
      this.showPass = !this.showPass;
      if (this.$refs.passInput.type === 'password') {
        this.$refs.passInput.type = 'text';
        this.showPass = false;
      }
      else {
        this.$refs.passInput.type = 'password';
        this.showPass = true;
      }
    },
    // ログイン情報を送信 Axios
    login() {
      this.$store.dispatch('login',{
        email:this.email,
        password:this.password,
      });
      this.email = '';
      this.password = '';
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
  margin-top: 45px;

  .login_title {
    font-family: $main-font-family;
    color: $black;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.63px;
    margin-bottom: 19px;
    text-align: center;
  }

  .login_form_contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .login_set {
      margin: 13px 0px;

      .login_label_set {
        display: flex;
        flex-direction: column;
        align-items: baseline;

        .login_label {
          font-family: $main-font-family;
          color: $black;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.53px;
          margin-right: 5px;
          display: block;
          margin-bottom: 8px;
        }

        // パスワード入力コンテナ
        .pass_input_contnair {
          display: flex;
          align-items: center;
          margin-top: 8px;
          border-radius: 2px;
          border: solid 1px #E6E6E6;

          &:focus-within {
            border: solid 1px #999999;
          }

          // パスワードインプット
          .signup_input_pass {
            font-family: $main-font-family;
            font-size: 13px;
            font-weight: 400;
            color: $black;
            width: 300px;
            height: 40px;
            border: transparent;
            letter-spacing: 0.2px;
            padding-left: 5px;
            line-height: 1.5;
            transition: 0.2s;

            &::placeholder {
              font-size: 12px;
              letter-spacing: 0.4px;
              color: #999999;
            }

            &:focus {
              outline: transparent;
            }
          }

          // パスワード表示・非表示切り替え
          .change_button {
            width: 40px;
            height: 40px;
            background-color: transparent;
            position: relative;
            cursor: pointer;

            img {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translateY(-50%) translateX(-50%);
            }
          }
        }

        .login_require {
          font-family: $main-font-family;
          color: #FE0F33;
          font-size: 11px;
          font-weight: 400;
          margin-left: 3px;
          display: block;
        }
      }

      .login_input {
        font-family: $main-font-family;
        font-size: 13px;
        font-weight: 400;
        color: $black;
        width: 340px;
        height: 40px;
        margin-top: 8px;
        border-radius: 2px;
        border: solid 1px #E6E6E6;
        letter-spacing: 0.2px;
        padding-left: 5px;
        line-height: 1.5;
        transition: 0.2s;

        &:focus {
          border: solid 1px #999999;
          outline: transparent;
        }
      }
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
      width: 340px;
      height: 44px;
      margin: 44px 0px 25px 0px;

      &:valid {
        background-color: $main-color;

        &:hover {
          background-color: $main-hover;
        }
      }
    }

    .check_link {
      border: transparent;
      font-family: $main-font-family;
      font-size: 13.5px;
      text-decoration: none;
      font-weight: 500;
      color: #0F8AC8;
    }
  }
}
</style>