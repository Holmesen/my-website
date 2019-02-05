<template>
  <div>
    <myheader myactive="home"></myheader>
    <div id="topBlock">
      <centertext></centertext>
    </div>
    <card-list></card-list>
    <myfooter></myfooter>
    <webinfo></webinfo>
  </div>
</template>

<script>
import myheader from "./header.vue";
import centertext from "./centerText";
import cardList from "./cardList";
import myfooter from "./footer";
import webinfo from "./webinfo";

export default {
  name: "home",
  components: {
    // HelloWorld
    myheader,
    centertext,
    cardList,
    myfooter,
    webinfo
  },
  data() {
    return {
      isActive: "home"
    };
  }
};
</script>

<style scoped>
#app {
  font-family: -webkit-pictograph;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
