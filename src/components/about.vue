<template>
  <div id="about">
    <myheader myactive="about" activeTitle="ABOUT"></myheader>
    <!-- <aboutme></aboutme> -->
    <blog-content></blog-content>
    <myfooter></myfooter>
    <webinfo></webinfo>
  </div>
</template>

<script>
import myheader from "./header.vue";
import myfooter from "./footer";
import webinfo from "./webinfo";
// import aboutme from "./about-centerText";
import blogContent from "./blogContent"

export default {
  name: "about",
  components: {
    myheader,
    myfooter,
    webinfo,
    // aboutme,
    blogContent
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
