<template>
  <div>
    <comp content='傲娇' name="Picture" price="$3000" sellor="Shey" img_path="/static/images/yingduan.jpg"></comp>
  </div>
</template>

<script>
import comp from '@/components/item-detail'
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
