<template>
  <div>
    <div class="mx-2">
      <input class="form-control" placeholder="搜索：输入选项编号或姓名"/>
    </div>
    <div>
      <grid :cols="2" >
        <grid-item v-for="(item,index) in lists" :key="index">
          <img style="width: 130px;height: 140px;" :src="item.img">
          <div>
            <span class="mr-2">{{item.num}}</span>
            <span class="ml-2">{{item.name}}</span>
          </div>
          <div>
            <x-button plain mini type="primary" class="custom-primary-red px-4">投票</x-button>
            <span>{{item.tab_text}}</span>
          </div>
        </grid-item>
      </grid>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .custom-primary-red {
    border-radius: 100px !important;
    border-color: #17CE52 !important;
    color: #ffffff !important;
    background: rgba(23, 206, 82, 0.6);
    &:active {
      border-color: rgba(23, 206, 82, 0.6) !important;
      color: rgba(23, 206, 82, 0.6) !important;
      background: transparent;
    }
  }

  a {
    text-decoration: none;
  }
</style>
<script>

  import MtSearch from '../../node_modules/mint-ui/packages/search/src/search.vue'
  import { Grid, GridItem, XButton } from 'vux'
  import APIS from '../api/index'
  export default {
    data () {
      return {
        lists:[],
        API_ROOT: APIS.API_ROOT
      }
    },
    components: {
      XButton,
      MtSearch,
      Grid,
      GridItem
    },
    mounted() {
      this.requestLists();
    },
    methods: {
      requestLists(){
        this.$http.get("http://oxl77t8if.bkt.clouddn.com/listData.json").then((res)=>{
          this.lists = res.data.goods.lists;
        },(res)=>{
          console.log(res+ "请求错误")
        })
      }
    }
  }
</script>
