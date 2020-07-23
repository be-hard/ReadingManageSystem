import Mock, { mock } from "mockjs"
Mock.setup({
    timeout:1000
})
Mock.mock("http://timemeetyou.com:8889/api/private/v1/menusList",{
  total:"10",
    data:[{
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
    "path":"shop",
    "subs": [
      {
        "id": "121371",
        "title": "历史文学",
        "path" :"history"
      },
      {
        "id": "121372",
        "title": "小说",
        "path": "factory",
        "subs": [
          {
            "id": "1213711",
            "title": "武侠小说",
            "path":"wuxia"
          },
          {
            "id": "1213712",
            "title": "城市小说",
            "path":"country"
          },
          {
            "id": "1213712",
            "title": "青春小说",
            "path":"younth"
          }
        ]
      },
      {
        "id": "121373",
        "title": "散文"
      }
    ]
  },
  {
    "icon": "el-icon-edit-outline",
    "id": "12139",
    "title": "我的心情记录",
    "path":"motion"
  }]
})
Mock.mock("http://timemeetyou.com:8889/api/private/v1/readList?page=1",{
  data:[
    {
      "id":"321",
      "name":"深入浅出Node",
      "img":"http://img3m1.ddimg.cn/69/1/23371791-1_b_3.jpg",
      "date":"2020/07/19",
      "finished":true
    },
    {
      "id":"322",
      "name":"深入浅出Node",
      "img":"http://img3m1.ddimg.cn/69/1/23371791-1_b_3.jpg",
      "date":"2020/07/18",
      "finished":true
    },
    {
      "id":"323",
      "name":"深入浅出Node",
      "img":"http://img3m1.ddimg.cn/69/1/23371791-1_b_3.jpg",
      "date":"2020/07/17",
      "finished":false
    },
    {
      "id":"324",
      "name":"Vue.js从入门到项目实战",
      "img":"http://img3m7.ddimg.cn/93/34/27854337-1_b_2.jpg",
      "date":"2020/07/19",
      "finished":true
    },
    {
      "id":"325",
      "name":"万般滋味，都是生活",
      "img":"http://img3m5.ddimg.cn/31/23/25308985-1_b_8.jpg",
      "date":"2020/07/19",
      "finished":true
    },
    {
      "id":"326",
      "name":"生活明朗，万物可爱",
      "img":"http://img3m6.ddimg.cn/43/13/27943486-1_b_2.jpg",
      "date":"2020/07/19",
      "finished":false
    },
    {
      "id":"327",
      "name":"电车上的陌生人",
      "img":"http://img3m3.ddimg.cn/91/9/25147873-1_b_5.jpg",
      "date":"2020/07/19",
      "finished":true
    }
  ]
})
Mock.mock("http://timemeetyou.com:8889/api/private/v1/readList?page=2",{
  data:[
    {
      "id":"331",
      "name":"人间失格",
      "img":"http://img3m5.ddimg.cn/8/9/28974635-1_l_2.jpg",
      "date":"2020/07/19",
      "finished":true
    },
    {
      "id":"332",
      "name":"习近平谈治国理政",
      "img":"http://img3m7.ddimg.cn/56/32/28978247-1_l_4.jpg",
      "date":"2020/07/18",
      "finished":true
    },
    {
      "id":"333",
      "name":"人生海海",
      "img":"http://img3m5.ddimg.cn/51/34/26921715-1_l_2.jpg",
      "date":"2020/07/17",
      "finished":false
    },
    {
      "id":"334",
      "name":"Vue.js从入门到项目实战",
      "img":"http://img3m7.ddimg.cn/93/34/27854337-1_b_2.jpg",
      "date":"2020/07/19",
      "finished":true
    },
    {
      "id":"335",
      "name":"居里夫人",
      "img":"http://img3m3.ddimg.cn/23/30/28965443-1_l_3.jpg",
      "date":"2020/07/19",
      "finished":true
    },
    {
      "id":"336",
      "name":"生活明朗，万物可爱",
      "img":"http://img3m6.ddimg.cn/43/13/27943486-1_b_2.jpg",
      "date":"2020/07/19",
      "finished":false
    },
    {
      "id":"337",
      "name":"电车上的陌生人",
      "img":"http://img3m3.ddimg.cn/91/9/25147873-1_b_5.jpg",
      "date":"2020/07/19",
      "finished":true
    }
  ]
})
