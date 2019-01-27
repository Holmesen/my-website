<template>
    <div id="contactIcon">
        <div v-for="(item,index) in imgList" :key="index">
            <img :src="item.flag?item.src2:item.src1" @mouseover="overIcon(index)" @mouseout="outIcon(index)"/>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'myfooter',
    data: function(){
        return {
            imgList:[
                {src1:require('../assets/wechat0.png'),src2:require('../assets/wechat1.png'),flag:false},
                {src1:require('../assets/qq0.png'),src2:require('../assets/qq1.png'),flag:false},
                {src1:require('../assets/weibo0.png'),src2:require('../assets/weibo1.png'),flag:false},
                {src1:require('../assets/csdn0.png'),src2:require('../assets/csdn1.png'),flag:false},
                {src1:require('../assets/github0.png'),src2:require('../assets/github1.png'),flag:false},
                {src1:require('../assets/ins0.png'),src2:require('../assets/ins1.png'),flag:false},
                {src1:require('../assets/Facebook0.png'),src2:require('../assets/Facebook1.png'),flag:false},
            ]
        }
    },
    methods: {
        overIcon:function(index){
            this.imgList[index].flag=true
        },
        outIcon:function(index){
            this.imgList[index].flag=false
        }
    }
}
</script>

<style scoped>
#contactIcon{
    display: flex;
    flex-flow: row;
    height: 80px;
    width: auto;
    background-color:whitesmoke;
    align-content: center;
    margin-top: 40px;
}
#contactIcon>div,#contactIcon img{
    height: 30px;
    width: 30px;
    margin: auto;
}
</style>
