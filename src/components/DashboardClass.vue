<template>
  <div class="dashboard_right">
    <div class="search_contnair">
      <!-- 検索ボックス -->
      <div class="search__area">
        <input class="search__input" type="text" placeholder="マイ授業を探す">
        <button class="search__button">
          <img src="../assets/Icon-search.svg">
        </button>
      </div>
      <div class="create_button">
        <router-link class="link_create_button" to="/dashboard/class/createclass">
          <div class="create_button_text">新規作成</div>
        </router-link>
      </div>
    </div>

    <div class="my_created_class_display_area">
      <div class="class_expalin_contnair" v-if="shouldUserClassListsEmpty">
        <img src="../assets/create-class.svg">
        <div class="class_expalin_contnair_right">
          <h1 class="create_class_title">授業の作成から管理まで<br>この場所1つで完結<br>

            より<span>効率的</span>に
          </h1>
          <p class="create_group_explain explain_margin">グループを作成することで、授業を共有したり、<br>
            一緒に授業を作成したり、チームメンバーと協力。<br>
            コンテンツ作成をチームメンバーで思いのままに
          </p>
          <router-link class="link_create_group_button" to="/dashboard/class/createclass">
            <div class="create_button_group_text">授業を作成</div>
          </router-link>
        </div>
      </div>
      <div class="my_created_class_display_area_layout" v-if="!shouldUserClassListsEmpty">
        <div class="my_created_class_contnair" v-for="userClassList in userClassLists" :key="userClassList">
          <div class="my_created_class_icon" :class="userClassList.selectedBgColor">
            <img class="my_create_class_mark_layout my_create_class_mark_size" :src="userClassList.iconSrc">
          </div>
          <p class="my_created_class_name class_name_margin">{{ cutClassName(userClassList.className) }}</p>
        </div>
        <router-link class="my_created_class_contnair" to="/dashboard/class/createclass">
          <img src="../assets/newclass.svg" class="my_created_class_icon">
          <p class="my_created_class_new class_name_margin"> 新規作成 </p>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      userClassLists: ''
    }
  },
  computed: {
    shouldUserClassListsEmpty() {
      if (Object.keys(this.userClassLists).length)
        return false;
      else
        return true
    },
    // idTokenの取得
    idToken() {
      return this.$store.getters.idToken;
    },
  },
  methods: {
    // 作成した授業情報を取得
    getCreateClassData() {
      this.userClassLists = this.$store.state.UserCreatedClasses.createClasses;
    },
    // 作成した授業情報を取得
    getCreatedClassLambda() {
      this.$store.dispatch('getCreatedClass', {
        userName: this.$store.state.UserProfileInfo.userIdentification,
        idToken: this.idToken,
      });
    },

    // 授業名の表示文字数制限
    cutClassName(text) {
      if (text.length > 14) {
        return text.substring(0, 14) + '...'
      }
      else {
        return text;
      }
    }
  },
  created() {
    this.getCreatedClassLambda();
    this.getCreateClassData();
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
$main-font-family: 'Noto Sans JP', sans-serif;
$main-color: #13CCCE;
$main-hover: #26ABAD;
$black: #2B2B2B;
$bg-color: #FBFBFB;
$yellow: #F8DF72;
$red: #F06A6A;
$peach: #EC8D71;
$orange: #F1BD6C;
$lightgreen: #70CA70;
$green: #309E30;
$blue: #4573D2;
$lightblue: #9EE7E3;
$cepia: #13CCCE;
$purple: #B36BD4;
$lightpink: #F9AAEF;
$pink: #F26FB2;
$blood: #AA5D5D;
$grey: #C7C4C4;
$lightblack: #6D6E6F;

.dashboard_right {
  display: flex;
  flex-direction: column;
  width: calc(100% - 221px);
  background-color: $bg-color;

  .search_contnair {
    padding: 17px 24px 17px 19px;
    background-color: $bg-color;
    display: flex;
    justify-content: space-between;

    .search__area {
      background-color: #FFFFFF;
      border: solid 1px #E6E6E6;
      border-radius: 4px;
      width: 490px;
      display: flex;
      justify-content: space-between;
      padding: 2px;
      transition: 0.1s ease;

      &:hover {
        border: solid 1px #999999;
      }

      &:focus-within {
        border: solid 1px #999999;
      }

      .search__input {
        font-family: $main-font-family;
        font-size: 13.5px;
        font-weight: 400;
        color: $black;
        letter-spacing: 0.4px;
        width: 490px;
        height: 40px;
        border: none;
        padding-left: 10px;
        vertical-align: top;
        line-height: 1.5;

        &::placeholder {
          font-family: $main-font-family;
          color: #bcbcbc;
          font-weight: 300;
        }

        &:focus {
          background: transparent;
          outline: transparent;
        }
      }

      .search__button {
        background-color: transparent;
        border: none;
        width: 40px;
        height: 40px;

        img {
          margin: 0 auto;
          transform: scale(1.05);
        }
      }
    }

    .create_button {
      .link_create_button {
        text-decoration: none;
        display: block;
        border-radius: 5px;
        background-color: $main-color;
        transition: 0.2s ease;

        &:hover {
          background-color: $main-hover;
        }

        .create_button_text {
          font-family: $main-font-family;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.4px;
          color: #FFFFFF;
          padding: 13px 21px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }


  .my_created_class_display_area {
    max-height: calc(100vh - 150px);
    overflow-y: scroll;
    padding: 0px 13px;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #c5c5c5;
      border-radius: 100px;
    }

    .class_expalin_contnair {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-left: 15px;
      padding-top: 5px;

      img {
        height: 387px;
        padding-top: 19px;
      }

      .class_expalin_contnair_right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 87px;

        .create_class_title {
          font-family: $main-font-family;
          font-size: 35px;
          font-weight: 700;
          letter-spacing: 1.93px;
          line-height: 1.9;
          color: $black;

          span {
            color: #0200F5;
          }
        }

        .create_group_explain {
          font-family: $main-font-family;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.88px;
          line-height: 2.0;
          color: $black;
        }

        .explain_margin {
          margin: 15px 0px 25px 0px;
        }

        .link_create_group_button {
          text-decoration: none;
          display: block;
          border-radius: 5px;
          background-color: #0200F5;
          transition: 0.2s ease;

          &:hover {
            background-color: #0300b5;
          }

          .create_button_group_text {
            font-family: $main-font-family;
            font-weight: 700;
            font-size: 16px;
            letter-spacing: 0.88px;
            color: #FFFFFF;
            padding: 14px 128px;
            display: inline-block;
          }
        }
      }
    }

    .my_created_class_display_area_layout {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      gap: 8px 30px;

      .my_created_class_contnair {
        text-decoration: none;
        transition: .3s ease-out;
        padding: 18px 15px 14px 15px;
        border-radius: 27px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: #F5F5F5;
        }

        &:hover .my_created_class_icon {
          transform: translateY(-2px);
        }

        .my_created_class_icon {
          width: 126px;
          height: 126px;
          border-radius: 22.4%;
          position: relative;
          transition: .3s ease-out;

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

          &.lightgreen {
            background-color: $lightgreen;
          }

          &.green {
            background-color: $green;
          }

          &.lightblue {
            background-color: $lightblue;
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

          &.lightpink {
            background-color: $lightpink;
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

          &.lightblack {
            background-color: $lightblack;
          }

          .my_create_class_mark_layout {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
          }

          .my_create_class_mark_size {
            width: 63.2%;
          }
        }

        .my_created_class_name {
          text-align: center;
          font-family: $main-font-family;
          max-width: 126px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: $black;
        }

        .my_created_class_new {
          font-family: $main-font-family;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: #9d9d9d;
          text-decoration: none;
        }

        .class_name_margin {
          margin-top: 16px;
        }
      }
    }
  }
}
</style>