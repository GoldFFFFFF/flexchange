<template>
<div>
  <div class='title'>

    <div class='title-name'>
      <span>Personal Shopping Cart</span>
    </div>

    <div class='button' >
      <button type="default" size="mini" bindtap="default" @click="bingEdit"> Edit</button>
    </div>

  </div>
  <div class="post-divide-line">
  </div>
  <div class='' style='padding-top;10rpx;padding-bottom:5rpx;' v-for='item in items' :key=item.name>
    <!-- <shopCar
    :imgUrl='item.img' 
    :name='item.name' 
    :price='item.price' 
    :seller='item.seller'
    :cart_path='item.path'></shopCar> -->
    <shopCar :imgUrl='item.imgUrl' 
             :name='item.name'
             :price='item.price'
             :type='item.type'
             :description='item.description'
             :status='item.status'
             :itemId='item._id'>
    </shopCar>
    <div class="post-divide-line">
  </div>
  </div>
  
</div>

</template>

<script>
import shopCar from '@/components/shopping-page-item'
export default {
  data () {
    return {
      items: [],
      cart_items: [
        {img: '/static/images/Yukino.jpg', name: 'Yukinooos photo', price: '100', seller: 'Lingyun', path: '../itemPages/yukino/main'},
        {img: '/static/images/wolaopo.jpg', name: 'wolaopos photo', price: '9999', seller: 'Lingyun', path: '../itemPages/wolaopo/main'},
        {img: '/static/images/mengwang.jpg', name: 'Mengwang photo', price: '199', seller: 'Lingyun', path: '../itemPages/mengwang/main'},
        {img: '/static/images/huiye.jpg', name: 'huiye photo', price: '99', seller: 'Lingyun', path: '../itemPages/huiye/main'},
        {img: '/static/images/qianhua.jpg', name: 'qianhua photo', price: '299', seller: 'Lingyun', path: '../itemPages/qianhua/main'},
        {img: '/static/images/qianfantian.jpg', name: 'qianfantian photo', price: '399', seller: 'Lingyun', path: '../itemPages/qianfantian/main'}
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
    this.$ajax.get({
      url: 'http://203.195.164.28:3000/api/item/'
    }).then((res) => {
      this.items = res.data.resultMessage
      console.log(this.items)
      setTimeout(() => {
        this.freshPos = 0
      }, 300)
      wx.hideToast()
    }).catch((err) => {
      console.log(err)
      setTimeout(() => {
        this.freshPos = 0
      }, 300)
      wx.hideToast()
    })
  }
}
</script>
<style>
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
.post-divide-line{
  height: 3px;
  margin: 2px 5% 2px 5%; 
  background-color:#F1F1F1;
  width: 90%;
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