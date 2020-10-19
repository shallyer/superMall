<template>
	<div>home下面的内容
		<button v-if="showMsg" @click="showBtn">1231</button>
		<button v-else @click="showBtn">456</button>
	</div>
</template>

<script>
	export default{
		name:"HomeNews",
		data(){
			return{
				showMsg:false
			}
		},
		created() {
			console.log(this.$route)
		},
		methods:{
			showBtn(){
				this.showMsg=!this.showMsg
			}
		}
	}
</script>

<style>
</style>
