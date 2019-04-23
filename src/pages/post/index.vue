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

            <div class="post-input">
                    <textarea class="post-input-text" placeholder="Description..." :maxlength="-1" v-model="inputValue" />
                    <div class="post-image-box" @tap="chooseImage" v-if="!imgTempPath">
                        <div class="post-image-plus-h"></div>
                        <div class="post-image-plus-v"></div>
                    </div>
                    <img v-if="imgTempPath" :src="imgTempPath" mode="aspectFill" class="post-image-box" />
                    <img src="/static/icons/remove.png" class="post-image-remove" @tap="removeImg" v-if="imgTempPath" />
            </div>

            <div style="width:100%;height:1px;background:#F1F1F1;"></div>
            
                <div class="post-choice">
                    <div class="post-choice-left" style="position:absolute;left:0;width:50%;">
                        <img class="post-choice-icon" src="/static/icons/tag.png" />
                        <span>Tag</span>
                    </div>
                    <div class="post-choice-right" style="position:absolute;right:0;width:50%;">
                        <div class="post-tag-info" style="margin-right:10%;">Computer</div>
                        <img src="/static/icons/more.png" class="post-tag-enter"/>
                    </div>
                </div>
                <div style="background-color:#FFF">
                    <div class="post-divide-line" style="width:90%;margin-left:5%;"></div>
                </div>
            
           

            <div class="post-choice">
                <div class="post-choice-left">
                    <span style="padding-left: 20%">Price</span>
                </div>
                <textarea class="post-choice-input" placeholder="price..." :maxlength="-1" v-model="price" />
            </div>

            
            <div class="post-divide-line"></div>
            <div v-if="inputValue||imgTempPath" class="post-ready-submit" @click="submit">
                <span>Confirm</span>
            </div>
            <div v-else class="post-submit" >
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
      inputValue: '',
      imgTempPath: '',
      price: ''
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    chooseImage (e) {
      var that = this
      wx.chooseImage({
        success: function (res) {
          wx.showToast({
            title: '正在上传',
            icon: 'loading',
            duration: 10000
          })
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          that.files = that.files.concat(res.tempFilePaths)
          let tempFilePaths = res.tempFilePaths[0]
          that.imgTempPath = tempFilePaths
          let fileTypeArray = tempFilePaths.split('.')
          let fileType = fileTypeArray.pop(fileTypeArray.length - 1)
          let accessId = 'LTAIgsXf1qhhbpmK'
          let signature = '4KHs5DL/9/RuW2wEcToDaGYxCB8='
          let policy = 'eyJleHBpcmF0aW9uIjoiMjAyMC0xMi0wMVQxMjowMDowMC4wMDBaIiwiY29uZGl0aW9ucyI6W1sic3RhcnRzLXdpdGgiLCIka2V5IiwiIl0seyJidWNrZXQiOiJ4anRsdXdhbGwtaW1hZ2UifSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtVHlwZSIsIiJdLFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjBdXX0='
          let fileName = ''
          let date = new Date()
          let year = String(date.getFullYear())
          let month = String(date.getMonth() + 1)
          if (Number(month) < 10) month = '0' + month
          for (var i = 0; i < 16; i++) fileName += Math.floor(Math.random() * 16).toString(16)
          fileName = year + month + '/' + fileName + '.' + fileType
          wx.uploadFile({
            url: 'https://imgs.xjtluwall.com',
            filePath: tempFilePaths,
            name: 'file',
            header: {
              'Content-Type': 'multipart/form-data'
            },
            formData: {
              name: tempFilePaths,
              key: fileName,
              policy: policy,
              OSSAccessKeyId: accessId,
              success_action_status: '200',
              signature: signature,
              'Content-Type': fileType
            },
            success: function (res) {
              wx.hideToast()
              that.imgLocal = fileName
              wx.showToast({
                title: '上传图片成功',
                duration: 1000
              })
            },
            fail: function (res) {
              wx.hideToast()
              that.imgLocal = ''
              wx.showToast({
                title: '上传失败，请重试',
                image: '/static/icons/fail.png',
                duration: 1500
              })
            }
          })
        }
      })
    },
    submit () {
      console.log(this.inputValue)
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

.post-input {
  width: 345px;
  height: 185px;
  background: #ffffff;
  border-radius: 9px;
  padding: 15px 17px;
  margin-bottom: 16px;
  box-sizing: border-box;
}

.post-input-text {
  width: 100%;
  height: 80px;
  font-size: 16px;
  color: #333333;
  line-height: 21px;
}

.post-image-box {
  width: 70px;
  height: 70px;
  background:#F0F0F0;
  border-radius: 5px;
  margin-top: 5px;
  position: relative;
}

.post-image-remove {
  width:25px;
  height:25px;
  position:absolute;
  top: 90px;
  left: 87px;
}

.post-image-plus-h {
  position: absolute;
  background: #FFFFFF;
  width: 40px;
  height: 2px;
  left: 15px;
  top: 34px;
}

.post-image-plus-v {
  position: relative;
  background: #FFFFFF;
  width: 2px;
  height: 40px;
  left: 34px;
  top: 15px;
}


/* .post-area{
  background-color: #FFF;
  margin: 0;
  padding: 0;
} */

/* #post-text-area{
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
} */

/* .post-image{
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
} */

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

.post-choice-input{
  width: 40%;
  height: 40px;
  font-size: 16px;
  color: #333333;
  line-height: 40px; 
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

.post-ready-submit{
  position:absolute;
  bottom:50px;
  left: 5%;
  background-color: #fff;
  width: 90%;
  height: 46px;
  color: #000;
  border-radius: 4px;
  display: flex;
  align-items:center;
  justify-content:center;
  font-size: 20px;
  border: 1px solid #000;
}

.post-submit{
  position:absolute;
  bottom:50px;
  left: 5%;
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

/* .button-enable{
  background-color:rgb(53, 168, 230);
 color:#FFF;
} */
</style>

