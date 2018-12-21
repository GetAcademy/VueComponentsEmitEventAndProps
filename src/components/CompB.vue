<template>
  <div class="hello">
      Comp B
      <button @click="count()">+</button>
      <h1>{{x1}}</h1>
  </div>
</template>

<script>
export default {
  name: 'CompB',
  data () {
    return {
      x1: 0
    }
  },
  methods: {
    count: function () {
      this.x1++
      this.$emit('counted', this.x1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
