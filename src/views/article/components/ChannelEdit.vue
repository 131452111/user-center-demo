<script setup lang="ts">
import { ref } from 'vue'
import { articleStore } from '@/stores/modules/article.ts'
import { ElMessage } from 'element-plus'

const article = articleStore()
const dialogVisible = ref(false) // 控制弹窗显示隐藏
const formDataRef = ref()
const formData = ref({
  cate_name: '',
  cate_alias: '',
  id: NaN,
  time: Date.now()
})
const rules = ref({
  cate_name: [
    { required: true, message: '请输入文章名称', trigger: 'blur' },
    { pattern: /^\S{1,10}$/, message: '分类名必须是1-10位非空字符', trigger: 'blur' }
  ],
  cate_alias: [
    { required: true, message: '请输入文章别名', trigger: 'blur' },
    { pattern: /^[a-zA-Z0-9]{1,15}$/, message: '分类名必须是1-15位的字母或数字', trigger: 'blur' }
  ]
})

const onSubmit = async () => {
  if (!formDataRef.value) {
    console.error('formDataRef 未正确引用表单实例');
    return;
  }
  await formDataRef.value.validate()
  const isEdit = formData.value.id
  if (isEdit) {
    // 编辑
    article.updateArticleChannelItem(formData.value)
    ElMessage.success('编辑成功')
  } else {
    // 添加
    formData.value.id = Date.now()
    formData.value.time = Date.now()
    article.addArticleItem(formData.value)
    ElMessage.success('添加成功')
  }
  dialogVisible.value = false
}

// 组件对外暴露一个方法 open，基于open传来的参数，区分添加还是编辑
// open({}) => {}  空对象则表示添加， open({id, cate_name, ...}) => {} 有值则表示编辑
// open调用后可以打开弹窗
const open = (row) => {
  console.log(row)
  dialogVisible.value = true
  formData.value = { ...row }
}

defineExpose({
  open
})
</script>

<template>
  <el-dialog v-model="dialogVisible" :title="formData.id ? '编辑分类' : '添加分类'" width="500">
    <el-form ref="formDataRef" :model="formData" :rules="rules" style="padding: 0 30px">
      <el-form-item label="文章名称" prop="cate_name">
        <el-input v-model="formData.cate_name" placeholder="请输入文章名称"></el-input>
      </el-form-item>
      <el-form-item label="文章别名" prop="cate_alias">
        <el-input v-model="formData.cate_alias" placeholder="请输入文章别名"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="less"></style>
