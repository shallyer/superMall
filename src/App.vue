<template>
	<div id="app">
		<router-view></router-view>
		<p>{{$store.state.count}}</p>
		<!-- 记录页面内容 重置 -->
	<!-- 	<keep-alive><router-view></router-view></keep-alive>
		<img src="./assets/logo.png" />
		<router-link to="/Home/HomeNews" tag="button" replace active-class="active">首页</router-link>
		<router-link to="/About" tag="button" replace active-class="active">关于</router-link> -->
		<!-- <router-link :to="'/Home/'+user" tag="button" replace active-class="active">关于</router-link> -->
		<!-- <button @click="toHome">首页</button> -->

		<!-- <div class="TabBar">
			<div class="tab_bar_item">
				<img src="./assets/img/tabBar/home.svg" />
				首页
			</div>
			<div class="tab_bar_item">
				<img src="./assets/img/tabBar/home.svg" />
				首页
			</div>
			<div class="tab_bar_item">
				<img src="./assets/img/tabBar/home.svg" />
				首页
			</div>
			<div class="tab_bar_item">
				<img src="./assets/img/tabBar/home.svg" />
				首页
			</div>
		</div> -->
		<TabBar></TabBar>
		
	</div>
</template>

<script>
import TabBar from "./components/tabBar/tabBar"
export default {
	name: 'App',
	components:{
		TabBar
	},
	data() {
		return {
			user: 'list'
		};
	},
	methods: {
		toHome() {
			console.log(this);
			// this.$router.push('./About');
			// this.$router.replace('./About');
			this.$router.push({
				path: '/Home/HomeNews',
				query: { name: '2003' }
			});
		}
	}
};
</script>

<style>
@import url('assets/css/style.css');
.active {
	color: #f00;
} 
</style>
