<template>
    <div id="blog">
        <div id="blogTop">
            <div id="blogTopTitle">
                <p style="font-size:70px;">HOLMESEN'S</p>
                <p style="font-size:40px;">BLOG</p>
            </div>
        </div>
        <div id="blogCategory">
            <div id="category">
                <div class="categoryTitle" style="border-left:none;">
                    <!-- <router-link></router-link> -->
                    <a>设计文章</a>
                </div>
                <div class="categoryTitle">
                    <!-- <router-link></router-link> -->
                    <a>技术文章</a>
                </div>
                <div class="categoryTitle">
                    <!-- <router-link></router-link> -->
                    <a>优质文章</a>
                </div>
            </div>
            <div>
                <div>
                    <img src="../assets/blogBG.jpg" />
                </div>
                <div>
                    <div class="articleTitle">文章标题</div>
                    <div class="articleCate">文章类型</div>
                    <div class="articleIntro">文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</div>
                    <div class="articleComp">查看文章</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "blogContent"
};
</script>

<style scoped>
#blog {
  display: flex;
  flex-flow: column;
  height: auto;
  width: auto;
  align-content: center;
}
#blogTop {
  height: 500px;
  width: 100%;
  display: flex;
  flex-flow: column;
  background-image: url("../assets/blogBG.jpg");
  background-size: cover;
}
#blogTopTitle {
  height: auto;
  width: auto;
  margin: auto;
}
#blogTopTitle > p {
  line-height: 2em;
  letter-spacing: 40px;
  margin: auto;
  font-weight: bold;
}
#blogCategory{
    display: flex;
    flex-flow: column;
    height: auto;
    width: 70%;
    align-content: center;
    margin: 50px auto;
}
#category{
    height: auto;
    width: auto;
    display: flex;
    flex-flow: row;
    padding: 10px;
    align-content: center;
}
.categoryTitle{
    height: auto;
    width: auto;
    text-align: center;
    padding: 0px 20px;
    /* margin: auto; */
    border-left: lightslategray solid 2px;
}
.categoryTitle>a{
    font-size: 20px;
    color: forestgreen;
    margin: auto;
}
</style>
