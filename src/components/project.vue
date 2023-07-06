<template>
  <div>
    <test1></test1>

    <test2></test2>

    <test3></test3>

    <test4></test4>
  </div>
</template>

<script>
import test1 from './test1.vue'
import test2 from './test2.vue'
import test3 from './test3.vue'
import test4 from './test4.vue'
export default {
  name: 'TestHelloWorld',
  components: { test1, test2,test3,test4 },
  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped></style>