<template>
  <!-- プロフィール画像編集用モーダル -->
  <div class="profile_img_changer modal">
    <div class="img_edit_contnair">
      <div class="crop_content_contnair">
        <img ref="cropImage" :src="url" class="crop_img"
          :style="{ width: `${naturalWidth}px`, height: `${naturalHeight}px` }">
        <div class="ratio_changer_contnair">
          <input id="zoom-slider" class="ratio_changer" type="range" min="0" max="100" v-model="zoomValue" />
        </div>
        <div class="profile_editer_decision_area">
          <div class="profile_editer_decision_button_area">
            <button class="decision_cancel_button decesion_cancel_button_text decesion_button_margin"
              @click="closeModal">キャンセル</button>
            <button class="decision_decide_button decesion_decide_button_text decesion_button_margin"
              @click="setProfileImg">設定</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Cropper from 'cropperjs';
import "cropperjs/dist/cropper.css";
export default {
  props: ['url'],
  data() {
    return {
      cropUrl: '',
      naturalWidth: 300,
      naturalHeight: 300,
      zoomValue: '0',
      // 画像ズーム用データ
      zoom: '',
      initialZoom: '',
    }
  },
  mounted() {
    this.cropper = new Cropper(this.$refs.cropImage, {
      aspectRatio: 1,
      viewMode: 3,
      cropBoxResizable: false,
      cropBoxMovable: false,
      dragMode: "move",
      guides: false,
      center: false,
      highlight: false,
      rotatable: false,
      toggleDragModeOnDblclick: false,
      restore: false,
      zoomOnWheel: false,
      // imgのHeightとWidthに合わせる
      minCropBoxHeight: 300,
      minCropBoxWidth: 300,
    });
  },
  watch: {
    zoomValue(newVal) {
      const cropBoxData = this.cropper.getImageData();
      // ★画像情報に基づいて最小ズーム倍率を格納(これがないと画像情報によって最小キャンバスデータの最小値で倍率に制限)
      this.initialZoom ||= cropBoxData.width / cropBoxData.naturalWidth;
      this.zoom = this.initialZoom * (1 + newVal / 100);
      const zoomer = this.initialZoom * (1 + newVal / 100);
      this.cropper.zoomTo(zoomer);
    },
  },
  methods: {
    // 親コンポーネントでモーダルが閉じ、URLを削除するイベント
    closeModal() {
      this.$emit("closeModal");
    },
    setProfileImg() {
      let croppedCanvas = this.cropper.getCroppedCanvas({ width: 500, height: 500, });
      // 元の画面にDataURLを返す。
      this.$emit("setProfileImage", croppedCanvas.toDataURL());
    },
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
// @import "cropperjs/dist/cropper.min.css";
$main-color: #13CCCE;
$main-hover: #26ABAD;
$black: #2B2B2B;
$main-font-family: 'Noto Sans JP', sans-serif;

.modal {
  z-index: 110;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  display: flex;
  justify-content: center;
  overflow: auto;

  .img_edit_contnair {
    display: flex;
    flex-direction: column;
    margin: 66px auto;

    .crop_content_contnair {
      width: 300px;
      height: 300px;

      .crop_img {
        display: block;
        max-width: 100%;
      }

      .cropper-view-box,
      .cropper-face {
        border-radius: 50%;
        cursor: grab;
        outline: initial;
      }

      .cropper-face:active {
        cursor: grabbing;
      }

      .ratio_changer_contnair {
        width: 100%;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFFFFF;

        .ratio_changer {
          width: 180px;
          height: 19px;
        }
      }

      .profile_editer_decision_area {
        width: 100%;
        height: 55px;
        background-color: #f7f9f9;
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
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.4px;
            color: #404040;
            padding: 8px 19px;
          }

          .decesion_decide_button_text {
            font-family: $main-font-family;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.4px;
            color: #FFFFFF;
            padding: 8px 19px;

          }

          .decesion_button_margin {
            margin: 0px 9px 0px 9px;
          }
        }
      }
    }
  }
}
</style>
