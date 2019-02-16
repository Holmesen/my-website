<template>
    <div id="album">
        <div id="pictureList">
            <div class="pictureDiv" v-for="item in [0,1,2,3,4,5,6,7,8]" :key="item">
                <img src="../assets/blogBG.jpg" alt="">
                <p style="font-size:17px;">2019/02/16</p>
                <div>
                    <img src="../assets/position.png" alt="">
                    <p>阿罗海城市广场</p>
                </div>
                <p style="line-height:2.0em; display:-webkit-box; -webkit-box-orient:vertical; -webkit-line-clamp:2; overflow:hidden;">今天天气还行，心情也还行。很适合出来装逼。。。。。凑一下字数凑一下字数凑一下字数凑一下字数</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'album'
}
</script>

<style scoped>
#album{
    display: flex;
    flex-flow: column;
    width: auto;
    align-content: center;
}
#pictureList{
    height: auto;
    width: 80%;
    display: flex;
    flex-flow: row;
    align-content: center;
    flex-wrap: wrap;
    margin: auto;
}
.pictureDiv{
    display: flex;
    flex-flow: column;
    height: auto;
    width: 310px;
    align-content: center;
    margin: 25px auto;
}
.pictureDiv>img{
    height: 235px;
    width: 100%;
    margin: auto;
}
.pictureDiv>p{
    font-size: 14px;
    color: black;
    line-height: 1.5em;
    text-align: left;
    margin: 15px 0px;
}
.pictureDiv>div{
    display: flex;
    flex-flow: row;
    height: auto;
    width: 100%;
    /* justify-content: space-between; */
    float: left;
}
.pictureDiv>div>img{
    height: 25px;
    width: 25px;
    margin: auto 0px;
}
.pictureDiv>div>p{
    font-size: 15px;
    margin: 0px 10px;
    /* line-height: 1.8em; */
}
</style>
