<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const loginFormRef = ref(null)
const loginForm = reactive({
  userAccount: '',
  password: '',
})

const rules = {
  userAccount: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' },
  ],
}

const submitForm = () => {
  const isValid = true
  if (isValid) {
    ElMessage.success('登录成功!')
    setTimeout(() => {
      // 跳转到首页
      window.location.href = '/'
    }, 3000)
    // 这里可以调用登录接口
  } else {
    ElMessage.error('表单验证失败!')
  }
}
</script>

<template>
<!--登录表单  el-form > el-form-item > el-input-->
  <div class="UserRegistered flex items-center justify-center mt-20 w-2/5 mx-auto shadow-md border-2 border-gray-300 rounded-md" style="height: 300px">
    <el-form :model="loginForm" label-width="auto" :rules="rules" ref="loginFormRef" style="max-width: 600px">
      <el-form-item label="账号" style="margin-top: 30px">
        <el-input v-model="loginForm.userAccount" placeholder="请输入账号" style="width: 310px" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password" style="width: 310px;" type="password" placeholder="请输入密码" show-password />
      </el-form-item>
      <el-form-item style="height: 10px;margin-bottom: 40px">
        <el-checkbox>
          <a class="text-blue-400 hover:text-black mr-52" href="/user/forget">用户平台使用协议</a>
        </el-checkbox>
        <a class="text-blue-400 hover:text-black" href="/user/registered" style="margin-left: 30px;">没有账号？点我注册</a>
      </el-form-item>
      <el-form-item style="padding-left: 0px">
        <el-button type="primary" @click="submitForm" style="width: 350px">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less">

</style>
