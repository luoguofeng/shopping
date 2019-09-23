<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in banners" :key="index">
        <img :src="item.imageUrl" alt />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newList">
          <img src="../assets/lib/img/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </router-link >
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="../assets/lib/img/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="../assets/lib/img/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="../assets/lib/img/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="../assets/lib/img/menu5.png" alt />
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="#">
          <img src="../assets/lib/img/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: []
    };
  },
  created() {
    this.getImages();
  },
  methods: {
    getImages() {
      this.$axios.get("banner").then(backData => {
        if (backData.data.code == 200) {
          this.banners = backData.data.banners;
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-table-view.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  li {
    border: 0;
    img {
      width: 60px;
      height: 60px;
    }
    .mui-media-body {
      font-size: 12px;
    }
  }
}
</style>