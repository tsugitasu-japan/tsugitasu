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
        <router-link class="link_create_button" to="/createclass">
          <div class="create_button_text">新規作成</div>
        </router-link>
      </div>
    </div>

    <div class="my_created_class_display_area my_created_class_display_area_layout">
      <div class="my_created_class_contnair" v-for="userClassList in userClassLists" :key="userClassList">
        <div class="my_created_class_icon" :class="userClassList.selectedBgColor">
          <img class="my_create_class_mark_layout my_create_class_mark_size" :src="userClassList.selectedMark">
        </div>
        <p class="my_created_class_name class_name_margin">{{ userClassList.title }}</p>
      </div>
    </div>
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
      // ユーザーの作成した授業のアイコン情報を配列で取得
      userClassLists: [
        {
          title: '作成した授業名',
          selectedBgColor: "yellow",
          selectedMark: require('@/assets/class-icon-on/meeting.svg'),
          link: ''
        },
        {
          title: '作成した授業名2',
          selectedBgColor: "yellow",
          selectedMark: require('@/assets/class-icon-on/house.svg'),
          link: ''
        },
                {
          title: '作成した授業名2',
          selectedBgColor: "yellow",
          selectedMark: require('@/assets/class-icon-on/house.svg'),
          link: ''
        },
                {
          title: '作成した授業名2',
          selectedBgColor: "yellow",
          selectedMark: require('@/assets/class-icon-on/house.svg'),
          link: ''
        },
                {
          title: '作成した授業名2',
          selectedBgColor: "yellow",
          selectedMark: require('@/assets/class-icon-on/house.svg'),
          link: ''
        },

      ]
    }
  },
  computed: {
    bgSelected() { return { backgroundColor: this.colors.get(this.userClassLists.selectedBgColor) }; },
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

.dashboard_right {
  display: flex;
  flex-direction: column;
  width: calc(100% - 221px);

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
    height: calc(100vh - 150px);
    overflow-y: scroll;
    background-color: $bg-color;
    padding: 10px 13px;

    &.my_created_class_display_area_layout {
      display: flex;
flex-wrap: wrap;
align-items: flex-start;
      gap: 17px 27px;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #c5c5c5;
      border-radius: 100px;
    }

    .my_created_class_contnair {
      transition: .3s ease-out;
      padding: 17px 15px 14px 15px;
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
        font-family: $main-font-family;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
        color: $black;
      }

      .class_name_margin {
        margin-top: 16px;
      }
    }
  }
}
</style>