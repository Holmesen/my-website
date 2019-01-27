<template>
    <div id="contactIcon">
        <div v-for="(item,index) in imgList" :key="index">
            <!-- <div id="hoverIcon" v-if="item.link=='javascript:;'">
                <img :src="item.img"/>
            </div> -->
            <a id="iconA" :href="item.link">
                <img v-if="item.link=='javascript:'" class="qrcode" :src="item.img"/>
                <img :src="item.flag?item.src2:item.src1" @mouseover="overIcon(index)" @mouseout="outIcon(index)"/>
            </a>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'myfooter',
    data: function(){
        return {
            imgList:[
                {
                    src1:require('../assets/wechat0.png'),
                    src2:require('../assets/wechat1.png'),
                    flag:false,
                    link:'javascript:',
                    img:require('../assets/微信账号二维码.jpg')
                },
                {
                    src1:require('../assets/qq0.png'),
                    src2:require('../assets/qq1.png'),
                    flag:false,
                    link:'javascript:',
                    img:require('../assets/qq账号二维码.jpg')
                },
                {
                    src1:require('../assets/weibo0.png'),
                    src2:require('../assets/weibo1.png'),
                    flag:false,
                    link:'https://weibo.com/u/5795295209?is_all=1',
                    // img:require('../assets/微信账号二维码.jpg')
                },
                {
                    src1:require('../assets/csdn0.png'),
                    src2:require('../assets/csdn1.png'),
                    flag:false,
                    link:'https://blog.csdn.net/Holmesen'
                },
                {
                    src1:require('../assets/github0.png'),
                    src2:require('../assets/github1.png'),
                    flag:false,
                    link:'https://github.com/Holmesen'
                },
                {
                    src1:require('../assets/ins0.png'),
                    src2:require('../assets/ins1.png'),
                    flag:false,
                    link:'javascript:',
                    img:require('../assets/Ins账号.jpg')
                },
                {
                    src1:require('../assets/Facebook0.png'),
                    src2:require('../assets/Facebook1.png'),
                    flag:false,
                    link:'https://www.facebook.com/holmesen.lin.7'
                },
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
#contactIcon img:hover{
    cursor: pointer;
}
#hoverIcon{
    height: auto;
    width: 130px;
    display: flex;
    align-content: center;
    position: absolute;
}
#hoverIcon>img{
    height: 100%;
    width: 100%;
    margin: auto;
    top: -20px;
}
/* 弹出图片样式 */
#iconA {
    position: relative;
}
#iconA img.qrcode {
  position: absolute;
  z-index: 99;
  bottom: 50px;
  right: -50px;
  width: 7.5rem;
  max-width: none;
  height: auto;
  transform: scale(0);
  transform-origin: top right;
  opacity: 0;
  border: .3125rem solid #0085ba;
  border-radius: .25rem;
  -webkit-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
 
}
#iconA:hover img.qrcode {
    transform: scale(1);
    opacity: 1;
}
</style>
