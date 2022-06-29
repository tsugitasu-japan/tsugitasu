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

    <div class="myclass__display__area">

    </div>
  </div>

</template>

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
  .myclass__display__area{
    height: calc(100vh - 150px);
    overflow-y: scroll;
    background-color: $bg-color;

  }
}
</style>