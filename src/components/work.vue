<template>
    <div id="about">
        <myheader myactive="work" activeTitle="WORK"></myheader>
        <!-- <mywork></mywork> -->
        <blog-article></blog-article>
        <myfooter></myfooter>
        <webinfo></webinfo>
    </div>
</template>

<script>
import myheader from "./header.vue";
import myfooter from "./footer";
import webinfo from "./webinfo";
// import mywork from "./mywork";
import blogArticle from "./blogArticle"

export default {
  name: "work",
  components: {
    myheader,
    myfooter,
    webinfo,
    // mywork
    blogArticle
  }
};
</script>

<style scoped>
</style>
