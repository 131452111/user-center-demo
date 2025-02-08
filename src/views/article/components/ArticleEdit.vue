<script setup lang="ts">
import { ref } from 'vue'
import ChannelSelect from '@/views/article/components/ChannelSelect.vue'
import { ElMessage, type UploadProps } from 'element-plus'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

interface FormModel {
  title: string, // 文章标题
  cate_id: string, // 分类id
  cover_img: string | File, // 封面图片 file 对象
  content: string, // 文章内容
  state: string, // 状态
}

interface Article {
  id: number, title: string, pub_date: string, state: string, cate_name: string
}

interface UploadFile {
  raw: File; // 或者根据实际情况定义 raw 的类型
}

// 向父组件提交数据
const emit = defineEmits(['success'])
// 控制抽屉显示隐藏
const visibleDrawer = ref(false)
// 抽屉标题
const title = ref('')
// 默认数据
const defaultFormModel = {
  title: '', // 文章标题
  cate_id: '', // 分类id
  cover_img: '', // 封面图片 file 对象
  content: '', // 文章内容
  state: '', // 状态
}

// 准备数据
const formModel = ref<FormModel>({ ...defaultFormModel })
const editorRef = ref()

const open = (row: Article) => {
  visibleDrawer.value = true // 显示抽屉
  // console.log(row)
  if (row.id) {
    // 编辑
    title.value = '编辑文章'
    // 需要基于 row.id 发送请求，获取编辑对应的详情数据，进行回显
    formModel.value.title = row.title
    formModel.value.cate_id = row.cate_name
    console.log('编辑回显')
  } else {
    // 添加
    title.value = '添加文章'
    // 重置数据
    formModel.value = { ...defaultFormModel }
    imgUrl.value = ''
    editorRef.value?.setHTML('')
  }
  console.log(row)
}

// 图片上传
const imgUrl = ref('')
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

const onSelectFile = (uploadFile: UploadFile) => {
  // 获取本地预览的地址
  imgUrl.value = URL.createObjectURL(uploadFile.raw)
  formModel.value.cover_img = uploadFile.raw
  console.log(uploadFile)
}

// 改变状态
const onPublish = (state: string) => {
  formModel.value.state = state
  if(state === 'add') {
    emit('success', 'add')
  } else {
    emit('success', 'edit')
  }

}
// 向外暴露方法
defineExpose({ open })
</script>

<template>
  <el-drawer v-model="visibleDrawer" :title="title" direction="rtl" size="50%">
    <el-form label-width="100px" v-model="formModel">
      <el-form-item label="文章标题">
        <el-input placeholder="请输入文章标题" v-model="formModel.title"></el-input>
      </el-form-item>
      <el-form-item label="文章分类">
        <channel-select v-model="formModel.cate_id"></channel-select>
      </el-form-item>
      <el-form-item label="文章封面">
        <!--  此处需要关闭 element plus 的自动上传，不需要配置 action 等参数
              只需要前端的本地预览图片即可，无需在提交前上传图片
              语法： URL.createObjectURL(file) 创建本地预览的地址
        -->
        <el-upload
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
      </el-form-item>
      <el-form-item label="文章内容">
        <div class="editor">
          <QuillEditor v-model:content="formModel.content" content-type="html" ref="editorRef" theme="snow"></QuillEditor>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button @click="onPublish('已发布')" type="primary">发布</el-button>
        <el-button @click="onPublish('草稿')" type="info">草稿</el-button>
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<style lang="less" scoped>
.avatar-uploader {
  border: 1px solid #9499a0;
  :hover {
    border-color: var(--el-color-primary);
  }
}
.avatar-uploader .avatar {
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

.editor {
  width: 100%;
  :deep(.ql-editor) {
    min-height: 150px;
  }
}
</style>
