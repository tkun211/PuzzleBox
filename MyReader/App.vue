<script>
  export default {
    onLaunch: function() {
      console.log('App Launch')
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style>
  /*每个页面公共css */

  page,
  uni-page {
    background-color: var(--c-bg-3);
    color: var(--c-txt-1);
    font-size: var(--f-size-2);

    /* font-size */
    --f-size-1: 24rpx;
    --f-size-2: 28rpx;
    --f-size-3: 32rpx;
    --f-size-4: 36rpx;
    --f-size-5: 40rpx;
    --f-size-6: 44rpx;

    /* color | background */
    --c-txt-1: #FFFFFF;
    --c-txt-2: #95A1A6;
    --c-txt-3: #cdced0;

    --c-bg-1: #000000;
    --c-bg-2: #7E7F94;
    --c-bg-3: #0b0c21;

    /* padding-left | right */
    --pad-lr: 32rpx;

    /* navbar-height */
    --h-head: 96rpx;

    /* input placeholder text color */
    --c-input-holder: #696a7f;


  }

  /* init button */

  uni-button,
  button {
    margin: 0;
    padding: 0;
    color: var(--c-txt-1);
    background-color: var(--c-bg-1);
  }

  uni-button:after,
  button:after {
    border: none;
    width: 100%;
    height: 100%;
  }

  .button-hover {
    color: inherit;
    background-color: inherit;
  }

  /* init img */
  uni-image>img,
  img {
    vertical-align: middle;
  }

  .l-status {
    width: 100%;
    height: var(--status-bar-height);
    background-color: transparent;
  }

  /* clear both  */
  .l-clear-both:after {
    content: ' ';
    display: block;
    width: 0;
    height: 0;
    clear: both;
    zoom: 1;
  }

  /* navbar -fixed -placeholder */
  .content {
    position: relative;
  }

  .l-fixed {
    position: fixed;
    width: 100%;
    z-index: 999;
    top: 0;
    background-color: var(--c-bg-3);
  }

  .l-placeholder {
    width: 100%;
    /* #ifndef MP-WEIXIN */
    height: calc(var(--status-bar-height) + var(--h-head));
    /* #endif */

    /* #ifdef MP-WEIXIN */
    height: var(--h-head);
    /* #endif */
  }

  /* l-head-search */

  .l-head {
    padding: 0 32rpx;
    display: flex;
    align-items: center;
    height: var(--h-head);
  }

  .l-search {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 16rpx 26rpx;
    margin-right: 16rpx;
    border-radius: 32rpx;
    background-color: #222338;
  }

  .l-icon-search {
    width: 29rpx;
    height: 29rpx;
  }

  .l-search-input {
    flex: 1;
    padding: 0 12rpx;
  }

  .l-holder {
    color: var(--c-input-holder);
  }

  /* l-swiper */

  .l-body {
    padding: 0 var(--pad-lr);
  }

  .l-swiper {
    margin: 36rpx 0 0;
    height: 248rpx;
  }

  .l-swiper-item {
    height: 80%;
    overflow: hidden;
    border-radius: 26rpx;
  }

  .l-carousel-img {
    width: 100%;
    height: 100%;
  }

  /* l-icon */

  .l-icon-more {
    width: 30rpx;
    /* height: 27rpx; */
    vertical-align: middle;
    margin-left: 12rpx;
  }

  /*每个页面公共css */
  @font-face {
    font-family: 'iconfont';
    /* project id 1997429 */
    src: url('https://at.alicdn.com/t/font_1997429_8xzvctxta3u.eot');
    src: url('https://at.alicdn.com/t/font_1997429_8xzvctxta3u.eot?#iefix') format('embedded-opentype'),
      url('https://at.alicdn.com/t/font_1997429_8xzvctxta3u.woff2') format('woff2'),
      url('https://at.alicdn.com/t/font_1997429_8xzvctxta3u.woff') format('woff'),
      url('https://at.alicdn.com/t/font_1997429_8xzvctxta3u.ttf') format('truetype'),
      url('https://at.alicdn.com/t/font_1997429_8xzvctxta3u.svg#iconfont') format('svg');
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  view {
    box-sizing: border-box;
  }

  .keywords {
    border-bottom: 1px solid blue;
  }
</style>