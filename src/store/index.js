import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import modulesA from "./modules/modulesA";

Vue.use(Vuex);

const state={
		count:1000
	} 
const Store=new Vuex.Store({
	state,
	getters,
	actions,
	mutations, 
	modules:{
		mode:modulesA
	}
}); 
 export default Store;