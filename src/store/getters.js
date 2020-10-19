export default{
		getCount(state){
			return state.count*state.count;
		},
		getCount1(state,getters){
			return getters.getCount;
		},
		getFun(state){
			return function(age){
				return age*state.count;
			}
		}
	}