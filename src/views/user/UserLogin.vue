<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const loginFormRef = ref(null)
const loginForm = reactive({
  userAccount: '',
  password: '',
  isAgree: false
})

const loginRules = {
  userAccount: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  // required: true 表示必填项，message: '请输入用户名' 表示当用户未输入时，显示的错误提示信息，trigger: 'blur' 表示在失去焦点时触发验证 pattern: /^[a-zA-Z0-9]{6,16}$/ 表示只能输入6-16位的字母或数字
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 16, message: '密码长度为6~16位', trigger: 'blur' },// min: 6 表示密码的最小长度为6位 max: 16 表示密码的最大长度为16位
  ],
  isAgree: [
    { validator: (rule, value: boolean, callback) => {
      // rule 是当前验证规则，value 是当前验证的值，callback 是回调函数 - 相当于 resolve 和 reject
      // 如果校验成功就执行 callback() ，如果校验失败就执行 callback(new Error('错误信息'))
      value ? callback() : callback(new Error('请阅读并同意用户协议'))
      }, trigger: 'change' } // required 检测不了布尔值，只能检测 null undefined ''（空字符串）
  ]
}

const login = async () => {
  if (!loginFormRef.value) return
  await loginFormRef.value.validate((valid: boolean, fields) => {
    if (valid) {
      ElMessage.success('登录成功!')
      setTimeout(() => {
        // 跳转到首页
        window.location.href = '/'
      }, 3000)
      // 这里可以调用登录接口
    } else {
      ElMessage.error('表单验证失败!')
    }
 })
}
</script>

<template>
  <!--登录表单  el-form > el-form-item > el-input-->
  <div
    class="UserRegistered flex flex-col items-center justify-center mt-36 w-2/5 mx-auto shadow-md border-2 border-gray-300 rounded-md mb-72"
    style="height: 300px"
  >
    <div class="text-4xl">登录</div>
    <el-form
      :model="loginForm"
      label-width="auto"
      :rules="loginRules"
      ref="loginFormRef"
      style="max-width: 600px"
    >
      <el-form-item label="账号" prop="userAccount" style="margin-top: 30px">
        <el-input v-model="loginForm.userAccount" placeholder="请输入账号" style="width: 310px" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginForm.password"
          style="width: 310px"
          type="password"
          placeholder="请输入密码"
          show-password
        />
      </el-form-item>
      <el-form-item prop="isAgree">
        <el-checkbox v-model="loginForm.isAgree" style="margin-right: 10rem; padding-left: 1rem">
          <a href="#" class="text-blue-400 hover:text-black">我已阅读并同意用户协议</a>
        </el-checkbox>
        <a class="text-blue-400 hover:text-black" href="/user/registered" style="margin-left: 30px">没有账号？点我注册</a>
      </el-form-item>
      <el-form-item style="padding-left: 0px">
        <el-button type="primary" @click="login" style="width: 350px; margin-left: 1rem"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="less"></style>
