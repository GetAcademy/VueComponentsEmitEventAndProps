<template>
  <div class="hello">
      Comp B
      <button @click="count()">+</button>
      <h1>{{xOfCompB}}</h1>
  </div>
</template>

<script>
export default {
  name: 'CompB',
  data () {
    return {
      xOfCompB: 0
    }
  },
  methods: {
    count: function () {
      this.xOfCompB++
      this.$emit('counted', this.xOfCompB)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
