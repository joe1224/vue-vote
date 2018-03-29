<template>
  <div>
    <flexbox>
      <flexbox-item class="flex-demo">
        <div>参与选手</div>
        <div>888</div>
      </flexbox-item>
      <flexbox-item class="flex-demo">
        <div>累计投票</div>
        <div>1286548</div>
      </flexbox-item>
      <flexbox-item class="flex-demo">
        <div>访问人数</div>
        <div>88888</div>
      </flexbox-item>
    </flexbox>
    <div style="color: #F98A24;margin: 20px 0px;">
      <p>2018欢迎全国小桔人报名参加</p>
    </div>
    <div class="li">
      <div class="fl">
        <img style="width: 40px;height: 40px;" src="../../static/images/jb.png"/>
      </div>
      <div class="fl">
				<span>
						距离投票结束还有:
				</span>
        <p>
          00天00时00分00秒
        </p>
      </div>
    </div>
  </div>

</template>
<style scoped>
  .flex-demo {
    text-align: center;
    padding: 20px 0px 0px 0px;
  }

  .flex-demo div:first-child {
    font: normal normal bold 18px/25px "宋体";
  }

  .li {
    overflow: hidden;
    display: inline-block;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  p {
    margin: 0px;
    padding: 0px;
  }
</style>
<script>

  import Flexbox from '../../node_modules/vux/src/components/flexbox/flexbox.vue'
  import FlexboxItem from '../../node_modules/vux/src/components/flexbox/flexbox-item.vue'

  export default {
    data () {
      return {}
    },
    components: {
      FlexboxItem,
      Flexbox
    }
  }
</script>
