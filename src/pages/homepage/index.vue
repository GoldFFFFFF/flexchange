<template>
  <div class="wholePage"> 

    <div v-if="!logged">
      <div id="text">Please log in!</div>
      <button id="login" open-type="getUserInfo" @click='logIn'> LogIn</button>
    </div>
    
    <div v-else class='page_row' >
      <div class="search">
        <div class="search-bar" >
            <!-- <icon class="searchIcon" size='20' type='search'></icon> -->
            <input class="searchText" placeholder="ITEM NAME..." v-model="searchInput">
        </div>
        <div class='button' @click="bindSearch">
          <button type="default" size="mini" bindtap="default" hover-class="button-hover"> Search</button>
        </div>

        <div class='filter' style="" @click="bindFilter" >
          <img src="/static/icons/more.png" style="height:72rpx;width:72rpx;"/>
        </div>
      </div>     
      
      <div class='show_item' >
          <div class='item' v-for='item in items' :key=item.name>
              <mainItem :imgUrl='item.imgUrl' 
                    :name='item.name' 
                    :price='item.price' 
                    :type='item.type'
                    :description='item.description'
                    :status='item.status'
                    :itemId='item._id'
                    :seller='item.user'>
              </mainItem>
          </div>
      </div>

    </div>

  </div>

</template>

<script>
import mainItem from '@/components/main-page-item'

export default {
  data: {
    searchInput: '',
    items: [],
    logged: false,
    username: '',
    imgUrl: ''
  },
  components: {
    mainItem
  },
  methods: {
    logIn () {
      var that = this
      wx.getSetting({
        success (res) {
          if (!res.authSetting['scope.userInfo']) {
            wx.authorize({
              scope: 'scope.userInfo',
              success () {
                wx.startRecord()
              }
            })
          }
        }
      })
      wx.getUserInfo({
        success (res) {
          const userInfo = res.userInfo
          console.log(userInfo)
          that.username = userInfo.nickName
          that.imgUrl = userInfo.avatarUrl
          wx.setStorageSync('user', that.username)
          wx.setStorageSync('avatar', that.imgUrl)
        }
      })
      wx.login({
        success: function (res) {
          if (res.code) {
            wx.request({
              url: 'http://203.195.164.28:3000/onlogin',
              data: {
                code: res.code,
                username: that.username,
                imgUrl: that.imgUrl
              }
            })
            console.log(res)
          } else {
            console.log('Login Failed！' + res.errMsg)
          }
        }
      })
      console.log('!test')
      console.log(wx.getStorageSync('user'))
      console.log('!test')
      let form = {
        username: wx.getStorageSync('user')
      }
      console.log(form)
      this.$ajax.post({
        token: this.token,
        data: form,
        url: `http://www.flexange.cn:3000/getid`
      }).then((res) => {
        console.log('11111')
        console.log(res.data)
        // console.log(res.data[0]._id)
        wx.setStorageSync('openid', res.data)
      }
      )
      this.logged = true
    },
    bindSearch () {
      wx.navigateTo({
        url: '../item/main?description=' + this.searchInput + '&price' + this.items.price
      })
    },
    bindDetails () {
      wx.navigateTo({
        url: '../item/main'
      })
    },
    bindFilter () {
      wx.navigateTo({
        url: '../filter/main'
      })
    },
    getPage (url) {
      this.$ajax.get({
        url
      }).then((res) => {
        console.log(res.data.resultMessage)
        this.items = res.data.resultMessage
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
  },
  onPullDownRefresh: function () {
    this.getPage('http://203.195.164.28:3000/api/item/')
  },
  onShow: function (options) {
    console.log(getApp().globalData.currentType)
    if (getApp().globalData.currentType) {
      this.getPage('http://203.195.164.28:3000/api/item/type/type?type=' + getApp().globalData.currentType)
      console.log(getApp().globalData.currentType)
      getApp().globalData.currentType = ''
      console.log(getApp().globalData.currentType)
    } else {
      this.getPage('http://203.195.164.28:3000/api/item/')
    }
  }
}
</script>

<style>
#text{
  height: 350px;
  line-height: 350px;
  text-align: center;
}

#login{
  margin: 19%;
}

.wholePage{
  width: 100%;
  height: 100%;
}

.item{
  width:150px;
  height:150px;
}

.filter{
  float: left;
  position:relative;
  margin-top:-5rpx;
  margin-left:10rpx;
  margin-right:10rpx;
}
.search{
  display: flex;
}
.page_row{
  display: flex;
  flex-direction: column;
}
.search-bar{
  width: 55%;
  border: 1.5px solid #1f1f1f;
  border-radius: 10rpx;
  margin-left: 40rpx;
  margin-bottom: 20rpx;
}
.search-bar input{
  float: left;
  padding-top:10rpx;
  padding-left: 20rpx;
}

.button{
  float: left;
  position:relative;
  margin-left:20rpx;
  margin-right:10rpx;
  text-align:center;
}
.button-hover{
  background-color:#1f1f1f;
}
.searchIcon{
  margin:10rpx 10rpx 10rpx 10rpx;
  left:25rpx;
  z-index:2;
  width:20px;
  height: 20px;
}
.show_item{
  padding-left: 20px;
  padding-top: 10px;
  width: 100%;
  display: relative;
}
.item{
  width: 50%;
  height: 220px;
  float: left;
}

</style>
