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
      <div id="allArticle">
        <div class="articleDiv" v-for="item in [0,1,2,3]" :key="item">
          <div class="articleL">
            <img src="../assets/blogBG.jpg">
          </div>
          <div class="articleR">
            <div class="articleTitle">
              <p style="font-size:25px; font-weight:bold;">文章标题</p>
            </div>
            <div class="articleCate">
              <p style="font-size:13px; color:#ff7f21;">文章类型</p>
            </div>
            <div class="articleIntro">
              <p
                style="font-size:15px;"
              >文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
            </div>
            <div class="articleComp">
              <p style="font-size:14px; color:#ff7f21;">查看文章</p>
            </div>
          </div>
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
#allArticle {
  display: flex;
  flex-flow: column;
  width: 80%;
  align-content: center;
  margin: 20px auto;
}
.articleDiv {
  width: auto;
  display: flex;
  flex-flow: row;
  align-content: center;
  padding: 20px;
  margin: 20px auto;
}
.articleL {
  display: flex;
  flex-flow: row;
  height: 250px;
  width: 370px;
  margin: auto;
  /* flex-grow: 1; */
}
.articleL > img {
  height: 100%;
  width: 100%;
}
.articleR {
  display: flex;
  flex-flow: column;
  align-content: center;
  height: 250px;
  width: 65%;
  /* flex-grow: 1; */
  padding-left: 25px;
}
.articleR > div {
  display: flex;
  flex-flow: row;
  height: auto;
  width: auto;
  align-content: center;
  margin: auto auto auto 10px;
  font-size: 17px;
  text-align: left;
}
.articleR > div > p {
  margin: auto;
  line-height: 2.5em;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

#blog {
  display: flex;
  flex-flow: column;
  height: auto;
  width: auto;
  align-content: center;
}
#blogTop {
  height: 600px; /* -webkit-fill-available */
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
  cursor: pointer;
}
#blogCategory {
  display: flex;
  flex-flow: column;
  height: auto;
  width: 70%;
  align-content: center;
  margin: 30px auto;
}
#category {
  height: auto;
  width: auto;
  display: flex;
  flex-flow: row;
  /* padding: 10px; */
  padding: 40px 0px 0px 105px;
  align-content: center;
}
.categoryTitle {
  height: auto;
  width: auto;
  text-align: center;
  padding: 0px 20px;
  /* margin: auto; */
  border-left: lightslategray solid 2px;
}
.categoryTitle > a {
  font-size: 20px;
  color: forestgreen;
  margin: auto;
}
</style>
