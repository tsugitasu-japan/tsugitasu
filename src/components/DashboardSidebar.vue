<template>
  <div class="sidebar_contnair">
    <ul class="ul_layout">

      <div class="link_bg" :class="{ bg_on: onPageData === 'myClass' }">
        <li class="link_style">
          <router-link to="/dashboard/class" class="link_text_d">
            <div class="link_innner_contnair">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g transform="translate(-8595 3523)">
                  <g transform="translate(8570.87 -3862)">
                    <path :class="{ svg_on: onPageData === 'myClass' }"
                      d="M8.015,13.625V2.4A2.125,2.125,0,0,0,5.61,0H2.4A2.125,2.125,0,0,0,0,2.4V13.625a2.125,2.125,0,0,0,2.4,2.4H5.61A2.125,2.125,0,0,0,8.015,13.625Z"
                      transform="translate(35.8 343)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-width="2.1" />
                    <path :class="{ svg_on: onPageData === 'myClass' }" d="M0,0H4.007"
                      transform="translate(35.8 346.206)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-width="2.1" />
                    <path :class="{ svg_on: onPageData === 'myClass' }" d="M0,0H3.206"
                      transform="translate(35.8 355.824)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-width="2.1" />
                    <path :class="{ svg_on: onPageData === 'myClass' }" d="M0,0,4.007.04"
                      transform="translate(35.8 352.578)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-width="2.1" />
                    <path :class="{ svg_on: onPageData === 'myClass' }" d="M0,0H2.4"
                      transform="translate(35.8 349.412)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-width="2.1" />
                    <path :class="{ svg_on: onPageData === 'myClass' }"
                      d="M2.372,0A2.376,2.376,0,0,0,0,2.364V12.752A2.831,2.831,0,0,0,.337,13.97l.657,1.09a1.473,1.473,0,0,0,2.749,0L4.4,13.97a2.831,2.831,0,0,0,.337-1.218V2.364A2.374,2.374,0,0,0,2.372,0Z"
                      transform="translate(28.53 343)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-width="2.1" />
                    <path :class="{ svg_on: onPageData === 'myClass' }" d="M4.737,0H0"
                      transform="translate(28.53 347.007)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-width="2.1" />
                  </g>
                  <rect width="24" height="24" transform="translate(8595 -3523)" fill="none" />
                </g>
              </svg>
              <p class="link_p p_off p_margin" :class="{ p_on: onPageData === 'myClass' }">マイ授業</p>
            </div>
          </router-link>
        </li>
      </div>

      <div class="link_bg" :class="{ bg_on: onPageData === 'myGroup' }">
        <li class="link_style">
          <router-link to="/dashboard/group" class="link_text_d">
            <div class="link_innner_contnair">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g transform="translate(-8595 3578)">
                  <g transform="translate(8597.032 -3575.595)">
                    <g transform="translate(12.767 1.666)">
                      <path :class="{ svg_on: onPageData === 'myGroup' }" d="M2.224,4.3a.5.5,0,0,0-.158,0,2.153,2.153,0,1,1,.158,0Z" fill="none" stroke="#999"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1" />
                      <path :class="{ svg_on: onPageData === 'myGroup' }"
                        d="M.025,4.114a4.692,4.692,0,0,0,3.281-.6,1.592,1.592,0,0,0,0-2.848A4.722,4.722,0,0,0,0,.075"
                        transform="translate(1.341 6.246)" fill="none" stroke="#999" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2.1" />
                    </g>
                    <g transform="translate(1.668 1.666)">
                      <path :class="{ svg_on: onPageData === 'myGroup' }"  d="M2.074,4.3a.5.5,0,0,1,.158,0,2.153,2.153,0,1,0-.158,0Z" transform="translate(1.23)"
                        fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1" />
                      <path :class="{ svg_on: onPageData === 'myGroup' }" 
                        d="M4.162,4.114a4.692,4.692,0,0,1-3.281-.6,1.592,1.592,0,0,1,0-2.848A4.722,4.722,0,0,1,4.187.075"
                        transform="translate(0 6.246)" fill="none" stroke="#999" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2.1" />
                    </g>
                    <g transform="translate(6.689 7.886)">
                      <path :class="{ svg_on: onPageData === 'myGroup' }" d="M2.224,4.3a.5.5,0,0,0-.158,0,2.153,2.153,0,1,1,.158,0Z" transform="translate(1.081)"
                        fill="none" stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.1" />
                      <path :class="{ svg_on: onPageData === 'myGroup' }" 
                        d="M.881.662a1.592,1.592,0,0,0,0,2.848,4.728,4.728,0,0,0,4.847,0,1.592,1.592,0,0,0,0-2.848A4.766,4.766,0,0,0,.881.662Z"
                        transform="translate(0 6.258)" fill="none" stroke="#999" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2.1" />
                    </g>
                  </g>
                  <rect width="24" height="24" transform="translate(8595 -3578)" fill="none" />
                </g>
              </svg>
              <p class="link_p p_off p_margin" :class="{ p_on: onPageData === 'myGroup' }">グループ</p>
            </div>
          </router-link>
        </li>
      </div>

      <div class="link_bg">
        <li class="link_style">
          <router-link to="/" class="link_text_d">
            <div class="link_innner_contnair">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g transform="translate(-8595 3470)">
                  <path
                    d="M8.959,0Q12.8,0,12.8,3.78v8.8c0,2.483-1.8,3.443-4.019,2.146l-1.69-1a1.5,1.5,0,0,0-1.382,0l-1.69,1C1.8,16.02,0,15.059,0,12.576V3.78Q0,0,3.84,0Z"
                    transform="translate(8600.6 -3465.53)" fill="none" stroke="#999" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="2.5" />
                  <rect width="24" height="24" transform="translate(8595 -3470)" fill="none" />
                </g>
              </svg>
              <p class="link_p p_off p_margin">ブックマーク</p>
            </div>
          </router-link>
        </li>
      </div>

      <div class="link_bg">
        <li class="link_style">
          <router-link to="/" class="link_text_d">
            <div class="link_innner_contnair">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g transform="translate(-8595 3361)">
                  <g transform="translate(8596.4 -3361)">
                    <path d="M0,0H15.52" transform="translate(3 6)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-width="2.5" />
                    <path d="M0,0H11.785" transform="translate(3 12)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-width="2.5" />
                    <path d="M0,0H8.109" transform="translate(3 18)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-width="2.5" />
                  </g>
                  <rect width="24" height="24" transform="translate(8595 -3361)" fill="none" />
                </g>
              </svg>
              <p class="link_p p_off p_margin">下書き</p>
            </div>
          </router-link>
        </li>
      </div>

      <div class="link_bg">
        <li class="link_style">
          <router-link to="/" class="link_text_d">
            <div class="link_innner_contnair">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g transform="translate(-8595 3417)">
                  <g transform="translate(8594.955 -3417.05)">
                    <path d="M19.59,22.5v3.353a1.677,1.677,0,0,1-1.677,1.677H6.177A1.677,1.677,0,0,1,4.5,25.853V22.5"
                      transform="translate(0 -7.94)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.5" />
                    <path d="M10.5,15l4.192,4.192L18.883,15" transform="translate(-2.647 -4.632)" fill="none"
                      stroke="#999" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" />
                    <path d="M18,14.56V4.5" transform="translate(-5.955 0)" fill="none" stroke="#999"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" />
                  </g>
                  <rect width="24" height="24" transform="translate(8595 -3417)" fill="none" />
                </g>
              </svg>
              <p class="link_p p_off p_margin">ダウンロード</p>
            </div>
          </router-link>
        </li>
      </div>

      <div class="link_bg">
        <li class="link_style">
          <router-link to="/" class="link_text_d">
            <div class="link_innner_contnair">
              <svg class="svg-on" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g transform="translate(-8595 3307)">
                  <g transform="translate(8573.225 -3495.905)">
                    <path d="M14.713.409C11.991.139,9.253,0,6.523,0A48.282,48.282,0,0,0,1.667.245L0,.409"
                      transform="translate(26.579 196.049)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.4" />
                    <path d="M0,2.428.18,1.357C.311.58.409,0,1.79,0H3.932c1.381,0,1.488.613,1.61,1.365l.18,1.063"
                      transform="translate(31.074 193.205)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.4" />
                    <path d="M11.2,0l-.531,7.789C10.577,9,10.5,9.947,8.223,9.947H2.975C.695,9.947.621,9,.531,7.789L0,0"
                      transform="translate(28.336 199.041)" fill="none" stroke="#999" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="2.4" />
                    <path d="M0,0H2.722" transform="translate(32.57 205.057)" fill="none" stroke="#999"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" />
                    <path d="M0,0H4.087" transform="translate(31.892 201.787)" fill="none" stroke="#999"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4" />
                  </g>
                  <rect width="24" height="24" transform="translate(8595 -3307)" fill="none" />
                </g>
              </svg>
              <p class="link_p p_off p_margin">ごみ箱</p>
            </div>
          </router-link>
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      onPageData:this.$store.state.onPages.onPage
    }
  },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
$main-font-family: 'Noto Sans JP', sans-serif;
$off-color: #999999;
$on-color: #565656;

.sidebar_contnair {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  height: calc(100vh - 70px);
  border-right: 1px solid #ECECEC;

  .ul_layout {
    margin: 0;
    padding: 30px 0 0 0;

    .link_bg {


      &:hover {
        background-color: #F3F9F9;
      }

      &.bg_on {
        background-color: #E4F7F7;
      }


      .link_style {
        list-style: none;
        display: inline-block;
        display: flex;
        align-items: center;
        margin-bottom: 11px;

        .link_text_d {
          padding-left: 15px;
          padding-top: 11px;
          padding-bottom: 11px;
          text-decoration: none;
          border-radius: 2px;
          width: 196px;

          .link_innner_contnair {
            display: flex;
            align-items: center;

            .link_p {
              font-family: $main-font-family;
              font-size: 15px;
              font-weight: 700;
              letter-spacing: 0.6px;
            }

            .svg_on {
              stroke: $on-color;
            }

            .p_off {
              color: $off-color;
            }

            .p_on {
              color: $on-color;
            }

            .p_margin {
              margin-left: 8px;
            }
          }
        }
      }
    }
  }
}
</style>