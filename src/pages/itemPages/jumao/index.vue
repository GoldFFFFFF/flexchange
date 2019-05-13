<template>
  <div>
    <comp content='胖胖' name="Pet" price="$1000" sellor="Shey" img_path="/static/images/jumao.jpeg"></comp>
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
