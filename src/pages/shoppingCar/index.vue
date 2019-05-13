<template>
<div>
  <div class='title'>

    <div class='title-name'>
      <span>Personal Shopping Cart</span>
    </div>

    <div class='button' >
      <button type="default" size="mini" bindtap="default" hover-class="button-hover" @click="bingEdit"> Edit</button>
    </div>

  </div>
  <div class="post-divide-line" style="height: 5px;width:100%;">
  </div>
  <div class='' style='padding-top;10rpx;padding-bottom:5rpx;' v-for='item in cart_items' :key=item.name>
    <shopCar bind:component_method="main_page_mehod" 
    :imgUrl='item.img' 
    :name='item.name' 
    :price='item.price' 
    :seller='item.seller'
    :cart_path='item.path'></shopCar>
    <div class="post-divide-line" style="height: 5px;width:100%;">
  </div>
  </div>
  
</div>

</template>

<script>
import shopCar from '@/components/shopping-page-item'
export default {
  data () {
    return {
      cart_items: [
        {img: '/static/images/Yukino.jpg', name: 'Yukinooos photo', price: '$100', seller: 'Lingyun', path: '../itemPages/yukino/main'},
        {img: '/static/images/wolaopo.jpg', name: 'wolaopos photo', price: '$9999', seller: 'Lingyun', path: '../itemPages/wolaopo/main'},
        {img: '/static/images/mengwang.jpg', name: 'Mengwang photo', price: '$199', seller: 'Lingyun', path: '../itemPages/mengwang/main'},
        {img: '/static/images/huiye.jpg', name: 'huiye photo', price: '$99', seller: 'Lingyun', path: '../itemPages/huiye/main'},
        {img: '/static/images/qianhua.jpg', name: 'qianhua photo', price: '$299', seller: 'Lingyun', path: '../itemPages/qianhua/main'},
        {img: '/static/images/qianfantian.jpg', name: 'qianfantian photo', price: '$399', seller: 'Lingyun', path: '../itemPages/qianfantian/main'}
      ]
    }
  },
  components: {
    shopCar
  },
  methods: {
    bingEdit () {
      const url = '../edit/main'
      wx.navigateTo({url})
    }
  },
  created () {
    // let app = getApp()
  }
}
</script>
<style>
.bright789-text{
  font-size: 40rpx;
  line-height: 40px;
  color: #ff0000;
}
.title{
  height:100%;
  display:flex;
}
.user_name{
  position:absolute;
  right:10px;
  top:75px;
  width:40%;
  height:25%;
  border-style:solid;
}
.pattern{
  height:20%;
  width:90%;
  position:absolute;
  top:60px;
  left:10px;
  border-style:dashed;
  border-width:1px;
  border-color:grey;
}
.page-section{
  width: 100%;
  margin-bottom: 60rpx;
}
.page-section_center{
  display: flex;
  flex-direction: column;
  align-items: center;
}
/*.this_item{
  position:absolute;
  padding-top:5px;
  padding-left:5px;
  width:100px;
  height:100px;
}*/
.post-divide-line{
  background-color:#F1F1F1;
  width: 100%;
}
.title-name{
  width:70%;
  padding-top:0;
  padding-left:10%;
}
.button{
  position:relative;
}
.button-hover{
  background-color:red;
}
</style>