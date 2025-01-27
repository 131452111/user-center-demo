<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { userResiterService } from '@/api/user.ts'

const registeredFormRef = ref(null)

const registeredForm = ref({  // 表单属性
  userAccount: '',
  password: '',
  confirmPassword: ''
})

const resetForm = () => { // 重置表单
  registeredForm.value = {
    userAccount: '',
    password: '',
    confirmPassword: ''
  }
}

const rules = {
  userAccount: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { patten: /^\S{6,16}$/, message: '密码长度为6~16位非空字符', trigger: 'blur' },
  ],
  confirmPassword: [
    {required: true, message: '请输入确认密码', trigger: 'blur'},
    {validator: (rule, valid: string, callback) => {
      valid === registeredForm.value.password ? callback() : callback(new Error('两次密码不一致'))
    }, trigger: 'blur'}
  ]
}

const registered = async () => {
  if (!registeredFormRef.value) return
  if (await registeredFormRef.value.validate()) {
    await userResiterService(registeredForm.value.userAccount, registeredForm.value.password)
    ElMessage.success('注册成功!')
  } else {
    ElMessage.error('表单验证失败!')
  }
}

</script>

<template>
  <div class="UserRegistered flex flex-col items-center justify-center mt-36 w-2/5 mx-auto shadow-md border-2 border-gray-300 rounded-md mb-72" style="height: 300px">
    <h2 class="text-4xl">注册账号</h2>
    <el-form :model="registeredForm" label-width="auto" :rules="rules" ref="registeredFormRef" style="max-width: 600px">
      <el-form-item label="账号" style="margin-top: 30px" prop="userAccount">
        <el-input v-model="registeredForm.userAccount" placeholder="请输入账号" style="width: 240px" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registeredForm.password" style="width: 240px" type="password" placeholder="请输入密码" show-password />
      </el-form-item>
      <el-form-item label="确认密码" style="margin-bottom: 0" prop="confirmPassword">
        <el-input v-model="registeredForm.confirmPassword" style="width: 240px" type="password" placeholder="请输入确认密码" show-password />
      </el-form-item>
      <el-form-item style="height: 10px; padding-left: 220px">
        <a class="text-blue-400 hover:text-black" href="/user/login">已有账号？点我登录</a>
      </el-form-item>
      <el-form-item style="padding-left: 60px">
        <el-button type="primary" @click="registered" style="margin-right: 30px">注册</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<style scoped lang="less">

</style>
