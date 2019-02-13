<template>
    <div id="blogArticle">
        <div class="articleTitle" style="margin-top:100px;">
            <h1>文章标题</h1>
        </div>
        <div class="articleDate">
            <p style="margin-right:30px;">2019/01/01</p>
            <p style="margin-left:30px; color:#ff7f21;">文章类型</p>
        </div>
        <div class="articleImg">
            <img src="../assets/articlePic.jpg" alt="">
        </div>
        <div class="articleContent">
            <p>多年以后，当我重新捧起米兰‧昆德拉的这本《慢》时，虽然已经不像初读时那么着迷，但仍然对其中的一些片段深有感触，比如这段：</p>
            <p>速度是出神的形式，这是技术革命送给人的礼物。跑步的人跟摩托车手相反，身上总有自己存在，总是不得不想到脚上水泡和喘气；当他跑步时，他感到自己的体重、年纪，就比任何时候都意识到自身与岁月。当人把速度性能托付给一台机器时，一切都变了：从这时候起，身体已置之度外，交给了一种无形的、非物质化的速度，纯粹的速度，实实在在的速度，令人出神的速度。</p>
            <p>我的理解是，无论是出于安全感的需要，还是试图主动掌握命运和自我实现，人都很容易选择追随时代大势和时代意识，如果碰巧对变化速度的追求成为时代大势和时代意识，人也就很容易对速度上瘾。而一旦走上这条路，人难免会成为速度的奴隶，被裹挟着往前冲，再也回不到初衷，掌控自身的命运，就像你无法给行驶的汽车换轮胎。</p>
            <p>互联网正是过去 20 多年，人类最大的时代大势，利用迅速发展的互联网去迅速改变一切，并创造财富，正是我们时代的时代意识之一。这引发了连锁反应：</p>
            <p>技术的快速变化——摩尔定律，即每块芯片上集成的晶体管的数量每隔 18~24 个月就会翻一倍，性能会上升一倍，价格也会相应下降，这会加速普及；产品和市场缩短的生命周期——在一些产品领域，比如部分网络游戏，生命周期已经下降到可能只有几个月；</p>
            <p>资本对更高的增长速度和回报的预期——他们为高速扩张提供了大量先期资金，而他们又为此给他们的出资人以更高的回报预期；被激励的员工——员工财富自由与期权价格密不可分，而期权收益又与公司的增速和估值提高直接相关；</p>
            <p>同时，还伴随着公司资产和管理者/员工个人消费的快速扩张，比如更多的设备和厂房，更多的员工，更贵的员工个人房产，进而是更高的采购价格，更多的库存，更多的销售，更多的应收账款和应付账款，更高的外债和工资开支……</p>
            <p>各个因子间相互强化，相互裹挟，谁都不敢掉链子，因为害怕由此带来的剧烈惩罚——你过往所有的付出可能顷刻化为乌有。</p>
            <p>看看，当 OFO 不能给投资人提供估值持续增长的预期后，资本方所表现出来的决绝，以及以往并不鲜见的投资人与创业者反目成仇的故事。二级市场上因为季度财报中一个没有达到预期的数字，就导致股价一天之内跌掉 10% 甚至 20%，更是常见，即便亚马逊、苹果和 Facebook 这样的巨头面对这样的情况时也不能例外。去年 7 月 26 日，Facebook 一天就蒸发了将近 1200 亿美元市值。</p>
        </div>
        <div class="articleBtn">
            <div class="preBtn">
                <button>上一篇</button>
                <span>我也不知道上一篇是什么</span>
            </div>
            <div class="nextBtn">
                <button>下一篇</button>
                <span>我也不知道下一篇是什么</span>
            </div>
        </div>
        <leave-msg></leave-msg>
    </div>
</template>

<script>
import leaveMsg from './leaveMsg'

export default {
  name: "blogArticle",
  components: {
    leaveMsg
  }
};
</script>

<style scoped>
#blogArticle {
  display: flex;
  flex-flow: column;
  height: auto;
  width: auto;
  align-content: center;
}
.articleTitle,
.articleDate {
  display: flex;
  flex-flow: row;
  align-content: center;
  text-align: center;
  margin: auto;
  padding: 17px;
}
.articleTitle > p {
  font-size: 30px;
  font-weight: bold;
  line-height: 2em;
  margin: auto;
}
.articleDate > p {
  font-size: 17px;
  line-height: 2em;
  margin: auto;
}
.articleImg {
  width: 70%;
  height: auto;
  display: flex;
  flex-flow: column;
  align-content: center;
  margin: 20px auto;
}
.articleImg > img {
  height: 550px;
  width: 900px;
  max-width: 100%;
  margin: auto;
}
.articleContent {
  display: flex;
  flex-flow: column;
  width: 60%;
  text-align: left;
  margin: auto;
  font-size: 15px;
  padding: 0px 20px;
  line-height: 2.3em;
}
.articleContent > p {
  text-indent: 2em;
}
.articleBtn {
  height: auto;
  width: 60%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-content: center;
  margin: 20px auto;
}
.preBtn,
.nextBtn {
  display: flex;
  flex-flow: column;
  width: 50%;
  align-content: center;
  margin: auto;
  text-align: center;
}
.preBtn > button,
.nextBtn > button {
  height: 40px;
  width: 100px;
  text-align: center;
  margin: auto;
  line-height: 40px;
  font-size: 15px;
  background-color: white;
  color: darkgray;
  border: darkgray solid 0.1em;
}
.preBtn > button:hover,
.nextBtn > button:hover {
  color: forestgreen;
  border: solid 0.1em forestgreen;
  cursor: pointer;
}
.preBtn > span,
.nextBtn > span {
  text-align: center;
  margin: 15px auto;
  font-size: 14px;
  line-height: 2em;
  color: darkgray;
}
</style>
