<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view>
      <home></home>
    </router-view>
  </div>
</template>

<script>
// import myheader from './components/header'
import home from './components/home'
import {} from './Dandelion.js'

export default {
  name: "app",
  components: {
    // myheader
    home
  }
};
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
</style>
