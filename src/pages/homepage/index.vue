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
          <mainItem :imgUrl='item.imgUrl' 
                    :name='item.name' 
                    :price='item.price' 
                    :type='item.type'
                    :description='item.description'
                    :status='item.status'
                    :itemId='item._id'>
          </mainItem>
      </div>
      
</div>

</template>

<script>
import mainItem from '@/components/main-page-item'

export default {
  data () {
    return {
      items: []
    }
  },
  components: {
    mainItem
  },
  methods: {
    bindDetails () {
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
    this.$ajax.get({
      url: 'http://203.195.164.28:3000/api/item'
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
