<template>
  <div class="newsinfo-container">
    <h3 class="title">新闻标题</h3>
    <p class="subtitle">
        <span>发表时间:</span>
        <span>点击:0次</span>
    </p>
    <div class="content"></div>
    <hr>
    <my-comment></my-comment>
  </div>
</template>

<script>
import comment from './comment'
export default {
    data() {
        return {
            id:this.$route.params.id
        }
    },
    components:{
        'myComment':comment
    }
}
</script>

<style lang="less" >
.newsinfo-container {
    padding: 0 4px;
    .title {
        font-size: 16px;
        text-align: center;
        margin: 15 0px;
        color: red;
    }
    .subtitle {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: aqua;
    }
}
</style>