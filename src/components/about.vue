<template>
    <div id="about">
        <myheader></myheader>
        <myfooter></myfooter>
        <webinfo></webinfo>
    </div>
</template>

<script>
import myheader from './components/header.vue'
import myfooter from './components/footer'
import webinfo from './components/webinfo'

export default {
    name: 'about',
    components: {
        myheader,
        myfooter,
        webinfo
    }
}
</script>

<style scoped>
#about{
    height: auto;
    width: auto;
    display: flex;
}
</style>
