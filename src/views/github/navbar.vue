<script setup lang="ts">
const toLayout = () => {
  window.location.href = '/'
}
</script>

<template>
  <div class="bg-black text-white h-12 flex items-center justify-between px-4 w-full">
    <div class="left flex items-center gap-3">
      <!-- 左侧部分 -->
      <button class="border border-gray-400 rounded-md p-2">
        <!-- 侧边栏按钮 -->
        <svg
          class="w-4 h-4 text-gray-300 fill-current"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
        >
          <path
            d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"
          ></path>
        </svg>
      </button>
      <div class="logo cursor-pointer" @click="toLayout">
        <!-- logo -->
        <svg
          class="w-8 h-8 fill-current"
          aria-hidden="true"
          viewBox="0 0 24 24"
          version="1.1"
          data-view-component="true"
        >
          <path
            d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"
          ></path>
        </svg>
      </div>
      <div class="text-sm">
        <a href="#" class="hover:bg-gray-700 p-2">langchain-ai</a>
        <span class="text-gray-400">/</span>
        <a href="#" class="font-semibold hover:bg-gray-700 p-2">langchain</a>
      </div>
    </div>
    <div class="right flex items-center gap-2 text-gray-300">
      <!-- 右侧部分 -->
      <button class="input flex items-center border border-gray-400 rounded-md p-1">
        <!-- 搜索框 -->
        <svg
          class="w-5 h-5 fill-current mr-3"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
        >
          <path
            d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"
          ></path>
        </svg>
        <span class="flex text-sm pr-24"
          >Type
          <div class="border border-gray-400 pl-2 pr-2 ml-1 mr-1 rounded-sm">/</div>
          to search</span
        >
      </button>
      <div class="flex rounded-md border border-gray-400">
        <!--copilot button-->
        <!-- chat with copilot -->
        <button
          class="border border-l-0 border-t-0 border-b-0 border-gray-400 rounded-md rounded-r-none p-2"
        >
          <svg
            class="w-4 h-4 fill-current"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            data-view-component="true"
          >
            <path
              d="M7.998 15.035c-4.562 0-7.873-2.914-7.998-3.749V9.338c.085-.628.677-1.686 1.588-2.065.013-.07.024-.143.036-.218.029-.183.06-.384.126-.612-.201-.508-.254-1.084-.254-1.656 0-.87.128-1.769.693-2.484.579-.733 1.494-1.124 2.724-1.261 1.206-.134 2.262.034 2.944.765.05.053.096.108.139.165.044-.057.094-.112.143-.165.682-.731 1.738-.899 2.944-.765 1.23.137 2.145.528 2.724 1.261.566.715.693 1.614.693 2.484 0 .572-.053 1.148-.254 1.656.066.228.098.429.126.612.012.076.024.148.037.218.924.385 1.522 1.471 1.591 2.095v1.872c0 .766-3.351 3.795-8.002 3.795Zm0-1.485c2.28 0 4.584-1.11 5.002-1.433V7.862l-.023-.116c-.49.21-1.075.291-1.727.291-1.146 0-2.059-.327-2.71-.991A3.222 3.222 0 0 1 8 6.303a3.24 3.24 0 0 1-.544.743c-.65.664-1.563.991-2.71.991-.652 0-1.236-.081-1.727-.291l-.023.116v4.255c.419.323 2.722 1.433 5.002 1.433ZM6.762 2.83c-.193-.206-.637-.413-1.682-.297-1.019.113-1.479.404-1.713.7-.247.312-.369.789-.369 1.554 0 .793.129 1.171.308 1.371.162.181.519.379 1.442.379.853 0 1.339-.235 1.638-.54.315-.322.527-.827.617-1.553.117-.935-.037-1.395-.241-1.614Zm4.155-.297c-1.044-.116-1.488.091-1.681.297-.204.219-.359.679-.242 1.614.091.726.303 1.231.618 1.553.299.305.784.54 1.638.54.922 0 1.28-.198 1.442-.379.179-.2.308-.578.308-1.371 0-.765-.123-1.242-.37-1.554-.233-.296-.693-.587-1.713-.7Z"
            ></path>
            <path
              d="M6.25 9.037a.75.75 0 0 1 .75.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 .75-.75Zm4.25.75v1.501a.75.75 0 0 1-1.5 0V9.787a.75.75 0 0 1 1.5 0Z"
            ></path>
          </svg>
        </button>
        <!--open copilot-->
        <button class="rounded-md p-1">
          <svg
            class="w-4 h-4 fill-current"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            data-view-component="true"
          >
            <path
              d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex items-center">
        <!--crete new button-->
        <div class="mr-2 text-gray-400">|</div>
        <button class="flex items-center rounded-md p-2 border border-gray-400 hover:bg-gray-700">
          <span class="mr-2"
            ><svg
              class="w-4 h-4 fill-current"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
            >
              <path
                d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"
              ></path></svg
          ></span>
          <span
            ><svg
              class="w-4 h-4 fill-current"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              data-view-component="true"
            >
              <path
                d="m4.427 7.427 3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z"
              ></path></svg
          ></span>
        </button>
      </div>
      <button class="flex items-center rounded-md p-2 border border-gray-500 hover:bg-gray-700">
        <!--议题-->
        <svg
          class="w-4 h-4 fill-current"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
          <path
            d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
          ></path>
        </svg>
      </button>
      <button class="flex items-center rounded-md p-2 border border-gray-500 hover:bg-gray-700">
        <!--拉取请求-->
        <svg
          class="w-4 h-4 fill-current"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
        >
          <path
            d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
          ></path>
        </svg>
      </button>
      <button class="flex items-center rounded-md p-2 border border-gray-500 hover:bg-gray-700">
        <!--未读通知-->
        <svg
          class="w-4 h-4 fill-current"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          data-view-component="true"
        >
          <path
            d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"
          ></path>
        </svg>
      </button>
      <a href="#" class="avatar"
        ><!--头像-->
        <img src="@/assets/img/萤宝.jpg" alt="#" class="rounded-full w-8 h-8" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="less"></style>
