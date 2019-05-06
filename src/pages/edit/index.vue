<template>
<div>
  <div class='title'>

    <div class='title-name'>
      <span>Personal Shopping Cart</span>
    </div>
    
    <div class='button' v-if='isHidden'>
      <button type="default" size="mini" @click="bingBack"> Back</button>
    </div>

  </div>
<div class="post-divide-line" style="height: 1px;width:100%;">
    </div>
  <div class='item_part' style='background:#F1F1F1;padding-top;10rpx;padding-bottom:5rpx;' v-for='item in cart_items' :key=item.name>
    <compo :isShow='false' :ishow='true' :cart_img='item.img' :cart_name='item.name' :cart_price='item.price' :cart_sellor='item.sellor' :cart_style='item.position' :cart_path='item.path'></compo>
  </div>
</div>

</template>

<script>
import compo from '@/components/shopping-page-item'
export default {
  data () {
    return {
      isHidden: false,
      cart_items: [
        {img: '/static/images/Yukino.jpg', name: 'Yukinooos photo', price: '$100', sellor: 'Lingyun', position: '', path: '../itemPages/yukino/main'},
        {img: '/static/images/wolaopo.jpg', name: 'wolaopos photo', price: '$9999', sellor: 'Lingyun', position: '', path: '../itemPages/wolaopo/main'},
        {img: '/static/images/mengwang.jpg', name: 'Mengwang photo', price: '$199', sellor: 'Lingyun', position: '', path: '../itemPages/mengwang/main'},
        {img: '/static/images/huiye.jpg', name: 'huiye photo', price: '$99', sellor: 'Lingyun', position: '', path: '../itemPages/huiye/main'},
        {img: '/static/images/qianhua.jpg', name: 'qianhua photo', price: '$299', sellor: 'Lingyun', position: '', path: '../itemPages/qianhua/main'},
        {img: '/static/images/qianfantian.jpg', name: 'qianfantian photo', price: '$399', sellor: 'Lingyun', position: '', path: '../itemPages/qianfantian/main'}
      ]
    }
  },
  components: {
    compo
  },
  main_page_ontap (eventDetail) {
    console.log(eventDetail)
  },
  methods: {
    hotBtn () {
      this.item_checked = true
    },
    bingBack () {
      const url = '../shoppingCar/main'
      wx.navigateBack({url})
    }
  },
  created () {
    // let app = getApp()
  }
}
</script>
<style>
.title{
  height:100%;
  display:flex;
}
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