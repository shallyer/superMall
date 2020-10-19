<template>
	<div class="tab_bar_item" @click="clickItem">
		<slot name="item_img_active" v-if="active"></slot>
		<slot name="item_img" v-else></slot>
		<div :style="activeColor"><slot name="item_name"></slot></div>
	</div>
</template>

<script>
	export default{
		name:"TabBarItem",
		props:{
			path:String,
			color:{
				type:String,
				default:"red"
			}
		},
		data(){
			return{
				// active:true
			}
		},
		computed:{
			active(){
				return this.$route.path.indexOf(this.path)!==-1;
			},
			activeColor(){
				return this.active?{color:this.color}:{}
			}
		},
		methods:{
			clickItem(e){
				// console.log(e);
				console.log(this.$route.path) 
				this.$router.replace(this.path);
			}
		}
	}
</script>

<style> 
	.tab_bar_item {
		flex: 1;
		font-size: 14px;
		text-align: center;
		color: #666;
	}
	.tab_bar_item img {
		width: 26px;
		height: 26px;
		display: block;
		margin: 0 auto;
	}
	.isActive{
		color: red;
	}
</style>
