export default {
		// 不可异步操作
		increment(state){
			state.count++;
		},
		decrement(state){
			state.count--;
		}
	}