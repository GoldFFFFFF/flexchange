<template>
  <div>
      <div class="userinformation">
        <div class="userName"> Shey </div>
        <div class="userImage">
            <img src="/static/tabs/user.png">
        </div>
      </div>

      <div class="links">  
        <div class='checkbox'>
          <checkbox  @bindtap='ontap()' @click="click_btn" class='checkbox' true></checkbox>
          <span false></span>
        </div>New Message Alerts
      </div>
      <div class="links"> 
        <div class='checkbox'>
          <checkbox  @bindtap='ontap()' @click="click_btn" class='checkbox' true></checkbox>
          <span false></span>
        </div>Do Not Disturb 
      </div>
      <div class="links1" @click="bingLogout"> Log Out </div>
  </div>
  

</template>

<script>

import message from '@/components/item'
export default {
  data: {
    i: ''
  },
  props: {
    isShow: {
      type: String
    },
    ishow: {
      type: String
    }
  },
  components: {
    message
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
    bingLogout () {
      const url = '../../itemPages/buou/main'
      wx.navigateTo({url})
    }
  }
}
</script>

<style>
.checkbox{
  display:flex;
  flex-direction:row;
  padding-top: 0%;
  padding-left: 1%;
}

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
  font-size: 12;
  height: 45px;
}
.links1{
  background-color: rgb(238, 138, 138);
  box-sizing: border-box;
  padding-top: 10px;
  border-radius: 13px;
  border-style: solid;
  margin: 20px 25px 20px 25px;
  box-shadow: 1.5px 1.5px 2px -0.5px rgba(32, 32, 32, 0.1);
  display: flex;
  flex-direction: row;
  padding-left:10px;
  font-size: 12;
  height: 45px;
}

</style>
