<script setup lang="ts">
import PageContainer from '@/views/article/components/PageContainer.vue'
import { ref } from 'vue';
import { ElMessage } from 'element-plus';

// 导入user store
import { useUserStore } from '@/stores/modules/user';
const userStore = useUserStore()

// 表单数据
const formData = ref({
  username: 'admin', // 示例登录名称，实际可从接口获取
  nickname: '',
  email: ''
})
formData.value.username = userStore.userInfo.username
formData.value.nickname = userStore.userInfo.nickname
formData.value.email = userStore.userInfo.email

// 校验规则
const rules = {
  nickname: [
    { required: true, message: '昵称不能为空', trigger: 'blur' },
    { min: 2, max: 10, message: '昵称必须是2-10位的非空字符串', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '邮箱不能为空', trigger: 'blur' },
    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
  ]
};

// 表单引用
const userForm = ref();

// 提交表单
const submitForm = () => {
  userForm.value.validate((valid: boolean) => {
    if (valid) {
      // 表单校验通过，执行提交操作
      ElMessage.success('提交成功！');
      console.log('提交的数据：', formData.value);
      // 这里可以调用接口提交数据
    } else {
      // 表单校验失败
      ElMessage.error('表单校验失败，请检查输入内容！');
    }
  });
};
</script>

<template>
  <page-container title="基本资料">
    <template #default>
      <el-form
        ref="userForm"
        :model="userStore.userInfo"
        :rules="rules"
        label-width="120px"
        class="user-profile-form"
      >
        <!-- 第一行：登录名称（禁用状态） -->
        <el-form-item label="登录名称">
          <el-input v-model="formData.username" disabled></el-input>
        </el-form-item>

        <!-- 第二行：用户昵称 -->
        <el-form-item label="用户昵称" prop="nickname">
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>

        <!-- 第三行：用户邮箱 -->
        <el-form-item label="用户邮箱" prop="email">
          <el-input v-model="formData.email" type="email"></el-input>
        </el-form-item>

        <!-- 第四行：提交按钮 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交修改</el-button>
        </el-form-item>
      </el-form>
    </template>
  </page-container>
</template>

<style scoped lang="less">
.user-profile-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
