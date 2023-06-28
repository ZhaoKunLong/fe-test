<template>
    <div>
        <h4>1、请实现一个Vue组件，包含一个输入框和一个按钮，点击按钮后将输入框中的内容添加到一个列表中.</h4>
        <input v-model="addValue" type="text" placeholder="请输入要添加的内容">
        <ul>
            <li v-for="item in list" :key="item.id">{{item.id+'-----'+item.name}}</li>
        </ul>
        <button @click="add">添加</button>
    </div>
</template>

<script>
export default {
    name: 'Avue3AddList',

    data() {
        return {
            list:[
                {id:0,name:'小明'}
            ],
            addValue:''
        };
    },

    mounted() {
        
    },

    methods: {
        add(){
            if(this.addValue){
                this.list.push({
                    id:this.list.length,
                    name:this.addValue
                })
            }
        } 
    },
};
</script>

<style lang="scss" scoped>

</style>