<template>
    <div id="cardList">
        <div id="cardTitle">
            <h1>MY DESCRIPTION</h1>
        </div>
        <div id="cardTable">
            <div>
                <img alt="海王" src="../assets/海王.jpg">
                <img alt="蝙蝠侠" src="../assets/蝙蝠侠.jpg">
                <img alt="神奇女侠" src="../assets/神奇女侠.jpg">
            </div>
            <div>
                <img alt="闪电侠" src="../assets/闪电侠.jpg">
                <img alt="超人" src="../assets/超人.jpg">
                <img alt="钢骨" src="../assets/钢骨.jpg">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "cardlist"
};
</script>

<style scoped>
#cardList {
  display: flex;
  flex-flow: column;
  align-content: center;
  height: auto;
  width: auto;
}
#cardTitle {
  font-size: 20px;
  text-align: center;
  margin: 40px auto;
  align-content: center;
}
#cardTable {
  height: auto;
  width: auto;
  display: flex;
  flex-flow: column;
  margin: auto;
}
#cardTable>div {
  height: 210px;
  width: auto;
  display: flex;
  flex-flow: row;
  margin: 20px 0px;
}
#cardTable>div>img {
  height: 100%;
  width: 300px;
  margin: 0 30px;
}
#cardTable img:hover {
  opacity: 0.6;
  filter: alpha(opacity=60);
  cursor: pointer;
}
</style>
