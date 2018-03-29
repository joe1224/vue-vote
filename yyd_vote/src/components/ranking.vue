<template>
  <div id="ranking">
    <tpSwipe></tpSwipe>
    <div class="text-center">
      <img src="../../static/images/signup-btn.png" style="margin-top: -3%;position: relative; z-index: 1"/>
    </div>
    <flexbox class="text-center pl-2 pr-2" style="color: #0366A5;font-size: 12px;">
      <flexbox-item class="flex-num">
        <div>参与选手</div>
        <div>888</div>
      </flexbox-item>
      <flexbox-item class="flex-num">
        <div>累计投票</div>
        <div>1286548</div>
      </flexbox-item>
      <flexbox-item class="flex-num">
        <div>访问人数</div>
        <div>88888</div>
      </flexbox-item>
    </flexbox>
    <div style="border: 2px dashed #FFB100;border-radius: 15px;margin-top: 60px;" class="mx-3 mb-3 pb-3">
      <div style="margin-top: -53px;text-align: center">
        <img src="../../static/images/rank-title.png"/>
      </div>
      <div class="rankList mx-3 row align-items-center mt-4" v-for="(item,index) in rankLists" :key="index">
        <div class="pl-1">
          <img style="width: 60px;height: 60px;" class="img-fluid rankImg" :src="item.headImgUrl"/>
        </div>
        <div class="ml-3 pt-1 pb-1">
          <div style="font-size: 13px;">
            <span style="color: #FFB100;">{{item.voteid}}号</span>
            <span class="ml-4" style="color: #333333;">{{item.realname}}</span>
          </div>
          <div style="font-size: 12px;color: #666666;">
            <b style="color: #FF0101;font-size: 18px;">{{item.votecount}}</b>票
          </div>
          <div style="color: #999999;font-size: 11px;">{{item.content}}</div>
        </div>
        <div class="mr-3 nn">
          <b class="nnText">{{item.rank}}</b>
        </div>
        <div style="margin: auto 0 auto auto" class="mr-2 ml-0">
          <img style="width: 30px;height: 30px;vertical-align: middle;" class="img-fluid"
               src="../../static/images/nav-icon.png"/>
        </div>
      </div>

    </div>
  </div>
</template>
<style scoped>
  .nn {
    margin: 0 0 auto auto;
    width: 41px;
    height: 42px;
    background: url("../../static/images/rank-No1.png") no-repeat;
    background-size: cover;
    text-align: center;
  }

  .nnText {
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    line-height: 31px;
  }

  .rankList {
    background: #fff;
    border: 1px solid rgba(243, 245, 52, 0.69);
    border-radius: 50px;
  }

  .rankImg {
    border-radius: 100%;
    border: 2px dashed #FFB100;
  }

  .flex-num {
    width: 121px;
    height: 74px;
    text-align: center;
    padding: 27px 0px 0px 0px;
    background: url("../../static/images/data-bg.png") center center no-repeat;
    background-size: contain;
  }

  #ranking {
    /*text-align: center;*/
    background-color: #D4F0FC;
  }
</style>
<script>
  import tpSwipe from './tpSwipe.vue'
  import {Flexbox, FlexboxItem} from 'vux'
  import APIS from '../api/index'

  export default {
    components: {
      FlexboxItem,
      Flexbox,
      tpSwipe
    },
    data() {
      return {
        API_ROOT: APIS.API_ROOT,
        rankLists:[]
      }
    },
    mounted() {
      this.rankingLists();
    },
    methods: {
      rankingLists() {
        APIS.getRankList().then((res) => {
          this.rankLists = res.data;
          console.log(res.data);
        }, (res) => {
          console.log(res + "请求错误")
        })
      }
    }
  }
</script>
