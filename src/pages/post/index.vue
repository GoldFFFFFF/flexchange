<template>
    <div class="post-page">
        <!-- <div class="post-top-space"></div>
        <div class="post-logout">
            <img class="post-site-icon" src="/static/icons/xjtluwall.png" />
            <div class="post-site-hellow" >
                <span>登录<br/>解锁{{isReply?'回复':'发布'}}</span>
            </div>
            <div
              class="post-login-wechat">
                <img class="post-login-icon" src="@/static/icons/wechat.png" />
                <span>微信登录</span>
            </div>
        </div> -->

        <div >
            <div class="post-area">
                <textarea  id="post-text-area"  placeholder="Description..." ></textarea>
            </div>

            <div class="post-image" >
                <div class="post-image-block" >
                    <!-- <img class="post-image-remove" src="/static/icons/remove.png" /> -->
                    <div class="post-image-container">
                        <img style="width:100%;height:100%;" src="/static/icons/add.png" />
                    </div>
                    <input type="file" id="uploadImage" style="display:none;" accept="image/*"  />
                </div>
            </div>

            <div style="width:100%;height:1px;background:#F1F1F1;"></div>
            
                <div class="post-choice">
                    <div class="post-choice-left" style="position:absolute;left:0;width:50%;">
                        <img class="post-choice-icon" src="/static/icons/tag.png" />
                        <span>Tag</span>
                    </div>
                    <div class="post-choice-right" style="position:absolute;right:0;width:50%;">
                        <div class="post-tag-info">Computer</div>
                        <img src="/static/icons/more.png" class="post-tag-enter" />
                    </div>
                </div>
                <div style="background-color:#FFF">
                    <div class="post-divide-line" style="width:95%;margin-left:5%;"></div>
                </div>
            
           

            <div class="post-choice">
                <div class="post-choice-left">
                    <span style="padding-left: 20%">Price</span>
                </div>
                <div class="post-choice-right">$100</div>
            </div>

            
            <div class="post-divide-line"></div>
            <div class="post-submit" v-on:click="submitForm()">
                
                <span>{{btnText}}</span>
                <span>Confirm</span>
            </div>
            <div style="height:70px;width:100%;background:#FFF;"></div>
        </div>
        <!-- <BottomBar v-if="!isReply" v-bind:this-page="2"></BottomBar> -->
    </div>
</template>

<script>
import store from '@/global/store'

export default {
  data () {
    return {

    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style>
.post-page{
  background-color: #FFF;
  width:100%; height: 100%;
  margin:0; padding:0;
  overflow: visible;
}

.post-top-space{
  width: 100%;
  height: 38px;
  position: relative;
  top: 0;
}

.post-logout {
  width:100%;height:100%;
  background:#F4F5F7;
  user-select: none;
  -webkit-user-select: none;
}

.post-site-icon {
  position: absolute;
  top: 8%;
  left: 14%;
  width: 90px;
  height: 90px;
}

.post-site-hellow{
  position: absolute;
  top: 40%;
  left: 15%;
  font-size: 30px;
  line-height: 42px;
  color: #888;
}

.post-login-wechat{
  position: absolute;
  bottom: 18%;
  left: 15%;
  background-color: #51AA38;
  width: 70%;
  height: 46px;
  color: #FFF;
  border-radius: 23px;
  display: flex;
  align-items:center;
  justify-content:center;
  font-size: 18px;
}

.post-login-icon{
  width: 35px;
  height: 35px;
  margin-right: 5px;
}

.post-area{
  background-color: #FFF;
  margin: 0;
  padding: 0;
}

#post-text-area{
  width: 100%;
  min-height: 33vw;
  overflow: visible;
  box-sizing: border-box;
  padding: 12px 12px 10px 15px;
  font-size: 17px;
  line-height: 23px;
  color: #333;
  border: none;
  resize: none;
  outline: none;
}

.post-image{
  width: 100%;
  background-color: #FFF;
  border-bottom: 1px solid #F1F1F1;
  box-sizing: border-box;
  padding: 5px 15px 12px 15px;
}

.post-image-block{
  position: relative;
  width: 24vw;
  height: 24vw;
  display: flex;
  align-items:center;
  justify-content:center;
  border: 1px dashed #E1E1E1;
  overflow: visible;
}

.post-image-remove {
  position: absolute;
  right: -12px;
  top: -12px;
  height: 26px;
  width: 26px;
}

.post-image-container {
  height:100%;
  width:100%;
  overflow:hidden;
  display: flex;
  align-items:center;
  justify-content:center;
}

.post-choice{
  width: 100%;
  height: 40px;
  background-color: #FFF;
  flex-direction: row;
  display: flex;
  user-select: none;
  -webkit-user-select: none;
}

.post-choice-icon{
  width: 30px;
  height: 30px;
  margin: 0 10px 0 5vw;
}

.post-choice-left{
  width: 76%;
  height: 40px;
  display: flex;
  align-items:center;
}

.post-choice-right{
  width: 24%;
  height: 40px;
  display: flex;
  justify-content:center;
  align-items:center;
}

.post-choice-text {
  border: 1px solid #E0E0E0;
  resize: none; outline: none;
  width: 100%;
  margin-right: 4vw;
  height: 30px;
  font-size: 15px;
  border-radius: 7px;
  box-sizing: border-box;
  text-align: center;
  -webkit-appearance: none;
}

.post-tag-info{
  position:absolute;
  line-height:40px;
  color:#333;
  right: 10vw;
}

.post-tag-enter{
  width:20px;
  height:20px;
  position:absolute;
  right:4.3vw;
}

.post-divide-line{
  height: 1px;
  background-color: #F1F1F1;
  width: 100%;
}

.post-submit{
  margin: 40px 0 0 5%;
  background-color: #fff;
  width: 90%;
  height: 46px;
  color: rgb(236, 236, 236);
  border-radius: 4px;
  display: flex;
  align-items:center;
  justify-content:center;
  font-size: 20px;
  border: 1px solid #000;
}

.button-enable{
  background-color:rgb(53, 168, 230);
 color:#FFF;
}
</style>

