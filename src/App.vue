<template>
  <div id="app">
    <div class="boxes">
      <div v-for="(color, i) in colors"
           :key="i">
        <VueIntersect topOffset="-20%"
                      bottomOffset="-20%"
                      :repeat="true">
          <div class="box"
               :style="{backgroundColor: '#e6e6e6'}"
               slot-scope="{vueIntersect}">
            <div class="top-info">
              <div v-for="(value, key) in vueIntersect"
                   :key="key">
                <h4>{{key}}</h4>: <h5>{{value}}</h5>
              </div>
            </div>
            <div class="bottom-info">
              <div v-for="(value, key) in vueIntersect"
                   :key="key">
                <div>
                  <h4>{{key}}</h4>: <h5>{{value}}</h5>
                </div>
              </div>
            </div>
          </div>
        </VueIntersect>
      </div>
    </div>
    <div class="trigger top"></div>
    <div class="trigger bottom"></div>
  </div>
</template>

<script>

export default {
  name: 'app',
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

.box {
  height: 59vh;
  width: 100%;
  position: relative;
  padding: 30px;
}

.top-info {
  width: 100%;
  position: absolute;
  top: 30px;
}

.bottom-info {
  width: 100%;
  position: absolute;
  bottom: 30px;
}

.trigger {
  position: fixed;
  width: 100%;
  background: white;
  height: 3px;
}
.trigger.top {
  top: 20%;
}
.trigger.bottom {
  bottom: 20%;
}
</style>
