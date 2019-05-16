<template>
  <div>
    <detail :description="description"
          :name="name" 
          :price="price"
          :seller="seller" 
          :imgUrl="imgUrl"
          :type="type"
          :itemId='itemId'
          :father='father'>
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
      seller: ''
    }
  },
  components: {
    detail
  },

  created () {
    // let app = getApp()
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
  }

}
</script>

<style>
</style>