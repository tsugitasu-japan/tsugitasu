<template>
  <div class="create_class_contnair contnair_layout">
    <h1 class="create_title">授業を新規作成</h1>

    <section class="icon_setting_area">
      <div class="is_detail_open_contnair" @click="IconSettingOpen">
        <p class="detail_title">アイコンの設定</p>
        <img src="../assets/arrow-detail-open.svg" class="open_icon" :class="{ relote90: !isIconSettingOpen }">
      </div>
      <!-- セッティング詳細 -->
      <div class="icon_setting_inner" v-show="isIconSettingOpen">
        <div class="icon_inner_layout">
          <div class="icon_contnair" :style="bgSelected">
            <img :src="iconSrc" class="icon_layout icon_size">
          </div>
          <!-- 背景色設定部分 -->
          <div class="bgcolor_select_area bgcolor_select_area_margin">
            <div class="bgcolor_select_contnair">
              <div class="bg_allshow" @click="isOpenBgSelecter">
                <p class="bg_selecter_p">カラー</p>
                <div class="img_contnair">
                  <img src="../assets/drop_triangle.svg" class="bottom_space" :class="{ relote90: !isShowBgSelecter }">
                </div>
              </div>
              <!-- 可視変更部分 -->
              <div class="bg_selecter_changeshow bg_selecter_grid_layout" v-show="isShowBgSelecter">
                <div class="bg_color_select_button yellow" @click="setBgYellow">

                </div>
                <div class="bg_color_select_button red" @click="setBgRed">

                </div>
                <div class="bg_color_select_button peach" @click="setBgPeach">

                </div>
                <div class="bg_color_select_button orange" @click="setBgOrage">

                </div>
                <div class="bg_color_select_button rightgreen" @click="setBgRightgreen">

                </div>
                <div class="bg_color_select_button green" @click="setBgGreen">

                </div>
                <div class="bg_color_select_button rightblue" @click="setBgRightblue">

                </div>
                <div class="bg_color_select_button blue" @click="setBgBlue">    

                </div>
                <div class="bg_color_select_button cepia" @click="setBgCepia">

                </div>
                <div class="bg_color_select_button purple" @click="setBgPurple">

                </div>
                <div class="bg_color_select_button rightpink" @click="setBgRightPink">

                </div>
                <div class="bg_color_select_button pink" @click="setBgPink">

                </div>
                <div class="bg_color_select_button blood" @click="setBgBlood">

                </div>
                <div class="bg_color_select_button grey" @click="setBgGrey">

                </div>
                <div class="bg_color_select_button rightblack" @click="setBgRightblack">

                </div>

              </div>
            </div>
            <div class="selected_color" :style="bgSelected"></div>
          </div>
          <!-- マーク設定部分 -->
          <div class="mark_select_area">
            <div class="mark_select_contnair">
              <div class="mark_allshow" @click="isOpenBgSelecter">
                <p class="mark_selecter_p">マーク</p>
                <div class="img_contnair">
                  <img src="../assets/drop_triangle.svg" class="bottom_space" :class="{ relote90: !isShowBgSelecter }">
                </div>
              </div>
              <div class="profile_changeshow" v-show="isShowBgSelecter">
              </div>
            </div>
            <div class="selected_color"></div>
          </div>
        </div>

      </div>

    </section>

    <section class="classname_setting_area">
      <div class="is_detail_open_contnair">
        <p class="detail_title">授業名</p>
        <img src="../assets/arrow-detail-open.svg" class="open_icon" :class="{ relote90: !isClassNameSettingOpen }">
      </div>
    </section>
    <!-- セッティング詳細 -->

  </div>
</template>

<script>

export default {
  data() {
    return {
      isIconSettingOpen: true,
      isShowBgSelecter: false,
      bgColor:'#F8DF72',
      iconSrc: require('@/assets/class-icon-on/meeting.svg'),
      bgSelected: {backgroundColor:'#F8DF72'}
    }
  },
  methods: {
    IconSettingOpen() {
      this.isIconSettingOpen = !this.isIconSettingOpen;
    },
    isOpenBgSelecter() {
      this.isShowBgSelecter = !this.isShowBgSelecter;
    },
    // アイコン背景色変更メソッド
    setBgYellow(){
      this.bgSelected = {backgroundColor:'#F8DF72'};
    },
    setBgRed(){
      this.bgSelected = {backgroundColor:'#F06A6A'};
    },
    setBgPeach(){
      this.bgSelected = {backgroundColor:'#EC8D71'};
    },
    setBgOrage(){
      this.bgSelected = {backgroundColor:'#F1BD6C'};
    },
    setBgRightgreen(){
      this.bgSelected = {backgroundColor:'#70CA70'};
    },
    setBgGreen(){
      this.bgSelected = {backgroundColor:'#309E30'};
    },
    setBgRightblue(){
      this.bgSelected = {backgroundColor:'#9EE7E3'};
    },
    setBgBlue(){
      this.bgSelected = {backgroundColor:'#4573D2'};
    },
    setBgCepia(){
      this.bgSelected = {backgroundColor:'#13CCCE'};
    },
    setBgPurple(){
      this.bgSelected = {backgroundColor:'#B36BD4'};
    },
    setBgRightPink(){
      this.bgSelected = {backgroundColor:'#F9AAEF'};
    },
    setBgPink(){
      this.bgSelected = {backgroundColor:'#F26FB2'};
    },
    setBgBlood(){
      this.bgSelected = {backgroundColor:'#AA5D5D'};
    },
    setBgGrey(){
      this.bgSelected = {backgroundColor:'#C7C4C4'};
    },
    setBgRightblack(){
      this.bgSelected = {backgroundColor:'#6D6E6F'};
    },
  }

}

</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

// @import url("yakuhanjp/dist/scss/yakuhanjp_s");
$main-color: #13CCCE;
$main-hover: #26ABAD;
$black: #2B2B2B;
$off-color: #999999;

// クラスアイコンアセット
$yellow: #F8DF72;
$red:#F06A6A;
$peach:#EC8D71;
$orange:#F1BD6C;
$rightgreen:#70CA70;
$green:#309E30;
$blue:#4573D2;
$rightblue:#9EE7E3;
$cepia:#13CCCE;
$purple:#B36BD4;
$rightpink:#F9AAEF;
$pink:#F26FB2;
$blood:#AA5D5D;
$grey:#C7C4C4;
$rightblack:#6D6E6F;
// $main-font-family:'メイリオ', 'Meiryo','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
$main-font-family: 'Noto Sans JP', sans-serif;


.create_class_contnair {
  display: flex;
  flex-direction: column;
  align-items: center;

  &.contnair_layout {
    padding-top: 64px;
  }

  .create_title {
    font-family: $main-font-family;
    font-size: 30px;
    font-weight: 400;
    color: $black;
    letter-spacing: 0.45px;
    margin-bottom: 53px;
  }

  // セッティング詳細設定
  .icon_setting_area,
  .classname_setting_area {
    width: 570px;
    align-items: center;
    margin-bottom: 50px;

    .is_detail_open_contnair {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      padding: 12px 0 13px 0;
      border-bottom: 1px solid #E6E6E6;

      .detail_title {
        font-family: $main-font-family;
        font-size: 20px;
        font-weight: 400;
        letter-spacing: 0.32px;
        color: $black;
      }

      .open_icon {
        vertical-align: bottom;
        padding-top: 1px;
        transition: .2s;

        &.relote90 {
          transform: rotate(-90deg);
        }
      }
    }

    // 開閉エリア（アイコン作成）
    .icon_setting_inner {
      margin-top: 40px;

      .icon_inner_layout {
        display: flex;
        flex-direction: row;

        .icon_contnair {
          width: 98px;
          height: 98px;
          // background-color: $yellow;
          border-radius: 22.4%;
          position: relative;

          .icon_layout {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
          }

          .icon_size {
            width: 63.2%;
          }
        }

        .bgcolor_select_area,
        .mark_select_area {
          width: 150px;
          height: 98px;
          position: relative;

          &.bgcolor_select_area_margin {
            margin: 0px 44px 0px 44px;
          }

          .bgcolor_select_contnair,
          .mark_select_contnair {
            width: 153px;
            // padding: 6px 10px 6px 10px;
            border: 1px solid #E6E6E6;
            background-color: #FFFFFF;
            border-radius: 3px;
            position: absolute;
            top: 1px;
            left: 0;
            z-index: 1;

            .bg_allshow,
            .mark_allshow {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 6px 10px 6px 10px;
              cursor: pointer;

              .bg_selecter_p,
              .mark_selecter_p {
                font-family: $main-font-family;
                font-size: 13px;
                font-weight: 400;
                letter-spacing: 0.21px;
                color: $black;
              }

              .img_contnair {
                position: relative;
                height: 19.5px;
                width: 10px;
                display: flex;
                align-items: center;
                justify-content: center;

                .bottom_space {
                  vertical-align: bottom;
                  transition: .2s;
                }
              }

              .relote90 {
                transform: rotate(-90deg);
              }
            }

            // 可視変更部分
            .bg_selecter_changeshow {
              padding: 8px 13px 16px 13px;
              &.bg_selecter_grid_layout{
                display: grid;
                grid-template-columns: auto auto auto;
                justify-content: space-between;
                grid-row-gap: 15px;
              }
              .bg_color_select_button {
                width: 30px;
                height: 30px;
                border-radius: 3px;
                cursor: pointer;

                &.yellow {
                  background-color: $yellow;
                }
                &.red {
                  background-color: $red;
                }
                &.peach{
                  background-color: $peach;
                }
                &.orange{
                  background-color: $orange;
                }
                &.rightgreen{
                  background-color: $rightgreen;
                }
                &.green{
                  background-color: $green;
                }
                &.rightblue{
                  background-color: $rightblue;
                }
                &.blue{
                  background-color: $blue;
                }
                &.cepia{
                  background-color: $cepia;
                }
                &.purple{
                  background-color: $purple;
                }
                &.rightpink{
                  background-color: $rightpink;
                }
                &.pink{
                  background-color: $pink;
                }
                &.blood{
                  background-color: $blood;
                }
                &.grey{
                  background-color: $grey;
                }
                &.rightblack{
                  background-color: $rightblack;
                }
              }
            }
          }

          .selected_color {
            width: 44px;
            height: 44px;
            border-radius: 1px;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 0;
          }
        }
      }
    }
  }
}
</style>