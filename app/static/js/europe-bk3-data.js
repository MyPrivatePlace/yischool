// 本册专用词库数据（示例）
window.VOCAB_DATA = {
  // 页面标题
  title: "配对游戏 · 中文（欧洲版）第3册",

  // 可选：若不提供则会从 words 中提取并排序
  lessons: [
    { id: 1,  title: "十二生肖" },
    { id: 2,  title: "祝你生日快乐" },
    { id: 3,  title: "多彩的贺卡" },
    { id: 4,  title: "生日聚会" },
    { id: 5,  title: "迷人的夏天" },
    { id: 6,  title: "云房子" },
    { id: 7,  title: "过冬的好办法" },
    { id: 8,  title: "会上树的鱼" },
    { id: 9,  title: "去旅行吧" },
    { id: 10,  title: "东方明珠" },
    { id: 11,  title: "问路" },
    { id: 12,  title: "旅游见闻" },
    { id: 13,  title: "望梅止渴" },
    { id: 14,  title: "画龙点睛" },
    { id: 15,  title: "坐井观天" },
    { id: 16,  title: "八仙过海 各显神通" },
  ],
  // 每个词条：
  // id: 唯一，lesson: 课次（数字），hz: 汉字，py: 拼音，def: 释义，img: 可选图片路径（相对 /static）
  words: [
    // 第1课 第一单元1
    {lesson:1, word:"鼠", py:"shǔ", def:"老鼠，一种小型啮齿动物。", img: null},
    {lesson:1, word:"虎", py:"hǔ", def:"老虎，一种大型猫科动物。", img: null},
    {lesson:1, word:"兔", py:"tù", def:"兔子，一种长耳哺乳动物。", img: null},
    {lesson:1, word:"蛇", py:"shé", def:"一种无足的爬行动物。", img: null},
    {lesson:1, word:"猴", py:"hóu", def:"猴子，灵长类动物。", img: null},
    {lesson:1, word:"狗", py:"gǒu", def:"犬科动物，常作为宠物。", img: null},
    {lesson:1, word:"猪", py:"zhū", def:"一种家畜，肉可食用。", img: null},
    {lesson:1, word:"兔子", py:"tùzi", def:"兔子的统称。", img: null},
    {lesson:1, word:"小狗", py:"xiǎogǒu", def:"幼小的狗。", img: null},

    // 第2课 第一单元2
    {lesson:2, word:"生日", py:"shēngrì", def:"出生的日子，每年纪念的日子。", img: null},
    {lesson:2, word:"出生", py:"chūshēng", def:"从母体中分离出来，来到世上。", img: null},
    {lesson:2, word:"快乐", py:"kuàilè", def:"高兴，愉快。", img: null},
    {lesson:2, word:"朋友", py:"péngyou", def:"彼此有交情的人。", img: null},
    {lesson:2, word:"请问", py:"qǐngwèn", def:"礼貌地提出问题。", img: null},
    {lesson:2, word:"青春", py:"qīngchūn", def:"青年时期，充满活力的年纪。", img: null},
    {lesson:2, word:"准备", py:"zhǔnbèi", def:"事先安排或筹划。", img: null},
    {lesson:2, word:"送给", py:"sònggěi", def:"把东西给予他人。", img: null},
    {lesson:2, word:"小猫", py:"xiǎomāo", def:"幼小的猫。", img: null},
    {lesson:2, word:"小白兔", py:"xiǎobáitù", def:"白色的小兔子。", img: null},
    {lesson:2, word:"小山羊", py:"xiǎoshānyáng", def:"幼小的山羊。", img: null},

    // 第3课 第一单元3
    {lesson:3, word:"多彩", py:"duōcǎi", def:"色彩丰富，多种多样。", img: null},
    {lesson:3, word:"贺卡", py:"hèkǎ", def:"用于祝贺的卡片。", img: null},
    {lesson:3, word:"森林", py:"sēnlín", def:"大片的树木生长区。", img: null},
    {lesson:3, word:"祝贺", py:"zhùhè", def:"表达祝福和庆贺。", img: null},
    {lesson:3, word:"蓝天", py:"lántiān", def:"蓝色的天空。", img: null},
    {lesson:3, word:"大海", py:"dàhǎi", def:"广阔的海洋。", img: null},
    {lesson:3, word:"收获", py:"shōuhuò", def:"获得成果；农作物成熟。", img: null},
    {lesson:3, word:"太阳", py:"tàiyáng", def:"太阳系的中心天体。", img: null},
    {lesson:3, word:"希望", py:"xīwàng", def:"心中期望达到的某种目的。", img: null},

    // 第4课 第一单元4
    {lesson:4, word:"蜡烛", py:"làzhú", def:"用于照明的蜡制物品。", img: null},
    {lesson:4, word:"礼物", py:"lǐwù", def:"赠送给他人的物品。", img: null},
    {lesson:4, word:"卡片", py:"kǎpiàn", def:"小而硬的纸片，用于书写信息。", img: null},
    {lesson:4, word:"蛋糕", py:"dàngāo", def:"用鸡蛋、面粉等制作的甜点。", img: null},
    {lesson:4, word:"糖果", py:"tángguǒ", def:"甜味的零食。", img: null},
    {lesson:4, word:"许愿", py:"xǔyuàn", def:"表达心中的愿望。", img: null},
    {lesson:4, word:"心愿", py:"xīnyuàn", def:"心中的愿望。", img: null},

    // 第5课 第二单元5
    {lesson:5, word:"春天", py:"chūntiān", def:"一年中的第一个季节。", img: null},
    {lesson:5, word:"夏天", py:"xiàtiān", def:"一年中的第二个季节，天气炎热。", img: null},
    {lesson:5, word:"秋天", py:"qiūtiān", def:"一年中的第三个季节，收获的季节。", img: null},
    {lesson:5, word:"冬天", py:"dōngtiān", def:"一年中的第四个季节，天气寒冷。", img: null},
    {lesson:5, word:"鲜花", py:"xiānhuā", def:"新鲜的花朵。", img: null},
    {lesson:5, word:"游泳", py:"yóuyǒng", def:"在水中的运动。", img: null},
    {lesson:5, word:"读书", py:"dúshū", def:"阅读书籍；上学。", img: null},
    {lesson:5, word:"绿树成荫", py:"lǜshùchéngyīn", def:"树木茂盛，形成阴凉。", img: null},
    {lesson:5, word:"落叶飘飘", py:"luòyèpiāopiāo", def:"树叶飘落的样子。", img: null},
    {lesson:5, word:"雪花纷飞", py:"xuěhuāfēnfēi", def:"雪花纷纷扬扬地飘落。", img: null},

    // 第6课 第二单元6
    {lesson:6, word:"云雨", py:"yúnyǔ", def:"云和雨；指天气变化。", img: null},
    {lesson:6, word:"风雪", py:"fēngxuě", def:"风和雪。", img: null},
    {lesson:6, word:"刚刚", py:"gānggāng", def:"刚才，不久之前。", img: null},
    {lesson:6, word:"容易", py:"róngyì", def:"不难，简单。", img: null},
    {lesson:6, word:"好像", py:"hǎoxiàng", def:"仿佛，似乎。", img: null},
    {lesson:6, word:"高兴", py:"gāoxìng", def:"愉快，开心。", img: null},
    {lesson:6, word:"天空", py:"tiānkōng", def:"地球上方的大气空间。", img: null},
    {lesson:6, word:"月亮", py:"yuèliang", def:"地球的卫星，夜晚可见。", img: null},

    // 第7课 第二单元7
    {lesson:7, word:"怕冷", py:"pàlěng", def:"害怕寒冷。", img: null},
    {lesson:7, word:"可以", py:"kěyǐ", def:"表示允许或可能。", img: null},
    {lesson:7, word:"所以", py:"suǒyǐ", def:"表示因果关系的结果。", img: null},
    {lesson:7, word:"再见", py:"zàijiàn", def:"告别时说的话。", img: null},
    {lesson:7, word:"时候", py:"shíhou", def:"时间点；时刻。", img: null},
    {lesson:7, word:"时间", py:"shíjiān", def:"时光；时刻。", img: null},

    // 第8课 第二单元8
    {lesson:8, word:"正在", py:"zhèngzài", def:"表示动作在进行中。", img: null},
    {lesson:8, word:"一边", py:"yībiān", def:"表示两个动作同时进行。", img: null},
    {lesson:8, word:"忽然", py:"hūrán", def:"突然，出乎意料地。", img: null},
    {lesson:8, word:"突然", py:"tūrán", def:"出乎意料地。", img: null},
    {lesson:8, word:"奇怪", py:"qíguài", def:"不寻常，难以理解。", img: null},
    {lesson:8, word:"怎么", py:"zěnme", def:"询问方式或原因。", img: null},
    {lesson:8, word:"非常", py:"fēicháng", def:"十分，很。", img: null},
    {lesson:8, word:"下来", py:"xiàlái", def:"从高处到低处来。", img: null},

    // 第9课 第三单元9
    {lesson:9, word:"火车", py:"huǒchē", def:"在铁轨上行驶的交通工具。", img: null},
    {lesson:9, word:"飞机", py:"fēijī", def:"在空中飞行的交通工具。", img: null},
    {lesson:9, word:"轮船", py:"lúnchuán", def:"大型船只。", img: null},
    {lesson:9, word:"飞船", py:"fēichuán", def:"太空船；飞艇。", img: null},
    {lesson:9, word:"地铁", py:"dìtiě", def:"地下的铁路交通系统。", img: null},
    {lesson:9, word:"商店", py:"shāngdiàn", def:"售卖商品的场所。", img: null},
    {lesson:9, word:"公园", py:"gōngyuán", def:"供公众游憩的场所。", img: null},
    {lesson:9, word:"剧场", py:"jùchǎng", def:"演出戏剧的场所。", img: null},
    {lesson:9, word:"自行车", py:"zìxíngchē", def:"人力驱动的两轮车。", img: null},
    {lesson:9, word:"出租车", py:"chūzūchē", def:"按里程计费的载客汽车。", img: null},

    // 第10课 第三单元10
    {lesson:10, word:"明珠", py:"míngzhū", def:"明亮的珍珠；比喻珍贵的事物。", img: null},
    {lesson:10, word:"都市", py:"dūshì", def:"大城市。", img: null},
    {lesson:10, word:"觉得", py:"juéde", def:"感觉，认为。", img: null},
    {lesson:10, word:"夜晚", py:"yèwǎn", def:"晚上的时间。", img: null},
    {lesson:10, word:"互相", py:"hùxiāng", def:"彼此，相互。", img: null},
    {lesson:10, word:"非常", py:"fēicháng", def:"十分，很。", img: null},
    {lesson:10, word:"电视塔", py:"diànshìtǎ", def:"用于电视信号传输的高塔。", img: null},

    // 第11课 第三单元11
    {lesson:11, word:"门路", py:"ménlù", def:"途径，方法。", img: null},
    {lesson:11, word:"国家", py:"guójiā", def:"有主权、领土和人民的政治实体。", img: null},
    {lesson:11, word:"向往", py:"xiàngwǎng", def:"内心渴望达到某种境界或地方。", img: null},
    {lesson:11, word:"立刻", py:"lìkè", def:"马上，立即。", img: null},
    {lesson:11, word:"方向", py:"fāngxiàng", def:"东、南、西、北等方位。", img: null},
    {lesson:11, word:"但是", py:"dànshì", def:"表示转折。", img: null},
    {lesson:11, word:"最近", py:"zuìjìn", def:"近来，不久前。", img: null},
    {lesson:11, word:"买票", py:"mǎipiào", def:"购买票证。", img: null},
    {lesson:11, word:"前面", py:"qiánmiàn", def:"前方的位置。", img: null},
    {lesson:11, word:"外国", py:"wàiguó", def:"其他国家。", img: null},
    {lesson:11, word:"一直", py:"yīzhí", def:"持续不断。", img: null},
    {lesson:11, word:"热情", py:"rèqíng", def:"热烈的感情。", img: null},

    // 第12课 第三单元12
    {lesson:12, word:"乘舟", py:"chéngzhōu", def:"乘坐小船。", img: null},
    {lesson:12, word:"乘船", py:"chéngchuán", def:"乘坐船只。", img: null},
    {lesson:12, word:"将来", py:"jiānglái", def:"未来的时间。", img: null},
    {lesson:12, word:"将要", py:"jiāngyào", def:"表示即将发生。", img: null},

    // 第13课 第四单元13
    {lesson:13, word:"将士", py:"jiàngshì", def:"将领和士兵。", img: null},
    {lesson:13, word:"赶路", py:"gǎnlù", def:"急忙赶路程。", img: null},
    {lesson:13, word:"着急", py:"zháojí", def:"焦急，心急。", img: null},
    {lesson:13, word:"梅子", py:"méizi", def:"梅树的果实。", img: null},
    {lesson:13, word:"想到", py:"xiǎngdào", def:"想起，考虑到。", img: null},
    {lesson:13, word:"想起", py:"xiǎngqǐ", def:"回忆起来。", img: null},
    {lesson:13, word:"找到", py:"zhǎodào", def:"寻找到。", img: null},
    {lesson:13, word:"顺利", py:"shùnlì", def:"没有阻碍，顺利。", img: null},
    {lesson:13, word:"酸酸的", py:"suānsuānde", def:"味道有点酸。", img: null},
    {lesson:13, word:"甜甜的", py:"tiántiánde", def:"味道甜。", img: null},
    {lesson:13, word:"望梅止渴", py:"wàngméizhǐkě", def:"比喻用空想安慰自己。", img: null},
    {lesson:13, word:"又累又渴", py:"yòulèiyòukě", def:"既疲劳又口渴。", img: null},
    {lesson:13, word:"又大又多", py:"yòudàyòuduō", def:"既大又多。", img: null},
    {lesson:13, word:"酸甜可口", py:"suāntiánkěkǒu", def:"味道酸甜，很好吃。", img: null},

    // 第14课 第四单元14
    {lesson:14, word:"出名", py:"chūmíng", def:"有名气。", img: null},
    {lesson:14, word:"画家", py:"huàjiā", def:"擅长绘画的人。", img: null},
    {lesson:14, word:"眼睛", py:"yǎnjing", def:"视觉器官。", img: null},
    {lesson:14, word:"眼前", py:"yǎnqián", def:"面前，当前。", img: null},
    {lesson:14, word:"旁边", py:"pángbiān", def:"附近，侧边。", img: null},
    {lesson:14, word:"学会", py:"xuéhuì", def:"学习并掌握。", img: null},
    {lesson:14, word:"周围", py:"zhōuwéi", def:"四周，环绕的地方。", img: null},
    {lesson:14, word:"相信", py:"xiāngxìn", def:"认为正确或确实而不怀疑。", img: null},
    {lesson:14, word:"结果", py:"jiéguǒ", def:"事情的结局。", img: null},
    {lesson:14, word:"画龙点睛", py:"huàlóngdiǎnjīng", def:"比喻在关键处点明要点，使内容生动有力。", img: null},
    {lesson:14, word:"画蛇添足", py:"huàshétiānzú", def:"比喻做了多余的事，反而坏事。", img: null},
    {lesson:14, word:"活灵活现", py:"huólínghuóxiàn", def:"形容描绘生动逼真。", img: null},
    {lesson:14, word:"电闪雷鸣", py:"diànshǎnléimíng", def:"闪电和雷声，形容声势很大。", img: null},

    // 第15课 第四单元15
    {lesson:15, word:"青蛙", py:"qīngwā", def:"一种两栖动物。", img: null},
    {lesson:15, word:"小鸟", py:"xiǎoniǎo", def:"小的鸟类。", img: null},
    {lesson:15, word:"哪儿", py:"nǎr", def:"哪里，什么地方。", img: null},
    {lesson:15, word:"哪里", py:"nǎlǐ", def:"什么地方。", img: null},
    {lesson:15, word:"四海", py:"sìhǎi", def:"指全国各地或全世界。", img: null},
    {lesson:15, word:"回答", py:"huídá", def:"对问题作出答复。", img: null},
    {lesson:15, word:"弄错", py:"nòngcuò", def:"搞错了。", img: null},
    {lesson:15, word:"井里", py:"jǐnglǐ", def:"水井里面。", img: null},
    {lesson:15, word:"认为", py:"rènwéi", def:"对人或事物确定某种看法。", img: null},
    {lesson:15, word:"应该", py:"yīnggāi", def:"表示理所当然。", img: null},
    {lesson:15, word:"坐井观天", py:"zuòjǐngguāntiān", def:"比喻眼界狭窄，见识短浅。", img: null},
    {lesson:15, word:"无边无际", py:"wúbiānwújì", def:"没有边际，非常广阔。", img: null},

    // 第16课 第四单元16
    {lesson:16, word:"通过", py:"tōngguò", def:"经过，穿过；同意。", img: null},
    {lesson:16, word:"提议", py:"tíyì", def:"提出建议。", img: null},
    {lesson:16, word:"各自", py:"gèzì", def:"各人自己；各个方面自己的一方。", img: null},
    {lesson:16, word:"本事", py:"běnshì", def:"本领，能力。", img: null},
    {lesson:16, word:"率先", py:"shuàixiān", def:"带头，首先。", img: null},
    {lesson:16, word:"扇子", py:"shànzi", def:"摇动生风的用具。", img: null},
    {lesson:16, word:"远处", py:"yuǎnchù", def:"遥远的地方。", img: null},
    {lesson:16, word:"漂去", py:"piāoqù", def:"漂浮而去。", img: null},
    {lesson:16, word:"八仙过海", py:"bāxiānguòhǎi", def:"比喻各自有一套办法或本领去完成任务。", img: null},
    {lesson:16, word:"各显神通", py:"gèxiǎnshéntōng", def:"各自显示自己的本领。", img: null},
    {lesson:16, word:"吃饱喝足", py:"chībǎohēzú", def:"吃得饱，喝得足。", img: null}
  ]
};
// 由 vocab-match.js 初始化后再调用：
window.addEventListener('DOMContentLoaded', () => {
  if (window.autoFillImages && window.VOCAB_DATA) {
    autoFillImages(VOCAB_DATA.words);
  }
});