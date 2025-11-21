// 本册专用词库数据（示例）
window.VOCAB_DATA = {
  // 页面标题
  title: "配对游戏 · 中文（欧洲版）第2册",
  // 可选：若不提供则会从 words 中提取并排序
  lessons: [
    { id: 1,  title: "有趣的形声字" },
    { id: 2,  title: "我的一家" },
    { id: 3,  title: "欢迎来我家" },
    { id: 4,  title: "好多玩具" },
    { id: 5,  title: "我能出去玩吗" },
    { id: 6,  title: "我的学校" },
    { id: 7,  title: "今天星期几" },
    { id: 8,  title: "动物和我们" },
    { id: 9,  title: "好吃吗" },
    { id: 10,  title: "东南西北" },    
    // ……继续补到 16
  ],
  // 每个词条：
  // id: 唯一，lesson: 课次（数字），hz: 汉字，py: 拼音，def: 释义，img: 可选图片路径（相对 /static）
  words: [
    // 第1课 第一单元
    {lesson:1, word:"泡茶", py:"pàochá", def:"用开水冲泡茶叶制作茶水。", img: null},
    {lesson:1, word:"吃饱", py:"chībǎo", def:"吃得足够，感到满足。", img: null},
    {lesson:1, word:"饱和", py:"bǎohé", def:"达到最大限度；充满。", img: null},
    {lesson:1, word:"跑步", py:"pǎobù", def:"快速地跑动，一种运动方式。", img: null},
    {lesson:1, word:"长袍", py:"chángpáo", def:"长及脚踝的外衣。", img: null},
    {lesson:1, word:"龙袍", py:"lóngpáo", def:"古代皇帝穿的绣有龙纹的袍服。", img: null},
    {lesson:1, word:"放炮", py:"fàngpào", def:"燃放爆竹；发射炮弹。", img: null},
    {lesson:1, word:"抱着", py:"bàozhe", def:"用手臂围住；搂着。", img: null},
    {lesson:1, word:"汉字", py:"hànzì", def:"中文书写系统的字符。", img: null},
    {lesson:1, word:"放在", py:"fàngzài", def:"置于某处。", img: null},
    {lesson:1, word:"有的", py:"yǒude", def:"有一部分；某些。", img: null},
    {lesson:1, word:"长大", py:"zhǎngdà", def:"成长；变得成熟。", img: null},
    {lesson:1, word:"大声", py:"dàshēng", def:"响亮的声音。", img: null},

    // 第2课 第二单元1
    {lesson:2, word:"爷爷", py:"yéye", def:"父亲的父亲。", img: null},
    {lesson:2, word:"奶奶", py:"nǎinai", def:"父亲的母亲。", img: null},
    {lesson:2, word:"外公", py:"wàigōng", def:"母亲的父亲。", img: null},
    {lesson:2, word:"叔叔", py:"shūshu", def:"父亲的弟弟；对年长男性的尊称。", img: null},
    {lesson:2, word:"姑姑", py:"gūgu", def:"父亲的姐妹。", img: null},
    {lesson:2, word:"爸爸", py:"bàba", def:"父亲。", img: null},
    {lesson:2, word:"姐姐", py:"jiějie", def:"年长的姐妹。", img: null},
    {lesson:2, word:"木桥", py:"mùqiáo", def:"用木材建造的桥。", img: null},
    {lesson:2, word:"笑声", py:"xiàoshēng", def:"笑的声音。", img: null},
    {lesson:2, word:"宝宝", py:"bǎobao", def:"对婴儿或小孩的爱称。", img: null},
    {lesson:2, word:"对面", py:"duìmiàn", def:"正对着的方向。", img: null},
    {lesson:2, word:"在家", py:"zàijiā", def:"在家里；没有外出。", img: null},

    // 第3课 第二单元2
    {lesson:3, word:"我家", py:"wǒjiā", def:"我的家庭或住所。", img: null},
    {lesson:3, word:"客厅", py:"kètīng", def:"接待客人的房间。", img: null},
    {lesson:3, word:"沙发", py:"shāfā", def:"有软垫的座椅。", img: null},
    {lesson:3, word:"电视", py:"diànshì", def:"电视机；电视节目。", img: null},
    {lesson:3, word:"衣柜", py:"yīguì", def:"存放衣服的柜子。", img: null},
    {lesson:3, word:"桌子", py:"zhuōzi", def:"有平面的家具，用于工作或用餐。", img: null},
    {lesson:3, word:"椅子", py:"yǐzi", def:"有靠背的坐具。", img: null},
    {lesson:3, word:"客人", py:"kèrén", def:"来访的人；宾客。", img: null},
    {lesson:3, word:"空手", py:"kōngshǒu", def:"手里没拿东西。", img: null},
    {lesson:3, word:"房子", py:"fángzi", def:"建筑物，供人居住。", img: null},

    // 第4课 第二单元3
    {lesson:4, word:"汽车", py:"qìchē", def:"机动车辆。", img: null},
    {lesson:4, word:"书本", py:"shūběn", def:"书籍；书本。", img: null},
    {lesson:4, word:"一个", py:"yīgè", def:"数量词，表示单个。", img: null},
    {lesson:4, word:"两只", py:"liǎngzhī", def:"数量词，表示两个。", img: null},
    {lesson:4, word:"洋娃娃", py:"yángwáwa", def:"玩偶，通常是人形的玩具。", img: null},

    // 第5课 第二单元4
    {lesson:5, word:"晴天", py:"qíngtiān", def:"阳光明媚的天气。", img: null},
    {lesson:5, word:"阴天", py:"yīntiān", def:"云层较厚，没有阳光的天气。", img: null},
    {lesson:5, word:"下雨", py:"xiàyǔ", def:"从云中降下雨水。", img: null},
    {lesson:5, word:"下雪", py:"xiàxuě", def:"从云中降下雪花。", img: null},
    {lesson:5, word:"刮风", py:"guāfēng", def:"风吹动。", img: null},
    {lesson:5, word:"出去", py:"chūqù", def:"从里面到外面去。", img: null},
    {lesson:5, word:"天气", py:"tiānqì", def:"大气的状况。", img: null},
    {lesson:5, word:"只能", py:"zhǐnéng", def:"只有能力做；不得不。", img: null},

    // 第6课 第三单元
    {lesson:6, word:"姓名", py:"xìngmíng", def:"姓氏和名字。", img: null},
    {lesson:6, word:"名字", py:"míngzi", def:"人的称呼。", img: null},
    {lesson:6, word:"您好", py:"nínhǎo", def:"尊敬的问候语。", img: null},
    {lesson:6, word:"父母", py:"fùmǔ", def:"父亲和母亲。", img: null},
    {lesson:6, word:"父亲", py:"fùqin", def:"爸爸。", img: null},
    {lesson:6, word:"母亲", py:"mǔqin", def:"妈妈。", img: null},
    {lesson:6, word:"同学", py:"tóngxué", def:"在同一学校学习的人。", img: null},
    {lesson:6, word:"学生", py:"xuéshēng", def:"在学校学习的人。", img: null},
    {lesson:6, word:"大学", py:"dàxué", def:"高等教育机构。", img: null},
    {lesson:6, word:"为了", py:"wèile", def:"表示目的。", img: null},
    {lesson:6, word:"为什么", py:"wèishénme", def:"询问原因。", img: null},

    // 第7课 第四单元5
    {lesson:7, word:"昨天", py:"zuótiān", def:"今天的前一天。", img: null},
    {lesson:7, word:"今天", py:"jīntiān", def:"说话时的这一天。", img: null},
    {lesson:7, word:"明天", py:"míngtiān", def:"今天的下一天。", img: null},
    {lesson:7, word:"后天", py:"hòutiān", def:"明天的下一天。", img: null},
    {lesson:7, word:"星期", py:"xīngqī", def:"一周七天的时间单位。", img: null},
    {lesson:7, word:"星期六", py:"xīngqīliù", def:"一周的第六天。", img: null},
    {lesson:7, word:"表示", py:"biǎoshì", def:"表达；显示。", img: null},
    {lesson:7, word:"早上", py:"zǎoshang", def:"一天的开始时段。", img: null},
    {lesson:7, word:"上午", py:"shàngwǔ", def:"从早上到中午的时段。", img: null},
    {lesson:7, word:"下午", py:"xiàwǔ", def:"从中午到傍晚的时段。", img: null},
    {lesson:7, word:"晚上", py:"wǎnshang", def:"日落后的时段。", img: null},
    {lesson:7, word:"现在", py:"xiànzài", def:"当前时刻。", img: null},
    {lesson:7, word:"上去", py:"shàngqù", def:"从低处到高处去。", img: null},
    {lesson:7, word:"上来", py:"shànglái", def:"从低处到高处来。", img: null},
    {lesson:7, word:"上学", py:"shàngxué", def:"去学校学习。", img: null},
    {lesson:7, word:"一下", py:"yīxià", def:"短暂地；一会儿。", img: null},
    {lesson:7, word:"下来", py:"xiàlái", def:"从高处到低处来。", img: null},
    {lesson:7, word:"下去", py:"xiàqù", def:"从高处到低处去。", img: null},
    {lesson:7, word:"起来", py:"qǐlái", def:"由坐卧而站立；开始行动。", img: null},
    {lesson:7, word:"后来", py:"hòulái", def:"之后的时间。", img: null},
    {lesson:7, word:"马上", py:"mǎshàng", def:"立刻；很快。", img: null},

    // 第8课 第四单元6
    {lesson:8, word:"绿水", py:"lǜshuǐ", def:"绿色的水。", img: null},
    {lesson:8, word:"红掌", py:"hóngzhǎng", def:"红色的手掌；一种植物名。", img: null},
    {lesson:8, word:"小猫", py:"xiǎomāo", def:"幼小的猫。", img: null},
    {lesson:8, word:"身子", py:"shēnzi", def:"身体。", img: null},
    {lesson:8, word:"身上", py:"shēnshang", def:"身体上；随身带着。", img: null},
    {lesson:8, word:"绿的", py:"lǜde", def:"绿色的。", img: null},
    {lesson:8, word:"天鹅", py:"tiān'é", def:"一种大型水鸟，颈长而优雅。", img: null},

    // 第9课 第四单元7
    {lesson:9, word:"好吃", py:"hǎochī", def:"味道好。", img: null},
    {lesson:9, word:"好吃吗", py:"hǎochīma", def:"询问味道是否好。", img: null},
    {lesson:9, word:"真好吃", py:"zhēn hǎochī", def:"确实很好吃。", img: null},
    {lesson:9, word:"真好", py:"zhēnhǎo", def:"确实很好。", img: null},
    {lesson:9, word:"饺子", py:"jiǎozi", def:"一种包馅的面食。", img: null},
    {lesson:9, word:"大米", py:"dàmǐ", def:"稻谷去壳后的籽粒。", img: null},
    {lesson:9, word:"别人", py:"biérén", def:"其他人。", img: null},
    {lesson:9, word:"别的", py:"biéde", def:"其他的。", img: null},
    {lesson:9, word:"太太", py:"tàitai", def:"对已婚妇女的称呼；妻子。", img: null},

    // 第10课 第四单元8
    {lesson:10, word:"上面", py:"shàngmiàn", def:"位置较高的地方；表面。", img: null},
    {lesson:10, word:"下面", py:"xiàmiàn", def:"位置较低的地方。", img: null},
    {lesson:10, word:"后面", py:"hòumiàn", def:"背面的方向；较晚的时间。", img: null},
    {lesson:10, word:"东面", py:"dōngmiàn", def:"东方的一面。", img: null},
    {lesson:10, word:"南面", py:"nánmiàn", def:"南方的一面。", img: null},
    {lesson:10, word:"南边", py:"nánbiān", def:"南方的方向。", img: null},
    {lesson:10, word:"北面", py:"běimiàn", def:"北方的一面。", img: null},
    {lesson:10, word:"北边", py:"běibiān", def:"北方的方向。", img: null},
    {lesson:10, word:"东西", py:"dōngxī", def:"物品；东方和西方。", img: null},
    {lesson:10, word:"学校", py:"xuéxiào", def:"进行教育的机构。", img: null},
    {lesson:10, word:"长江", py:"Chángjiāng", def:"中国最长的河流。", img: null},
    {lesson:10, word:"房间", py:"fángjiān", def:"建筑物内的隔间。", img: null}
  ]
};
// 由 vocab-match.js 初始化后再调用：
window.addEventListener('DOMContentLoaded', () => {
  if (window.autoFillImages && window.VOCAB_DATA) {
    autoFillImages(VOCAB_DATA.words);
  }
});