<template>
  <div class="profile_linkset">
    <div class="linkset_button">
      <router-link class="link_button" to="/profile/edit">
        <div class="link_button_text">授業</div>
      </router-link>
    </div>
    <div class="linkset_button">
      <router-link class="link_button" to="/profile/edit">
        <div class="link_button_text">グループ</div>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

// @import url("yakuhanjp/dist/scss/yakuhanjp_s");
$main-color: #13CCCE;
$main-hover: #26ABAD;
$black: #2B2B2B;
$off-color: #999999;
// $main-font-family:'メイリオ', 'Meiryo','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
$main-font-family: 'Noto Sans JP', sans-serif;

.profile_linkset {
  display: flex;

  .linkset_button {
    .link_button {
      text-decoration: none;
      display: block;
      // border-radius: 3px 3px 0px 0px;
      background-color: #FFFFFF;
      border: 1px solid #D8D8D8;
      transition: 0.2s ease;

      &:hover .link_button_text {
        color: $black;
      }

      .link_button_text {
        font-family: $main-font-family;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.4px;
        color: $off-color;
        padding: 6px 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.2s ease;
      }
    }
  }
}
</style>