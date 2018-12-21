<template>
  <div class="hello">
      Comp A
      <h1>{{xOfCompA}}</h1>
  </div>
</template>

<script>
export default {
  name: 'CompA',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: ['xOfCompA']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
