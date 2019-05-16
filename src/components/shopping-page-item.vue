<template>
<!-- 购物车界面的组件 包括商品照片，名称，价格和卖家姓名 -->

  <div class='page_item'>
    <div class='seller_pattern' @click="goToDetail()">
      <img :src="imgUrl" class="seller_item" />
      <div class="cart_item_info">
        <div class="item_info">
          <span >{{name}}</span>
        </div>
        <div class="price_name">
          <div class='item_price'>
            <span>${{price}}</span>
          </div>
          <div class='seller_name'>
            <!-- <span style="font-size=15px;">Seller: {{seller}}</span> -->
            <span style="font-size=15px;">Seller:Lingyun</span>
          </div>
        </div>
      </div>
    </div> 
  </div>
   

</template>

<script>
export default {
  props: {
    isShow: {
      type: String
    },
    ishow: {
      type: String
    },
    cart_path: {
      type: String
    },
    type: {
      type: String
    },
    imgUrl: {
      type: String
    },
    seller: {
      type: String
    },
    price: {
      type: String
    },
    description: {
      type: String
    },
    name: {
      type: String
    }
  },
  data () {
    return {
      isHidden: false
    }
  },
  methods: {
    checkboxChange () {
      if (this.isShow === true) {
        this.isShow = !this.isShow
      } else {
        this.isShow = true
      }
    },
    // bindItemPage (path) {
    //   const url = path
    //   wx.navigateTo({url})
    // },
    goToDetail () {
      wx.navigateTo({
        url: '/pages/item/main?price=' + this.price + '&imgUrl=' + this.imgUrl + '&description=' + this.description + '&type=' + this.type + '&father=shoppingCar'
      })
    }
  }
}
</script>

<style>
.wholePage{
  display:flex;
  flex-direction: column;
}
.price_name{
  display:flex;
  flex-direction: row;
}

.page_item{
  display:flex;
  border-radius: 5px;
}
.cart_item_info{
  display:flex;
  flex-direction:column;
}
.item_info{
  width:100%;
  padding-top:10px;
  padding-bottom:10px;
  font-size:20px;
}
.item_price{
  width: 20vw;
  font-size:20px;
}
.seller_name{
  height:25px;
  margin-top:50px;
  border-radius: 4px;
  border-style:solid;
}
.checkbox{
  width:20px;
  height:20px;
}
.seller_pattern{
  display:flex;
  height:20%;
  width:100%;
  background:white;
  flex-direction:row;
}
.seller_item{
  margin:5vw;
  width:100px;
  height:100px;
  border-radius: 10px;
}
</style>
