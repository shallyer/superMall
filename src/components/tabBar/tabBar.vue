<template>
	<div class="TabBar">
		<div class="tab_bar_item">
			<TabBarItem path="/Home" color="red">
				<img  slot="item_img" src="~assets/img/tabBar/home.svg" />
				<img slot="item_img_active" src="~assets/img/tabBar/home1.svg" />
				<div slot="item_name">首页</div>
			</TabBarItem>
		</div>
		<div class="tab_bar_item">
			<TabBarItem  path="/About" color="green">
				<img slot="item_img" src="../../assets/img/tabBar/home.svg" />
				<img slot="item_img_active" src="../../assets/img/tabBar/home1.svg" />
				<div slot="item_name">关于</div>
			</TabBarItem>
		</div>
		<div class="tab_bar_item" >
			<TabBarItem path="/News" color="green">
				<img slot="item_img" src="../../assets/img/tabBar/home.svg" />
				<img  slot="item_img_active" src="../../assets/img/tabBar/home1.svg" />
				<div slot="item_name">新闻</div>
			</TabBarItem>
		</div>
		<div class="tab_bar_item">
			<TabBarItem  path="/Mine" color="green"> 
				<img slot="item_img" src="../../assets/img/tabBar/home.svg" />
				<img slot="item_img_active" src="../../assets/img/tabBar/home1.svg" />
				<div slot="item_name">我的</div>
			</TabBarItem>
		</div>
	</div>
</template>

<script>
import TabBarItem from './tabBarItem';
export default {
	components:{
		TabBarItem
	},
	name: 'TabBar',
	data(){
		return{
			active:true
		}
	},
	comments:{
		active(){
			console.log(this.active);
		}
	}
};
</script>

<style>
.TabBar {
	display: flex;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 49px;
	background: #f5f5f5;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
}

</style>
