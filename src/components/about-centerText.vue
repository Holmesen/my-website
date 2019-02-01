<template>
  <div id="center-text">
    <img src="../assets/aboutTopBg.jpg">
    <div>
      <h1>Holmesen</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutme"
};
</script>

<style scoped>
#center-text {
  height: auto;
  width: auto;
  display: flex;
  flex-flow: column;
  align-content: center;
  text-align: center;
  /* padding-top: 200px; */
  padding-bottom: 100px;
}
#center-text > img {
  height: 600px;
  width: 100%;
}
#center-text > div {
  display: flex;
  flex-flow: column;
  height: auto;
  width: 70%;
  margin: auto;
  text-align: center;
  padding-top: 40px;
}
#center-text > div > h1 {
  font-size: 40px;
  font-weight: bold;
}
#center-text > div > p {
  font-size: 20px;
  line-height: 20px;
  margin-top: 20px;
}
</style>
