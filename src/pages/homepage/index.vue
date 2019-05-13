<template>
  <div >
    <div class='page_row' >

      <div class="search">
        <div class="search-bar">
            <icon class="searchIcon" size='20' type='search'></icon>
            <input class="" placeholder="ITEM NAME" >
        </div>
      </div>

      <div class='button'>
        <button type="default" size="mini" bindtap="default" hover-class="button-hover"> Search</button>
      </div>

      <div class='filter' style="" @click="bindNewItem" >
        <img src="/static/icons/more.png" style="height:72rpx;width:72rpx;"/>
      </div>
      
    </div>

    <div class='show_item' v-for='item in items' :key=item.name>
          <mainItem :img_path='item.img_path' :item_name='item.item_name' :item_price='item.item_price' :item_style='item.position' :page_path='item.page_path'></mainItem>
      </div>
    <!--div class='swiper-bg'>
    <div class="image-swiper">
          <swiper :indicator-dots="indicatorDots" 
            :autoplay="autoplay" 
            :interval="interval" 
            :duration="duration" 
            :circular="circular"
            :previous-margin="'75px'"
            @change="swiperChange" 
            @animationfinish="animationfinish">
            <div v-for='item in imgUrls' :key='item.id'>
              <swiper-item>
                <image :src="item" class="slide-image" />
              </swiper-item>
            </div>
          </swiper>
        </div>
    </div!-->
      <!-- <comp img_path="/static/images/Yukino.jpg" item_name='Yukinooos photo' item_price='$100'></comp>
      <div class='item-2' style='position:absolute;top:350px' @click='bindDetails'>
        <comp img_path='/static/images/wolaopo.jpg' item_name='wolaopossss' item_price='$9999'></comp>
      </div> -->
      
</div>

</template>

<script>
import mainItem from '@/components/main-page-item'

export default {
  data () {
    return {
      // indicatorDots: true,
      // autoplay: true,
      // interval: 5000,
      // duration: 900,
      // circular: true,
      // imgUrls: [
      //   '/static/images/Yukino.jpg',
      //   '/static/images/wolaopo.jpg',
      //   '/static/images/wolaopo3.jpg',
      //   '/static/images/1.jpg',
      //   '/static/images/2.jpg',
      //   '/static/images/3.jpg'
      // ],
      items: [
        {img_path: '/static/images/Yukino.jpg', item_name: 'Yukinoooo', item_price: '$100', page_path: '../itemPages/yukino/main'},
        {img_path: '/static/images/wolaopo.jpg', item_name: 'wolaopo', item_price: '$9999', page_path: '../itemPages/wolaopo/main'},
        {img_path: '/static/images/huiye.jpg', item_name: 'haishiwolaopo', item_price: '$99', page_path: '../itemPages/huiye/main'},
        {img_path: '/static/images/mengwang.jpg', item_name: 'doushiwolaopo', item_price: '$199', page_path: '../itemPages/mengwang/main'},
        {img_path: '/static/images/qianhua.jpg', item_name: 'woquandouyao', item_price: '$299', page_path: '../itemPages/qianhua/main'},
        {img_path: '/static/images/qianfantian.jpg', item_name: 'qianfantian', item_price: '$399', page_path: '../itemPages/qianfantian/main'},
        {img_path: '/static/images/buou.jpg', item_name: 'Buou', item_price: '$5000', page_path: '../itemPages/buou/main'},
        {img_path: '/static/images/jumao.jpeg', item_name: 'JuCat', item_price: '$1000', page_path: '../itemPages/jumao/main'},
        {img_path: '/static/images/yingduan.jpg', item_name: 'Yingduan', item_price: '$3000', page_path: '../itemPages/yingduan/main'}
      ]
    }
  },
  components: {
    mainItem
  },
  methods: {
    bindDetails () {
      // const url = '../item/main'
      // wx.navigateTo({url})
      wx.navigateTo({
        url: '../item/main'
      })
    },
    bindNewItem () {
      const url = '../shoppingCar/main'
      wx.switchTab({ url })
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style>
.post-divide-line{
  position:relative;
  margin-top:0;
  height: 1px;
  background-color:aqua;
  width: 100%;
}
.swiper-bg{
  background-color:grey;
}
.image-swiper{
  padding:10px 10px 10px 10px;
}
.slide-image {
  display:flex;
  width:200px;
  height:200px;
}
.container log-list{
  top:150px;
  left:150px;
}
.item{
  width:150px;
  height:150px;
  /*border-radius: 50%;*/
}
.hover-icon{
  opacity:0.9;
  background:grey;
}
.filter{
  position:relative;
  margin-top:-5rpx;
  margin-left:10rpx;
  margin-right:10rpx;
}
.search{
  width:120%;
}
.page_row{
  margin-top:20rpx;
  flex-direction: row;
  display:flex;
}
.search-bar{
  display:flex;
  border: 1px solid #d0d0d0;
  border-radius: 10rpx;
  margin-left: 20rpx;
}
.search-bar input{
  padding-top:10rpx;
  padding-left: 20rpx;
}

.button{
  position:relative;
  margin-left:30rpx;
  text-align:center;
}
.button-hover{
  background-color:red;
}
.searchIcon{
  margin:10rpx 10rpx 10rpx 10rpx;
  left:25rpx;
  z-index:2;
  width:20px;
  height: 20px;
  text-align:center;
}
</style>
