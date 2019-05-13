<template>
<!-- 主页商品的组件，包括商品照片，名称和价格 -->
<div class='page'>
  <div class='inner' @click="goToDetail()" >
    <image :src="imgUrl" class='image' ></image>
    <div class='name'>
      <span style="font-size:20px">{{name}}</span>
    </div>
    <div class='price'>
      <span style='font-size:30px'>{{price}}</span>
    </div>
  </div>
</div>
</template>

<script>

export default {
  props: {
    imgUrl: {
      type: String
    },
    name: {
      type: String
    },
    price: {
      type: String
    },
    description: {
      type: String
    },
    seller: {
      type: String
    },
    type: {
      type: String
    },
    status: {
      type: Boolean
    },
    itemId: {
      type: String
    }
  },
  methods: {
    goToDetail () {
      wx.navigateTo({
        url: '/pages/item/main?price=' + this.price + '&imgUrl=' + this.imgUrl + '&description=' + this.description + '&type=' + this.type
      })
    },
    bindDetails (path) {
      const url = path
      wx.navigateTo({url})
    }
  },
  data: {
    return () {
    }
  }
}
</script>

<style>
.page{
  display:flex;
  float:left;
}
.inner{
  padding-left:25px;
}
.image{
  width:150px;
  height:150px;
}
</style>
