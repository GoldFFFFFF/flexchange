<template>
  <div>
    <!-- for itemPage 商品详情的组件 -->
    <div class="item-info">
      <div class='item-img'>
        <image :src="imgUrl" class='item' ></image>
      </div>
      <div class='sellor-info'>
        <div class='sellor-photo-name'>
          <img src='/static/images/user.png' class='sellor-photo'>
          <span style="padding:20px">{{seller}}</span>
        </div>
        <div class='price-part'>
          <div class='Item-price'>Price: 
            <span style="padding-left:20px">${{price}}</span>
          </div>
        </div>
        <div class='type-part'>
          <div class='Item-type'>Type:
            <span style="padding-left:20px; font-size:16px;">{{type}}</span>
          </div>
          <!-- <div class='type'>{{name}}</div> -->
        </div>
      </div>
    </div>
    <div class="post-divide-line" >
    </div>
    <div class="info-area">
      <div class="info-title" >
        <span>Description:</span>
      </div>
      <div  id="info-text-area" >{{description}}</div>
    </div>
    <button id="add-button" @click="addTocar">add to Shoping Car</button>
  </div>
</template>

<script>

export default {
  props: {
    description: {
      type: String
    },
    seller: {
      type: String
    },
    price: {
      type: String
    },
    name: {
      type: String
    },
    imgUrl: {
      type: String
    },
    type: {
      type: String
    }
  },
  data () {
    return {

    }
  },
  methods: {
    addTocar () {
      console.log('hklh')
      wx.showToast({
        title: 'Added success',
        duration: 1200
      })
    }
  }
}
</script>

<style>
.post-divide-line{
  margin: 2px 5% 2px 5%; 
  height: 2px;
  background-color: #000;
  width: 90%;
}
.item-img{
  padding-left:10px;
}
.price-part{
  margin-top:5%;
}
.type-part{
  margin-top:10%;
}
.sellor-info{
  display:flex;
  flex-direction: column;
  margin-left:10%;
}
.item-info{
  display:flex;
  flex-direction: row;
  margin-bottom: 3%;
}
.sellor-photo{
  height:64px;
  width:64px;
}
.sellor-photo-name{
  display:flex;
  flex-direction: row;
}
.info-area{
  margin: 3%;
}
.item{
  width:150px;
  height:150px;
  border-radius: 50%;
}
#info-text-area{
  margin: 3%;
}
#add-button{
  width: 90%;
  margin: 5%;
  position: absolute;
  bottom: 0;
}

</style>
