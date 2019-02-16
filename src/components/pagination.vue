<template>
    <div id="pagination">
        <div id="paginationDiv">
            <div class="firstPage" style="border-left:solid 0.1em #cccccc;">首页</div>
            <div class="prePage">上一页</div>
            <div class="pageNum">
                <div v-for="item in [0,1,2,3,4]" :key="item" class="page" style="font-size:17px;">{{item+1}}</div>
            </div>
            <div class="nextPage">下一页</div>
            <div class="lastPage">尾页</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "pagination"
};
</script>

<style scoped>
#pagination {
  height: auto;
  width: 80%;
  display: flex;
  flex-flow: row;
  align-content: center;
  margin: auto;
}
#paginationDiv {
  height: auto;
  width: auto;
  max-width: 85%;
  display: flex;
  flex-flow: row;
  align-content: center;
  font-size: 15px;
  line-height: 2em;
  margin: auto;
}
.pageNum {
  height: auto;
  width: auto;
  display: flex;
  flex-flow: row;
  align-content: center;
}
.firstPage,
.prePage,
.pageNum > div,
.nextPage,
.lastPage {
  height: auto;
  width: auto;
  padding: 5px 25px;
  border-top: solid 0.1em #cccccc;
  border-right: solid 0.1em #cccccc;
  border-bottom: solid 0.1em #cccccc;
  text-align: center;
  font-weight: 500;
}
.firstPage:hover,
.prePage:hover,
.pageNum > div:hover,
.nextPage:hover,
.lastPage:hover{
    color: forestgreen;
    cursor: pointer;
}
</style>
