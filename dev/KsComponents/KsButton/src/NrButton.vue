<template>
  <div :class="'KSNRButton KSNRButton__UID--' + _uid">
    <!-- 按钮颜色 -->
    <style type="text/css">
      /* 默认状态 */
      .KSNRButton__UID--{{ _uid }} .KSNRButton__entity {
        background: {{ colorNormal }};
      }
      /* hover 状态 */
      .KSNRButton__UID--{{ _uid }} .KSNRButton__entity[disabled]:hover {
        background: {{ colorNormal }};
      }
      .KSNRButton__UID--{{ _uid }} .KSNRButton__entity:hover {
        background: {{ colorHover }};
      }
      /* active 状态 */
      .KSNRButton__UID--{{ _uid }} .KSNRButton__entity:active {
        background: {{ colorActive }};
      }
      /* loading 大小 */
      .KSNRButton__UID--{{ _uid }} .KSNRButton__loading {
        width: {{ loadingSize }}px;
      }
      /* button 内容修正 */
      .KSNRButton__UID--{{ _uid }} .KSNRButton__text {
        padding-left: {{ loading ? loadingSize + 6 : 0 }}px;
      }
    </style>
    <button class="KSNRButton__entity" :type="nativeType"
            :disabled="(disable || loading) && 'disabled'" :style="btnStyle"
    >
      <svg class="KSNRButton__loading" v-if="loading" :width="loadingSize" :height="loadingSize" viewBox="0 0 16 16"
           preserveAspectRatio="xMidYMid meet"
           version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g transform="scale(0.015625, 0.015625)">
          <path
            d="M515.698303 969.127499c-97.187972 0-191.279691-31.134554-270.406182-90.479422-96.67193-72.245926-159.45708-178.206619-176.658492-297.928439s13.245087-238.9276 85.663027-335.59953C304.120947 45.239711 588.288258 4.644381 787.99664 154.124643c83.770872 62.78515 143.459768 153.092558 168.2298 254.580884 4.300353 17.373425-6.364522 34.918864-23.737947 39.047203-17.373425 4.128339-34.918864-6.364522-39.047203-23.737947-21.157736-86.867126-72.417941-164.44549-144.147825-218.285906C578.139425 77.750378 334.395431 112.669242 206.244919 283.823282c-62.097094 82.910801-88.243239 185.087183-73.450025 287.607593s68.461616 193.34386 151.372417 255.440954c171.326054 128.322526 414.898035 93.403662 543.220561-77.922392 33.542752-44.895683 56.592642-95.123803 68.289602-149.308248 3.78431-17.373425 21.157736-28.554342 38.359147-24.770032 17.373425 3.78431 28.554342 20.985721 24.770032 38.359147-13.761129 63.473207-40.59533 122.130018-79.814547 174.422308-72.417941 96.67193-178.378633 159.45708-298.100454 176.658492C559.217873 967.579372 537.372081 969.127499 515.698303 969.127499z"
          ></path>
        </g>
      </svg>
      <slot></slot>
    </button>
  </div>
</template>

<script lang="babel">
  import BtnMixins from '../mixins/btnMixins'

  export default {
    name: 'KsNrButton',

    mixins: [BtnMixins]
  }
</script>

<style lang="scss">
  @import "../styles/NrButton";
</style>
