import Mock, { mock, Random } from "mockjs"
Random.id()
Mock.setup({
    timeout:1000
})
Mock.mock("http://timemeetyou.com:8889/api/private/v1/history?page=1",
     [ {
        "id": "@id",
  "price|1-100": 100,
  "price|1-100": 100,
        "name": "世界历史很有趣：袁腾飞讲日本",
        "img": "https://easyreadfs.nosdn.127.net/4YN7K3WIY7K9Ko7jR7GAYA==/8796093024345178557",
        "info": ["袁腾飞"]
    }, {
        "id": "@id",
  "price|1-100": 100,
        "name": "战争就是这么回事儿：袁腾飞讲二战（上）",
        "img": "https://easyreadfs.nosdn.127.net/UfdgIbisCRedtzvtxTtWXA==/8796093023232666030",
        "info": ["袁腾飞"]
    }, {
        "id": "@id",
  "price|1-100": 100,
        "name": "大国的崛起",
        "img": "https://easyreadfs.nosdn.127.net/Fq96hLELrv-M9nDYYqW11g==/8796093024808977507",
        "info": ["【英】赫伯特·乔治·威尔斯"]
    }, {
        "id": "@id",
  "price|1-100": 100,
        "name": "这个历史挺靠谱：袁腾飞讲历史（全三册）",
        "img": "https://easyreadfs.nosdn.127.net/hCpVI2xUD6tAS2dbSGMJAg==/8796093024795597810",
        "info": ["袁腾飞"]
    }, {
        "id": "@id",
  "price|1-100": 100,
        "name": "战争就是这么回事儿：袁腾飞讲二战（下）",
        "img": "https://easyreadfs.nosdn.127.net/vWhNiwKzMQuhv7syg2OC5g==/8796093023928237324",
        "info": ["袁腾飞"]
    }, {
        "id": "@id",
  "price|1-100": 100,
        "name": "世界简史",
        "img": "https://easyreadfs.nosdn.127.net/TGQC74Y7SK8mb6yvtaDnlQ==/7916711318894706068",
        "info": ["[英] 赫伯特·乔治·威尔斯"]
    }, {
        "id": "@id",
  "price|1-100": 100,
        "name": "三国机密（下）：潜龙在渊",
        "img": "https://easyreadfs.nosdn.127.net/mWlC7KmBf01RzzrDpnbAJw==/8796093024089037761",
        "info": ["马伯庸"]
    },{
        "id": "@id",
  "price|1-100": 100,
        "name": "这个历史挺靠谱1：袁腾飞讲中国史（上）",
        "img": "https://easyreadfs.nosdn.127.net/vAhEZXViNdGUZdVAcwy5kA==/8796093024771430378",
        "info": ["袁腾飞"]
    },{
        "id": "@id",
  "price|1-100": 100,
        "name": "战争就是这么回事儿：袁腾飞讲一战",
        "img": "https://easyreadfs.nosdn.127.net/ztHhmIXqLvASQfl6k64p_A==/7916658542336626393",
        "info": ["袁腾飞"]
    }, {
        "id": "@id",
  "price|1-100": 100,
        "name": "袁腾飞讲历史（全12册）",
        "img": "https://easyreadfs.nosdn.127.net/BlxxUSEVYmj1-DzQfVUraA==/8796093024785013370",
        "info": ["袁腾飞"]
    }]
)
Mock.mock("http://timemeetyou.com:8889/api/private/v1/history?page=2",[  {
    "id": "@id",
  "price|1-100": 100,
    "name": "简读中国史：世界史坐标下的中国",
    "img": "https://easyreadfs.nosdn.127.net/wgYrCix0Kzy2DgplwkRQ7w==/8796093024798871795",
    "info": ["张宏杰"]
}, {
    "id": "@id",
  "price|1-100": 100,
    "name": "湘军为什么这么牛1：乱世豪杰多书生",
    "img": "https://easyreadfs.nosdn.127.net/WXLiTNGA21FtSZj6m18Pqg==/8796093023892297902",
    "info": ["王纪卿"]
}, {
    "id": "@id",
  "price|1-100": 100,
    "name": "南渡北归：北归",
    "img": "https://easyreadfs.nosdn.127.net/piqUH1ACTjalo9iQiIZwkw==/8796093024810145294",
    "info": ["岳南"]
}, {
    "id": "@id",
  "price|1-100": 100,
    "name": "这个历史挺靠谱3：袁腾飞讲世界史",
    "img": "https://easyreadfs.nosdn.127.net/eyZuL4CmftSJt9m3QltabQ==/8796093023932593992",
    "info": ["袁腾飞"]
}, {
    "id": "@id",
  "price|1-100": 100,
    "name": "从晚清到民国",
    "img": "https://easyreadfs.nosdn.127.net/9YIHE4sRtQXsOmZd0K8log==/8796093024711106120",
    "info": ["唐德刚"]
}, {
    "id": "@id",
  "price|1-100": 100,
    "name": "这个历史挺靠谱2：袁腾飞讲中国史 （下）",
    "img": "https://easyreadfs.nosdn.127.net/oowSVdbiFGLflF20UguiGA==/8796093023932369554",
    "info": ["袁腾飞"]
}, {
    "id": "@id",
  "price|1-100": 100,
    "name": "袁腾飞讲历史：轻轻松松搞定高考",
    "img": "https://easyreadfs.nosdn.127.net/oVMqiQfyIJC54MqWvv5Uuw==/7916980699243474326",
    "info": ["袁腾飞"]
}, {
    "id": "@id",
  "price|1-100": 100,
    "name": "袁腾飞讲先秦·战国纵横",
    "img": "https://easyreadfs.nosdn.127.net/McMmcCxXFiwYXNehtZtChQ==/8796093024334638574",
    "info": ["袁腾飞"]
}, {
    "id": "@id",
  "price|1-100": 100,
    "name": "当历史可以观看",
    "img": "https://easyreadfs.nosdn.127.net/tDywdEw3URNEa6BF4DhfjA==/7916750901313029874",
    "info": ["冯克力"]
}, {
    "id": "@id",
  "price|1-100": 100,
    "name": "中国历史风云录",
    "img": "https://easyreadfs.nosdn.127.net/tNP44gKIxNXs_GMefy1Z9A==/8796093024837320156",
    "info": ["【日】陈舜臣"]
}])