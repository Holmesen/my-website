<template>
    <div id="about">
        <myheader myactive="work" activeTitle="WORK"></myheader>
        <mywork></mywork>
        <myfooter></myfooter>
        <webinfo></webinfo>
    </div>
</template>

<script>
import myheader from "./header.vue";
import myfooter from "./footer";
import webinfo from "./webinfo";
import mywork from "./mywork";

export default {
  name: "work",
  components: {
    myheader,
    myfooter,
    webinfo,
    mywork
  }
};
</script>

<style scoped>
</style>
