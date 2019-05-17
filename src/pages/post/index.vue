<template>
    <div class="post-page">

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

            <div class="post-divide-line"></div>

            <div class="post-choice" style="height:80px">
                <div class="post-choice-left" style="height:80px;line-height:80px;">Tag</div>

                <div class="post-choice-right" style="height:80px；margin-right:15px;">
                    <div
                      class="post-topic-choice-containner"
                      v-for="type in tags"
                      :key="type.name"
                      @tap="currentType=type.name">
                        <div :style="{color:currentType===type.name?'#888':'#000'}" class="post-topic-choice">#{{type.name}}</div>
                    </div>
                </div>
            </div>
            <div class="post-divide-line"></div>
                
           
            <div class="post-choice">
                <div class="post-choice-left" style="margin-right:15px;">Price</div>
                <textarea class="post-choice-input" placeholder="price..." :maxlength="-1" v-model="price" />
            </div>
            <div class="post-divide-line"></div>

            <div class="post-choice">
                <div class="post-choice-left">Name</div>
                <textarea class="post-choice-input" placeholder="name..." :maxlength="-1" v-model="name" />
            </div>
            <div class="post-divide-line"></div>

            <div v-if="inputValue && imgTempPath && currentType && price && name" class="post-ready-submit" @click="submit">
                <span>Confirm</span>
            </div>
            <div v-else class="post-submit" >
                <span>Confirm</span>
            </div>
            <div style="height:70px;width:100%;background:#FFF;"></div>
        </div>
          
    </div>
</template>

<script>

export default {
  data () {
    return {
      inputValue: '',
      imgTempPath: '',
      price: '',
      tags: [
        {id: 0, name: 'computer'},
        {id: 1, name: 'bike'},
        {id: 2, name: 'book'},
        {id: 3, name: 'clothes'},
        {id: 4, name: 'drinks'},
        {id: 5, name: 'e-devices'},
        {id: 6, name: 'forDome'},
        {id: 7, name: 'others'}
      ],
      tags1: [
        {id: 0, name: 'computer'},
        {id: 1, name: 'bike'},
        {id: 2, name: 'book'},
        {id: 3, name: 'clothes'}
      ],
      tags2: [
        {id: 4, name: 'drinks'},
        {id: 5, name: 'e-devices'},
        {id: 6, name: 'forDome'},
        {id: 7, name: 'others'}
      ],
      name: '',
      currentType: ''
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    token () {
      return this.$store.state.token
    }
  },
  methods: {
    chooseImage (e) {
      var that = this // this指代问题，若调用了微信api， this会指向微信对象本身而非当前Vue实例
      wx.chooseImage({
        count: 1,
        success: function (res) {
          wx.showToast({
            title: '正在上传',
            icon: 'loading',
            duration: 10000
          })
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          let tempFilePaths = res.tempFilePaths[0]
          that.imgTempPath = tempFilePaths
          let fileTypeArray = tempFilePaths.split('.')
          let fileType = fileTypeArray.pop(fileTypeArray.length - 1)
          let fileName = ''
          let date = new Date()
          let year = String(date.getFullYear())
          let month = String(date.getMonth() + 1)
          if (Number(month) < 10) month = '0' + month
          for (var i = 0; i < 16; i++) fileName += Math.floor(Math.random() * 16).toString(16)
          fileName = year + month + fileName + '.' + fileType
          // 云上存放图片的文件夹需要用时间命名，所以将其以切分成相应格式
          wx.uploadFile({
            url: 'http://www.flexange.cn:3000/image',
            filePath: tempFilePaths,
            name: 'file',
            header: {
              'Content-Type': 'multipart/form-data'
            },
            formData: {
              name: tempFilePaths,
              key: fileName,
              success_action_status: '200',
              'Content-Type': fileType // 在传form的时候，form的content-type对应文件格式，而http请求报头的content-type需要指定form
            },
            success: function (res) {
              console.log(res)
              console.log(res.data)
              wx.hideToast()
              that.imgLocal = res.data // 将页面数据与文件名绑定，从而好判断用户是否成功 上传了图片
              wx.showToast({
                title: 'UPLOAD SUCCESS',
                duration: 1000
              })
            },
            fail: function (res) {
              wx.hideToast()
              that.imgLocal = ''
              wx.showToast({
                title: 'UPLOAD FAIL',
                image: '/static/icons/fail.png',
                duration: 1500
              })
            }
          })
        }
      })
    },
    submit () {
      if (this.inputValue) { // 在用户输入值或者上传图片的时候才能上传
        wx.showToast({
          title: 'Loading',
          icon: 'loading',
          duration: 8000
        })
        let form = {
          imgUrl: 'http://www.flexange.cn:3030/images/' + this.imgLocal,
          name: this.name,
          user: wx.getStorageSync('openid'),
          description: this.inputValue,
          type: this.currentType,
          price: this.price,
          status: true
        }
        this.$ajax.post({
          token: this.token,
          data: form,
          url: `http://www.flexange.cn:3000/api/item/post`
        }).then((res) => {
          wx.hideToast()
          if (res.statusCode === 200) {
            console.log(this.inputValue)
            console.log(this.currentType)
            console.log(this.price)
            console.log(this.name)
            console.log(this.imgLocal)
            wx.showToast({
              title: 'Post Success',
              duration: 1200
            })
            this.init()
            setTimeout(() => {
              this.$emit('posted')
            }, 400)
          } else {
            wx.showToast({
              title: 'Post Fail,Please try again',
              image: '/static/icons/fail.png'
            })
          }
        }).catch((err) => {
          wx.hideToast()
          if (err.statusCode === 415) {
            wx.showModal({
              showCancel: false,
              content: '发布失败，请斟酌用语，或者检查发表的图片哦'
            })
          } else {
            wx.showModal({
              showCancel: false,
              content: '发布失败，错误消息：' + (err.data.message || '')
            })
          }
        })
      }
    },
    init () {
      this.inputValue = ''
      this.imgTempPath = ''
      this.price = ''
      this.currentType = ''
      this.name = ''
      this.imgLocal = ''
    },
    removeImg () {
      this.imgTempPath = ''
      this.imgLocal = ''
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
  height: 200px;
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
  margin-top: 20px;
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
  line-height: 40px;
  padding-left: 30px;
  width: 22%;
  height: 40px;
  align-items:center;
}

.post-choice-right{
  height: 40px;
  width: 78%;
}

.post-topic-choice-containner{
  height: 20px;
  float:left;
  margin: 3px;
  border-radius: 4px;
}

.post-topic-choice{
  border-radius: 4px;
  height: 20px;
  padding-top: 3px;
  padding-left: 5px;
  padding-right: 5px;
  line-height: 14px;
  background-color:aliceblue;
  color: #888;
  font-size: 14px;
}

.post-choice-input{
  padding-left: 50%;
  padding-top: 10px;
  height: 40px;
  font-size: 16px;
  color: #333333;
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
  margin: 2px 5% 2px 5%; 
  height: 2px;
  background-color: #000;
  width: 90%;
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

