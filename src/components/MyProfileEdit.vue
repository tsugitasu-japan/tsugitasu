<template>

  <div class="profile_editer_layout">
    <div class="profile_editer_contnair">
      <div class="profile_editer_contnair_left">
        <div class="icon_change_area">
          <div class="icon_area">

            <div class="user_icon" :style="{ 'background-image': 'url(' + iconUrl + ')' }"></div>
            <label class="profile_icon_change">
              <div class="profile_icon_change_circle profile_icon_change_position"></div>
              <img class="icon_change_icon" src="../assets/emoji-icon.svg">
              <input type="file" accept="image/jpeg, image/png, image/heic, image/heic-sequence"
                @change="validate_uploads" class="visually-hidden">
            </label>
          </div>
          <label class="icon_change_label_style">画像を変更
            <input type="file" accept="image/jpeg, image/png, image/heic, image/heic-sequence"
              @change="validate_uploads" class="visually-hidden">
          </label>
        </div>
      </div>
      <div class="profile_editer_contnair_right">
        <div class="profile_editer_input_area">
          <p class="change_area_label">ユーザー名</p>
          <input type="text" v-model="username" class="profile_editer_input" placeholder="ユーザー名（20文字以内）"
            :class="{ input_error: isInputEmpty || isInputLength20 }">
          <p class="error_message" v-show="isInputEmpty">ユーザー名を入力してください</p>
          <p class="error_message" v-show="isInputLength20">ユーザ名は20文字以内で入力してください</p>
        </div>
        <div class="profile_editer_input_area">
          <p class="change_area_label">自己紹介</p>

          <textarea type="text" class="profile_editer_textarea" v-model.trim="selfIntroduction"
            placeholder="自己紹介を書きましょう（160文字以内）" :class="{ textarea_error: isTextareaLength160 }" ref="selfIntroTextArea"
            @input="textareaResize" rows="7" :style="resizeHeight"></textarea>

          <div class="count_display_area">
            <p class="count_message" v-show="!isTextareaEmpty && !isTextareaLength160">あと {{
                HowManyCouldInputSelfIntroduction
            }} 文字入力できます</p>
            <p class="error_message" v-show="isTextareaLength160">{{ HowManyOverSelfIntroduction }} 文字オーバーしています</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="profile_editer_decision_area">
    <div class="profile_editer_decision_button_area">
      <button class="decision_cancel_button decesion_cancel_button_text decesion_button_margin"
        @click="cancelEdit">キャンセル</button>
      <button class="decision_decide_button decesion_decide_button_text decesion_button_margin"
        v-bind:disabled="isSubmitButtonActive" @click="updateProfile">保存</button>
    </div>
  </div>
  <CropImage v-if="modalOn === true" @closeModal="closeModal" @setProfileImage="setProfileImage" :url="url"></CropImage>
</template>

<script>
import router from '../router';
import CropImage from './CropImage.vue';
export default {
  components:{
    CropImage
  },
  data() {
    return {
      iconUrl: '',
      username: '',
      selfIntroduction: '',
      textAreaHeight: '',
      modalOn:false,
    }
  },
  computed: {
    // バリデーション
    isInputEmpty() {
      if (this.username === '') return true;
      return false;
    },
    isInputLength20() {
      if (this.username.length > 20) return true;
      return false;
    },
    isTextareaEmpty() {
      if (this.selfIntroduction === '') return true;
      return false;
    },
    isTextareaLength160() {
      if (this.selfIntroduction.length > 160) return true;
      return false;
    },
    HowManyCouldInputSelfIntroduction() {
      return 160 - this.selfIntroduction.length
    },
    HowManyOverSelfIntroduction() {
      return this.selfIntroduction.length - 160;
    },
    isSubmitButtonActive() {
      if (this.isInputLength20 || this.isInputEmpty) return true;
      return false;
    },
    // テキストエリア高さ情報を返す
    resizeHeight() {
      return {
        "height": this.textAreaHeight
      }
    },
  },
  methods: {
    // アップロードファイルのバリデーション
    validate_uploads: function (uploadfile) {
      let file = uploadfile.target.files[0];
      let size = file.size;
      let type = file.type;
      let errors = '';

      //上限サイズは3MB
      if (size > 3000000) {
        errors += 'ファイルの上限サイズ3MBを超えています\n'
      }

      //拡張子は .jpg .heic .png . pdf のみ許可
      if (type != 'image/jpeg' && type != 'image/heic' && type != 'image/png' && type != 'image/heic-sequence') {
        errors += '.jpg、.png、.heic、.heic-sequence が拡張子のいずれかのファイルのみが選択できます\n'
      }

      if (errors) {
        //errorsが存在する場合は内容をalert
        alert(errors)
        //valueを空にしてリセットする
        uploadfile.currentTarget.value = ''
      }
      else {
        this.url = URL.createObjectURL(file)
        this.modalOn = true;
        uploadfile.currentTarget.value = ''
      }
    },
    // テキストエリアサイズ可変
    textareaResize() {
      this.textAreaHeight = "auto";
      this.$nextTick(() => {
        this.textAreaHeight = this.$refs.selfIntroTextArea.scrollHeight + 2 + 'px';
      })
    },
    // プロフィール情報の送信
    updateProfile() {
      this.$store.dispatch('updateProfile', {
        selfIntroduction: this.selfIntroduction,
        username: this.username,
        iconUrl: this.iconUrl,
      });
    },
    // キャンセル
    cancelEdit() {
      router.push('/profile')
    },
    // ユーザー情報をVuexから取得
    getUserProfile() {
      this.username = this.$store.state.UserProfileInfo.username;
      this.selfIntroduction = this.$store.state.UserProfileInfo.selfIntroduction;
      this.iconUrl = this.$store.state.UserProfileInfo.iconUrl;
    },
    // $emitで飛んできたイベント
    // モーダルを閉じる
    closeModal(){
      this.modalOn = false;
    },
    setProfileImage(imgUrl){
      this.iconUrl = imgUrl;
      this.modalOn = false;
    }
  },
  created() {
    this.getUserProfile()
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

.profile_editer_layout {
  margin-top: 65px;
  display: flex;
  justify-content: center;

  .profile_editer_contnair {
    width: 740px;
    display: flex;
    justify-content: space-between;


    .profile_editer_contnair_left {

      .icon_change_area {
        display: flex;
        flex-direction: column;
        align-items: center;

        .icon_area {
          position: relative;
          margin-bottom: 5px;

          .user_icon {
            width: 104px;
            height: 104px;
            border-radius: 50%;
            background-image: url("../assets/profile_bg.svg");
            background-size: cover;
            position: relative;
          }

          .profile_icon_change {
            cursor: pointer;

            .profile_icon_change_circle {
              width: 104px;
              height: 104px;
              border-radius: 50%;
              background-color: #000000;
              opacity: 0.39;
            }

            .profile_icon_change_position {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
            }

            .icon_change_icon {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              margin: auto;
              opacity: 1;
            }

            .visually-hidden {
              position: absolute;
              width: 1px;
              height: 1px;
              overflow: hidden;
              clip: rect(1px, 1px, 1px, 1px);
            }
          }
        }

        .icon_change_label_style {
          font-family: $main-font-family;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.4px;
          color: #7F7F7F;
          cursor: pointer;
          transition: .15s;

          &:hover {
            color: $black;
          }

          .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip: rect(1px, 1px, 1px, 1px);
          }
        }
      }
    }
  }

  .profile_editer_contnair_right {
    .profile_editer_input_area {
      margin-bottom: 30px;
      position: relative;

      .change_area_label {
        font-family: $main-font-family;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0.4px;
        color: $black;
        margin-bottom: 11px;
      }

      .profile_editer_input {
        border: solid 1px #E6E6E6;
        font-family: $main-font-family;
        font-size: 14px;
        font-weight: 400;
        color: $black;
        width: 592px;
        height: 42px;
        border-radius: 3px;
        letter-spacing: 1px;
        padding-left: 10px;
        vertical-align: top;
        line-height: 1.5;

        &::placeholder {
          font-family: $main-font-family;
          color: #bcbcbc;
          font-weight: 300;
        }

        &:hover {
          border: solid 1px #999999;
        }

        &:focus {
          background: transparent;
          outline: transparent;
          border: solid 1px #999999;
        }

        &.input_error {
          border: 1px solid #FE0F33;
          background-color: #FFFDFD;
        }
      }

      .profile_editer_textarea {
        border: solid 1px #E6E6E6;
        font-family: $main-font-family;
        font-size: 14px;
        font-weight: 400;
        line-height: 2;
        color: $black;
        width: 592px;
        border-radius: 3px;
        letter-spacing: 1px;
        padding: 10px;
        vertical-align: top;

        &::placeholder {
          font-family: $main-font-family;
          color: #bcbcbc;
          font-weight: 300;
        }

        &:hover {
          border: solid 1px #999999;
        }

        &:focus {
          background: transparent;
          outline: transparent;
          border: solid 1px #999999;
        }

        &.textarea_error {
          border: 1px solid #FE0F33;
          background-color: #FFFDFD;
        }
      }

      .count_display_area {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
      }

      .error_message {
        font-family: $main-font-family;
        font-size: 12px;
        font-weight: 400;
        color: #FE0F33;
        letter-spacing: 0.8px;
        margin-top: 5px;
      }

      .count_message {
        font-family: $main-font-family;
        font-size: 12px;
        font-weight: 400;
        color: $black;
        letter-spacing: 0.8px;
        margin-top: 5px;
      }
    }
  }
}

.profile_editer_decision_area {
  width: 100vw;
  background-color: #FFFFFF;
  border-top: 1px solid #ECECEC;
  position: fixed;
  bottom: 0;
  padding: 11px 0 11px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .profile_editer_decision_button_area {
    display: flex;

    .decision_cancel_button {
      border-radius: 3px;
      background-color: #FFFFFF;
      border: 1px solid #D8D8D8;
      transition: 0.2s ease;

      &:hover {
        border: 1px solid #404040;
      }
    }

    .decision_decide_button {
      border-radius: 3px;
      background-color: #ebebeb;
      transition: 0.2s ease;
      border: none;

      &:valid {
        background-color: $main-color;

        &:hover {
          background-color: $main-hover;
        }
      }
    }

    .decesion_cancel_button_text {
      font-family: $main-font-family;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.4px;
      color: #404040;
      padding: 9px 21px;
    }

    .decesion_decide_button_text {
      font-family: $main-font-family;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.4px;
      color: #FFFFFF;
      padding: 9px 21px;

    }

    .decesion_button_margin {
      margin: 0px 9px 0px 9px;
    }
  }
}
</style>