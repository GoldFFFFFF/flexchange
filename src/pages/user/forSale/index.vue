<template>
<div>
  <div class='title'>

    <div class='title-name' >
      <span>My For Sale</span>
    </div>
  </div>
  <div class="post-divide-line">
  </div>
  <div class='' v-for='item in items' :key=item.name>
    <compo  :imgUrl='item.imgUrl' 
            :name='item.name'
            :price='item.price'
            :type='item.type'
            :description='item.description'
            :status='item.status'
            :itemId='item._id'
            :seller='item.user'>
    </compo>
    <div class="post-divide-line"></div>
  </div>
</div>

</template>

<script>
import compo from '@/components/shopping-page-item'
export default {
  data () {
    return {
      items: []
    }
  },
  components: {
    compo
  },
  methods: {
    bingEdit () {
      const url = '../../edit/main'
      wx.navigateTo({url})
    }
  },
  onShow () {
    this.$ajax.get({
      url: 'http://203.195.164.28:3000/api/item/forSale/' + wx.getStorageSync('openid')
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
.bright789-text{
  font-size: 40rpx;
  line-height: 40px;
  color: #ff0000;
}
.title{
  height:100%;
  display:flex;
}
.user_name{
  position:absolute;
  right:10px;
  top:75px;
  width:40%;
  height:25%;
  border-style:solid;
}
.pattern{
  height:20%;
  width:90%;
  position:absolute;
  top:60px;
  left:10px;
  border-style:dashed;
  border-width:1px;
  border-color:grey;
}
.page-section{
  width: 100%;
  margin-bottom: 60rpx;
}
.page-section_center{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post-divide-line{
  margin: 2px 5% 2px 5%; 
  height: 2px;
  background-color: #000;
  width: 90%;
}
.title-name{
  width:70%;
  padding-top:0;
  padding-left:10%;
  margin-bottom: 10px;
}
.button{
  position:relative;
}
.button-hover{
  background-color:red;
}
</style>