<template>
  <div>
    <!-- for itemPage 商品详情的组件 -->
    <div class="item-info">
      <div class='item-img'>
        <image :src="imgUrl" class='item' ></image>
      </div>
      <div class='sellor-info'>
        <div class='sellor-photo-name'>
          <image :src='userImg' class='sellor-photo'></image>
          <span style="padding:20px">{{sellername}}</span>
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
        </div>
      </div>
    </div>
    <div class="post-divide-line" >
    </div>
    <div class="info-area">
      <div class="info-title" >
        <span>Description:</span>
      </div>
      <div  id="info-text-area" >{{description}}</div>
    </div>
    <div id='contect-and-delete'>
      <button id="add-button2" @click="contactSeller">
      Buy it now
      </button> 
      <button v-if="father=='homePage'" id="add-button2" @click="addTocar">
      Buy it later
      </button>
      <button v-else id="add-button2" @click="deleteFromCar">
        Delete
      </button>     
    </div>
  </div>
</template>

<script>

export default {
  props: {
    itemId: {
      type: String
    },
    description: {
      type: String
    },
    sellername: {
      type: String
    },
    userImg: {
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
    },
    father: {
      type: String
    }

  },
  methods: {
    addTocar () {
      console.log(this.itemId)
      this.$ajax.get({
        url: 'http://203.195.164.28:3000/api/user/cart/' + wx.getStorageSync('openid') + '/' + this.itemId
      }).then((res) => {
        console.log(res.data.resultMessage)
        wx.showToast({
          title: 'Added success',
          duration: 1200
        })
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
    },
    deleteFromCar () {
      wx.showToast({
        title: 'Delete success',
        duration: 1200
      })
      console.log(wx.getStorageSync('openid'))
      console.log(this.itemId)
      this.$ajax.delete({
        url: 'http://203.195.164.28:3000/api/item/cartd/' + wx.getStorageSync('openid') + '/' + this.itemId
      }).then((res) => {
        console.log(res.data)
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
    },
    contactSeller () {
      wx.showToast({
        title: 'Buy success',
        duration: 1200
      })
      console.log(wx.getStorageSync('openid'))
      console.log(this.itemId)
      this.$ajax.get({
        url: 'http://203.195.164.28:3000/api/user/purchased/' + wx.getStorageSync('openid') + '/' + this.itemId
      }).then((res) => {
        console.log(res.data.resultMessage)
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
}
</script>

<style>
.post-divide-line{
  margin: 2px 5% 2px 5%; 
  height: 2px;
  background-color: #000;
  width: 90%;
}
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
  margin-bottom: 3%;
}
.sellor-photo{
  height:64px;
  width:64px;
  border-radius: 50%;
}
.sellor-photo-name{
  display:flex;
  flex-direction: row;
}
.info-area{
  margin: 3%;
}
.item{
  width:150px;
  height:150px;
  border-radius: 50%;
}
#info-text-area{
  margin: 3%;
}
#add-button{
  width: 90%;
  margin: 5%;
  position: absolute;
  bottom: 0;
}
#contect-and-delete{
  width: 100%;
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
}
#add-button2{
  width: 40%; 
  margin: 5%; 
  font-size:15px; 
}
</style>
