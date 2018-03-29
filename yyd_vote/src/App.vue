<template>
  <div id="app" style="padding-bottom: 60px;">
    <div>
      <mt-tabbar style="height: 50px;" fixed >
        <mt-tab-item v-for="(item,index) in tabs" :key="index" :id="item.id">
          <router-link :to="item.url">
            <div @click="changeState(index)">
              <img slot="icon" :src="item.active?item.tab_img_active:item.tab_img">
            </div>
            <div :class="item.active?item.tab_text_active:item.tab_text" class="mt-1">{{item.name}}</div>
          </router-link>
        </mt-tab-item>
      </mt-tabbar>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import {Tabbar, TabItem} from 'mint-ui'

  export default {
    name: 'App',
    components: {
      TabItem,
      Tabbar,
    },
    beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background:#D4F0FC');
    },
    beforeDestroy () {
      document.querySelector('body').setAttribute('style', '')
    },
    data() {
      return {
//        selected: 'index',
        tabs: [{
          id: 'index',
          name: '首页',
          tab_img: require('../static/images/index.png'),
          tab_img_active: require('../static/images/index-active.png'),
          active: true,
          tab_text_active: 'tab_text_active',
          tab_text: 'tab_text',
          url: '/'
        },
          {
            id: 'rank',
            name: '排名',
            tab_img: require('../static/images/rank.png'),
            tab_img_active: require('../static/images/rank-active.png'),
            active: false,
            tab_text_active: 'tab_text_active',
            tab_text: 'tab_text',
            url: '/ranking'
          },
          {
            id: 'sign_up',
            name: '报名',
            tab_img: require('../static/images/register.png'),
            tab_img_active: require('../static/images/register-active.png'),
            active: false,
            tab_text_active: 'tab_text_active',
            tab_text: 'tab_text',
            url: '/signUp'
          }
        ]
      }
    },
    methods: {
      changeState(item) {
        for (var i = 0; i < this.tabs.length; i++) {
          this.tabs[i].active = false;
          if (i == item) {
            this.tabs[item].active = true
          }
        }
      },
    },
  }
</script>
<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
  }

  .tab_text {
    color: black;
    font-weight: bold;
  }

  .tab_text_active {
    color: dodgerblue;
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
</style>
