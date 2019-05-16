<template>
  <div>
    <div class="post-choice" style="height:80px">
      <div class="post-choice-left" >Select one tag
      </div>
        <div class="post-choice-right">
          <div class="post-divide-line"></div>
          <div class="post-topic-choice-containner"
            v-for="type in tags"
            :key="type.name"
            @tap="currentType=type.name">
            <div :style="{color:currentType===type.name?'#888':'#000' }" class="post-topic-choice">#{{type.name}}</div>
          </div>
        </div>
      </div>
      <div v-if="currentType" class="post-ready-submit" @click="confirm">
        <span>Confirm</span>
      </div>
      <div v-else class="post-submit" >
        <span>Confirm</span>
      </div>
      <div style="height:70px;width:100%;background:#FFF;"></div>
  </div>
</template>

<script>
import comp from '@/components/main-page-item'
export default {
  data () {
    return {
      name: '',
      currentType: '',
      tags: [
        {id: 0, name: 'computer'},
        {id: 1, name: 'bike'},
        {id: 2, name: 'book'},
        {id: 3, name: 'clothes'},
        {id: 4, name: 'drinks'},
        {id: 5, name: 'e-devices'},
        {id: 6, name: 'forDome'},
        {id: 7, name: 'others'}
      ]
    }
  },
  components: {
    comp
  },
  methods: {
    confirm () {
      this.$ajax.get({
        url: 'http://203.195.164.28:3000/api/item/type/type?type=' + this.currentType
      }).then((res) => {
        this.items = res.data
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
      wx.switchTab({
        url: '../homepage/main?itemss=' + this.items
      })
    }
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style>

.post-choice{
  width: 100%;
  height: 40px;
  background-color: #FFF;
  flex-direction: column;
  display: flex;
  user-select: none;
  -webkit-user-select: none;
}
.post-choice-left{
  font-size:30px;
  margin-top:20px;
  line-height: 20px;
  padding-left: 30px;
  height: 20px;
  align-items:center;
  border-radius: 4px;
}
.post-divide-line{
  margin: 2px 5% 20px 5%; 
  height: 2px;
  background-color: #000;
  width: 90%;
}
.post-choice-right{
  margin-top:20px;
}
.post-topic-choice-containner{
  display: flex;
  flex-direction: row;
  height: 30px;
  width: 35%;
  float: left;
  margin-top:20px;
  margin-right:20px;
  margin-left:30px;
  margin-bottom: 30px;
  border-radius: 4px;
  border-style: solid;
}
.post-topic-choice{
  padding:5px;
  padding-left:20px;
  border-radius: 4px;
  line-height: 20px;
  color: #888;
  font-size: 20px;
}
.post-ready-submit{
  position:absolute;
  bottom:100px;
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
  bottom:100px;
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
</style>
