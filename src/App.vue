<template>
  <div id="app">
    <div class="boxes">
      <div v-for="(color, i) in colors"
           :key="i">
        <MyComponent />
      </div>
    </div>
    <div class="trigger top"></div>
    <div class="trigger bottom"></div>
  </div>
</template>

<script>

import MyComponent from './examples/MyComponent'

export default {
  name: 'app',
  components: {MyComponent},
  data() {
    return {
      numItems: 10
    }
  },
  computed: {
    colors() {
      const num = parseInt(this.numItems) || 1
      return new Array(num).fill('').map((i, idx) => {
        return {
          bg: `hsl(${(idx * 2 / num) * 360},100%,50%)`
        }
      }) 
    }
  }
}

</script>

<style>
body {
  background-color: #262626;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  margin-bottom: 200px;
  font-size: 15px;
}
h4,
h5 {
  display: inline-block;
  margin: 0;
}
.boxes {
  display: grid;
  max-width: 768px;
  justify-self: center;
  grid-gap: 40px;
  margin: auto;
}
</style>
