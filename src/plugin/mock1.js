import Mock, {
  mock,
  Random
} from "mockjs"
Mock.setup({
  timeout: 1000
})

Random.id()
Mock.mock("http://timemeetyou.com:8889/api/private/v1/menusList", {
  total: "10",
  data: [{
      "icon": "el-icon-s-home",
      "id": "12135",
      "title": "系统首页",
      "path": "firstPage"
    },
    {
      "icon": "el-icon-s-comment",
      "id": "12136",
      "title": "我的消息",
      "path": "message"
    },
    {
      "icon": "el-icon-document-copy",
      "id": "12137",
      "title": "我的阅读记录",
      "path": "read"
    },
    {
      "icon": "el-icon-s-goods",
      "id": "12138",
      "title": "购书中心",
      "path": "shop",
      "subs": [{
          "id": "121371",
          "title": "历史文学",
          "path": "history"
        },
        {
          "id": "121372",
          "title": "小说",
          "path": "factory",

        },
        {
          "id": "121373",
          "title": "散文",
          "path": "prose"
        }
      ]
    },
    {
      "icon": "el-icon-edit-outline",
      "id": "12139",
      "title": "我的心情记录",
      "path": "motion"
    }
  ]
})
Mock.mock("http://timemeetyou.com:8889/api/private/v1/readList?page=1", {
  data: [{
      "id": "321",
      "name": "深入浅出Node",
      "img": "http://img3m1.ddimg.cn/69/1/23371791-1_b_3.jpg",
      "date": "2020/07/19",
      "finished": true
    },
    {
      "id": "322",
      "name": "深入浅出Node",
      "img": "http://img3m1.ddimg.cn/69/1/23371791-1_b_3.jpg",
      "date": "2020/07/18",
      "finished": true
    },
    {
      "id": "323",
      "name": "深入浅出Node",
      "img": "http://img3m1.ddimg.cn/69/1/23371791-1_b_3.jpg",
      "date": "2020/07/17",
      "finished": false
    },
    {
      "id": "324",
      "name": "Vue.js从入门到项目实战",
      "img": "http://img3m7.ddimg.cn/93/34/27854337-1_b_2.jpg",
      "date": "2020/07/19",
      "finished": true
    },
    {
      "id": "325",
      "name": "万般滋味，都是生活",
      "img": "http://img3m5.ddimg.cn/31/23/25308985-1_b_8.jpg",
      "date": "2020/07/19",
      "finished": true
    },
    {
      "id": "326",
      "name": "生活明朗，万物可爱",
      "img": "http://img3m6.ddimg.cn/43/13/27943486-1_b_2.jpg",
      "date": "2020/07/19",
      "finished": false
    },
    {
      "id": "327",
      "name": "电车上的陌生人",
      "img": "http://img3m3.ddimg.cn/91/9/25147873-1_b_5.jpg",
      "date": "2020/07/19",
      "finished": true
    }
  ]
})
Mock.mock("http://timemeetyou.com:8889/api/private/v1/readList?page=2", {
  data: [{
      "id": "331",
      "name": "人间失格",
      "img": "http://img3m5.ddimg.cn/8/9/28974635-1_l_2.jpg",
      "date": "2020/07/19",
      "finished": true
    },
    {
      "id": "332",
      "name": "习近平谈治国理政",
      "img": "http://img3m7.ddimg.cn/56/32/28978247-1_l_4.jpg",
      "date": "2020/07/18",
      "finished": true
    },
    {
      "id": "333",
      "name": "人生海海",
      "img": "http://img3m5.ddimg.cn/51/34/26921715-1_l_2.jpg",
      "date": "2020/07/17",
      "finished": false
    },
    {
      "id": "334",
      "name": "Vue.js从入门到项目实战",
      "img": "http://img3m7.ddimg.cn/93/34/27854337-1_b_2.jpg",
      "date": "2020/07/19",
      "finished": true
    },
    {
      "id": "335",
      "name": "居里夫人",
      "img": "http://img3m3.ddimg.cn/23/30/28965443-1_l_3.jpg",
      "date": "2020/07/19",
      "finished": true
    },
    {
      "id": "336",
      "name": "生活明朗，万物可爱",
      "img": "http://img3m6.ddimg.cn/43/13/27943486-1_b_2.jpg",
      "date": "2020/07/19",
      "finished": false
    },
    {
      "id": "337",
      "name": "电车上的陌生人",
      "img": "http://img3m3.ddimg.cn/91/9/25147873-1_b_5.jpg",
      "date": "2020/07/19",
      "finished": true
    }
  ]
})
Mock.mock("http://timemeetyou.com:8889/api/private/v1/factory?page=1", [{
  "id": "@id",
  "price|1-100": 100,
  "name": "摸金校尉之九幽将军",
  "img": "https://easyreadfs.nosdn.127.net/rgprL7T6XWzd5Vi3wbwZvA==/8796093024833507576",
  "info": ["天下霸唱"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "生命里最美好的春天",
  "img": "https://easyreadfs.nosdn.127.net/_HITu1HTanEVkT3Shai8pQ==/8796093023942037822",
  "info": ["【法】马克·李维"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "犯罪心理档案（第二季）",
  "img": "https://easyreadfs.nosdn.127.net/5dTcYZsvM2HmXzzf8BtHgw==/8796093023892074202",
  "info": ["刚雪印"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "尸案调查科",
  "img": "https://easyreadfs.nosdn.127.net/YgiXcQeNv9uB7eF0jL07LQ==/8796093024714487469",
  "info": ["九滴水"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "从你的全世界路过（邓超、白百何、杨洋主演）",
  "img": "https://easyreadfs.nosdn.127.net/Bf9QiIlNfSfbcLB4VDYxYw==/8796093024725344110",
  "info": ["张嘉佳"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "浮生寄流年",
  "img": "https://easyreadfs.nosdn.127.net/TNENJcw0htGZPEXMvFuzFg==/8796093023953380353",
  "info": ["晴空蓝兮"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "偷影子的人",
  "img": "https://easyreadfs.nosdn.127.net/cRKFdcT2zbunI3xUfnuMOg==/8796093024793740917",
  "info": ["【法】马克·李维,段韵灵"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "推理之王1：无证之罪",
  "img": "https://easyreadfs.nosdn.127.net/WqCVQlwfwP_DxUmH-4E7kw==/8796093024783153164",
  "info": ["紫金陈"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "摆渡人",
  "img": "https://easyreadfs.nosdn.127.net/ZVMAwFLzhOFzm94SQU-JKA==/7917106043569656279",
  "info": ["张嘉佳"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "陆犯焉识",
  "img": "https://easyreadfs.nosdn.127.net/THtAyVTmzsCOzsy8cV4K0A==/8796093024789744459",
  "info": ["【美】严歌苓"]
}])
Mock.mock("http://timemeetyou.com:8889/api/private/v1/factory?page=2", [{
  "id": "@id",
  "price|1-100": 100,
  "name": "那时，我们还不怕相爱",
  "img": "https://easyreadfs.nosdn.127.net/PVflsLtz2XM4yBLClrtE6A==/7916897136360644404",
  "info": ["飞行官小北"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "偷窥者",
  "img": "https://easyreadfs.nosdn.127.net/3jyeFaR_iU3FXgcugO6KUA==/8796093024615322104",
  "info": ["秦明"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "神州奇侠正传（合集）",
  "img": "https://easyreadfs.nosdn.127.net/JnjhhAAaAN-_Gq5qC9i3rA==/8796093024791024582",
  "info": ["温瑞安"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "伊斯坦布尔假期",
  "img": "https://easyreadfs.nosdn.127.net/-EqsExl0Q9_hXKJy2PM9Aw==/8796093023944104061",
  "info": ["【法】马克·李维"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "为了你，我愿意热爱整个世界",
  "img": "https://easyreadfs.nosdn.127.net/TSGabQ7qpNuXJeI42lQKAw==/8796093024305143163",
  "info": ["唐家三少"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "边城",
  "img": "https://easyreadfs.nosdn.127.net/KJI24EkufynwiL5vhCNF2w==/12094635724403",
  "info": ["沈从文"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "从你的全世界路过",
  "img": "https://easyreadfs.nosdn.127.net/8bxDWBqlez9Y27ZImxhqog==/7916693726708851780",
  "info": ["张嘉佳"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "天坑鹰猎（王俊凯主演同名电视剧）",
  "img": "https://easyreadfs.nosdn.127.net/OF7x_D76ah1wcJU1mWZpQg==/8796093023812856128",
  "info": ["天下霸唱"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "国家行动",
  "img": "https://easyreadfs.nosdn.127.net/5sO5o9gSbLKSE77VidPz3g==/8796093024839157687",
  "info": ["程琳"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "虚无的十字架",
  "img": "https://easyreadfs.nosdn.127.net/j0dwmaiTmiRbm8r5Pp4t3A==/8796093024800105023",
  "info": ["【日】东野圭吾,王蕴洁"]
}])
Mock.mock("http://timemeetyou.com:8889/api/private/v1/prose?page=1", [{
  "id": "@id",
  "price|1-100": 100,
  "name": "人生里，总有一段传奇在等你",
  "img": "https://easyreadfs.nosdn.127.net/ctodmgdiFbCPnZkIpQcKQg==/8796093023948144047",
  "info": ["张佳玮"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "看见",
  "img": "https://easyreadfs.nosdn.127.net/g4X9-Pj1Q5qgDTTHPCpKKA==/8796093024837309976",
  "info": ["柴静"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "我承认我不曾历经沧桑",
  "img": "https://easyreadfs.nosdn.127.net/M3YTwKVG1D4OmsBCa3FZSg==/8796093024830466541",
  "info": ["蒋方舟"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "梁文道：常识",
  "img": "https://easyreadfs.nosdn.127.net/LT27PEIThTKl7A9PnMJdaw==/8796093024798975103",
  "info": ["梁文道"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "好吗好的",
  "img": "https://easyreadfs.nosdn.127.net/-rk7Q7iILfenWkRzqj263Q==/8796093024799596287",
  "info": ["大冰"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "你要去相信，没有到不了的明天",
  "img": "https://easyreadfs.nosdn.127.net/5iextEbR1CucVLBS4Z7uLw==/8796093023953383863",
  "info": ["卢思浩"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "云边有个小卖部",
  "img": "https://easyreadfs.nosdn.127.net/lK3wnUiyNtFMMO_2cmSxIQ==/8796093024838279094",
  "info": ["张嘉佳"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "天下粮田",
  "img": "https://easyreadfs.nosdn.127.net/02lK8nEtKk1mnsufrvI0GA==/8796093023816456474",
  "info": ["高锋"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "目送",
  "img": "https://easyreadfs.nosdn.127.net/xBc8QEp0QEpGsgXbrkayLg==/8796093024719703272",
  "info": ["龙应台"]
}, {
  "id": "@id",
  "price|1-100": 100,
  "name": "梁启超家书",
  "img": "https://easyreadfs.nosdn.127.net/exi053qzRnFt0StMv0BJcg==/8796093024808934924",
  "info": ["梁启超"]
}])
Mock.mock("http://timemeetyou.com:8889/api/private/v1/prose?page=2", [{
    "id": "@id",
    "price|1-100": 100,
    "name": "侣行",
    "img": "https://easyreadfs.nosdn.127.net/ywB9paE3sl99ZOwclRpKCg==/7916869648568641940",
    "info": ["张昕宇"]
  },
  {
    "id": "@id",
    "price|1-100": 100,
    "name": "我在美军航母上的8年",
    "img": "https://easyreadfs.nosdn.127.net/3TejQTh49C1PXsCEm6vAwA==/6597080761773819661",
    "info": ["一鸣,海攀"]
  }, {
    "id": "@id",
    "price|1-100": 100,
    "name": "孩子，你慢慢来",
    "img": "https://easyreadfs.nosdn.127.net/vT7Bfz83b2MzD0KfiB4ScQ==/8796093024751880496",
    "info": ["龙应台"]
  }, {
    "id": "@id",
    "price|1-100": 100,
    "name": "悲惨世界",
    "img": "https://easyreadfs.nosdn.127.net/Oy2p_W01cn6RcJm7TsgwmQ==/6597241290471153736",
    "info": ["【法】雨　果（HugoV.）"]
  }, {
    "id": "@id",
    "price|1-100": 100,
    "name": "我执",
    "img": "https://easyreadfs.nosdn.127.net/pVDbV7ZiWf16KtmIMpHBbw==/8796093024795191625",
    "info": ["梁文道"]
  }, {
    "id": "@id",
    "price|1-100": 100,
    "name": "唯有青春，最难将息",
    "img": "https://easyreadfs.nosdn.127.net/7IQ34YsGqtDLzuyN7bjo7Q==/7916530998988280688",
    "info": ["近藤大介"]
  }, {
    "id": "@id",
    "price|1-100": 100,
    "name": "至味在人间",
    "img": "https://easyreadfs.nosdn.127.net/t3wQEdDWgEdrfpbOgpwM-A==/8796093024699710635",
    "info": ["陈晓卿"]
  }, {
    "id": "@id",
    "price|1-100": 100,
    "name": "三国演义",
    "img": "https://easyreadfs.nosdn.127.net/986-XDmv5ql4cn4JSyUbDQ==/8796093024394158864",
    "info": ["【元末明初】罗贯中"]
  }, {
    "id": "@id",
    "price|1-100": 100,
    "name": "我与地坛",
    "img": "https://easyreadfs.nosdn.127.net/K8Zyi-KtJXr8lSJRPlEupQ==/8796093024730078170",
    "info": ["史铁生"]
  }, {
    "id": "@id",
    "price|1-100": 100,
    "name": "我们这儿是精神病院",
    "img": "https://easyreadfs.nosdn.127.net/5-sH9OG4BuRiO9e_F8ROkA==/7916824568592343679",
    "info": ["小安"]
  }
])