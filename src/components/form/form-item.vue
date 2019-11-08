<template>
  <div class="smart-form-item">
    <div class="input-wrapper">
      <input type="text" placeholder="手机号或邮箱">
      <div class="login-error"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "form-item",
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  @import './form.less';
</style>
