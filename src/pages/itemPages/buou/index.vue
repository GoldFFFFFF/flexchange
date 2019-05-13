<template>
  <div>
    <comp content='小公主' name="Pet" price="$5000" sellor="Shey" img_path="/static/images/buou.jpg"></comp>
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
