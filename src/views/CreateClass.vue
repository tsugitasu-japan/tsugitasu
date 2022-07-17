<template>
  <header class="create_header header_position">
    <router-link to="/dashboard/class" class="back_link_style">やめる</router-link>
    <div class="button_contnair">
      <svg class="help_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <g transform="translate(-993 -18.35)">
          <path class="help_icon_fill"
            d="M6.291,0A4.932,4.932,0,0,0,1.91,2.317a.612.612,0,0,0,.132.837l1.1.833a.611.611,0,0,0,.847-.106A2.47,2.47,0,0,1,6.093,2.622c.783,0,1.752.5,1.752,1.263,0,.574-.474.869-1.247,1.3C5.7,5.694,4.5,6.323,4.5,7.9v.249a.611.611,0,0,0,.611.611H6.958a.611.611,0,0,0,.611-.611V8c0-1.091,3.189-1.137,3.189-4.089C10.758,1.687,8.452,0,6.291,0ZM6.036,9.507A1.763,1.763,0,1,0,7.8,11.271,1.765,1.765,0,0,0,6.036,9.507Z"
            transform="translate(998.896 23.658)" fill="#cecece" />
          <circle class="help_icon_stroke" cx="11" cy="11" r="11" transform="translate(994 19.35)" fill="none"
            stroke="#cecece" stroke-width="2" />
        </g>
      </svg>
    </div>
  </header>
  <CreateClassContent></CreateClassContent>
</template>

<script>
  import CreateClassContent from '../components/CreateClassContent.vue'

  export default{
    components:{
      CreateClassContent
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
// $main-font-family:'メイリオ', 'Meiryo','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',sans-serif;
$main-font-family: 'Noto Sans JP', sans-serif;

.create_header {
  height: 60px;
  padding: 0px 24px 0px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFFFFF;
  border-bottom: 1px solid #ECECEC;
  .button_contnair {
    width: 30px;
    height: 30px;
    position: relative;

    &:hover .help_icon_fill {
      fill: #8c8c8c;
    }

    &:hover .help_icon_stroke {
      stroke: #8c8c8c;
    }

    .help_icon {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;

      .help_icon_fill {
        transition: .1s;
      }

      .help_icon_stroke {
        transition: .1s;
      }
    }
  }

  .back_link_style {
    text-decoration: none;
    font-family: $main-font-family;
    font-size: 13.5px;
    font-weight: 700;
    color: $off-color;
    letter-spacing: 0.2px;
    transition: .2s ease;

    &:hover {
      color: $black;
    }
  }
}
</style>