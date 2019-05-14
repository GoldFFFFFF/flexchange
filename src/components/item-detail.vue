<template>
  <div>
    <!-- for itemPage 商品详情的组件 -->
    <div class="item-info">
      <div class='item-img'>
        <image :src="imgUrl" class='item' ></image>
      </div>
      <div class='sellor-info'>
        <div class='sellor-photo-name'>
          <img src='/static/images/user.png' class='sellor-photo'>
          <span style="padding:20px">{{seller}}</span>
        </div>
        <div class='price-part'>
          <div class='Item-price'>Price: 
            <span style="padding-left:20px">${{price}}</span>
          </div>
        </div>
        <div class='type-part'>
          <div class='Item-type'>Type:
            <span style="padding-left:20px; font-size:16px;">{{type}}</span>
          </div>
          <!-- <div class='type'>{{name}}</div> -->
        </div>
      </div>
    </div>
    <div class="post-divide-line" style="height:1px;width:90%;margin-left:20px;top:162px;">
    </div>
    <div class="info-area">
      <div class="info-title" >
        <span style="padding-left:5%;">Description:</span>
      </div>
      <textarea  id="info-text-area"  :value="description">
      </textarea>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    description: {
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
    },
    imgUrl: {
      type: String
    },
    type: {
      type: String
    }
  },
  data () {
    return {

    }
  },
  methods: {
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style>
.item-img{
  padding-left:10px;
}
.price-part{
  margin-top:5%;
}
.type-part{
  margin-top:10%;
}
.sellor-info{
  display:flex;
  flex-direction: column;
  margin-left:10%;
}
.item-info{
  display:flex;
  flex-direction: row;
}
.sellor-photo{
  height:64px;
  width:64px;
}
.sellor-photo-name{
  display:flex;
  flex-direction: row;
}
.info-area{
  background-color: #FFF;
  height:50%;
}
.post-divide-line{
  background-color: #F1F1F1;
  width: 100%;
}
#info-text-area{
  width: 100%;
  min-height: 33vw;
  overflow: visible;
  box-sizing: border-box;
  padding: 12px 12px 10px 15px;
  font-size: 17px;
  line-height: 23px;
  color: #333;
  border:aqua;
  resize: none;
  outline: none;
}
.item{
  width:150px;
  height:150px;
  border-radius: 50%;
}
</style>
