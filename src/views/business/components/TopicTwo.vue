<template lang="pug">
div 
  span.input.input--hs(:class="inputValue?'input--filled':''")
    input#input-1.input__field.input__field--hs(type="text" v-on:input="filterData")
    label.input__label.input__label--hs(for="input-1")
      span.input__label-content.input__label-content--hs 请输入
  div(style="margin-top: 15px;") 
    ul.ul_list(v-for="it in filterList")
      li.ul_li name: {{it.name}}   age: {{it.age}}
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
interface listInfo {
  name: string,
  age: string
}

const list = ref<listInfo[]>([])
const filterList = ref<listInfo[]>([])
let inputValue = ref<string>("")

const filterData = () => {
  const parma = document.querySelector('#input-1')?.value || ""
  if (parma) {
    filterList.value = list.value.filter((it) => {
      if (it.name == parma || it.age == parma) {
        return it
      }
    })
  } else {
    filterList.value = list.value
  }
  inputValue.value = parma
}

const initData = () => {
  for (let it of [1, 2, 3, 4]) {
    list.value.push({ name: "hxj" + it, age: `${18 + it}` })
  }
  filterList.value = list.value
}
onMounted(() => {
  initData()
})

</script>
<style lang="scss">
.input {
  position: relative;
  z-index: 1;
  display: inline-block;
  margin: 1em;
  max-width: 400px;
  width: calc(100% - 2em);
  vertical-align: top;
}

.input__field {
  position: relative;
  display: block;
  float: right;
  padding: 0.8em;
  width: 60%;
  border: none;
  border-radius: 0;
  background: #f0f0f0;
  color: #aaa;
  font-weight: bold;
}

.input__field:focus {
  outline: none;
}

.input__label {
  display: inline-block;
  float: right;
  padding: 0 1em;
  width: 40%;
  color: #6a7989;
  font-weight: bold;
  font-size: 70.25%;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.input__label-content {
  position: relative;
  display: block;
  padding: 1.6em 0;
  width: 100%;
}



.input--hs {
  margin: 4em 1em 1em;
}

.input__field--hs {
  padding: 0.4em 0.25em;
  width: 100%;
  background: transparent;
  color: #AFB5BB;
  font-size: 1.55em;
}

.input__label--hs {
  position: absolute;
  width: 100%;
  text-align: left;
  pointer-events: none;
}

.input__label-content--hs {
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}

.input__label--hs::before,
.input__label--hs::after {
  content: '';
  position: absolute;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 4px;
  background: #6a7989;
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}

.input__label--hs::before {
  top: 0;
}

.input__label--hs::after {
  bottom: 0;
}

.input__field--hs:focus+.input__label--hs .input__label-content--hs,
.input--filled .input__label-content--hs {
  -webkit-transform: translate3d(0, -90%, 0);
  transform: translate3d(0, -90%, 0);
}

.input__field--hs:focus+.input__label--hs::before,
.input--filled .input__label--hs::before {
  -webkit-transform: translate3d(0, -0.5em, 0);
  transform: translate3d(0, -0.5em, 0);
}

.input__field--hs:focus+.input__label--hs::after,
.input--filled .input__label--hs::after {
  -webkit-transform: translate3d(0, 0.5em, 0);
  transform: translate3d(0, 0.5em, 0);
}


/** 按钮 */

.button_ {
  position: relative;
  background-color: #2a8b85;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: #FFFFFF;
  padding: 10px;
  width: 200px;
  text-align: center;
  -webkit-transition-duration: 0.4s;
  /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

.button_:after {
  content: "";
  background: #75f0bf;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

.button_:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}

/** 简单列表 */

.ul_list {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  border: 0;
  display: block;
  overflow: hidden;
  zoom: 1;
}

.ul_li {
  padding: 16px 0;
  font-size: 12;
  border-top: 1px solid #e0e0e0;
  list-style: none;
}
</style>