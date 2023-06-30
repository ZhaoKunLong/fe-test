/**
 * @description: 声明*.vue文件类型, 处理vscode在直接引用.vue文件时提示类型问题
 * @return {*}
 */

declare module '*.vue' {
  import { defineComponent } from 'vue';
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
