<template>
<div>
    <LoginedHeader></LoginedHeader>

  <!-- プロフィール画像編集用モーダル -->
  <!-- <div class="profile_img_changer modal">
    <input type="file" accept="image/jpeg, image/png, image/heic, image/heic-sequence" @change="validate_uploads">
  </div> -->
</div>

</template>


<script>
import LoginedHeader from './LoginedHeader.vue'
import "cropperjs/dist/cropper.css";
// import axios from 'axios'
export default {
  components: {
    LoginedHeader,
  },
  data() {
    return {
      url: "",
    }
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
      }
    }
  },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
// @import "cropperjs/dist/cropper.min.css";
$main-color: #13CCCE;
$main-hover: #26ABAD;
$black: #2B2B2B;
$main-font-family: 'Noto Sans JP', sans-serif;

</style>
