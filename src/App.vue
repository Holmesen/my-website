<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <myheader></myheader>
    <div id="topBlock">
      <centertext></centertext>
    </div>
    <card-list></card-list>
    <myfooter></myfooter>
    <webinfo></webinfo>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import myheader from './components/header.vue'
import centertext from './components/centerText'
import cardList from './components/cardList'
import myfooter from './components/footer'
import webinfo from './components/webinfo'

export default {
  name: 'app',
  components: {
    // HelloWorld
    myheader,
    centertext,
    cardList,
    myfooter,
    webinfo
  }
}
</script>

<style>
#app {
  font-family: -webkit-pictograph;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
#topBlock{
  height: 700px;
  width: auto;
  max-height: 500px;
  background-image: url('./assets/topBg1.jpg');
  padding-top: 200px;
}
</style>
