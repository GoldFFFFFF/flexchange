<template>
  <div>
      <div class="userinformation">
        <div class="userName"> {{userName}} </div>
        <div class="userImage">
            <img src="/static/tabs/user.png">
        </div>
      </div>

      
      <div class="links" @click="toPurchase"> My Purchase </div>
      <div class="links" @click="toForSale"> My For Sale </div>
      <div class="links" @click="toSold"> My Sold </div>
      <div class="links" @click="toSetting"> Setting </div>
  </div>
  

</template>

<script>

export default {
  data: {
    userName: 'Shey'
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
  margin-top:5%;
  margin-left:20%;
  width:65%;
  font-size:24;
}

.userImage{
  width:35%;
  
}
.userImage img {
  width:60px;
  height: 60px;
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

</style>
