declare module 'element-plus/dist/locale/zh-cn.js' {
  const zhCn: never;
  export default zhCn;
}

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, never>;
  export default component;
}
