<template>
    <div id="page404">
        <div></div>
        <p>404</p>
    </div>
</template>

<script>
export default {
  name: "page404"
};
</script>

<style scoped>
#page404 {
  height: -webkit-fill-available;
  width: 100%;
  display: flex;
  flex-flow: column;
  text-align: center;
}
#page404 > p {
  color: #ffffff;
  font-size: 130px;
  position: absolute;
  left: 10px;
  right: 10px;
  height: auto;
  width: auto;
  /* line-height: 600px; */
  text-align: center;
  font-family: fantasy;
  letter-spacing: 70px;
  text-shadow: 0.1em 0.1em 0.1em #777;
}
#page404 > div {
  background-image: url("../assets/404bg.jpg");
  height: -webkit-fill-available;
  text-align: center;
  line-height: 600px;
  float: left;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
  filter: blur(3px);
}
</style>
