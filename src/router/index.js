import VueRouter from "vue-router";
import Vue from "vue";
// import Home from "../components/Home"
// import About from "../components/About"
//通过vue.use 安装插件
Vue.use(VueRouter);

// const Home = () => import("../components/Home"); //懒加载
// const About = () => import("../components/About"); //懒加载
// const HomeNews = () => import("../components/HomeNews")
// const HomeMsg = () => import("../components/HomeMsg")



const Home=()=> import("../view/Home/Home");
const About=()=> import("../view/About/About");
const News=()=> import("../view/News/News");
const Mine=()=> import("../view/Mine/Mine");
const Promise=()=>import("../view/Promise/Promise");
const Vuex=()=>import("../view/Vuex/Vuex");
//创建VueRouter 对象
const routes = [
	{
		path:"",
		redirect:"/Vuex"
	},{
		path:"/About", 
		component:About
	},{
		path:"/News", 
		component:News
	},{
		path:"/Mine", 
		component:Mine
	},{
		path:"/Home", 
		component:Home
	},
	{
		path:"/promise",
		component:Promise
	},
	{
		path:"/Vuex",
		component:Vuex
	}
	// {
	// 	path: "",
	// 	redirect: "/Home", //重定向
	// 	meta: {
	// 		title: "首页"
	// 	}
	// }, {
	// 	path: "/Home",
	// 	component: Home,
	// 	beforeEach:(to, from, next)=>{
	// 		console.log(to)
	// 		next();
	// 	},
	// 	children: [{
	// 		path: "/Home/HomeMsg",
	// 		component: HomeMsg,
	// 		meta: {
	// 			title: "新闻"
	// 		}
	// 	}, {
	// 		path: "/Home/HomeNews",
	// 		component: HomeNews,
	// 		meta: {
	// 			title: "信息"
	// 		}
	// 	}]
	// },
	// {
	// 	path: "/About",
	// 	component: About
	// }
];

const router = new VueRouter({
	// 配置组建的映射关系
	routes,
	mode: "history", //hash模式改成history模式 
	linkActiveClass: "active"
})

// 前置钩子
// router.beforeEach((to, from, next) => {
// 	document.title = to.matched[0].meta.title;
// 	document.title = to.meta.title;
// 	next();
// })

// 后置钩子
router.afterEach((to,from)=>{
	
})

export default router;
