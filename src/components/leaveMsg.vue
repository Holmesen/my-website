<template>
  <div id="leaveMsg">
    <div id="inputMsg">
      <textarea name="msgContent" id="msgContent" cols="30" rows="5" placeholder="来吐槽两句吧~"></textarea>
      <button>确定</button>
    </div>
    <div id="allMsg">
      <div class="msgDiv" v-for="item in [0,1,2,3,4]" :key="item">
        <div class="msgAvatar">
          <img src="../assets/超人.jpg" alt="">
        </div>
        <div class="msgR">
          <div class="msgName">
            <span style="margin:auto auto auto 0px;">名称</span>
            <span style="margin:auto 0px auto auto;">2019/01/01</span>
          </div>
          <div class="msgContent">
            <p>评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leaveMsg"
};
</script>

<style scoped>
.msgDiv {
  height: auto;
  width: 100%;
  display: flex;
  flex-flow: row;
  margin: 20px 0px;
  border-bottom: solid 1px #ccc;
}
.msgAvatar {
  height: 50px;
  width: 50px;
  /* display: flex;
  flex-flow: row;
  align-content: center; */
}
.msgAvatar > img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
.msgR {
  display: flex;
  flex-flow: column;
  height: auto;
  width: 95%;
  flex-grow: 1;
  margin-left: 20px;
}
.msgName {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 10px;
  width: 97%;
  font-size: 15px;
}
.msgContent {
  display: flex;
  flex-flow: column;
  padding: 0px 10px 10px 10px;
  font-size: 16px;
  word-break: break-all;
  line-height: 2em;
  text-align: left;
}
.msgContent>p{
  text-indent: 2em;
}

#leaveMsg {
  height: auto;
  width: 60%;
  display: flex;
  flex-flow: column;
  align-content: center;
  margin: auto;
}
#inputMsg,
#allMsg {
  display: flex;
  flex-flow: column;
  height: auto;
  width: 100%;
  margin: auto;
}
#inputMsg > textarea {
  font-size: 16px;
  line-height: 1.8em;
  height: auto;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  border: solid 1px #555;
  padding: 5px;
}
#inputMsg > button {
  height: 40px;
  width: 100px;
  text-align: center;
  margin: auto;
  line-height: 40px;
  font-size: 15px;
  background-color: white;
  color: white;
  border: #ee6d11 solid 0.1em;
  background-color: #ff7f21;
  float: right;
  margin: 16px 0px 20px auto;
  cursor: pointer;
}
</style>
