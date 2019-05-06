<template>
  <div>
    <comp content='我老婆' name="Picture" price="$99" sellor="Lingyun" img_path="/static/images/huiye.jpg"></comp>
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
