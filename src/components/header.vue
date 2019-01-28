<template>
    <div id="header">
        <div id="header-l">
            <div>
                <a href="javascript:;">INSTANT</a>
            </div>
        </div>
        <div id="header-r">
            <div><a href="javascript:;">HOME</a></div>
            <div><a href="../../public/about.html">ABOUT</a></div>
            <div><a href="javascript:;">WORK</a></div>
        </div>
    </div>
</template>

<script>
// import vueRouter from 'vue-router'

export default {
    name: 'myheader',
}
</script>

<style scoped>
#header{
    width: -webkit-fill-available;
    height: 40px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 20px 40px;
    align-content: center;
    /* background: hsla(120, 5%, 92%, 0.5); */
    position: fixed;
    top: 10px;
    left: 0;
    z-index: 100;
}
#header-l,#header-r{
    height: auto;
    width: auto;
    padding: 10px;
    margin: auto 0;
    text-align: center;
    font-size: 20px;
    color: forestgreen;
}
#header-r{
    display: flex;
    flex-flow: row;
    align-content: center;
}
#header-r>div,#header-r>div{
    margin: 0 20px;
    padding: 6px 16px;
    /* background-color: aqua; */
}
#header-l a,#header-r a{
    color: forestgreen;
    text-decoration: none;
    font-weight: bold;
}
#header-l a:hover,#header-r a:hover{
    color: whitesmoke;
}
</style>


