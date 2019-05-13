<template>
<!-- 购物车界面的组件 包括商品照片，名称，价格和卖家姓名 -->
<div class='page_item'>
  <div class='sellor_pattern' :style="cart_style" @click="bindItemPage(cart_path)">
    <img :src="cart_img" class="sellor_item" />
    <div class="cart_item_info">
      <div class="item_info">
        <span style="color:cornflowerblue;font-size:20px;">{{cart_name}}</span>
        <span style="color:aqua;font-size:20px;">{{cart_price}}</span>
      </div>
      <div class='sellor_name'><span style="font-size=15px;">Sellor: {{cart_sellor}} Buyer: {{cart_buyer}}</span></div>
    </div>
  </div>
  <div class='checkbox'>
    <checkbox  @bindtap='ontap()' @click="click_btn" class='checkbox' v-if='ishow'></checkbox>
    <span v-if='isShow'>a</span>
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
    cart_style: {
      type: String
    },
    cart_img: {
      type: String
    },
    cart_sellor: {
      type: String
    },
    cart_buyer: {
      type: String
    },
    cart_price: {
      type: String
    },
    cart_name: {
      type: String
    }
  },
  data () {
    return {
      isHidden: false
    }
  },
  ontap () {
    var eventDetail = {
      isHide: this.isHidden
    }
    var eventOption = {
      composed: true
    }
    this.triggerEvent('click_btn', eventDetail, eventOption)
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
.checkbox{
  display:flex;
  flex-direction:column;
  padding-top:5%;
  padding-left:2%;
}
.page_item{
  display:flex;
}
.cart_item_info{
  display:flex;
  flex-direction:column;
}
.item_info{
  display:flex;
  flex-direction:column;
}
.sellor_name{
  position:absolute;
  right:5%;
  margin-top:20%;
  border-style:solid;
}
.sellor_pattern{
  display:flex;
  height:20%;
  width:100%;
  background:white;
  flex-direction:row;
}
.sellor_item{
  padding:5px;
  width:100px;
  height:100px;
}
</style>
