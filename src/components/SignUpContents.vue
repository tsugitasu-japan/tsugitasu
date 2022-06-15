<template>
<div class="content_layout">
<div class="signup_explain">
  <p class="explain_bold">アカウントを作成して<br>
  <span>授業作成</span>をワンストップで</p>
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
      <input
        class="signup_input"
        type="email"
        v-model.lazy="email"
        >
    <p class="input_request" v-if="!isEmailValid">メールアドレスの形式が正しくありません。</p>
    </div>

    <div class="signup_set">
      <div class="signup_label_set">
        <p class="signup_label">パスワード</p>
        <p class="signup_label_small">（8文字以上の半角英数記号）</p>
        <p class="signup_require">必須</p>
      </div>
      <input
        class="signup_input"
        type="password"
        v-model="pass"
        >
    </div>

    <div class="signup_set">
      <div class="signup_label_set">
        <p class="signup_label">パスワード</p>
        <p class="signup_label_small">（再入力）</p>
        <p class="signup_require">必須</p>
      </div>
      <input
        class="signup_input"
        type="password"
        @change="handleRepassChange"
        v-model.lazy="repass"
        >
            <p class="input_request" v-if="shouldShowPasswordValidationError">パスワードが一致しません</p>
    </div>

    <div class="signup_set">
      <div class="signup_label_set">
      <p class="signup_label">ユーザー名</p>
      <p class="signup_label_small">（ツギタスで表示される名前）</p>
      </div>
      <input
        class="signup_input"
        type="text"
        v-model="yourname"
        >
        <p class="input_request" v-if="!isNameValid">名前は20字以内で入力してください。</p>
    </div>
    <div class="checkbox">
      <!-- <input type="checkbox" id="policy" name="pribacy_check">
      <label for="policy" class="signup_check"><router-link to="/">利用規約</router-link>及び<router-link to="/">プライバシーポリシー</router-link>に同意する</label> -->
      <p class="signup_check"><router-link to="/" class="check_link">利用規約</router-link> 及び <router-link to="/" class="check_link">プライバシーポリシー</router-link> を必ずご確認ください</p>
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
    return{
      yourname:'',
      email:'',
      pass:'',
      repass:'',
      isRepassChanged:false
    };
  },
  computed:{
    isNameValid(){
      return this.yourname.length<20;
    },
    isEmailValid(){
      if (this.email==='') return true;
      //メールアドレスとして判定される文字列と記号の組み合わせを定数化
      const reg = new RegExp(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/);
      //指定した組み合わせになっていなかった場合判定を返す。
      if(reg.test(this.email)) return true;
      return false;
    },
    isPasswordValid(){
      return this.pass === this.repass;
    },
    shouldShowPasswordValidationError(){
      return this.isRepassChanged && !this.PasswordValid;
    },
    isSubmitButtonActive(){
      return this.isNameValid && this.isEmailValid && this.isCommentValid;
    }

  },
  methods:{
    handleRepassChange(){
      this.isRepassChanged=true;
    }
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

.content_layout{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
// 左部説明
.signup_explain{
  margin-right: 95px;
  .explain_bold{
    font-family: $main-font-family;
    color: $black;
    font-size: 44px;
    font-weight: 700;
    letter-spacing: 1.54px;
    line-height: 1.5;
    span{
      color: $main-color;
    }
  }
  .explain_small{
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
.signup_form{
  .signup_title{
    font-family: $main-font-family;
    color: $black;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.63px;
    margin-bottom: 15px;
  }
  .signup_form_contents{
    padding:29px 36px;
    border:solid 1px #E6E6E6;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .signup_set{
      margin:13px 0px;
      .signup_label_set{
        display:flex;
        align-items: baseline;
        margin-bottom: 8px;
          .signup_label{
            font-family: $main-font-family;
            color: $black;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.53px;
            margin-right: 5px;
            display: block;
          }
          .signup_label_small{
            font-family: $main-font-family;
            color:$black;
            font-size: 11px;
            font-weight: 700;
            margin-right: 3px;
            letter-spacing: 0.35px;
            display: block;
          }
          .signup_require{
            font-family: $main-font-family;
            color: #FE0F33;
            font-size: 11px;
            font-weight: 400;
            margin-left: 3px;
            display: block;
          }
      }
      .signup_input{
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
    .input_request{
      padding-top: 4px;
          font-family: $main-font-family;
          font-size: 12px;
          color: #FE0F33;
          font-weight: 400;
          margin-left: 3px;
      }
    }
    .checkbox{
      padding:10px 0px;
     .signup_check{
        font-family: $main-font-family;
        font-size: 12px;
        font-weight: 400;
        color: $black;
        letter-spacing: 0.7px;
        .check_link{
          text-decoration: none;
          font-weight: 700;
          color:#0F8AC8;
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
       height: 40px;
       margin-top: 12px;
     &:valid{
       background-color: $main-color;
        &:hover{
        background-color:$main-hover;
      }
     }
    }

  }
}
}

</style>