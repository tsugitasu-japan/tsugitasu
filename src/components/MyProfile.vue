<template>
  <div class="profile_layout">
    <div class="self_introduce_contnair">
      <div class="self_introduce_contnair_left">
        <div class="img_area">
          <!-- 本当はユーザーのアイコンを設置 -->
          <div class="user_icon" :style="{ 'background-image': 'url(' + iconUrl + ')' }"></div>
        </div>
        <div class="text_area">
          <p class="profile_username_style username_padding">{{ username }}</p>
          <p class="profile_selfintro_style profile_selfintro_contnair">{{ selfIntroduction }}</p>
          <div class="follow_info_area">
            <router-link to="/profile/following" class="follow_info_style follow_info_margin_r"><span
                class="follow_num_style">{{ followNum }}</span> フォロー</router-link>
            <router-link to="/profile/followers" class="follow_info_style"><span class="follow_num_style">{{ followerNum
            }}</span> フォロワー</router-link>
          </div>
        </div>
      </div>
      <div class="button_area">
        <div class="edit_button">
          <router-link class="link_edit_button" to="/profile/edit">
            <div class="edit_button_text">設定</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconUrl: '',
      username: '',
      selfIntroduction: '',
      followNum: '3',
      followerNum: '3',
    }
  },
  methods: {
    getUserProfile() {
      this.username = this.$store.state.UserProfileInfo.username;
      this.selfIntroduction = this.$store.state.UserProfileInfo.selfIntroduction;
      this.iconUrl = this.$store.state.UserProfileInfo.iconUrl;
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

.profile_layout {
  margin-top: 65px;
  display: flex;
  justify-content: center;

  .self_introduce_contnair {
    width: 740px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 42px;
    border-bottom: 1px solid #E6E6E6;

    .self_introduce_contnair_left {
      display: flex;

      .img_area {
        margin-right: 32px;

        .user_icon {
          width: 104px;
          height: 104px;
          border-radius: 57px;
          background-size: cover;
        }
      }

      .text_area {
        .profile_username_style {
          font-family: $main-font-family;
          font-size: 21px;
          font-weight: 700;
          letter-spacing: 0.9px;
          color: $black;
        }

        .username_padding {
          padding-bottom: 13px;
        }

        .profile_selfintro_style {
          font-family: $main-font-family;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: 0.4px;
          line-height: 1.9;
          color: $black;
        }

        .profile_selfintro_contnair {
          width: 500px;
          white-space: pre-wrap;
        }

        .follow_info_area {
          display: flex;
          padding-top: 14px;

          .follow_info_style {
            font-family: $main-font-family;
            font-size: 14px;
            font-weight: 400;
            letter-spacing: 0.4px;
            color: #7F7F7F;
            text-decoration: none;

            .follow_num_style {
              font-family: $main-font-family;
              font-size: 15px;
              font-weight: 700;
              color: $black;
            }
          }

          .follow_info_margin_r {
            margin-right: 12px;
          }
        }
      }

    }

    .button_area {
      .edit_button {
        .link_edit_button {
          text-decoration: none;
          display: block;
          border-radius: 3px;
          background-color: #FFFFFF;
          border: 1px solid #D8D8D8;
          transition: 0.2s ease;

          &:hover {
            border: 1px solid #404040;
          }

          .edit_button_text {
            font-family: $main-font-family;
            font-size: 12.5px;
            font-weight: 700;
            letter-spacing: 0.4px;
            color: #404040;
            padding: 9px 26px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>