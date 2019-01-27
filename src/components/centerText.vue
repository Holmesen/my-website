<template>
    <div id="center-text">
        <h4>HELLO PEOPLE,MY NAME IS</h4>
        <h1>HOLMESEN</h1>
        <h4>WELCOME TO MY WEBSITE</h4>
    </div>
</template>

<script>
export default {
  name: "centertext"
};
</script>

<style scoped>
#center-text {
  display: flex;
  flex-flow: column;
  height: auto;
  width: auto;
  text-align: center;
  line-height: 10px;
  margin: 50px auto;
  color: white;
}
#center-text>h4{
    font-size: 30px;
}
#center-text>h1{
    font-size: 60px;
}
</style>
