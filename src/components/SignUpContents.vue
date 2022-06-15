<template>
  <div class="content_layout">
    <div class="signup_explain">
      <p class="explain_bold">アカウントを作成して<br>
        <span>授業作成</span>をワンストップで
      </p>
      <p class="explain_small">
        アカウントを作成することで、授業管理や参照など授業作成に役立つツギタスの<br>
        様々な機能をもっとご利用いただけます。
        <br>くわしくは<router-link to="/">こちら</router-link>
      </p>
    </div>

    <div class="signup_form">
      <p class="signup_title">会員登録・アカウント作成</p>
      <div class="signup_form_contents">

        <div class="signup_set">
          <div class="signup_label_set">
            <p class="signup_label">メールアドレス</p>
            <p class="signup_require">必須</p>
          </div>
          <input class="signup_input_email" type="email" v-model.lazy="email">
          <p class="input_request" v-if="!isEmailValid">メールアドレスの形式が正しくありません。</p>
        </div>

        <div class="signup_set">
          <div class="signup_label_set">
            <p class="signup_label">パスワード</p>
            <p class="signup_require">必須</p>
          </div>
          <div class="pass_input_contnair">
            <input 
              class="signup_input_pass" 
              type="password" v-model.lazy="pass" 
              placeholder="8文字以上の半角英数字"
              ref="passInput"
            >
            <!-- パスワードの表示・非表示の切り替え -->
            <div class="change_button" @click="changeTypePass">
              <img src="../assets/eye-off.svg"  v-if="!showPass">
              <img src="../assets/eye-on.svg"  v-if="showPass">
            </div>
          </div>
          <p class="input_request" v-if="!isPassValid">パスワードは8文字以上かつ半角英数字をそれぞれ<br>1種類以上含む必要があります</p>
        </div>

        <div class="signup_set">
          <div class="signup_label_set">
            <p class="signup_label">ユーザー名</p>
            <p class="signup_label_small">（ツギタスで表示される名前）</p>
            <p class="signup_require">必須</p>
          </div>
          <input class="signup_input_name" type="text" v-model="yourname">
          <p class="input_request" v-if="!isNameValid">名前は20字以内で入力してください。</p>
        </div>
        <div class="check_area">
          <p class="signup_check">
            <router-link to="/" class="check_link">利用規約</router-link> 及び <router-link to="/" class="check_link">
              プライバシーポリシー</router-link> を必ずご確認ください
          </p>
        </div>
        <button class="submit_button" v-bind:disabled="!isSubmitButtonActive">規約に同意して登録</button>

        <div>

        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  data() {
    return {
      yourname: '',
      email: '',
      pass: '',
      showPass:true,
    };
  },
  computed: {
    isNameValid() {
      return this.yourname.length < 20;
    },
    isPassValid(){
      // 空の時はバリデーションなし
      if (this.pass === '') return true;
      // 半角英数字をそれぞれ1種類以上含む8文字以上100文字以下の正規表現
      const checker = new RegExp(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i);
      //指定した組み合わせになっていなかった場合判定を返す。
      if (checker.test(this.pass)) return true;
      return false;
    },
    isEmailValid() {
      // 空の時はバリデーションなし
      if (this.email === '') return true;
      //メールアドレスとして判定される文字列と記号の組み合わせを定数化
      const reg = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
      //指定した組み合わせになっていなかった場合判定を返す。
      if (reg.test(this.email)) return true;
      return false;
    },
    // 全てに入力されているかをバリデーション
    fillValid(){
      if(this.email != '' && this.pass != '' && this.yourname != '') return true;
      return false;
    },

    isSubmitButtonActive() {
      return this.isNameValid && this.isEmailValid && this.isPassValid && this.fillValid;
    }

  },
  methods: {
    handleRepassChange() {
      this.isRepassChanged = true;
    },

    changeTypePass() {
      this.showPass = !this.showPass;
     if(this.$refs.passInput.type === 'password'){
      this.$refs.passInput.type = 'text';
      this.showPass = false;
     }
     else{
      this.$refs.passInput.type = 'password';
      this.showPass = true;
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

.content_layout {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  // 左部説明
  .signup_explain {
    margin-right: 95px;

    .explain_bold {
      font-family: $main-font-family;
      color: $black;
      font-size: 44px;
      font-weight: 700;
      letter-spacing: 1.54px;
      line-height: 1.5;

      span {
        color: $main-color;
      }
    }

    .explain_small {
      font-family: $main-font-family;
      color: $black;
      font-size: 14.5px;
      font-weight: 400;
      letter-spacing: 0.6px;
      line-height: 1.7;
      margin-top: 19px;
      margin-bottom: 50px;
    }
  }

  // 右部
  .signup_form {
    .signup_title {
      font-family: $main-font-family;
      color: $black;
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.63px;
      margin-bottom: 15px;
    }

    .signup_form_contents {
      padding: 29px 36px;
      border: solid 1px #E6E6E6;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .signup_set {
        margin: 13px 0px;

        .signup_label_set {
          display: flex;
          align-items: baseline;
          margin-bottom: 8px;

          .signup_label {
            font-family: $main-font-family;
            color: $black;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.53px;
            margin-right: 5px;
            display: block;
          }

          .signup_label_small {
            font-family: $main-font-family;
            color: $black;
            font-size: 11px;
            font-weight: 700;
            margin-right: 3px;
            letter-spacing: 0.35px;
            display: block;
          }

          .signup_require {
            font-family: $main-font-family;
            color: #FE0F33;
            font-size: 11px;
            font-weight: 400;
            margin-left: 3px;
            display: block;
          }
        }

        // メールアドレスインプット
        .signup_input_email {
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

        // パスワード入力コンテナ
        .pass_input_contnair{
          display: flex;
          align-items: center;
          margin-top: 8px;
          border-radius: 2px;
          border: solid 1px #E6E6E6;
          &:focus-within{
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
          border:transparent;
          letter-spacing: 0.2px;
          padding-left: 5px;
          line-height: 1.5;
          transition: 0.2s;
          &::placeholder{
            font-size: 12px;
            letter-spacing: 0.4px;
            color:#999999;
          }
          &:focus {
            outline: transparent;
          }
        }
        // パスワード表示・非表示切り替え
        .change_button{
          width:40px;
          height:40px;
          background-color:transparent;
          position: relative;
          cursor: pointer;
          img{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateY(-50%) translateX(-50%);
          }
        }
        }



        // 名前インプット
        .signup_input_name {
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
          &::placeholder{
            font-size: 12px;
            color:#999999;
          }

          &:focus {
            border: solid 1px #999999;
            outline: transparent;
          }
        }

        .input_request {
          padding-top: 4px;
          font-family: $main-font-family;
          font-size: 12px;
          color: #FE0F33;
          font-weight: 400;
          margin-left: 3px;
        }
      }

      .check_area {
        padding: 10px 0px;

        .signup_check {
          font-family: $main-font-family;
          font-size: 12px;
          font-weight: 400;
          color: $black;
          letter-spacing: 0.7px;

          .check_link {
            text-decoration: none;
            font-weight: 700;
            color: #0F8AC8;
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
        height: 40px;
        margin-top: 12px;

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