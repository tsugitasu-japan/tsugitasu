<template>
  <div class="dashboard_right">
    <div class="search_contnair">
      <!-- 検索ボックス -->
      <div class="search__area">
        <input class="search__input" type="text" placeholder="グループを探す">
        <button class="search__button">
          <img src="../assets/Icon-search.svg">
        </button>
      </div>
      <div class="create_button">
        <router-link class="link_create_button" to="/dashboard/creategroup">
          <div class="create_button_text">新規作成</div>
        </router-link>
      </div>
    </div>
    <div class="my_created_group_display_area my_created_group_display_area_layout">
      <div class="group_explain_contnair">
        <img src="../assets/talk.svg">
        <div class="group_explain_contnair_right">
          <h1 class="create_group_title">グループを作成して<br>チームで共有、意見交換。 <br>
            もっと<span>クリエイティブ</span>に
          </h1>
          <p class="create_group_explain explain_margin">グループを作成することで、授業を共有したり、<br>
            一緒に授業を作成したり、チームメンバーと協力。<br>
            コンテンツ作成をチームメンバーで思いのままに
          </p>
          <router-link class="link_create_group_button" to="/dashboard/creategroup">
            <div class="create_button_group_text">グループを作成</div>
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

    }
  },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
$main-font-family: 'Noto Sans JP', sans-serif;
$main-color: #13CCCE;
$main-hover: #26ABAD;
$black: #2B2B2B;
$bg-color: #FBFBFB;


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
        }
      }
    }
  }

  .my_created_group_display_area {
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

    .group_explain_contnair {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-left: 15px;
      padding-top: 5px;

      img{
        height:387px;
        padding-top: 19px;
      }
      .group_explain_contnair_right {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 87px;

        .create_group_title {
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
        .explain_margin{
          margin: 15px 0px 25px 0px;
        }

        .link_create_group_button {
          text-decoration: none;
          display: block;
          border-radius: 5px;
          background-color: #0200F5;
          transition: 0.2s ease;
          &:hover{
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

  }
}
</style>