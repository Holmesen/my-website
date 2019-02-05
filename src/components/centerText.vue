<template>
    <div id="center-text">
        <div id="content-text">
            <h4>HELLO PEOPLE,MY NAME IS</h4>
            <h1>HOLMESEN</h1>
            <h4>WELCOME TO MY WEBSITE</h4>
        </div>
    </div>
</template>

<script>
export default {
  name: "centertext"
};
</script>

<style scoped>
#center-text{
    display: flex;
    flex-flow: column;
    height: 505px;
    width: auto;
    background-image: url('../assets/topBg1.jpg');
    padding-top: 200px;
    align-content: center;
}
#content-text {
  display: flex;
  flex-flow: column;
  height: auto;
  width: auto;
  text-align: center;
  line-height: 10px;
  margin: 50px auto;
  color: white;
}
#content-text>h4{
    font-size: 30px;
}
#content-text>h1{
    font-size: 60px;
}
</style>
