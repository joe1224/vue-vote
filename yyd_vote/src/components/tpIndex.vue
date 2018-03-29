<template>
  <div id="tpIndex">
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
    <div class="mt-3 mb-3 text-center">
      <img src="../../static/images/timekeeping.png"/>
    </div>

    <div class="text-center">
      <b class="p-1 countTime bgBlue">1</b>
      <b class="p-1 countTime bgBlue">8</b>
      <span style="color: #2893D1;font-family: 'Adobe 宋体 Std L';">天</span>
      <b class="p-1 countTime bgBlue">1</b>
      <b class="p-1 countTime bgBlue">8</b>
      <span style="color: #2893D1;font-family: 'Adobe 宋体 Std L';">时</span>
      <b class="p-1 countTime bgBlue">1</b>
      <b class="p-1 countTime bgBlue">8</b>
      <span style="color: #2893D1;font-family: 'Adobe 宋体 Std L';">分</span>
      <b class="p-1 countTime bgYellow">1</b>
      <b class="p-1 countTime bgYellow">8</b>
      <span style="color: #2893D1;font-family: 'Adobe 宋体 Std L';">秒</span>
    </div>

    <div class="mt-4 col-12 row" style="margin: 0 auto;">
      <input class="searchID col-9 text-left" type="text" placeholder="输入编号或姓名进行查询......"/>
      <img src="../../static/images/search-btn.png" style="vertical-align: middle;margin: auto 0 auto auto;"/>
    </div>

    <div class="lists m-1 pt-2 pb-2 px-2 mt-4">

      <div class="row mt-2" style="margin: 0 auto;">
        <div class="mb-3" style="margin: 0 auto;" v-for="(item,index) in lists" :key="index">
          <router-link to="/tpDetails">
            <div class="card">
              <img style="width: 150px;height: 150px;" class="card-img-top img-fluid" :src="item.url"/>
              <div class="card-body row mt-2" style="margin: 0 auto">
                <h6 class="mr-3 pNum">{{item.votecount}}<span class="vote">票</span></h6>
                <h6 class="ml-3 pName">{{item.realname}}</h6>
              </div>
              <b class="text-center userNo">
                {{item.voteid}}
              </b>
            </div>
          </router-link>
          <a class="btn btn-warning w-100 tpBtn">投 票</a>
        </div>


      </div>

    </div>
  </div>
</template>

<script>

  import tpSwipe from './tpSwipe.vue'
  import {Flexbox, FlexboxItem} from 'vux'
  import APIS from '../api/index'

  export default {
    components: {
      tpSwipe,
      Flexbox,
      FlexboxItem
    },
    name: 'tpIndex',
    data() {
      return {
        lists: [],
        API_ROOT: APIS.API_ROOT
      }
    },
    mounted() {
      this.requestLists();
    },
    methods: {
      requestLists() {
        APIS.getList().then((res) => {
          this.lists = res.data.list;
          let i;
          let urls = "http://yydshare.zgfxsapp.com/";
          for(i=0;i<this.lists.length;i++){
            this.lists[i].voteid = '00'+this.lists[i].voteid+'号';
            this.lists[i].url = urls+this.lists[i]["url"].split(",")[1];
          }
          console.log(res)
          console.log(res.data.list);
        }, (res) => {
          console.log(res + "请求错误")
        })
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .userNo {
    background: rgba(0, 0, 0, 0.5);
    color: #FFB100;
    font-size: 13px;
    width: 45px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    position: absolute;
  }

  .flex-num {
    width: 121px;
    height: 74px;
    text-align: center;
    padding: 27px 0px 0px 0px;
    background: url("../../static/images/data-bg.png") center center no-repeat;
    background-size: contain;
  }

  .countTime {
    color: #fff;
    font-size: 23px;
    border-radius: 50px;
  }

  .bgBlue {
    background: #2893D1;
  }

  .bgYellow {
    background: #FFB100;
  }

  .searchID {
    border-radius: 50px;
    outline: none;
    border: 1px solid #2893D1;
  }

  .searchBtn {
    width: 75px;
    background: url("../../static/images/search-btn.png") no-repeat;
    border: none;
    outline: none;
    color: #fff;
  }

  .card {
    border-radius: 6px 6px 0px 0px;
  }

  .card-body {
    padding: 0px;
  }

  .lists {
    border: 3px dotted #2893D1;
    border-bottom: none;
  }

  .tpBtn {
    color: #fff !important;
    font-family: "Adobe 宋体 Std L";
    border-radius: 0px 0px 10px 10px;
    font-weight: bold;
  }

  .pNum {
    color: red;
    font-weight: bold;
    font-size: 18px;
  }

  .pName {
    color: #666;
  }

  .vote {
    color: #666;
    font-size: 12px;
  }
</style>
