# reading-manage-system

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### 基于Vue + Element UI 的阅读管理系统
    包含了登录验证，购买书籍，记录阅读记录，记录阅读心情记录，消息浏览界面
### 公共组件部分
左侧导航栏，点击头部的小图标可切换折叠显示
![Image text](https://github.com/be-hard/ReadingManageSystem/raw/master/screen/nav.jpg)
![Image text](https://github.com/be-hard/ReadingManageSystem/raw/master/screen/nav01.jpg)
### 登录界面
1.表单验证，没有输入内容或者输入长度超出限定值则验证失败
2.点击登录后发送请求，如果用户已经存在，则返回token，并把token存入sessionStorage中，进入主页面
![Image text](https://github.com/be-hard/ReadingManageSystem/raw/master/screen/图片1.png)

### 主页面/个人空间
1.TodoList 
可以添加、删除、编辑计划事件
2.生活感悟
3.访问量，阅读量，消息量的展示
![Image text](https://github.com/be-hard/ReadingManageSystem/raw/master/screen/图片2.jpg)
### 我的消息
tab标签、表格组件的使用
展示未读消息，已读消息，回收站三个内容，相应的设有标记已读按钮，删除消息，回复消息按钮，绑定点击事件改变展示的数组
![Image text](https://github.com/be-hard/ReadingManageSystem/raw/master/screen/图片3.jpg)
### 我的阅读记录
1.根据书籍名称搜索阅读记录
2.表格的使用，作用域模板的使用，在记录中，可以删除记录，改变阅读完成状态
![Image text](https://github.com/be-hard/ReadingManageSystem/raw/master/screen/图片4.jpg)
### 购书中心
1.分类为历史、小说、散文，不同种类的书籍展示共用同一个组件
2.购买图书，点击加入书单，书籍进入到我的购买书单中，点击我的书单进入到购书结算界面
![Image text](https://github.com/be-hard/ReadingManageSystem/raw/master/screen/图片5.jpg)
![Image text](https://github.com/be-hard/ReadingManageSystem/raw/master/screen/图片6.jpg)
### 我的心情记录
![Image text](https://github.com/be-hard/ReadingManageSystem/raw/master/screen/图片7.jpg)
![Image text](https://github.com/be-hard/ReadingManageSystem/raw/master/screen/图片8.jpg)