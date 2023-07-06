<template>
    <div>
        <input v-model="inputValue" placeholder="请输入内容" type="text">
        <button @click="getData">点击添加</button>

        <ul>
            <li v-for="(item,index) in inpitList" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TestTest1',
    data() {
        return {
            inputValue: '',
            inpitList: []
        };
    },

    mounted() {

    },

    methods: {
        getData() {
            this.inpitList.push(this.inputValue)
            this.inputValue=''
        }
    },
};
</script>

<style lang="scss" scoped></style>