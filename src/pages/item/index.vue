<template>
  <div>
    <comp :content="content"
          :name="name" 
          :price="price"
          :sellor="sellor" 
          :img_path="img_path">
    </comp>
  </div>
</template>

<script>
import comp from '@/components/item-detail'
export default {
  data () {
    return {
      content: '',
      sellor: '',
      price: '',
      name: '',
      img_path: ''
    }
  },
  components: {
    comp
  },

  created () {
    // let app = getApp()
  },
  onLoad: function (options) {
    this.content = options.content
    this.sellor = options.sellor
    this.price = options.price
    this.name = options.name
    this.img_path = options.img_path
  }

}
</script>

<style>
</style>