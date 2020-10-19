export default{
		// 替代mutition的异步操作
		//context 上下文 ==store
		aUpdateinfo(context){
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					context.commit("increment");
					resolve("成功了");
				},1000)
			})
			
		}
	}