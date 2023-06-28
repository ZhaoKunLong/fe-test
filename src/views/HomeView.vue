<template>
  <div>
    <AddList></AddList>
    <SearchList></SearchList>
    <CaouselImg v-bind:swipeList="ImgList"></CaouselImg>
    <Dialog :show="show" :title="title" @hideModal="hideModal" @submit="submit">
			<!-- 
				向 slot 插槽中展示的内容 
				具名传递： <div slot="main">我是具名插槽传递内容的</div>
			-->
			<div>我是slot中的内容</div>
		</Dialog>
    <h4>4、请实现一个Vue组件，包含一个按钮和一个modal弹框， 点击按钮出现modal框，点击其他部分modal框消失。
  - 在该组件基础上，使其支持自定义modal框内容，头部和底部. </h4>
    <button @click="show=true">点击显示弹窗</button>
  </div>
</template>

<script>
// @ is an alias to /src
import AddList from "./components/AddList.vue";
import SearchList from "./components/SearchList.vue";
import CaouselImg from "./components/CaouselImg.vue";
import Dialog from './components/DialogView.vue'
export default {
  name: "HomeView",
  data(){
    return{
      ImgList:[
        {
          id:0,
          picUrl:'https://ts1.cn.mm.bing.net/th/id/R-C.b0ea268fa1be279d112489ce83ad4696?rik=qItsh%2fBiy33hlg&riu=http%3a%2f%2fwww.quazero.com%2fuploads%2fallimg%2f140303%2f1-140303215009.jpg&ehk=S6PLWamt%2bMzQV8uO9ugcU5d5M19BpXtCpNz2cRJ7q9M%3d&risl=&pid=ImgRaw&r=0'
        },
        {
          id:1,
          picUrl:'https://pic3.zhimg.com/v2-c6ae9c3aff36b9b221258f6a90577902_r.jpg'
        },
        {
          id:2,
          picUrl:'https://desk-fd.zol-img.com.cn/t_s960x600c5/g1/M0B/03/06/ChMljl402K6IOTZbAARWayFg6S4AAQJPwFhuRIABFaD752.jpg'
        },{
          id:3,
          picUrl:'https://ts1.cn.mm.bing.net/th/id/R-C.eec02321ea106169d757f427b98b358d?rik=%2bgK43uKTPrZbCw&riu=http%3a%2f%2f00.minipic.eastday.com%2f20170823%2f20170823152907_d41d8cd98f00b204e9800998ecf8427e_4.jpeg&ehk=FsISayQ5Gjp%2boHXA8OW7nhrZdn2JEzUKk3lfW%2br0P70%3d&risl=&pid=ImgRaw&r=0'
        }
      ],
      show: false,
			title: "我是弹窗标题",
    }
  },
  components: {
    AddList,
    SearchList,
    CaouselImg,
    Dialog
  },
  methods: {
    // 关闭弹窗
		hideModal() {
			this.show = false;
		},
		// 显示弹窗
		submit() {
			this.show = true;	
		}
   }
};
</script>
