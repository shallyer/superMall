<template>
	<div> 
		我是首页
		<!-- <router-link :to="{path:'/Home/HomeNews',query:{name:'123'}}">新闻</router-link> -->
		<router-link to="/Home/HomeNews">新闻</router-link>
		<router-link to="/Home/HomeMsg">第二个</router-link>
		<keep-alive exclude="About" include="">
			<router-view></router-view>
		</keep-alive>
		<div class="home-container">
		  <div class="box">
			  <!-- <img src="http://img.fengxuan.co/huodong2/BestinMe/best/img1.png" style="width: 100%;" /> -->
		  </div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Home",
		computed:{
			usetId(){
				consoloe.log(this.$route.params)
				return this.$route.params
			}
		},
		created() {
			console.log("created"); 
			// this.$router.push("/Home/HomeNews")
		},
		destroyed() {
			console.log("destroyed");
		},
		// beforeRouteLeave(to,form,next) {
		// 	console.log(this.$route.path);
		// 	this.path=this.$route.path;
		// 	next();
		// }
	}
</script>

<style>
	
.home-container {
  position: relative;
 
}
 .box {
   
    width: 200px;
    height: 400px;
    border: 1px solid #999;
    animation: shake 1.1s cubic-bezier(0, 0, 0.36, 1);
  }
@keyframes shake {
  0% {
    transform: scaleY(1) translateY(30px);
  }
  15% {
    transform: translateY(-30px);
  }
  30% {
    transform: translateY(30px);
  }
  45% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(30px);
  }
  75% {
    transform: translateY(-30px);
  }
  90% {
    transform: scaleY(1) translateY(30px);
  }
}
</style>
