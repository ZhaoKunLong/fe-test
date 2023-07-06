<template>
    <div>
        <input type="text" v-model="keyword" placeholder="请输入关键字" />
        <table>
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>职业</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in filteredItems" :key="index">
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                    <td>{{ item.occupation }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
export default {
    name: 'TestTest2',
    data() {
        return {
            keyword: "",
            items: [
                { name: "张三", age: 25, occupation: "工程师" },
                { name: "李四", age: 30, occupation: "设计师" },
                { name: "王五", age: 28, occupation: "销售员" },
                { name: "赵六", age: 35, occupation: "经理" },
            ],
        };
    },
    computed: {
        filteredItems() {
            if (this.keyword === "") {
                return this.items;
            } else {
                return this.items.filter(item =>{
                    item.name.toLowerCase().includes(this.keyword.toLowerCase()) 
                }
                    
                );
            }
        },
    },
};
</script>

<style lang="" scoped>
    
</style>