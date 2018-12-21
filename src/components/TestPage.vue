<template>
  <div>TestPage
    <hr>
    <CompA :x2="x2"/>
    <hr>
    <CompB v-on:counted="counted"/>
    <hr>
  </div>
</template>

<script>
/* eslint-disable */
import CompA from '@/components/CompA'
import CompB from '@/components/CompB'

export default {
  name: 'TestPage',
  components: { CompA, CompB },
  data () {
    return {
      x2: 7
    }
  },
  methods: {
      counted: function (x1FromCompB) {
          this.x2 = x1FromCompB
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
