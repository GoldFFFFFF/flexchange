<template>
<div>
  <div class='title'>

    <div class='title-name'>
      <span>My For Sale</span>
    </div>
  </div>
  <div class="post-divide-line" style="height: 3px;width:100%;">
  </div>
  <div class='' style='background:#F1F1F1;padding-top;10rpx;padding-bottom:5rpx;' v-for='item in cart_items' :key=item.name>
    <compo bind:component_method="main_page_mehod" :cart_img='item.img' :cart_name='item.name' :cart_price='item.price' :cart_sellor='item.sellor' :cart_style='item.position' :cart_path='item.path'></compo>
    </div>
</div>

</template>

<script>
import compo from '@/components/shopping-page-item'
export default {
  data () {
    return {
      cart_items: [
        {img: '/static/images/buou.jpg', name: 'Buou photo', price: '$5000', sellor: 'Shey', position: '', path: '../../itemPages/buou/main'},
        {img: '/static/images/jumao.jpeg', name: 'Jucat photo', price: '$1000', sellor: 'Shey', position: '', path: '../../itemPages/jumao/main'},
        {img: '/static/images/yingduan.jpg', name: 'Yingduan photo', price: '$3000', sellor: 'Shey', position: '', path: '../../itemPages/yingduan/main'}
      ]
    }
  },
  components: {
    compo
  },
  methods: {
    bingEdit () {
      const url = '../../edit/main'
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