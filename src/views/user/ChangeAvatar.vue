<script setup lang="ts">
import PageContainer from '@/views/article/components/PageContainer.vue'
import { ElMessage, type UploadProps } from 'element-plus'
import { ref } from 'vue'

const uploadRef = ref()

// 图片上传
const imgUrl = ref('')
const formModel = ref({ cover_img: '' })
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
const onSelectFile = (uploadFile) => {
  // 获取本地预览的地址
  imgUrl.value = URL.createObjectURL(uploadFile.raw)
  formModel.value.cover_img = uploadFile.raw
  console.log(uploadFile)
}
</script>

<template>
<page-container title="更换头像">
  <template #default>
    <div class="avatar-uploader">
      <el-upload
        ref="uploadRef"
        class="avatar-uploader"
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
        :auto-upload="false"
        :on-change="onSelectFile"
        :drag="true"
      >
        <img v-if="imgUrl" :src="imgUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
    </div>
    <div class="button mt-10">
      <el-button type="primary" @click="uploadRef.$el.querySelector('input').click()"><el-icon class="mr-3"><Plus /></el-icon>选择图片</el-button>
      <el-button type="success"><el-icon class="mr-3"><Plus /></el-icon>上传头像</el-button>
    </div>
  </template>
</page-container>
</template>

<style scoped lang="less">
.avatar-uploader {
  border: 1px solid #9499a0;
  width: 300px;
  :hover {
    border-color: var(--el-color-primary);
  }
}
.avatar-uploader .avatar {
  margin: 0 auto;
  width: 178px;
  height: 178px;
  display: block;
}
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
