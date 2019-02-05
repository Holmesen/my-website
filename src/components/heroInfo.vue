<template>
    <div id="heroInfo">
        <img :src="thisHero.image"/>        
        <div>
            <h1>{{thisHero.name}}</h1>
            <p>{{thisHero.story}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'heroinfo',
    data(){
        return {
            heroInfo:[
                {
                    name: '海王',
                    image: require('../assets/海王人物.jpg'),
                    story: '海王（英语：Aquaman）是一名DC漫画旗下的虚构漫画超级英雄。该角由莫尔·韦辛格和保罗·诺里斯创作，并首次登场于《多趣漫画》#73（1941年11月）[1]。海王最初在DC漫画中只担任配角，后来在若干卷他自己独立的作品中被作为主角。在1950年代末和1960年代初的超级英雄白银时代，海王成为了美国正义联盟的创始成员之一。1990年代的摩登时代，故事加重描述了他作为亚特兰提斯国王，在这之前的海王显得更为严肃[2]。因角色的性格多变，后来决定将他设定为废黜的国王和堕落的英雄。在《Wizard》杂志的“最伟大的漫画书人物”中被列为第147位（全200位）[3]。IGN将海王列在“最伟大的漫画书英雄”中的第五十二名[4]。'
                },
                {
                    name: '蝙蝠侠',
                    image: require('../assets/蝙蝠侠人物.jpg'),
                    story: '蝙蝠侠 (Batman) 是在1939年5月《Detective Comics》第27期中诞生的一个虚拟人物，Batman(28张)由鲍勃·凯恩与比尔·芬格 (Bill Finger) 共同创造 (但是只有鲍勃·凯恩获得官方著名为作者)，是个伸张正义打击犯罪的超级英雄。虽然一开始蝙蝠侠只是数个同时被创造出来的虚拟角色之一，但后来他成了其他连载漫画中超级英雄的领袖人物。蝙蝠侠的真实身份是布鲁斯·韦恩 (Bruce Wayne) ，表面上是一位富有的企业家、花花公子及慈善家；布鲁斯在儿时亲眼目睹了父母被谋杀，让他立志锻炼肉体与心智，并穿上以蝙蝠为灵感来源的服装打击犯罪。蝙蝠侠跟超人 (Superman) 是英雄漫画中最广为人知也最受欢迎的两个角色，并被多次拍成电影。蝙蝠侠一推出就是一个极为受欢迎的角色，后来并有属于自己的同名漫画系列。不同时期出现了对蝙蝠侠这个角色的各种不同诠释也纷纷出现。1960年代后期的蝙蝠侠电视系列剧采用了夸张滑稽的美学处理方式，结果在电视系列剧结束后的数十年间仍让蝙蝠侠脱离不了电视系列剧中的形象。1986年法兰克·米勒的短篇漫画集《蝙蝠侠：黑骑士归来》 (Batman: The Dark Knight Returns) 与1989年蒂姆·伯顿的蝙蝠侠电影的成功，让蝙蝠侠回到了他原本诲暗的基调'
                },
                {
                    name: '神奇女侠',
                    image: require('../assets/神奇女侠人物.jpg'),
                    story: '在只有女性居住，完全与世隔绝的天堂岛上，亚马逊一族的女王通过竞赛挑选出岛上最出色的女战士，代表天堂岛前往外界传递和平讯息。被选中的就是公主戴安娜（Diana，源自罗马神话中月亮女神的名字）。在进入人类社会后，她获得神奇女侠的称号，被形容为和维纳斯女神一样美丽、与雅典娜女神一样聪明、比墨丘利更敏捷、比赫拉克勒斯更强壮的超级英雄。'
                },
                {
                    name: '闪电侠',
                    image: require('../assets/闪电侠人物.jpg'),
                    story: '第一代闪电侠的真身是大学生杰伊·加里克，他通过吸入硬水水汽（后因回溯连续性变成重水汽）而得到极速行动的能力。他是漫画界中的首位高速人，世界上最快的人类。第二代闪电侠是警察局鉴定科的法庭科学专家巴里·艾伦，他被闪电劈中药品架后各种药物混合起来浇了一身，获得了超级速度。在漫画《闪电侠：重生》中，巴里·艾伦被指为最快、最强的闪电侠，因为他创造了“急速力量”（speedforce，闪电侠的能力所在）。第三代闪电侠沃利·韦斯特是第二代闪电侠巴里的外甥，获得超能力的方式和巴里一样。他于1959年开始以小闪电侠（Kid Flash）的身份登场，1987年成为正式的闪电侠。第四代闪电侠巴特·艾伦是第二代闪电侠巴里在30世纪的孙子，他在新闪电侠漫画《The Flash: The Fastest Man Alive》中以主角身份登场。'
                },
                {
                    name: '超人',
                    image: require('../assets/超人人物.jpg'),
                    story: '超人出生于氪星，本名卡尔-艾尔（Kal-El） 。在氪星面临毁灭之际，他的父母为其找到了浩瀚宇宙中的新家园——地球，用飞船送走了尚在襁褓中的爱子。飞船坠落在美国堪萨斯州的Smallville，卡尔·艾尔被好心的肯特夫妇拾获，并以克拉克·肯特的地球名字抚养成人。长大后，克拉克成为大都会市《星球日报》 的一名记者。他有着与生俱来的超能力及极强的正义感与同情心，每每在危机时刻，便穿上蓝色紧身衣，披上红色斗蓬，化身超人挺身而出，行侠仗义，拯救世人。'
                },
                {
                    name: '钢骨',
                    image: require('../assets/钢骨人物.jpg'),
                    story: '本名维克多·“维克”·斯通（Victor“Vic”Stone），原本是运动员，为高中美式足球队的明星外接手，拥有相当优秀的体能因此维克希望大学时能够继续打球，但因和父亲西拉斯（Silas）两人关系较疏远而一直没有机会。在其西拉斯缺席几次维克的比赛后，维克终于前往父亲的星辰实验室表达不满，西拉斯告诉维克多地球正受到来自各地的超人类威胁著，而研究这些相关外星科技的实验比维克的足球还要重要，维克多气馁地正打算离开时，星辰实验室中的一个管线意外地爆开，使他和其他数名科学家受到了重伤甚至死亡。西拉斯并不打算要让儿子受到和妻子相同的悲剧，因此在T.O.莫罗和萨拉·查尔斯两位科学家的协助下，维克在美国政府收集各种外星科技的实验室-红屋中成功保住了性命，在抢救过程中因为基于天启星科技制作的机器的影响，维克吸收了各种红屋的高科技物品，最后成为了半人半机械的生化人。因达克赛德入侵的缘故，使得后来组成正义联盟的初期成员们选择合作御敌，拥有高科技身躯的维克因此和超人等人作战，并在知道父亲的用心后原谅了他。后来“钢骨”成为了备受众人爱戴的英雄。'
                },
            ],
            hero:{name:'',image:'',story:''}
        }
    },
    props: {
        heroName: String
    },
    computed: {
        thisHero: function(){
            let obj = {}
            this.heroInfo.forEach(item => {
                if(item.name == this.heroName){
                    obj = item
                }
            })
            return obj
        }
    }
    // watch: {
    //     heroName: function(oldValue,newValue){
    //         console.log('old:',oldValue)
    //         console.log('new:',newValue)
    //         // this.heroInfo.forEach(item => {
    //         //     alert('item:',item.name)
    //         //     if(item.name == newValue){
    //         //         this.hero = item
    //         //         return
    //         //     }
    //         // });
    //     }
    // }
}
</script>

<style scoped>
#heroInfo {
  height: auto;
  width: auto;
  display: flex;
  flex-flow: column;
  align-content: center;
  text-align: center;
  /* padding-top: 200px; */
  padding-bottom: 100px;
}
#heroInfo > img {
  height: 700px;
  width: 100%;
}
#heroInfo > div {
  display: flex;
  flex-flow: column;
  height: auto;
  width: 60%;
  margin: auto;
  text-align: center;
  padding-top: 40px;
}
#heroInfo > div > h1 {
  font-size: 40px;
  font-weight: bold;
}
#heroInfo > div > p {
  font-size: 15px;
  line-height: 30px;
  margin-top: 20px;
}
</style>
