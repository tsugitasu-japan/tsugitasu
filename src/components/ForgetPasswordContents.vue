<template>
  <section v-show="!stepComplete">
    <h1 class="forget_title">パスワード再設定</h1>

    <transition name="fade-slide" mode="out-in">

      <div class="forget_form_contents" v-if="!firstStepDone" key="first">
        <div class="progress">
          <div class="progress_circle">
            <span class="progress_number">1</span>
          </div>
          <p class="progress_explain">登録メールアドレスを入力し、送信してください。<br>再設定認証コードをメールアドレスに送付します。</p>
        </div>
        <div class="forget_set">
          <div class="forget_label_set">
            <p class="forget_label">メールアドレス</p>
          </div>
          <input class="forget_input" type="email" v-model.lazy="email">
          <p class="input_request" v-show="!isEmailValid">メールアドレスの形式が正しくありません。</p>
        </div>
        <button class="submit_button" v-bind:disabled="!isforgetSubmitButtonActive" @click="sendCord">送信</button>
      </div>

      <div class="forget_form_contents" v-else key="second">
        <div class="progress">
          <div class="progress_circle">
            <span class="progress_number">2</span>
          </div>
          <p class="progress_explain">認証コードと新しく設定するパスワードを入力し、<br>パスワードの再設定を行います。</p>
        </div>
        <div class="forget_set">
          <div class="forget_label_set">
            <p class="forget_label">パスワード</p>
            <div class="pass_input_contnair">
              <input class="forget_input_pass" type="password" v-model.lazy="password" placeholder="8文字以上の半角英数字"
                ref="passInput">
              <!-- パスワードの表示・非表示の切り替え -->
              <div class="change_button" @click="changeTypePass">
                <img src="../assets/eye-off.svg" v-show="!showPass">
                <img src="../assets/eye-on.svg" v-show="showPass">
              </div>
            </div>
          </div>
          <p class="input_request" v-show="!isPassValid">パスワードは8文字以上かつ半角英数字をそれぞれ<br>1種類以上含む必要があります</p>
        </div>
        <div class="forget_set">
          <div class="forget_label_set">
            <p class="forget_label">認証コード</p>
          </div>
          <input class="forget_input" type="tel" v-model="confirmCode" maxlength="6" placeholder="6桁のコードを入力">
          <p class="input_request" v-show="codeError">認証コードが正しくありません</p>
        </div>
        <div class="forget_set_bottom">
          <router-link to="/forgetpassword" class="check_link">認証コードが送られてこない</router-link>
          <button class="submit_button" v-bind:disabled="!isSubmitChangeButtonActive"
            @click="setNewPassword">設定</button>
        </div>
      </div>
    </transition>
  </section>
  <div class="complete_guide" v-show="stepComplete">
    <img src="../assets/complete.svg">
    <h1 class="complete_title">再設定完了</h1>
    <P class="progress_explain">{{ sec }} 秒後に<span>
        <router-link to="/login" class="check_link">ログイン画面</router-link>
      </span>へリダイレクトします</P>
      <!-- <button @click="ridirectTimer(5000)">moov</button> -->
  </div>
</template>

<script>
import { Auth } from 'aws-amplify';
import router from '../router';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirmCode: '',
      showPass: true,
      codeError: false,
      forgetError: false,
      firstStepDone: false,
      stepComplete: false,
      sec: 5,
    };
  },
  computed: {
    // 全てに入力されているかをバリデーション
    isforgetSubmitButtonActive() {
      if (this.email != '' && this.isEmailValid) return true;
      return false;
    },
    isSubmitChangeButtonActive() {
      if (this.confirmCode.length === 6 && this.isPassValid && this.password != '') return true;
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
    isPassValid() {
      // 空の時はバリデーションなし
      if (this.password === '') return true;
      // 半角英数字をそれぞれ1種類以上含む8文字以上100文字以下の正規表現
      const checker = new RegExp(/^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i);
      //指定した組み合わせになっていなかった場合判定を返す。
      if (checker.test(this.password)) return true;
      return false;
    },
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
    // パスワード再設定後にログイン画面へリダイレクトするタイマー
    ridirectTimer(timer) {
      setInterval(() => {this.sec --},1000);
      setTimeout(() => {router.push("/login")}, timer);
    },
    // 入力メールアドレスに認証コードを送信
    sendCord() {
      Auth.forgotPassword(this.email)
        .then(data => {
          console.log(data);
          this.firstStepDone = true;
        })
        .catch(err => console.log(err));
    },
    // 新しいパスワードを送信
    setNewPassword() {
      Auth.forgotPasswordSubmit(this.email, this.confirmCode, this.password)
        .then(data => {
          console.log(data);
          this.stepComplete = true;
          this.ridirectTimer(5000);
        })
        .catch(err => {
          console.log(err);
          this.codeError = true;
          this.confirmCode = '';
        });
    }
  },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

$main-color: #13CCCE;
$main-hover: #26ABAD;
$black: #2B2B2B;
$main-font-family: 'Noto Sans JP', sans-serif;

// transitionSetting
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(18px);
}

.fade-slide-enter-active {
  transition: .4s ease-out;
}

.fade-slide-enter-to {
  opacity: 1;
}

.fade-slide-leave {
  opacity: 1;
}

.fade-slide-leave-active {
  transition: .6s ease-out;
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-28px);
}

section {
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .forget_title {
    font-family: $main-font-family;
    color: $black;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.63px;
    margin-bottom: 19px;
    text-align: center;
  }

  .forget_form_contents {
    margin-top: 38px;
    display: flex;
    flex-direction: column;

    .progress {
      display: flex;
      align-items: center;
      margin-bottom: 13px;

      .progress_circle {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background-color: $main-color;
        position: relative;
        margin-right: 15px;

        .progress_number {
          font-family: $main-font-family;
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 700;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);

        }
      }

      .progress_explain {
        font-family: $main-font-family;
        color: $black;
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 0.53px;
        line-height: 1.85;
      }
    }

    .forget_set {
      margin: 13px 0px;
      width: 368px;

      .forget_label_set {
        display: flex;
        flex-direction: column;
        align-items: baseline;

        .forget_label {
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
          .forget_input_pass {
            font-family: $main-font-family;
            font-size: 13px;
            font-weight: 400;
            color: $black;
            width: 326px;
            height: 41px;
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
      }

      .forget_input {
        font-family: $main-font-family;
        font-size: 13px;
        font-weight: 400;
        color: $black;
        width: 100%;
        height: 41px;
        margin-top: 8px;
        border-radius: 2px;
        border: solid 1px #E6E6E6;
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

    .forget_set_bottom {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 368px;
      justify-content: space-between;

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
        width: 82px;
        height: 44px;

        &:valid {
          background-color: $main-color;
          cursor: pointer;

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
      width: 100%;
      height: 44px;
      margin: 13px 0px 13px 0px;

      &:valid {
        background-color: $main-color;
        cursor: pointer;

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

.complete_guide {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);

  .complete_title {
    font-family: $main-font-family;
    color: $black;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 0.63px;
    margin: 15px 0px 11px 0px;
  }

  .progress_explain {
    font-family: $main-font-family;
    color: $black;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.53px;
    line-height: 1.85;
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
</style>