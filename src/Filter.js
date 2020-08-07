import Vue from 'vue'

//空格替换为横杠
Vue.filter("jiahgfilter",function(input){
	return input.replace(/\s+/,"-")
})
