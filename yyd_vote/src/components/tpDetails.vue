<template>
  <div id="tpDetails">
    <tpSwipe></tpSwipe>
    <div class="text-center">
      <img src="../../static/images/signup-btn.png"/>
    </div>
    <flexbox class="text-center pl-2 pr-2 mt-2" style="color: #0366A5;font-size: 12px;">
      <flexbox-item class="flex-bo">
        <div>票数</div>
        <div>8888票</div>
      </flexbox-item>
      <flexbox-item class="flex-bo">
        <div>排名</div>
        <div>第1名</div>
      </flexbox-item>
    </flexbox>
    <div class="Info mt-4  pb-3 px-2">
      <h5 class="pt-4 pb-2 text-center" style="font-weight: bold;color: #fff;">选 手 信 息</h5>
      <div class="row col-12" style="margin: 0 auto;display: -webkit-box !important;padding-left: 0px !important;padding-right: 0px !important;">
        <div class="col-9 mr-3" style="color: #1D4B65;padding-left: 5px !important;padding-right: 0px !important;">
          <h6>编号：001</h6>
          <h6>昵称：小可爱</h6>
          <h6>个性签名：全宇宙我最可爱不是吗</h6>
        </div>
        <div style="border: 2px dashed #fff;width: 60px;height: 60px;padding: 2px;border-radius: 5px;">
          <img style="border-radius: 5px;width: auto;height: auto;max-width: 100%;max-height: 100%;" class=""
               src="../../static/images/p1.png"/>
        </div>
      </div>
    </div>
    <div class="info_img px-3 mt-3">
      <img class="mb-2 info_img_item" style="border: 2px dotted #FFB100;" src="http://img.new.moh.cc/data/images/zizqkw1503645244/FUJkLTkcebEAtVPOOrdfehwfHcGejl.jpg" />
    </div>
      <!--<div class="col-12">-->
        <!--<button type="button" class="btn btn-warning w-100 btn-lg voteBtn">-->
          <!--<img src="../../static/images/vote.png" style="vertical-align: middle;"/>-->
          <!--<span class="voteTitle">给 TA 投 一 票</span>-->
        <!--</button>-->
      <!--</div>-->
    <div class="col-12 py-2 text-center votebg">
      <a style="background: #FFB100;display: inline-block;border-radius: 6px;" class=" col-11 py-2 mx-3">
        <img src="../../static/images/vote.png"/>
        <span class="voteTitle ml-1">给 TA 投 一 票</span>
      </a>
    </div>
  </div>
</template>
<style>
  .votebg {
    background: rgba(94,94,94,0.6);
    position: fixed;
    bottom: 50px;
  }
  .info_img {
    width: 100%;
    height: auto;
  }

  .info_img_item {
    width: inherit;
    height: auto;
    max-height: 100%;
    max-width: 100%;
  }
  .voteBtn {
    position: fixed;
    bottom: 50px;
  }

  .voteTitle {
    font-weight: bold;
    font-size: 16px;
    color: #fff !important;
    font-family: "Adobe 宋体 Std L";
  }

  .Info {
    width: 358px;
    height: 149px;
    margin: 0 auto;
    background: url("../../static/images/userInfo-bg.png") no-repeat;
    background-size: cover;
  }

  .flex-bo {
    width: 121px;
    height: 74px;
    text-align: center;
    padding: 27px 0px 0px 0px;
    background: url("../../static/images/data-bg.png") center center no-repeat;
    background-size: contain;
  }
</style>
<script>
  import tpSwipe from './tpSwipe.vue'
  import {Flexbox, FlexboxItem, Box, XButton} from 'vux'

  export default {
    name: 'tpDetails',
    data() {
      return {}
    },
    components: {
      XButton,
      Box,
      FlexboxItem,
      Flexbox,
      tpSwipe
    }
  }
</script>
