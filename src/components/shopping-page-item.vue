<template>
<!-- 购物车界面的组件 包括商品照片，名称，价格和卖家姓名 -->
<div class='page_item'>
  <div class='seller_pattern' @click="bindItemPage(cart_path)">
    <img :src="imgUrl" class="seller_item" />
    <div class="cart_item_info">
      <div class="item_info">
        <span style="width:150px;padding-top:10px;padding-bottom:10px;color:cornflowerblue;font-size:20px;">{{name}}</span>
      </div>
      <div class="price_name">
        <div class='item_price'> <span style="color:aqua;font-size:20px;">{{price}}</span>
        </div>
        <div class='seller_name'><span style="font-size=15px;">Seller: {{seller}}</span></div>
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
    imgUrl: {
      type: String
    },
    seller: {
      type: String
    },
    price: {
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
    bindItemPage (path) {
      const url = path
      wx.navigateTo({url})
    }
  }
}
</script>

<style>
.price_name{
  display:flex;
  flex-direction: row;
}
.post-divide-line{
  background-color:#F1F1F1;
  width: 100%;
}
.page_item{
  display:flex;
}
.cart_item_info{
  padding-left:10px;
  display:flex;
  flex-direction:column;
}
.item_info{
  display:flex;
  flex-direction:row;
}
.item_price{
  width:30px;
  padding-bottom:20px;
}
.seller_name{
  width:80%;
  height:25px;
  margin-left:40px;
  margin-top:10px;
  /* position:absolute;
  right:10%;
  margin-top:20%; */
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
  border-radius: 4px;
  margin-left:25px;
  padding:5px;
  width:100px;
  height:100px;
}
</style>
