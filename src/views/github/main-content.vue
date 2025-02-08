<script setup lang="ts">
import { ref } from 'vue';
const fileIcon = ref('<svg class="w-4 h-4 fill-current text-gray-400" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>')
const textIcon = ref('<svg class="w-4 h-4 fill-current text-gray-400" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg>')
const fileList = ref([
  [fileIcon.value, 'AutoLegalityMod', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">Bump PKHeX.Core to 24.5.5</a><span class="text-gray-500 text-sm">(<a href="#" class="text-blue-500 hover:underline">#249</a>)</span>', '8 months ago'],
  [fileIcon.value, 'AutoModTests', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">Bump PKHeX.Core to 24.5.5</a><span class="text-gray-500 text-sm">(<a href="#" class="text-blue-500 hover:underline">#249</a>)</span>', '8 months ago'],
  [fileIcon.value, 'PKHeX.Core.AutoMod', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">Bump PKHeX.Core to 24.5.5</a><span class="text-gray-500 text-sm">(<a href="#" class="text-blue-500 hover:underline">#249</a>)</span>', '8 months ago'],
  [fileIcon.value, 'PKHeX.Core.Enhancements', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">Bump PKHeX.Core to 24.5.5</a><span class="text-gray-500 text-sm">(<a href="#" class="text-blue-500 hover:underline">#249</a>)</span>', '8 months ago'],
  [fileIcon.value, 'PKHeX.Core.Injection', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">Bump PKHeX.Core to 24.5.5</a><span class="text-gray-500 text-sm">(<a href="#" class="text-blue-500 hover:underline">#249</a>)</span>', '8 months ago'],
  [textIcon.value, '.editorconfig', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">code cleanup</a>', '2 years ago'],
  [textIcon.value, '.gitignore', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">Initial commit</a>', '7 years ago'],
  [textIcon.value, 'CODE_OF_CONDUCT.md', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">add necessary contribution guidelines</a>', '5 years ago'],
  [textIcon.value, 'CONTRIBUTING.md', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">add necessary contribution guidelines</a>', '5 years ago'],
  [textIcon.value, 'Directory.Build.props', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">Bump PKHeX.Core to 24.5.5</a><span class="text-gray-500 text-sm">(<a href="#" class="text-blue-500 hover:underline">#249</a>)</span>', '7 months ago'],
  [textIcon.value, 'LICENSE', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">modify license to MIT</a>', '6 years ago'],
  [textIcon.value, 'PKHeX-Plugins.sln', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">bump up version</a>', '1 years ago'],
  [textIcon.value, 'README.md', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">Update build instructions for .NET 8.0</a><span class="text-gray-500 text-sm">(<a href="#" class="text-blue-500 hover:underline">#235</a>)</span>', '1 years ago'],
  [textIcon.value, 'azure-pipelines.yml', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">livehex update for indigo disk</a>', '1 years ago'],
  [textIcon.value, 'setup_bleedingedge.ps1', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">check for network paths before the install</a>', '2 years ago'],
  [textIcon.value, 'setup_stable.ps1', '<a href="#" class=" text-gray-400 text-sm hover:text-blue-500 hover:underline">check for network paths before the install</a>', '2 years ago'],

  ])
const labels = ref(['plugin', 'pokemon', 'nintendo-hacking', 'pkhex', 'pkhex-plugins', 'auto-legality'])
const projectsDetailList = ref([
  ['<svg class="w-4 h-4 fill-current text-gray-400 group-hover:text-blue-500" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path> </svg>', '自述文件'],
  ['<svg class="w-4 h-4 fill-current text-gray-400 group-hover:text-blue-500" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path> </svg>', 'MIT License'],
  ['<svg class="w-4 h-4 fill-current text-gray-400 group-hover:text-blue-500" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path> </svg>', '行为准则'],
  ['<svg class="w-4 h-4 fill-current text-gray-400 group-hover:text-blue-500" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path> </svg>', 'Activity'],
  ['<svg class="w-4 h-4 fill-current text-gray-400 group-hover:text-blue-500" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path> </svg>', '597 星标'],
  ['<svg class="w-4 h-4 fill-current text-gray-400 group-hover:text-blue-500" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path> </svg>', '40 关注'],
  ['<svg class="w-4 h-4 fill-current text-gray-400 group-hover:text-blue-500" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z"></path> </svg>', '134 复刻'],
  ])
</script>

<template>
<div class="main-content flex flex-col">
  <ul class="AppHeaderLocalBar flex items-center gap-3 bg-black text-gray-300 text-sm pt-3 pl-4 pr-4 border-b-2 border-gray-500">
    <li class="font-semibold border-b-2 border-orange-500"><!--1 Code-->
      <a href="#" class="flex items-center p-2 hover:bg-gray-900 hover:border-gray-500 rounded-lg">
        <svg class="w-4 h-4 fill-current mr-2" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg>
        <span class="text-white">Code</span>
      </a>
    </li>
    <li><!--2 Issues-->
      <a href="#" class="flex items-center p-2 hover:bg-gray-900 hover:border-gray-500 rounded-lg">
        <svg class="w-4 h-4 fill-current mr-2" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path></svg>
        <span class="text-white">Issues
          <span class="p-1 rounded-full bg-gray-700 text-white text-xs ml-1">38</span>
        </span>
      </a>
    </li>
    <li><!--3 Pull requests-->
      <a href="#" class="flex items-center p-2 hover:bg-gray-900 hover:border-gray-500 rounded-lg">
        <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path></svg>
        <span class="text-white pl-2">Pull requests
          <span class="p-1 rounded-full bg-gray-700 text-white text-xs ml-1">18</span>
        </span>
      </a>
    </li>
    <li><!--4 Discussing-->
      <a href="#" class="flex items-center p-2 hover:bg-gray-900 hover:border-gray-500 rounded-lg">
        <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M1.75 1h8.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 10.25 10H7.061l-2.574 2.573A1.458 1.458 0 0 1 2 11.543V10h-.25A1.75 1.75 0 0 1 0 8.25v-5.5C0 1.784.784 1 1.75 1ZM1.5 2.75v5.5c0 .138.112.25.25.25h1a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h3.5a.25.25 0 0 0 .25-.25v-5.5a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25Zm13 2a.25.25 0 0 0-.25-.25h-.5a.75.75 0 0 1 0-1.5h.5c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0 1 14.25 12H14v1.543a1.458 1.458 0 0 1-2.487 1.03L9.22 12.28a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215l2.22 2.22v-2.19a.75.75 0 0 1 .75-.75h1a.25.25 0 0 0 .25-.25Z"></path></svg>
        <span class="text-white pl-2">Discussing</span>
      </a>
    </li>
    <li><!--5 Actions-->
      <a href="#" class="flex items-center p-2 hover:bg-gray-900 hover:border-gray-500 rounded-lg">
        <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm4.879-2.773 4.264 2.559a.25.25 0 0 1 0 .428l-4.264 2.559A.25.25 0 0 1 6 10.559V5.442a.25.25 0 0 1 .379-.215Z"></path></svg>
        <span class="text-white ml-2">Actions</span>
      </a>
    </li>
    <li><!--6 Project-->
      <a href="#" class="flex items-center p-2 hover:bg-gray-900 hover:border-gray-500 rounded-lg">
        <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H6.5V5Zm-13 1.5v7.75c0 .138.112.25.25.25H5v-8ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></path></svg>
        <span class="text-white ml-2">Project
          <span class="p-1 rounded-full bg-gray-500 text-white text-xs ml-1 inline-block w-5 h-5 text-center">2</span>
        </span>
      </a>
    </li>
    <li><!--7 Security-->
      <a href="#" class="flex items-center p-2 hover:bg-gray-900 hover:border-gray-500 rounded-lg">
        <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M7.467.133a1.748 1.748 0 0 1 1.066 0l5.25 1.68A1.75 1.75 0 0 1 15 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.697 1.697 0 0 1-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 0 1 1.217-1.667Zm.61 1.429a.25.25 0 0 0-.153 0l-5.25 1.68a.25.25 0 0 0-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.196.196 0 0 0 .154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.251.251 0 0 0-.174-.237l-5.25-1.68ZM8.75 4.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 1.5 0ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path></svg>
        <span class="text-white ml-2">Security</span>
      </a>
    </li>
    <li><!--8 Insights-->
      <a href="#" class="flex items-center p-2 hover:bg-gray-900 hover:border-gray-500 rounded-lg">
        <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M1.5 1.75V13.5h13.75a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75V1.75a.75.75 0 0 1 1.5 0Zm14.28 2.53-5.25 5.25a.75.75 0 0 1-1.06 0L7 7.06 4.28 9.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.25-3.25a.75.75 0 0 1 1.06 0L10 7.94l4.72-4.72a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042Z"></path></svg>
        <span class="text-white ml-2">Insights</span>
      </a>
    </li>

  </ul> <!--end repo nav-->
  <div class="container mx-auto my-8 px-4 flex bg-black text-white">
    <div class="file-explorer-container w-3/5 flex flex-col ml-28">
      <div class="branch-navigation flex items-center justify-between">
        <div class="flex items-center"> <!-- 分支导航 -->
          <button class="border border-gray-300 bg-gray-700 rounded-md px-3 py-1 hover:bg-gray-600 flex items-center space-x-2">
            <svg class="w-4 h-4 fill-current text-gray-500" aria-hidden="true" focusable="false" viewBox="0 0 16 16"fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg>
            <span class="text-sm">master</span>
            <svg class="w-4 h-4 fill-current text-gray-500" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg>
          </button>

          <button class="flex items-center hover:bg-gray-600 px-3 py-1 rounded-md">
            <svg class="w-4 h-4 fill-current text-gray-500 mr-1" aria-hidden="true" focusable="false" viewBox="0 0 16 16"fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.493 2.493 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z"></path></svg>
            <span class="text-sm text-gray-100">852 <span class="text-gray-500">分支</span></span>
          </button>

          <button class="flex items-center hover:bg-gray-600 pr-3 py-1 rounded-md">
            <svg class="w-4 h-4 fill-current text-gray-500 mr-1" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg>
            <span class="text-sm text-gray-100">745 <span class="text-gray-500">标签</span></span>
          </button>
        </div>
        <div class="flex items-center gap-2">
          <div class="input bg-gray-800 flex items-center rounded-md px-3 py-1">
            <svg class="w-4 h-4 fill-current mx-2" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg>
            <input type="text" class="bg-gray-800 rounded-md" placeholder="Go To File">
            <div class="Box-sc-g0xbh4-0 dItACB"><kbd>t</kbd></div>
          </div>
          <button class="addFiles flex items-center hover:bg-gray-600 py-1 rounded-md bg-gray-900">
            <span class="px-2 ml-1">Add File</span>
            <svg class="w-4 h-4 fill-current text-gray-500 mr-1" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg>
          </button>
          <button class="addFiles flex items-center hover:bg-green-600 py-1 rounded-md bg-green-700">
            <svg class="w-4 h-4 fill-current ml-2" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path></svg>
            <span class="px-1 ml-1">Code</span>
            <svg class="w-4 h-4 fill-current text-white mr-1" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"></path></svg>
          </button>
        </div>
      </div><!--end branch navigation-->
      <div class="commits-coontainer bg-gray-800 rounded-md rounded-b-none border border-gray-500 border-b-0 flex items-center justify-between px-4 py-3 mt-5">
        <div class="left flex items-center gap-2"> <!--左侧-->
          <a href="#" class="avatar "><!--头像-->
            <img src="@/assets/img/萤宝.jpg" alt="#" class="rounded-full w-6 h-6">
          </a>
          <a href="#" class="text-sm hover:underline">LegoFigure11</a>
          <a href="#" class="text-gray-500 text-sm hover:text-blue-500 hover:underline">Bump PKHeX.Core to 24.5.5</a>
          <span class="text-gray-500 text-sm">(<a href="#" class="text-blue-500 hover:underline">#249</a>)</span>
          <button class="hover:bg-gray-700 flex items-center rounded-md px-1 py-1">
            <svg class="w-4 h-4 fill-current text-gray-500" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M0 5.75C0 4.784.784 4 1.75 4h12.5c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0 1 14.25 12H1.75A1.75 1.75 0 0 1 0 10.25ZM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM4 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"></path></svg>
          </button>
          <button class="hover:bg-gray-900 flex items-center rounded-md px-1 py-1">
            <svg class="w-4 h-4 fill-current text-green-700" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>          </button>
        </div>
        <div class="right flex items-center gap-4"> <!--右侧-->
          <span class="text-xs text-gray-500">
            <a href="#" class="hover:text-blue-500 hover:underline">c8e23a4</a> · 7个月前
          </span>
          <button class="flex items-center gap-1 hover:bg-gray-700 rounded-md px-1 py-1">
            <svg class="w-4 h-4 fill-current text-gray-500" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path></svg>
            <span class="text-xs">1,239 Commits</span>
          </button>
        </div>
      </div><!--end commits coontainer-->
      <div class="file-explorer rounded-md rounded-t-none border border-gray-500 border-t-0 bg-gray-900">
        <div class="flex justify-between items-center px-4 py-2 hover:bg-gray-700">
          <div class="flex items-center gap-2 w-1/3"><!--左-->
            <svg class="w-4 h-4 fill-current text-gray-400" aria-hidden="true" focusable="false" viewBox="0 0 16 16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path></svg>
            <span class="text-xs">.github</span>
          </div>
          <!--中-->
          <div class="text-sm fill-current text-gray-400 flex items-center w-1/3">update issue template</div>
          <!--右-->
          <div class="text-sm fill-current text-gray-400 flex items-center w-1/3 justify-end">4 years ago</div>
        </div>
        <div class="flex justify-between items-center px-4 py-2 hover:bg-gray-700" v-for="(item, index) in fileList" :key="index">
          <div class="flex items-center gap-2 w-1/3"><!--左-->
            <div v-html="item[0]"></div>
            <span class="text-xs">{{ item[1] }}</span>
          </div>
          <!--中-->
          <div class="text-sm w-1/3 fill-current text-gray-400 flex items-center" v-html="item[2]"></div>
          <!--右-->
          <div class="text-sm w-1/3 fill-current text-gray-400 flex justify-end items-center">{{ item[3] }}</div>
        </div>
      </div>
    </div><!--end file explorer-->

    <div class="sidebar w-1/5 ml-6 flex flex-col"><!--右边-->
      <div class="font-semibold">About</div>
      <div class="text-sm my-3">Plugins for PKHeX   PKHeX 插件</div>
      <ul class="flex items-center gap-2  flex-wrap"><!-- labels-->
        <li class="text-xs text-blue-400 bg-gray-800 rounded-xl py-1 px-2 hover:bg-blue-500 hover:text-white" v-for="(item, index) in labels" :key="index">{{ item }}</li>
      </ul><!--end labels-->
      <ul class="flex flex-col mt-3 border-b-2 border-gray-800 pb-3">
        <li v-for="(item, index) in projectsDetailList" :key="index">
          <a href="#" class="flex items-center gap-3 group rounded-md px-1 py-1">
          <div v-html="item[0]"></div>
          <span class="text-gray-400 text-sm group-hover:text-blue-500">{{ item[1] }}</span>
        </a></li>
        <li>
          <a href="#" class="flex items-center gap-3 group rounded-md px-1 py-1">
            <span class="text-gray-400 text-sm group-hover:text-blue-500">Report repository</span>
          </a>
        </li>
      </ul><!--end Projects Detail List-->
      <div class="font-semibold flex items-center my-4">发行版 <span class="font-normal text-xs rounded-full bg-gray-800 p-1 ml-2">45</span></div>
      <a href="#" class="flex gap-2 group"><!--download releases-->
        <div class="left flex justify-start mt-1">
          <svg class="w-4 h-4 fill-current text-green-500 group-hover:text-blue-500" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"><path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"></path></svg>
        </div>
        <div class="right flex flex-col mb-4">
          <span class="flex items-center text-sm group-hover:text-blue-500">PKHeX-Plugins RC 23.09.25 <span class="text-xs text-green-500 border border-green-500 rounded-full p-1 ml-2">latest</span></span>
          <span class="text-xs text-gray-400">1 years ago</span>
        </div>
      </a><!--end download releases-->
      <a href="#" class="text-blue-500 hover:underline text-sm border-b-2 border-gray-800 pb-3 mb-3">
        + 44 releases
      </a><!--end releases-->
      <a href="#" class="font-semibold flex items-center mt-1 mb-4 hover:text-blue-500">Package</a>
      <span class="text-xs text-gray-400 border-b-2 border-gray-800 pb-3 mb-3">Unpublished package</span>
      <a href="#" class="font-semibold flex items-center mt-1 mb-4 hover:text-blue-500">Contributor</a>
      <ul class="flex flex-wrap gap-1 mb-5">
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
        <li><img src="@/assets/img/萤宝.jpg" class="w-9 h-9 rounded-full" alt=""></li>
      </ul>
      <a href="#" class="text-blue-500 hover:underline text-sm border-b-2 border-gray-800 pb-3 mb-3">
        + 16 contributors
      </a><!--end contributors-->
      <div class="font-semibold flex items-center mt-1 mb-4">Language</div>
      <div class="Percentage-bar flex w-full"> <!--Language Percentage bar-->
        <div class="h-2 bg-green-600" style="width: 98.4%;"></div>
        <div class="h-2 bg-blue-900"style="width: 1.6%;"></div>
      </div>
      <div class="flex text-xs text-white mt-1 mb-4">
        <div class="flex mt-2 items-center mr-5">
          <div class="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
          <span class="text-white">C#<span class="text-gray-400 ml-1">98.4%</span></span>
        </div>
        <div class="flex mt-2 items-center mr-5">
          <div class="w-2 h-2 bg-blue-900 rounded-full mr-2"></div>
          <span class="text-white">PowerShell<span class="text-gray-400 ml-1">1.6%</span></span>
        </div>
      </div><!--end Language Percentage bar-->
    </div><!--end 右边-->
  </div>
</div>
</template>

<style scoped lang="less">
* {
  font-size: 14px;
}
</style>
