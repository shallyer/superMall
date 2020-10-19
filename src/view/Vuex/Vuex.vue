<template>
	<div>
		<p>{{$store.state.count}}</p>
		<button @click="$store.state.count++">增加</button>
		<button @click="$store.state.count--">减少</button>
		<button @click="addtion">增加1</button>
		<button @click="plustion">减少2</button>
		<button  >{{$store.getters.getCount}}</button>
		<!-- <button  >{{$store.getters.getCount1}}</button> -->
		<button>{{$store.getters.getFun(9)}}</button>
		<button @click="update">执行Action的异步</button>
		
		<!--  -->
		<h1>modules 里面的内容</h1>
		<h5>{{$store.state.mode.name}}</h5>
		<h1>{{$store.getters.changgeName}}</h1>
	</div>
</template>

<script>
	import axios from "../../axios/index"
	export default{
		data(){
			return{
				count:1
			}
		},
		created() { 
			console.log(axios.request);
			axios.request({
				eventid: '',
				subEventid: 8,
				wid:'C470EC9E-6183-4D03-BB96-A0210C2A3165',
				wuid: '7726a916-2e33-42c3-99f5-52eda8a47b0f',
				wmid: '66424b0f-1e85-43e4-bdf0-ccb872478ff8',
				wgid:' 5cd51849-f1bb-4bab-bbb1-b1596cb22757',
				wgTitle: '测试商品（拍下不发货'
			},function(){},function(){})
		},
		methods:{
			addtion(){
				this.$store.commit("increment")
				this.$store.commit({
					type:"increment",
					// 参数
				});
				
			},
			plustion(){
				this.$store.commit("decrement")
			},
			update(){
				this.$store.dispatch("aUpdateinfo").then((res)=>{
					console.log(res)
				})
			}
			 
		}
	}
</script>

<style>
</style>
