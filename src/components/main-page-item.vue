<template>
<!-- 主页商品的组件，包括商品照片，名称和价格 -->
<div class='page'>
  <div class='inner' @click="goToDetail()" >
    <image :src="imgUrl" class='image' ></image>
    <div class='name'>
      <span >{{name}}</span>
    </div>
    <div class='price'>
      <span >${{price}}</span>
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
        url: '/pages/item/main?price=' + this.price + '&imgUrl=' + this.imgUrl + '&description=' + this.description + '&type=' + this.type + '&itemId=' + this.itemId + '&father=homePage'
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
}
.inner{
  padding: 10px;
  border:2px solid #1f1f10;
  border-radius: 5px;
}
.image{
  width:130px;
  height:130px;
  border-radius: 5px;
}
.name{
  font-size: 15px;
}
.price{
  font-size: 17px;
  text-align: right;
}
</style>
