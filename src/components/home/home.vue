<template>
    <div id="home">
        <div class="view">
            <img class="w_100" src="../../assets/image/top.jpg" alt="">
            <div class="imgBox">
                <div :class="chosen == index ? 'imgTitle active' : 'imgTitle'" v-for="(item,index) of titles" @click="isChosen(index)">
                    <img v-if="chosen == index" :src="require('../../assets/image/tab'+(index + 1)+'-1.png')" alt="">
                    <img v-else :src="require('../../assets/image/tab'+(index + 1)+'.png')" alt="">
                    <br>{{item}}
                </div>
            </div>
        </div>
        <div class="box">
            <img class="w_100" v-if="chosenImg" :src="require('../../assets/image/'+chosenImg+'.jpg')" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            titles:["创世纪介绍","游戏玩法","游戏收益","社区收益"],
            chosen:0,
            chosenImg:1
        }
    },
    methods:{
        isChosen(i){
            this.chosen = i,
            this.chosenImg = i + 1
        }
    }
}
</script>
<style scoped>
#home{background-color:#390d62;height:100%}
.view{position:relative}
.imgBox{position: absolute;top:74%;width:100%;font-size:0;padding:7px}
.imgTitle{display:inline-block;width:25%;font-size:14px;padding-bottom:10px;border-bottom:3px solid rgba(250,0,250,0);color:#fff}
.imgTitle img{width:64%}
.imgTitle.active{border-color: rgba(250,0,250,1);background-color:rgba(80,80,200,0.6);border-top-left-radius: 20%;border-top-right-radius: 20%;}
/* .box{padding:7px} */
</style>