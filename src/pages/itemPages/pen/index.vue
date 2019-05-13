<template>
  <div>
    <comp content='笔' name="Picture" price="$2" sellor="Lingyun" img_path="/static/images/pen.jpg"></comp>
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
