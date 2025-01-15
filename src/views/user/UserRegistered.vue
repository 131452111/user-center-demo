<script setup lang="ts">
import { ref } from 'vue'

const registeredFormRef = ref(null)

const form = ref({  // 表单属性
  userAccount: '',
  password: '',
  confirmPassword: ''
})

const resetForm = () => { // 重置表单
  form.value = {
    userAccount: '',
    password: '',
    confirmPassword: ''
  }
}

const submitForm = () => {
  console.log(registeredFormRef)
}

const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6位', trigger: 'blur' },
  ],
}

</script>

<template>
  <div class="UserRegistered flex items-center justify-center mt-20 w-2/5 mx-auto shadow-md border-2 border-gray-300 rounded-md" style="height: 300px">
    <el-form :model="form" label-width="auto" :rules="rules" ref="registeredFormRef" style="max-width: 600px">
      <el-form-item label="账号" style="margin-top: 30px">
        <el-input v-model="form.userAccount" placeholder="请输入账号" style="width: 240px" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" style="width: 240px" type="password" placeholder="请输入密码" show-password />
      </el-form-item>
      <el-form-item label="确认密码" style="margin-bottom: 0">
        <el-input v-model="form.confirmPassword" style="width: 240px" type="password" placeholder="请输入确认密码" show-password />
      </el-form-item>
      <el-form-item style="height: 10px; padding-left: 220px">
        <a class="text-blue-400 hover:text-black" href="/user/login">已有账号？点我登录</a>
      </el-form-item>
      <el-form-item style="padding-left: 60px">
        <el-button type="primary" @click="submitForm" style="margin-right: 30px">注册</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<style scoped lang="less">

</style>
