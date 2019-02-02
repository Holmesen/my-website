<template>
  <div id="heroPage">
    <!-- <p>{{$route.params.hero}}</p> -->
    <myheader></myheader>
    <heroinfo v-bind:heroName="$route.params.hero"></heroinfo>
    <myfooter></myfooter>
    <webinfo></webinfo>
  </div>
</template>

<script>
import myheader from "./header.vue";
import myfooter from "./footer";
import webinfo from "./webinfo";
import heroinfo from "./heroInfo";

export default {
  name: "heroPage",
  components: {
    myheader,
    myfooter,
    webinfo,
    heroinfo
  },
  data(){
    return {
      //hero: $route.params.hero
    }
  }
};
</script>

<style scoped>
#heroPage {
  height: auto;
  width: auto;
  display: flex;
  flex-flow: column;
}
</style>
