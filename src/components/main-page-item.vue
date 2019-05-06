<template>
<!-- 主页商品的组件，包括商品照片，名称和价格 -->
<div class='page'>
  <div class='inner' @click="bindDetails(page_path)" >
    <image :src="img_path" class='image' ></image>
    <div class='name'>
      <span style="font-size:20px">{{item_name}}</span>
    </div>
    <div class='price'>
      <span style='font-size:30px'>{{item_price}}</span>
    </div>
  </div>
  <!-- <div class="right" @click="bindDetails(page_path)">
    <image :src="img_path" class='image' ></image>
    <div class='name'>
      <span style="font-size:20px">{{item_name}}</span>
    </div>
    <div class='price'>
      <span style='font-size:30px'>{{item_price}}</span>
    </div>
  </div> -->
  <!-- <div class="inner" @click="bindDetails(page_path)" :style='item_style'>
    <image :src="img_path" class='image' ></image>
    <div class='name'>
      <span style="font-size:20px">{{item_name}}</span>
    </div>
    <div class='price'>
      <span style='font-size:30px'>{{item_price}}</span>
    </div>
  </div> -->
  <!--slot><image src='/static/icons/view.png' class='view' @click='increment'></image></slot>
  <div class='viewer-counter'>
    <p>{{count}}</p>
  </div!-->
  <div class="clear"></div>
</div>
</template>

<script>

export default {
  props: {
    page_path: {
      type: String
    },
    img_path: {
      type: String
    },
    item_name: {
      type: String
    },
    item_price: {
      type: String
    }
  },
  methods: {
    bindDetails (path) {
      const url = path
      wx.navigateTo({url})
    }
  },
  data: {
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
