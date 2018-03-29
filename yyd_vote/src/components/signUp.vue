<template>
  <div id="signUp">
    <tpSwipe></tpSwipe>
    <div class="mt-4 pt-1 mb-3 text-center">
      <img src="../../static/images/apply.png"/>
    </div>
    <form class="m-3">
      <div class="title py-2">
        <p class="ml-3 mb-0">填 写 信 息</p>
      </div>
      <div class="userInfo">
        <div class="form-group row p-3" style="margin: 0 auto;">
          <label for="userName" class="col-2 col-form-label pr-0 pl-0 text-left">昵称:</label>
          <div class="col-10 pr-0">
            <input id="userName" class="form-control" type="text" placeholder="请输入您的昵称"/>
          </div>
        </div>

        <div class="form-group row pl-3 pr-3 " style="margin: 0 auto;">
          <label for="tel" class="col-2 col-form-label pr-0 pl-0 text-left">手机号:</label>
          <div class="col-10 pr-0">
            <input id="tel" class="form-control" type="text" placeholder="请输入您的手机号"/>
          </div>
        </div>

        <div class="form-group pt-3 pl-3 pr-3">
          <label>请上传您的参赛图片（至少一张）</label>
          <div class="textDec">
            <textarea class="form-control" rows="1" placeholder="这一刻的想法......"
                      style="border: none;outline:none;border-bottom: 1px solid #dddddd;border-bottom-right-radius: 0px;border-bottom-left-radius: 0px;"></textarea>
            <div class="m-2 addImg">
              <img src="../../static/images/uploadImg.png"/>
            </div>
          </div>
        </div>

        <div class="text-center px-3">
          <button type="submit" class="btn form-control py-1 font-weight-bold">提交报名</button>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped>
  button {
    background-color: #2893D1;
    color: #fff;
    font-family: "Adobe 宋体 Std L";
  }

  button::before {
    background-color: #2893D1;
    color: #fff;
  }

  button::after {
    background-color: #2893D1;
    color: #fff;
  }

  .textDec {
    border: 1px solid #2893D1;
    border-radius: 5px;
  }

  .addImg {
    border: 1px solid #2893D1;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 55px
  }

  .form-control {
    border: 1px solid #2893D1;
  }

  .userInfo {
    height: 360px;
    width: 100%;
    background: url('../../static/images/submit-bg.png') no-repeat;
    background-size: cover;
    color: #666;
    font-size: 15px;
  }

  .title {
    font-size: 18px;
    background: #2893D1;
    text-align: left !important;
    font-family: "Adobe 宋体 Std L";
    font-weight: bold;
    color: #fff;
    -webkit-border-radius: 10px 10px 0 0;
    -moz-border-radius: 10px 10px 0 0;
    border-radius: 10px 10px 0 0;
  }

  .img_load {
    border: 1px solid grey;
    width: 80px;
    height: 80px;
  }

  textarea:focus {
    outline: none !important;
    border: none !important;
  }

  .textarea {
    border: none;
    margin-top: 0px;
    border-radius: 0px;
  }

  .text_bord {
    border: 1px solid gainsboro;
    background: white;
  }
</style>

<script>
  import tpSwipe from './tpSwipe.vue'

  export default {
    name: 'signUp',
    data() {
      return {}
    },
    components: {
      tpSwipe
    }
  }
</script>
