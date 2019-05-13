<template>
  <div>
    <comp content='毛茸茸' name="Pet" price="$3000" sellor="Shey" img_path="/static/images/jiafei.jpg"></comp>
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
