<template>
  <div>
      <div class="userinformation">
        <div class="userName"> {{user}} </div>
        <div class="userImage">
            <img :src="avatar">
        </div>
      </div>

      <div class="post-divide-line"></div>

      <div class="links" @click="toPurchase"> My Purchase </div>
      <div class="links" @click="toForSale"> My For Sale </div>
      <div class="links" @click="toSold"> My Sold </div>
      <div class="links" @click="toSetting"> Settings </div>
  </div>
  

</template>

<script>

export default {
  data: {
    user: '',
    avatar: ''
  },
  methods: {
    toPurchase () {
      wx.navigateTo({
        url: '/pages/user/purchase/main'
      })
    },
    toForSale () {
      wx.navigateTo({
        url: '/pages/user/forSale/main'
      })
    },
    toSold () {
      wx.navigateTo({
        url: '/pages/user/sold/main'
      })
    },
    toSetting () {
      wx.navigateTo({
        url: '/pages/user/setting/main'
      })
    }
  },
  computed: {
    setUser () {
      this.user = wx.getStorageSync('user')
      this.avatar = wx.getStorageSync('avatar')
    }
  }
}
</script>

<style>
.userinformation{
  background-color: #fff;
  box-sizing: border-box;
  padding-top: 10px;
  border-radius: 17px;
  margin-right: 16px;
  margin-left:16px;
  margin-top:16px;
  margin-bottom:30Px;
  display: flex;
  flex-direction: row;
}

.userName{
  padding-top:15%;
  margin-left:10%;
  margin-right:5%;
  width:50%;
  font-size:48;
}

.userImage{
  border-radius: 5px;
}
.userImage img {
  width:80px;
  height: 80px;
  border-radius: 10px;
}

.links {
  background-color: #fff;
  box-sizing: border-box;
  padding-top: 10px;
  border-radius: 13px;
  border-style: solid;
  margin: 20px 25px 20px 25px;
  box-shadow: 1.5px 1.5px 2px -0.5px rgba(32, 32, 32, 0.1);
  display: flex;
  flex-direction: row;
  padding-left:10px;
  font-size:12;
  height: 45px;
}

.post-divide-line{
  margin: 30px 5% 30px 5%; 
  height: 2px;
  background-color: #000;
  width: 90%;
}
</style>
