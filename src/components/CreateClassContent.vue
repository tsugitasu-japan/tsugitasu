<template>
  <div class="create_class_contnair contnair_layout">
    <h1 class="create_title">授業を新規作成</h1>

    <section class="icon_area setting_area">
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
              <!-- 背景色アコーディオンパネル内部 -->
              <div class="bg_selecter_changeshow bg_selecter_grid_layout" v-show="isShowBgSelecter">
                <div class="bg_color_select_button" :class="colorName" @click="selectBgColor(colorName)"
                  v-for="[colorName] in Array.from(colors)" :key="colorName">
                  <img src="../assets/checked.svg" class="check_icon icon_on" v-show="selectedBgColor === colorName">
                </div>

              </div>
            </div>
            <div class="selected_color" :style="bgSelected"></div>
          </div>
          <!-- マーク設定部分 -->
          <div class="mark_select_area">
            <div class="mark_select_contnair">
              <div class="mark_allshow" @click="isOpenMarkSelecter">
                <p class="mark_selecter_p">マーク</p>
                <div class="img_contnair">
                  <img src="../assets/drop_triangle.svg" class="bottom_space"
                    :class="{ relote90: !isShowMarkSelecter }">
                </div>
              </div>
              <!-- アイコン設定 アコーディオンパネル内部 -->
              <div class="mark_selecter_changeshow mark_selecter_grid_layout" v-show="isShowMarkSelecter">
                <div class="icon_select_button icon_select_button_contnair" @click="setMeetingIcon">
                  <img src="../assets/icon-off-fill/meeting-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setJapaneseIcon">
                  <img src="../assets/icon-off-fill/japanese-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setEnglishIcon">
                  <img src="../assets/icon-off-fill/english-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setMathIcon">
                  <img src="../assets/icon-off-fill/math-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setBiologyIcon">
                  <img src="../assets/icon-off-fill/biology-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setChemistryIcon">
                  <img src="../assets/icon-off-fill/chemistry-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setPhysicsIcon">
                  <img src="../assets/icon-off-fill/physics-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setGeographyIcon">
                  <img src="../assets/icon-off-fill/geography-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setHistoryIcon">
                  <img src="../assets/icon-off-fill/history-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setMachineIcon">
                  <img src="../assets/icon-off-fill/machine-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setMusicIcon">
                  <img src="../assets/icon-off-fill/music-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setArtIcon">
                  <img src="../assets/icon-off-fill/art-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setScissorsIcon">
                  <img src="../assets/icon-off-fill/scissors-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setSoccerIcon">
                  <img src="../assets/icon-off-fill/soccer-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setHeartIcon">
                  <img src="../assets/icon-off-fill/heart-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setPcIcon">
                  <img src="../assets/icon-off-fill/pc-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setHouseIcon">
                  <img src="../assets/icon-off-fill/house-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setSmileIcon">
                  <img src="../assets/icon-off-fill/smile-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setPersonIcon">
                  <img src="../assets/icon-off-fill/person-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setLightIcon">
                  <img src="../assets/icon-off-fill/light-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setAwardIcon">
                  <img src="../assets/icon-off-fill/award-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setMasterIcon">
                  <img src="../assets/icon-off-fill/master-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setSerchIcon">
                  <img src="../assets/icon-off-fill/serch-off.svg">
                </div>
                <div class="icon_select_button icon_select_button_contnair" @click="setTestIcon">
                  <img src="../assets/icon-off-fill/test-off.svg">
                </div>
              </div>
            </div>
            <div class="selected_mark">
              <img :src="markSrc" class="selected_mark_layout">
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- 授業名設定 -->
    <section class="classname_area setting_area">
      <div class="is_detail_open_contnair" @click="ClassNameSettingOpen">
        <p class="detail_title">授業名</p>
        <img src="../assets/arrow-detail-open.svg" class="open_icon" :class="{ relote90: !isClassNameSettingOpen }">
      </div>
      <!-- セッティング詳細 -->
      <div class="classname_setting_inner" v-show="isClassNameSettingOpen">
        <input class="classname_input" type="text" placeholder="授業名を記入してください">
      </div>
    </section>

    <!-- 授業概要設定 -->
    <section class="classoverview_area setting_area">
      <div class="is_detail_open_contnair" @click="ClassOverviewSettingOpen">
        <p class="detail_title">概要</p>
        <img src="../assets/arrow-detail-open.svg" class="open_icon" :class="{ relote90: !isClassOverviewSettingOpen }">
      </div>
      <!-- セッティング詳細 -->
      <div class="classoverview_setting_inner" v-show="isClassOverviewSettingOpen">
        <textarea class="classoverview_textarea" type="text" placeholder="授業の概要を簡単に記入してください"></textarea>
      </div>
    </section>

    <!-- タグ設定 -->
    <section class="classtag_area setting_area">
      <div class="is_detail_open_contnair" @click="ClassTagSettingOpen">
        <p class="detail_title">タグ付け</p>
        <img src="../assets/arrow-detail-open.svg" class="open_icon" :class="{ relote90: !isClassTagSettingOpen }">
      </div>
      <!-- セッティング詳細 -->
      <div class="classtag_setting_inner" v-show="isClassTagSettingOpen">
        <input class="classtag_input classtag_input_margin" type="text" placeholder="タグを追加する" v-model.trim="tag_inputed"
          @keydown.enter="tagInputedPush">
        <div class="setted_tag_area">
          <div class="setted_tag" v-for="(classTag, index) in classTags" v-bind:key="classTag">
            <p class="setted_tag_p">＃{{ classTag }}</p>
            <div class="setted_tag_delete_button" @click="settedTagDelete(index)">
              <svg class="setted_tag_delete_button_icon" xmlns="http://www.w3.org/2000/svg" width="10.987"
                height="10.987" viewBox="0 0 10.987 10.987">
                <g transform="translate(-511.078 -264.007)">
                  <line x2="12.737" transform="translate(512.068 264.997) rotate(45)" fill="none" stroke="#CCC"
                    stroke-linecap="round" stroke-width="1.4" />
                  <line x2="12.737" transform="translate(521.074 264.997) rotate(135)" fill="none" stroke="#CCC"
                    stroke-linecap="round" stroke-width="1.4" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <p class="tag_explain" v-show="settedTagEmpty">タグ付けを行うことであなたの授業がより広がります。</p>
      </div>
    </section>

    <!-- 公開範囲設定 -->
    <section class="classrelease_area setting_area">
      <div class="is_detail_open_contnair" @click="ClassReleaseSettingOpen">
        <p class="detail_title">公開設定</p>
        <img src="../assets/arrow-detail-open.svg" class="open_icon" :class="{ relote90: !isClassReleaseSettingOpen }">
      </div>
      <!-- セッティング詳細 -->
      <div class="classrelease_setting_inner" v-show="isClassReleaseSettingOpen">
        <div class="release_setting_radio_button_area">
          <div class="release_setting_radio_button" @click="SelectReleaseSetting(0)">
            <div class="circle circle_margin" :class="{ circle_on: selectedRelease === 0 }">
            </div>
            <p class="radio_button_label" :class="{ radio_button_label_on: selectedRelease === 0 }">パブリック</p>
          </div>
          <div class="release_setting_radio_button" @click="SelectReleaseSetting(1)">
            <div class="circle circle_margin" :class="{ circle_on: selectedRelease === 1 }">
            </div>
            <p class="radio_button_label" :class="{ radio_button_label_on: selectedRelease === 1 }">プライベート</p>
          </div>
          <div class="release_setting_radio_button" @click="SelectReleaseSetting(2)">
            <div class="circle circle_margin" :class="{ circle_on: selectedRelease === 2 }">
            </div>
            <p class="radio_button_label" :class="{ radio_button_label_on: selectedRelease === 2 }">許可した人のみ</p>
          </div>
        </div>
        <div class="release_selected_explain_area">
          <p class="release_selected_explain" v-show="selectedRelease === 0">誰でもあなたの授業を閲覧し、参考にすることができます</p>
          <p class="release_selected_explain" v-show="selectedRelease === 1">あなたのみが閲覧・編集できます</p>
          <p class="release_selected_explain" v-show="selectedRelease === 2">あなたの許可した人物のみが閲覧できます</p>
        </div>
      </div>
    </section>

    <!-- 作成ボタン -->
    <button class="submit_button" @click="login">以上の内容で作成</button>
  </div>
</template>

<script>

export default {
  data() {
    const colors = new Map([
      ["yellow", "#F8DF72"],
      ["red", "#F06A6A"],
      ["peach", "#EC8D71"],
      ["orange", "#F1BD6C"],
      ["rightgreen", "#70CA70"],
      ["green", "#309E30"],
      ["rightblue", "#9EE7E3"],
      ["blue", "#4573D2"],
      ["cepia", "#13CCCE"],
      ["purple", "#B36BD4"],
      ["rightpink", "#F9AAEF"],
      ["pink", "#F26FB2"],
      ["blood", "#AA5D5D"],
      ["grey", "#C7C4C4"],
      ["rightblack", "#6D6E6F"],
    ]);

    return {
      colors,
      isIconSettingOpen: true,
      isShowBgSelecter: false,
      isShowMarkSelecter: false,
      isClassNameSettingOpen: true,
      isClassOverviewSettingOpen: true,
      isClassTagSettingOpen: true,
      isClassReleaseSettingOpen: true,
      settedTagEmpty: true,
      iconSrc: require('@/assets/class-icon-on/meeting.svg'),
      markSrc: require('@/assets/icon-off-fill/meeting-off.svg'),
      selectedBgColor: "yellow",
      tag_inputed: '',
      hash_tag_inputed: '',
      classTags: [],
      selectedRelease: 0,
    }
  },
  computed: {
    bgSelected() { return { backgroundColor: this.colors.get(this.selectedBgColor) }; },
  },
  // タグ配列を監視して空かどうかで表示文の有無を変更
  watch: {
    classTags: {
      handler: function () {
        if (this.classTags.length) {
          this.settedTagEmpty = false;
        }
        else {
          this.settedTagEmpty = true;
        }
      },
      deep: true
    }
  },
  methods: {
    // アコーディオンパネル開閉メソッド
    IconSettingOpen() {
      this.isIconSettingOpen = !this.isIconSettingOpen;
    },
    isOpenBgSelecter() {
      this.isShowBgSelecter = !this.isShowBgSelecter;
    },
    isOpenMarkSelecter() {
      this.isShowMarkSelecter = !this.isShowMarkSelecter;
    },
    ClassNameSettingOpen() {
      this.isClassNameSettingOpen = !this.isClassNameSettingOpen;
    },
    ClassOverviewSettingOpen() {
      this.isClassOverviewSettingOpen = !this.isClassOverviewSettingOpen;
    },
    ClassTagSettingOpen() {
      this.isClassTagSettingOpen = !this.isClassTagSettingOpen;
    },
    ClassReleaseSettingOpen() {
      this.isClassReleaseSettingOpen = !this.isClassReleaseSettingOpen;
    },
    // 背景色変換メソッド
    selectBgColor(color) {
      this.selectedBgColor = color;
    },

    //アイコン変更メソッド
    setMeetingIcon() {
      this.iconSrc = require('@/assets/class-icon-on/meeting.svg');
      this.markSrc = require('@/assets/icon-off-fill/meeting-off.svg');
    },
    setJapaneseIcon() {
      this.iconSrc = require('@/assets/class-icon-on/japanese.svg');
      this.markSrc = require('@/assets/icon-off-fill/japanese-off.svg');
    },
    setEnglishIcon() {
      this.iconSrc = require('@/assets/class-icon-on/english.svg');
      this.markSrc = require('@/assets/icon-off-fill/english-off.svg');
    },
    setMathIcon() {
      this.iconSrc = require('@/assets/class-icon-on/math.svg');
      this.markSrc = require('@/assets/icon-off-fill/math-off.svg');
    },
    setBiologyIcon() {
      this.iconSrc = require('@/assets/class-icon-on/biology.svg');
      this.markSrc = require('@/assets/icon-off-fill/biology-off.svg');
    },
    setChemistryIcon() {
      this.iconSrc = require('@/assets/class-icon-on/chemistry.svg');
      this.markSrc = require('@/assets/icon-off-fill/chemistry-off.svg');
    },
    setPhysicsIcon() {
      this.iconSrc = require('@/assets/class-icon-on/physics.svg');
      this.markSrc = require('@/assets/icon-off-fill/physics-off.svg');
    },
    setGeographyIcon() {
      this.iconSrc = require('@/assets/class-icon-on/geography.svg');
      this.markSrc = require('@/assets/icon-off-fill/geography-off.svg');
    },
    setHistoryIcon() {
      this.iconSrc = require('@/assets/class-icon-on/history.svg');
      this.markSrc = require('@/assets/icon-off-fill/history-off.svg');
    },
    setMachineIcon() {
      this.iconSrc = require('@/assets/class-icon-on/machine.svg');
      this.markSrc = require('@/assets/icon-off-fill/machine-off.svg');
    },
    setMusicIcon() {
      this.iconSrc = require('@/assets/class-icon-on/music.svg');
      this.markSrc = require('@/assets/icon-off-fill/music-off.svg');
    },
    setArtIcon() {
      this.iconSrc = require('@/assets/class-icon-on/art.svg');
      this.markSrc = require('@/assets/icon-off-fill/art-off.svg');
    },
    setScissorsIcon() {
      this.iconSrc = require('@/assets/class-icon-on/scissors.svg');
      this.markSrc = require('@/assets/icon-off-fill/scissors-off.svg');
    },
    setSoccerIcon() {
      this.iconSrc = require('@/assets/class-icon-on/soccer.svg');
      this.markSrc = require('@/assets/icon-off-fill/soccer-off.svg');
    },
    setHeartIcon() {
      this.iconSrc = require('@/assets/class-icon-on/heart.svg');
      this.markSrc = require('@/assets/icon-off-fill/heart-off.svg');
    },
    setPcIcon() {
      this.iconSrc = require('@/assets/class-icon-on/pc.svg');
      this.markSrc = require('@/assets/icon-off-fill/pc-off.svg');
    },
    setHouseIcon() {
      this.iconSrc = require('@/assets/class-icon-on/house.svg');
      this.markSrc = require('@/assets/icon-off-fill/house-off.svg');
    },
    setSmileIcon() {
      this.iconSrc = require('@/assets/class-icon-on/smile.svg');
      this.markSrc = require('@/assets/icon-off-fill/smile-off.svg');
    },
    setPersonIcon() {
      this.iconSrc = require('@/assets/class-icon-on/person.svg');
      this.markSrc = require('@/assets/icon-off-fill/person-off.svg');
    },
    setLightIcon() {
      this.iconSrc = require('@/assets/class-icon-on/light.svg');
      this.markSrc = require('@/assets/icon-off-fill/light-off.svg');
    },
    setAwardIcon() {
      this.iconSrc = require('@/assets/class-icon-on/award.svg');
      this.markSrc = require('@/assets/icon-off-fill/award-off.svg');
    },
    setMasterIcon() {
      this.iconSrc = require('@/assets/class-icon-on/master.svg');
      this.markSrc = require('@/assets/icon-off-fill/master-off.svg');
    },
    setSerchIcon() {
      this.iconSrc = require('@/assets/class-icon-on/search.svg');
      this.markSrc = require('@/assets/icon-off-fill/serch-off.svg');
    },
    setTestIcon() {
      this.iconSrc = require('@/assets/class-icon-on/test.svg');
      this.markSrc = require('@/assets/icon-off-fill/test-off.svg');
    },

    // 配列にタグを追加メソッド(空かつ同文字が配列に含まれないでバリデーション)
    tagInputedPush() {
      if (this.tag_inputed != '' && this.classTags.indexOf(this.tag_inputed) === -1) {
        this.classTags.push(this.tag_inputed);
        this.tag_inputed = '';
      }
    },
    // 配列からタグを消去
    settedTagDelete(index) {
      this.classTags.splice(index, 1);
    },
    // 公開範囲選択ラジオボタンメソッド
    SelectReleaseSetting(release) {
      this.selectedRelease = release;
    },
  },
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
$red: #F06A6A;
$peach: #EC8D71;
$orange: #F1BD6C;
$rightgreen: #70CA70;
$green: #309E30;
$blue: #4573D2;
$rightblue: #9EE7E3;
$cepia: #13CCCE;
$purple: #B36BD4;
$rightpink: #F9AAEF;
$pink: #F26FB2;
$blood: #AA5D5D;
$grey: #C7C4C4;
$rightblack: #6D6E6F;
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
  .setting_area {
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

    // アコーディオンパネル（アイコン作成）
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

            //背景色 アコーディオンパネル内部
            .bg_selecter_changeshow {
              padding: 8px 13px 14px 13px;

              &.bg_selecter_grid_layout {
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
                position: relative;

                &.yellow {
                  background-color: $yellow;
                }

                &.red {
                  background-color: $red;
                }

                &.peach {
                  background-color: $peach;
                }

                &.orange {
                  background-color: $orange;
                }

                &.rightgreen {
                  background-color: $rightgreen;
                }

                &.green {
                  background-color: $green;
                }

                &.rightblue {
                  background-color: $rightblue;
                }

                &.blue {
                  background-color: $blue;
                }

                &.cepia {
                  background-color: $cepia;
                }

                &.purple {
                  background-color: $purple;
                }

                &.rightpink {
                  background-color: $rightpink;
                }

                &.pink {
                  background-color: $pink;
                }

                &.blood {
                  background-color: $blood;
                }

                &.grey {
                  background-color: $grey;
                }

                &.rightblack {
                  background-color: $rightblack;
                }

                .check_icon {
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto;
                  opacity: 0;

                  &.icon_on {
                    opacity: 1;
                  }
                }
              }
            }

            // アイコン変更アコーディオンパネル内部
            .mark_selecter_changeshow {
              padding: 8px 11px 14px 11px;

              &.mark_selecter_grid_layout {
                display: grid;
                grid-template-columns: auto auto auto;
                justify-content: space-between;
                grid-row-gap: 20px;
                grid-column-gap: 17px;
                overflow-y: scroll;
                height: 232px;
                &::-webkit-scrollbar{
                  width: 5px;
                }
                &::-webkit-scrollbar-thumb {
                  background-color: #c5c5c5;
                  border-radius: 100px;
                }
              }

              .icon_select_button {
                cursor: pointer;
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

          .selected_mark {
            width: 44px;
            height: 44px;
            border-radius: 1px;
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 0;

            .selected_mark_layout {
              width: 44px;
            }
          }
        }
      }
    }
  }

  // 授業名設定アコーディオンパネル内部
  .classname_setting_inner {
    margin-top: 40px;

    .classname_input {
      font-family: $main-font-family;
      font-size: 15px;
      font-weight: 400;
      color: $black;
      letter-spacing: 0.5px;
      width: 570px;
      height: 56px;
      border: none;
      padding-left: 10px;
      padding-right: 10px;
      vertical-align: top;
      background-color: #FFFFFF;
      border: solid 1px #E6E6E6;
      border-radius: 4px;

      &::placeholder {
        font-family: $main-font-family;
        color: #bcbcbc;
        font-weight: 300;
      }

      &:focus {
        border: solid 1px #999999;
        background: transparent;
        outline: transparent;
      }
    }
  }

  // 授業概要アコーディオンパネル内部
  .classoverview_setting_inner {
    margin-top: 40px;

    .classoverview_textarea {
      font-family: $main-font-family;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.55;
      color: $black;
      letter-spacing: 0.5px;
      width: 570px;
      height: 150px;
      border: none;
      padding: 10px 10px 10px 10px;
      vertical-align: top;
      background-color: #FFFFFF;
      border: solid 1px #E6E6E6;
      border-radius: 4px;

      &::placeholder {
        font-family: $main-font-family;
        color: #bcbcbc;
        font-weight: 300;
      }

      &:focus {
        border: solid 1px #999999;
        background: transparent;
        outline: transparent;
      }
    }
  }

  // 授業タグアコーディオンパネル内部
  .classtag_setting_inner {
    margin-top: 40px;

    .classtag_input {
      font-family: $main-font-family;
      font-size: 15px;
      font-weight: 400;
      color: $black;
      letter-spacing: 0.5px;
      width: 570px;
      height: 56px;
      border: none;
      padding-left: 10px;
      padding-right: 10px;
      vertical-align: top;
      background-color: #FFFFFF;
      border: solid 1px #E6E6E6;
      border-radius: 4px;

      &::placeholder {
        font-family: $main-font-family;
        color: #bcbcbc;
        font-weight: 300;
      }

      &:focus {
        border: solid 1px #999999;
        background: transparent;
        outline: transparent;
      }
    }

    .classtag_input_margin {
      margin-bottom: 30px;
    }

    .setted_tag_area {
      display: flex;
      flex-wrap: wrap;
      gap: 10px 15px;

      .setted_tag {
        border: 1px solid #D8D8D8;
        border-radius: 2px;
        padding: 0px 3px 0px 13px;
        display: flex;
        flex-direction: row;
        align-items: center;

        .setted_tag_p {
          font-family: $main-font-family;
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0.5px;
          color: $black;
          margin-right: 5px;
        }

        .setted_tag_delete_button {
          height: 37px;
          width: 37px;
          position: relative;
          cursor: pointer;

          .setted_tag_delete_button_icon {
            position: absolute;
            top: 1px;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
          }
        }
      }
    }

    .tag_explain {
      font-family: $main-font-family;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.5px;
      color: #13CCCE;
    }
  }

  .classrelease_setting_inner {
    margin-top: 40px;

    .release_setting_radio_button_area {
      display: flex;
      gap: 0px 45px;
      margin-bottom: 25px;

      .release_setting_radio_button {
        display: flex;
        align-items: center;
        cursor: pointer;

        .circle {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid #E6E6E6;
          display: flex;
          align-items: center;
          justify-content: center;

          &.circle_margin {
            margin-right: 10px;
          }

          &.circle_on {
            background-color: $main-color;
          }
        }

        .radio_button_label {
          font-family: $main-font-family;
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0.6px;
          color: #bcbcbc;
          padding-bottom: 2px;
        }

        .radio_button_label_on {
          color: $main-color;
        }
      }
    }

    .release_selected_explain_area {
      .release_selected_explain {
        font-family: $main-font-family;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.5px;
        color: $main-color;
      }
    }
  }

  .submit_button {
    text-decoration: none;
    display: block;
    border-radius: 5px;
    background-color: #ebebeb;
    transition: 0.1s ease;
    border: transparent;
    font-family: $main-font-family;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.4px;
    color: #FFFFFF;
    width: 248px;
    height: 44px;
    margin: 40px 0px 60px 0px;

    &:valid {
      background-color: $main-color;

      &:hover {
        background-color: $main-hover;
      }
    }
  }
}
</style>