<template>
  <div>
    <div class="info-area">
      <div class="info-title" >
        <span>Description</span>
      </div>
      <textarea  id="info-text-area"  value="Yukino is my ex-wife who is an anime character in another dimension. But now I find another girl is also pretty so I decide to change.">
      </textarea>
    </div>
    <div class="post-divide-line" style="position:absolute;height: 1px;width:90%;margin-left:20px;top:162px;"></div>
    <div>
      <div class='' style="position:absolute;left:20px;top:0;" @click="bindNewPage">
        <img src="/static/images/Yukino.jpg" class="item"/>
      </div>
      <div class='user-info'>
        <img src='/static/images/user.png' class='user-photo'>
        <div class='user-name'>
          <span>Lingyun</span>
        </div>
        <div class='price-part'>
          <div class='Item-price'>Price:</div>
          <div class='pricee'>$100</div>
        </div>
        <div class='type-part'>
          <div class='Item-type'>Type:</div>
          <div class='type'>Computer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style>
.Item-type{
  position:absolute;
  right:100px;
}
.type-part{
  position: absolute;
  top:100px;
  right:30px;
}
.price-part{
  position:absolute;
  top:60px;
  right:30px;
}
.pricee{
  position:absolute;
  right:20px;
  padding-top:0;
}
.Item-price{
  position:absolute;
  right:100px;
}
.user-photo{
  position:absolute;
  top:0;
  right:120px;
  width:64px;
  height:64px;
  border-radius: 50%;
}
.user-name{
  position: absolute;
  size:50pt;
  top:20px;
  right:30px;
}
.user-info{
  position:absolute;
  right:0;
  top:0;
}
.info-title{
  position:absolute;
  top:162px;
  left:20px;
}
.info-area{
  background-color: #FFF;
  height:50%;
}
.post-divide-line{
  
  background-color: #F1F1F1;
  width: 100%;
}
#info-text-area{
  top: 180px;
  width: 100%;
  min-height: 33vw;
  overflow: visible;
  box-sizing: border-box;
  padding: 12px 12px 10px 15px;
  font-size: 17px;
  line-height: 23px;
  color: #333;
  border:aqua;
  resize: none;
  outline: none;
}
.item{
  width:150px;
  height:150px;
  border-radius: 50%;
}
</style>
