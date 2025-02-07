<script setup lang="ts">
import { ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
import PageContainer from '@/views/article/components/PageContainer.vue'

// 表单数据
const pwdForm = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
});

// 表单引用
const pwdFormRef = ref<FormInstance>();

// 校验规则
const rules: FormRules = {
  old_pwd: [
    { required: true, message: '请输入原密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度必须在6-15位之间', trigger: 'blur' }
  ],
  new_pwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度必须在6-15位之间', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value === pwdForm.value.old_pwd) {
          callback(new Error('新密码不能与原密码相同'));
        } else {
          callback();
        }
      },
      trigger: 'blur'
    }
  ],
  re_pwd: [
    { required: true, message: '请再次输入新密码', trigger: 'blur' },
    { min: 6, max: 15, message: '密码长度必须在6-15位之间', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== pwdForm.value.new_pwd) {
          callback(new Error('两次输入的新密码不一致'));
        } else {
          callback();
        }
      },
      trigger: 'blur'
    }
  ]
};

// 提交表单
const submitForm = async () => {
  if (!pwdFormRef.value) return;
  await pwdFormRef.value.validate((valid) => {
    if (valid) {
      console.log('表单校验通过，可以提交数据');
      // 这里可以调用 API 提交表单数据
    } else {
      console.log('表单校验失败');
    }
  });
};

// 重置表单
const resetForm = () => {
  if (!pwdFormRef.value) return;
  pwdFormRef.value.resetFields();
};
</script>


<template>
  <page-container title="重置密码">
    <template #default>
      <el-form
        ref="pwdFormRef"
        :model="pwdForm"
        :rules="rules"
        label-width="120px"
        class="pwd-form"
      >
        <!-- 第一行：原密码 -->
        <el-form-item label="原密码" prop="old_pwd">
          <el-input
            v-model="pwdForm.old_pwd"
            type="password"
            placeholder="请输入原密码"
            show-password
          ></el-input>
        </el-form-item>

        <!-- 第二行：新密码 -->
        <el-form-item label="新密码" prop="new_pwd">
          <el-input
            v-model="pwdForm.new_pwd"
            type="password"
            placeholder="请输入新密码"
            show-password
          ></el-input>
        </el-form-item>

        <!-- 第三行：确认密码 -->
        <el-form-item label="确认密码" prop="re_pwd">
          <el-input
            v-model="pwdForm.re_pwd"
            type="password"
            placeholder="请再次输入新密码"
            show-password
          ></el-input>
        </el-form-item>

        <!-- 第四行：按钮 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm">修改密码</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </template>
  </page-container>
</template>

<style scoped lang="less">
.pwd-form {
  max-width: 400px;
  margin: 6rem auto 0;
}
</style>
