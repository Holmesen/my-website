<template>
    <div id="mywork">
        <div id="mywork-top" style="height:630px;">
            <div style="margin: auto;">
                <p style="font-size: 25px;">NEW WEBSITE FOR</p>
                <p style="font-size: 75px;">INSTANT</p>
                <p style="font-size: 25px;">ROLE: LEAD DESIGNER</p>
            </div>
        </div>
        <div id="mywork-text" style="width:60%; margin:60px auto;">
            <h1 style="font-size: 25px;">ABOUT THE PROJECT</h1>
            <p style="font-size: 20px; line-height: 30px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <img src="../assets/workP1.jpg">
        <img src="../assets/workP2.jpg">
    </div>
</template>

<script>
export default {
  name: "mywork"
};
</script>

<style scoped>
#mywork,
#mywork-top,
#mywork-top > div,
#mywork-text {
  height: auto;
  width: auto;
  display: flex;
  flex-flow: column;
  align-content: center;
  text-align: center;
}
#mywork > img {
  height: 630px;
  width: 945px;
  margin: 30px auto;
}
#mywork-top {
  background-image: url("../assets/work0.jpg");
  background-size: cover;
}
#mywork-top > div > p {
  margin: 20px auto;
}
</style>
