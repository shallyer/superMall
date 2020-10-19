import axios from "axios";



export default{
	 request(config,success,fail){
		 // axios({
		 //   method: 'post',
		 //   url: 'https://open.fengxuan.co/Home/AddAccessBuriedPoint?s=b1b3cc84f320ff341d6a04ae57c28bfc07037fa8&nonce=30e69251-009a-2b1b-d269-1c07dd00c138&timestamp=1603091898004&u_uid=7726a916-2e33-42c3-99f5-52eda8a47b0f',
		 //   data: config
		 // }).then(res=>{
			//  console.log(res)
		 // });
		 console.log(config)
		let instance= axios.create({
			timeOut:"60000",
			baseURL:"https://open.fengxuan.co",
			 // headers: {'X-Custom-Header': 'foobar'}
		});
		// 拦截器 请求之前
		instance.interceptors.request.use(config=>{
			console.log("config");
		});
		// 响应拦截
		instance.interceptors.response.use(config=>{
			console.log("response")
		},error=>{
			console.log(error)
		});
		
	}
}