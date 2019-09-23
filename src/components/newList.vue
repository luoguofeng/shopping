<template>
  <div>
    <!-- 新闻列表 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in news" :key="index">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.imges" />
          <div class="mui-media-body">
            <h2>{{item.message}}</h2>
            <p class="mui-ellipsis">
              <span>发表时间:{{ item.cTime | dateFormat }}</span>
              <span>点击:{{item.number}}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          id: 1,
          message: "想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖",
          cTime: "Mon, 23 Sep 2019 10:30:00 GMT",
          number: 10,
          imges:
            "http://f.hiphotos.baidu.com/image/h%3D300/sign=0c78105b888ba61ec0eece2f713597cc/0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg"
        },
        {
          id: 2,
          message: "能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？",
          cTime: "Mon, 23 Sep 2019 10:30:00 GMT",
          number: 50,
          imges:
            "http://f.hiphotos.baidu.com/image/h%3D300/sign=0c78105b888ba61ec0eece2f713597cc/0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg"
        },
        {
          id: 3,
          message: "烤炉模式的城，到黄昏，如同打翻的调色盘一般",
          cTime: "Mon, 23 Sep 2019 10:30:00 GMT",
          number: 20,
          imges:
            "http://f.hiphotos.baidu.com/image/h%3D300/sign=0c78105b888ba61ec0eece2f713597cc/0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg"
        },
        {
          id: 4,
          message: "烤炉模式的城，到黄昏，如同打翻的调色盘一般",
          cTime: "Mon, 23 Sep 2019 10:30:00 GMT",
          number: 999,
          imges:
            "http://f.hiphotos.baidu.com/image/h%3D300/sign=0c78105b888ba61ec0eece2f713597cc/0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg"
        },
        {
          id: 5,
          message: "烤炉模式的城，到黄昏，如同打翻的调色盘一般",
          cTime: "Mon, 23 Sep 2019 10:30:00 GMT",
          number: 20,
          imges:
            "http://f.hiphotos.baidu.com/image/h%3D300/sign=0c78105b888ba61ec0eece2f713597cc/0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg"
        },
        {
          id: 6,
          message: "烤炉模式的城，到黄昏，如同打翻的调色盘一般",
          cTime: "Mon, 23 Sep 2019 10:30:00 GMT",
          number: 20,
          imges:
            "http://f.hiphotos.baidu.com/image/h%3D300/sign=0c78105b888ba61ec0eece2f713597cc/0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg"
        },
        {
          id: 7,
          message: "烤炉模式的城，到黄昏，如同打翻的调色盘一般",
          cTime: "Mon, 23 Sep 2019 10:30:00 GMT",
          number: 20,
          imges:
            "http://f.hiphotos.baidu.com/image/h%3D300/sign=0c78105b888ba61ec0eece2f713597cc/0e2442a7d933c8956c0e8eeadb1373f08202002a.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.mui-table-view {
  h2 {
    font-size: 14px;
  }
  .mui-ellipsis {
    font-size: 12px;
    color: blue;
    display: flex;
    justify-content: space-between;
  }
}
</style>