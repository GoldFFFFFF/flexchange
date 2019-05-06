<template>
  <div>
    <comp img_path="/static/images/Yukino.jpg" item_name='Yukinooos photo' item_price='$100'></comp>
  </div>
</template>

<script>
import comp from '@/components/main-page-item'
export default {
  data () {
    return {

    }
  },
  components: {
    comp
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style>
</style>
