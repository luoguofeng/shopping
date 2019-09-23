# vue-cli

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

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 把修改的代码托管到github上

1. git add .
2. git commit -m "提交信息"
3. git push

## 制作首页App组件

1. 完成Header区域,使用的是mint-ui中的Header组件
2. 制作底部的tabBar区域,使用的是MUI中的TabBar.html
  +制作购物车图标操作:
  +要把扩展图标的css样式也拷贝到项目中去
  +拷贝扩展字体库的ttf文件到项目font文件夹中
3. 要去中间区域放置一个router-view 来展示路由匹配到的组件

## 改造tabBar为router-ink

## 设置路由高亮

## 点击tabBar中的路由链接,展示对应的路由组件

## 制作首页轮播图

## 加载首页轮播图数据

1. 获取数据,如何获取呢 ,使用axios
2. 发送异步请求获取数据
3. 获取数据保存到data上
4. 使用v-for渲染页面

## 修改九宫格为六宫格

1. 使用的组件是来自MUI中的grid-pagination.html中的九宫格组件
2. 修改样式

## 完成切换中间内容区域组件的动态效果

1. 将要需要动画的元素用transition包裹起来
2. 使用动画类名来添加动态效果,每个组件的初始位置应该为translateX(100%),离开时的位置应该为translateX(-100%)
3. 给大盒子容器设置overflow-x:hidden,不能设置Y,因为手机可以上下滑动

## 改造新闻资讯组件

1. 找到MUI的组件media-list,复制样式,报错,是由于图片找不到
2. 给app底部加paddingBottom
3. 定义全局时间过滤器,使用日期格式化插件moment

## 实现新闻资讯跳转到新闻详情

1. 把列表中的a链接改为router-link,同时,在跳转的时候传入参数id,给to动态绑定属性 `:to="'/home/newsinfo/'+item.id"`
2. 在新闻详情页面利用 `this.$route.params`来获取传入的id参数
3. 发送请求获取数据,渲染到页面

## 单独封装一个 comment.vue评论子组件

1. 先创建一个单独的comment.vue的文件
2. 在需要评论组件的地方导入评论组件 `import comment from 'comment.vue'`
3. 在父组件中的components属性中将comment组件注册为自己的组件

## 实现加载更多评论功能

1. 点击加载更多按钮,让pageIndex+1,然后请求数据,每次将请求回来的数据拼接到老数组中
2. 利用数组的contact来实现数据拼接功能
