<template>
  <div class="login-page">
    <div class="login-inner">
      <div class="title">账号密码登录</div>
      <div class="login-form-item">
        <div class="input-wrapper">
          <input id="username" @blur="onInputBlur('username')" type="text" placeholder="手机号或邮箱" v-model="username.value">
          <p v-show="username.error" @click="onClickError('username')" class="error-tip">{{username.error}}</p>
        </div>
      </div>
      <div class="login-form-item">
        <div class="input-wrapper">
          <input id="password" @blur="onInputBlur('password')" type="password" placeholder="密码" v-model="password.value">
          <p v-show="password.error" @click="onClickError('password')" class="error-tip">{{password.error}}</p>
        </div>
      </div>
      <div class="login-options">
        <div class="_blank"></div>
        <button class="button-plain login-switch-type">忘记密码?</button>
      </div>
      <a-button @click="onClickSubmit" :loading="loading" :disabled="username.value == '' || password.value == ''" type="primary" class="login-submit-btn">登录</a-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        username: {
          value: '',
          error: '',
          key: '手机号或邮箱'
        },
        password: {
          value: '',
          error: '',
          key: '密码'
        },
        loading: false
      }
    },
    methods: {
      onInputBlur(type) {
        if (this[type].value === '') {
          this[type].error = `请输入${this[type].key}`
        }
      },
      onClickError(type) {
        this[type].error = ''
        document.getElementById(type).focus()
      },
      onClickSubmit() {
        console.log('submit')
        // this.loading = true
        this.$store.dispatch('app/setAppState', {test: 1})
      }
    },
  }
</script>

<style lang="less" scoped>
  .login-page {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/login/login-bg.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-inner {
      width: 350px;
      margin: 0 auto;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1);
      box-sizing: border-box;
      padding: 30px;

      .title {
        height: 50px;
        line-height: 50px;
        color: #000;
        font-size: 20px;
        background: url(../assets/logo.png) no-repeat;
        background-size: 50px 50px;
      }

      .login-form-item {
        margin-top: 25px;
        border-bottom: 1px solid #ebebeb;
        display: flex;
        align-items: center;

        .input-wrapper {
          width: 100%;
          height: 36px;
          line-height: 36px;
          padding: 0;
          color: #8590a6;
          border: none;
          position: relative;

          input {
            color: #1a1a1a;
            height: 100%;
            width: 100%;
          }

          .error-tip {
            text-align: left;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            color: red;
            background-color: #fff;
            margin-bottom: 0;
          }
        }
      }

      .login-options {
        margin-top: 12px;
        height: 20px;
        display: flex;
        justify-content: space-between;
        background: #fff;

        .login-switch-type {
          float: right;
          color: #8590a6;
          text-decoration: underline;
        }
      }

      .login-submit-btn {
        color: #fff;
        background-color: #0084ff;
        width: 100%;
        margin-top: 20px;
        height: 36px;
        &.disable {
          opacity: .5;
        }
      }

      .qr-code-type {

      }
    }
  }
</style>
