<template>
  <div>TestPage
    <hr>
    <CompA :xOfCompA="xOfTestPage"/>
    <hr>
    <CompB v-on:counted="handleCounted"/>
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
      xOfTestPage: 7
    }
  },
  methods: {
      handleCounted: function (x1FromCompB) {
          this.xOfTestPage = x1FromCompB
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
