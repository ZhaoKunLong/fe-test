<script setup lang="ts">
import { ref } from 'vue';
import addList from './components/addList.vue'
import tableFilter from './components/tableFilter.vue';
import slider from './components/slider.vue';
import modal from './components/modal.vue'


const items = ref([
    { id: 1, name: '张三', age: 25 },
    { id: 2, name: '李四', age: 30 },
    { id: 3, name: '王五', age: 20 }
]);

const images = ref([
    '/src/assets/images/image1.jpg',
    '/src/assets/images/image2.jpg',
    '/src/assets/images/image3.jpg',
    '/src/assets/images/image4.jpg',
    '/src/assets/images/image5.jpg'
]);

const myFunction = () => {
    console.log('执行自定义操作');
};
</script>

<template>
    <div>
        <p>1.请实现一个Vue组件，包含一个输入框和一个按钮，点击按钮后将输入框中的内容添加到一个列表中。</p>
        <addList />
        <p>2.请实现一个Vue组件，包含一个输入框和一个表格，输入框中输入关键字后，表格中的数据会根据关键字进行筛选。</p>
        <tableFilter :items="items" />
        <p>3.请实现一个Vue组件，包含一个轮播图和一个分页器，轮播图中有多张图片，分页器可以切换轮播图中的图片。</p>
        <slider :images="images" :interval="2000" />
        <p>4.- 请实现一个Vue组件，包含一个按钮和一个modal弹框， 点击按钮出现modal框，点击其他部分modal框消失。在该组件基础上，使其支持自定义modal框内容，头部和底部</p>
        <modal>
            <!-- 自定义模态框头部 -->
            <template #header>
                <h2>自定义模态框头部</h2>
            </template>

            <!-- 自定义模态框内容 -->
            <p>这是自定义的模态框内容。</p>

            <!-- 自定义模态框底部 -->
            <template #footer>
                <button class="button" @click="myFunction">自定义操作</button>
            </template>
        </modal>
    </div>
</template>

<style scoped></style>
