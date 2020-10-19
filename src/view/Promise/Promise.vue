<template>
	<!--promise 异步操作的编程方案 -->
	<div>promise介绍</div>
</template>

<script>
export default {
	name: 'promise',
	created() {
		// sync 同步
		// async 异步
		// 什么情况下有promise  有异步操作时封装
		// new Promise((resolve, reject) => {
		// 	// 异步操作
		// 	setTimeout(data => {
		// 		resolve('data');
		// 	}, 1000);
		// 	// 失败  reject();
		// })
		// 	.then(data => {
		// 		console.log(data);
		// 	})
		// 	.catch(() => {
		// 		console.log(data);
		// 	});

		// 另外处理形式
		// new Promise((resolve, reject) => {
		// 	setTimeout(() => {
		// 		// resolve("成功");
		// 		reject('失败');
		// 	}, 1000);
		// }).then(
		// 	data => {
		// 		console.log(data);
		// 	},
		// 	err => {
		// 		console.log(err);
		// 	}
		// );
		
		// 链式调用
		new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve("1111");
			})
		}).then(res=>{
			console.log(res+"第一层");
			return new Promise((resolve,reject)=>{resolve(res+"2222")}); 
		}).then(res=>{
			console.log(res);
			 return new Promise((resolve,reject)=>{resolve(res+"3333")}); 
		}).then(res=>{
			console.log(res);
		});
		
		// 简写
		new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve("1111");
			})
		}).then(res=>{
			console.log(res+"第一层"); 
			return new Promise.resolve(res+"2222"); 
		}).then(res=>{
			console.log(res); 
			return new Promise.resolve(res+"33333");
		}).then(res=>{
			console.log(res);
		});
		
		// 直接return
		new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve("1111");
			})
		}).then(res=>{
			console.log(res+"第一层"); 
			return  res+"2222"; 
		}).then(res=>{
			console.log(res); 
			return res+"33333";
		}).then(res=>{
			console.log(res);
		});
		
		// 抛出异常
		new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve("1111");
			})
		}).then(res=>{
			console.log(res+"第一层"); 
			// throw  "异常"; 
			return Promise.reject("yichang")
		}).then(res=>{
			console.log(res); 
			return res+"33333";
		}).then(res=>{
			console.log(res);
		}).catch(res=>{
			console.log(res)
		});
		
		// 多个请求
		Promise.all([
			new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve("1111");
				},100)
			}),
			new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve("222");
				})
			},200)
		]).then(results=>{
			console.log(results);
		})
		
	}

};
</script>

<style></style>
