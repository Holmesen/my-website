<template>
  <div id="about">
    <myheader myactive="about"></myheader>
    <aboutme></aboutme>
    <myfooter></myfooter>
    <webinfo></webinfo>
  </div>
</template>

<script>
import myheader from "./header.vue";
import myfooter from "./footer";
import webinfo from "./webinfo";
import aboutme from "./about-centerText";

export default {
  name: "about",
  components: {
    myheader,
    myfooter,
    webinfo,
    aboutme
  }
};
</script>

<style scoped>
#about {
  height: auto;
  width: auto;
  display: flex;
  flex-flow: column;
}
</style>
