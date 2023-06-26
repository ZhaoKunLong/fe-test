<template>
  <div class="layout">
    <div class="hearder">
      <div class="hearder-content">
        <div class="hearder-content-left">
          <img :src="logo" alt="error" />
        </div>
        <div class="hearder-content-center">
          <div class="hearder-content-center-top"> welcome TD</div>
          <div class="hearder-content-center-bottom">
            <div class="hearder-content-center-bottom-item" :class="isActive('answerOne')"
              @click="routerWrite('/answerOne')">
              第一题
            </div>
            <div class="hearder-content-center-bottom-item" :class="isActive('answerTwo')"
              @click="routerWrite('/answerTwo')">
              第二题
            </div>
            <div class="hearder-content-center-bottom-item" :class="isActive('answerThree')"
              @click="routerWrite('/answerThree')">
              第三题
            </div>
            <div class="hearder-content-center-bottom-item" :class="isActive('answerFour')"
              @click="routerWrite('/answerFour')">
              第四题
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  reactive,
} from 'vue';

import logo from '@/assets/TD.svg';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const activeItem = reactive<any>({ key: '' });

// 菜单命中样式判断
activeItem.key = computed(() => {
  return route.path.split('/')[1];
});
const isActive = (routeKey: string) => {
  if (activeItem.key == routeKey) return 'titleitemactive';
  else return '';
};
// 菜单路由跳转
const routerWrite = (path: string) => {
  router.push({ path });
};


</script>
<style lang="scss" scoped>
.layout {
  .hearder {
    width: 100%;
    height: 102px;
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: 99999;
    background: #ffffff;
    box-shadow: 0px 2px 8px 0px rgba(0, 23, 52, 0.1);

    .hearder-content {
      height: 100%;
      display: flex;
      // justify-content: space-around;
      align-items: center;
      gap: 20px;

      .hearder-content-left {
        flex-shrink: 0;
        padding-left: 10px;
        width: 50px;
        margin-left: 10%;

        img {
          width: 50px;
          // height: 48px;
        }
      }

      .hearder-content-center {
        margin-left: 20%;
        width: 1066px;
        // min-width: 1066px;
        height: 100%;
        overflow: hidden;

        .hearder-content-center-top {
          font-size: 22px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: #1a1a3e;
          margin-top: 18px;
        }

        .hearder-content-center-bottom {
          display: flex;
          gap: 50px;
          align-items: center;
          color: #333;
          font-size: 16px;

          .hearder-content-center-bottom-item {
            height: 50px;
            // padding: 0 5px;
            line-height: 50px;
            cursor: pointer;
            box-sizing: border-box;
          }

          .hearder-content-center-bottom-item:hover {
            color: #777777;
          }

          .titleitemactive {
            border-bottom: 2px solid #5f5fff;
          }
        }
      }
    }
  }

  .content {
    margin-top: 102px;
    width: 100%;
    padding: 20px;
    position: absolute;
  }
}
</style>
