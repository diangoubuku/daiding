import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
	token:""
};

const mutations = {//vuex发起事件的使用方法
	//定位胆注数逻辑
	tokenevent(state, str){
		// console.log(state,str)
        state.token = str;
    }
};

const actions = {
	/*increment: ({ //处理你要干什么，异步请求，判断，流程控制
		commit
	}) => {
		commit('increment')
	}*/
};

const getters = {
	token(state) {
		// console.log(state)
		return state.token;
	}
};


//需要导出Store对象
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
});