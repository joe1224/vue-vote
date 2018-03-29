import Vue from 'vue';
import {AjaxPlugin} from 'vux'

Vue.use(AjaxPlugin);
import VueResource from 'vue-resource';

Vue.use(VueResource);


const API_ROOT = 'http://yydshare.zgfxsapp.com';
//http://yydshare.zgfxsapp.com/vote/queryVoteOptionList
const APIS = {
  API_ROOT,
  // 获取选手列表
  getList(){
    return Vue.http.post(API_ROOT + '/vote/queryVoteOptionList');
  },

  //获取排名列表
  getRankList(){
    return Vue.http.post(API_ROOT + '/vote/voteNumRank')
  },

  //提交报名
  toSignUp(){
    return Vue.http.post(API_ROOT + '/vote/addVoteOption')
  },

  //获取微信公众号openId
  getUserOpenId (){
    return Vue.http.get(API_ROOT + '/login/getOpenid')
  },

  //获取搜索信息
  getSearchInfo (){
    return Vue.http.post(API_ROOT + '/vote/querUserInfo')
  },

  //获取参赛选手数、访问量
  getCountInfo(){
    return Vue.http.get(API_ROOT + '/vote/getCountInfo')
  }

};

export default APIS;
