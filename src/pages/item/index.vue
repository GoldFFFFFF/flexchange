<template>
  <div>
    <detail :description="description"
          :name="name" 
          :price="price"
          :sellername="sellername" 
          :imgUrl="imgUrl"
          :type="type"
          :itemId="itemId"
          :father="father"
          :userImg="userImg">
    </detail>
  </div>
</template>

<script>
import detail from '@/components/item-detail'
export default {
  data () {
    return {
      type: '',
      imgUrl: '',
      itemId: '',
      name: '',
      price: '',
      description: '',
      status: '',
      seller: '',
      userImg: '',
      sellername: ''
    }
  },
  components: {
    detail
  },
  onLoad: function (options) {
    this.type = options.type
    this.imgUrl = options.imgUrl
    this.itemId = options.itemId
    this.name = options.name
    this.price = options.price
    this.description = options.description
    this.status = options.status
    this.seller = options.seller
    this.father = options.father
    this.$ajax.get({
      token: this.token,
      url: `http://www.flexange.cn:3000/api/user/` + this.seller
    }).then((res) => {
      this.sellername = res.data.resultMessage.username
      this.userImg = res.data.resultMessage.imgUrl
    }
    )
  }

}
</script>

<style>
</style>